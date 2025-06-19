const express = require('express');
const router = express.Router();
const { verifyToken, requireRole } = require('../middleware/auth');
const {
    getAllBlogs,
    updateBlogStatus,
    deleteBlog,
    manageUsers
} = require('../controllers/adminController');

router.use(verifyToken, requireRole('admin')); // admin access

router.get('/blogs', getAllBlogs);
router.put('/blogs/:id/status', updateBlogStatus);
router.delete('/blogs/:id', deleteBlog);
router.get('/users', manageUsers);

module.exports = router;
