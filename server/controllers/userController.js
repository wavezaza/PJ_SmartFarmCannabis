const Usermodel = require('../model/userModel');
const fetch = require("node-fetch");

class UserController {
    // ทดสอบดึงเข้ามูลในตาราง
    static async getalluser(req, res) {
        try {
            const results = await Usermodel.getusers();
            res.send(results);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    // ตรวจสอบการเข้าสู่ระบบ โดยเช็ค username password โดยรับจาก body และเรียกใช้ฟังก์ชั่น  getUserPass 
    static async login(req, res) {
        try {
            const { username, password } = req.body;
            const isValidUser = await Usermodel.getUserPass(username, password);
            if (isValidUser) {
                return res.json({ success: true, message: 'เข้าสู่ระบบ' });
            } else {
                return res.json({ success: false, message: 'ไม่พบบัญชี' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
    // ดึงมูลในตาราง
    static async getallSensorData(req, res) {
        try {
            const results = await Usermodel.getSensorData();
            // ตรวจสอบและแปลงรูปแบบวันที่ตามที่ต้องการ
            const formattedResults = results.map(result => {
                // แปลงรูปแบบวันที่ให้เป็น ISO String
                const formattedDate = new Date(result.date);
                
                // เพิ่ม 7 ชั่วโมงให้กับวันที่
                // formattedDate.setHours(formattedDate.getHours() + 7);
                
                // สร้าง object ใหม่ที่มีรูปแบบวันที่ที่แปลงแล้ว
                return {
                    id: result.id,
                    temperature: result.temperature,
                    humidity: result.humidity,
                    soil_moisture: result.soil_moisture,
                    light: result.light,
                    pH: result.pH,
                    date: formattedDate
                };
            });
            
            res.json(formattedResults); // ส่งผลลัพธ์ที่ถูกต้องกลับเป็น JSON
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    // ตรวจสอบการ update ของ data ก่อนจะเรียก ฟังก์ชั่น Usermodel.insertData เพื่อเอา data ไปเก็บ
    static async checkForUpdates() {
        const url = "https://magellan.ais.co.th/asgardpullmessagesapis/api/listen/thing?Key=45FDACF6D8D5A297A00A3A8AA18FCE3B&fbclid=IwAR2ONcR2bY2fDYfVvOMb2qf4yPNS_4Yo49ExwQDFPSwnMbTLT4ZEX0X88Sw";
        try {
            const response = await fetch(url);
            const data = await response.json();
            const lastData = await Usermodel.getLastData();
            if (
                data.Sensor.temperature !== lastData[0].temperature ||
                data.Sensor.humidity !== lastData[0].humidity ||
                data.Sensor.soil_moisture !== lastData[0].soil_moisture ||
                data.Sensor.light !== lastData[0].light ||
                data.Sensor.ph !== lastData[0].pH
            ) {
                await Usermodel.insertData(data);
            }
        } catch (err) {
            console.error(err);
        }
    }

    // ดึง API แก้ไขการติด cors เป็น API จาก server AIS
    static async API(req, res) {
        const url = "https://magellan.ais.co.th/asgardpullmessagesapis/api/listen/thing?Key=45FDACF6D8D5A297A00A3A8AA18FCE3B&fbclid=IwAR2ONcR2bY2fDYfVvOMb2qf4yPNS_4Yo49ExwQDFPSwnMbTLT4ZEX0X88Sw";
        try {
            const response = await fetch(url);
            const data = await response.json();
            const { temperature, humidity, soil_moisture, light, ph } = data.Sensor;
            res.json({ temperature, humidity, soil_moisture, light, ph });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal server error" });
        }
    }
};

module.exports = UserController;