const express = require("express");
const router = express.Router();

const ListController = require('../controller/ListController');

router.get('/lists', ListController.lists);
router.post('/createList', ListController.createList );
router.put('/updateList/:id', ListController.updateList);
router.delete('/deleteList/:id', ListController.deleteList);


module.exports = router;