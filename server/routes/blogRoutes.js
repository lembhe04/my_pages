const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const { verifyToken } = require('../middleware/auth');
const {
    createBlog,
    getApprovedBlogs,
    getSingleBlog,
} = require('../controllers/blogController');

router.post('/create', verifyToken, upload.single('image'), createBlog);
router.get('/feed', getApprovedBlogs);
router.get('/:id', getSingleBlog);

module.exports = router;
