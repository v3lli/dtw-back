const albumController = require('../controllers/albumcontroller');
const express =  require('express')

const router = express.Router();
router
    .route('/')
    .get(albumController.getallalbums)
    .post(albumController.addalbum)
    .patch(albumController.updatealbum)
    .delete(albumController.deletealbum);

module.exports = router

    