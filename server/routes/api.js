const express = require('express');
const UserController = require('../controllers/userController.js');
const cors = require('cors')

const router = express.Router();

router.use(cors())
router.get('/users', UserController.getalluser);
router.get('/data/allSensor', UserController.getallSensorData);

router.post('/login', UserController.login);




// เกี่ยวกับ server AIS ทำการเขียนรวมไฟล์ไปเลย ไม่มีเวลาแยก
setInterval(() => { UserController.checkForUpdates();}, 6000);

router.get("/api/data", UserController.API);

module.exports = router;