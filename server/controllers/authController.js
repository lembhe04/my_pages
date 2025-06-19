const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
    const { name, email, password, role } = req.body;
    const hashed = bcrypt.hashSync(password, 8);
    const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, hashed, role || 'user'], (err, result) => {
        if (err) return res.status(500).json({ err });
        res.json({ msg: 'User registered successfully' });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
        if (err || results.length === 0) return res.status(401).json({ msg: 'Invalid credentials' });

        const user = results[0];
        const match = bcrypt.compareSync(password, user.password);
        if (!match) return res.status(401).json({ msg: 'Incorrect password' });

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
        res.json({ token, user: { id: user.id, name: user.name, role: user.role } });
    });
};
