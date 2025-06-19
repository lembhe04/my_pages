const db = require('../config/db');
const cloudinary = require('../config/cloudinary');

exports.getProfile = (req, res) => {
    const userId = req.user.id;
    const sql = "SELECT id, name, email, bio, interests, image FROM users WHERE id = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) return res.status(500).json({ err });
        res.json(result[0]);
    });
};

exports.updateProfile = (req, res) => {
    const userId = req.user.id;
    const { name, bio, interests } = req.body;
    const sql = "UPDATE users SET name = ?, bio = ?, interests = ? WHERE id = ?";
    db.query(sql, [name, bio, interests, userId], (err, result) => {
        if (err) return res.status(500).json({ err });
        res.json({ msg: "Profile updated successfully" });
    });
};

exports.uploadProfilePicture = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const userId = req.user.id;
        const sql = "UPDATE users SET image = ? WHERE id = ?";
        db.query(sql, [result.secure_url, userId], (err, data) => {
            if (err) return res.status(500).json({ err });
            res.json({ msg: "Profile picture uploaded", image: result.secure_url });
        });
    } catch (error) {
        res.status(500).json({ error: "Image upload failed" });
    }
};

exports.getMyBlogs = (req, res) => {
    const userId = req.user.id;
    const sql = "SELECT * FROM blogs WHERE user_id = ?";
    db.query(sql, [userId], (err, results) => {
        if (err) return res.status(500).json({ err });
        res.json(results);
    });
};
