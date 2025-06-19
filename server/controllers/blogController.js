const db = require('../config/db');
const cloudinary = require('../config/cloudinary');

exports.createBlog = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const { title, content } = req.body;
        const userId = req.user.id;

        const sql = "INSERT INTO blogs (user_id, title, content, image, status) VALUES (?, ?, ?, ?, 'pending')";
        db.query(sql, [userId, title, content, result.secure_url], (err, data) => {
            if (err) return res.status(500).json({ err });
            res.json({ msg: "Blog submitted for review." });
        });
    } catch (err) {
        res.status(500).json({ err });
    }
};

exports.getApprovedBlogs = (req, res) => {
    const sql = "SELECT blogs.*, users.name FROM blogs JOIN users ON blogs.user_id = users.id WHERE status = 'approved' ORDER BY blogs.created_at DESC";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ err });
        res.json(results);
    });
};

exports.getSingleBlog = (req, res) => {
    const blogId = req.params.id;
    const sql = "SELECT blogs.*, users.name FROM blogs JOIN users ON blogs.user_id = users.id WHERE blogs.id = ?";
    db.query(sql, [blogId], (err, result) => {
        if (err) return res.status(500).json({ err });
        res.json(result[0]);
    });
};
