const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const { verifyToken } = require('../middleware/auth');
const {
    getProfile,
    updateProfile,
    uploadProfilePicture,
    getMyBlogs,
} = require('../controllers/userController');

router.get('/profile', verifyToken, getProfile);
router.put('/profile', verifyToken, updateProfile);
router.post('/profile/upload', verifyToken, upload.single('image'), uploadProfilePicture);
router.get('/myblogs', verifyToken, getMyBlogs);

module.exports = router;
