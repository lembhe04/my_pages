const db = require('../config/db');

exports.getAllBlogs = (req, res) => {
    const sql = "SELECT blogs.*, users.name FROM blogs JOIN users ON blogs.user_id = users.id ORDER BY created_at DESC";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ err });
        res.json(results);
    });
};

exports.updateBlogStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const sql = "UPDATE blogs SET status = ? WHERE id = ?";
    db.query(sql, [status, id], (err, result) => {
        if (err) return res.status(500).json({ err });
        res.json({ msg: `Blog status updated to ${status}` });
    });
};

exports.deleteBlog = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM blogs WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ err });
        res.json({ msg: "Blog deleted" });
    });
};

exports.manageUsers = (req, res) => {
    const sql = "SELECT id, name, email, role FROM users";
    db.query(sql, (err, users) => {
        if (err) return res.status(500).json({ err });
        res.json(users);
    });
};
