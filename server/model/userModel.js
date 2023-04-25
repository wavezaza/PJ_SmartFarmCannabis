const db = require('../config/db');

class Usermodel {
    // เรียกดูข้อมูลในตาราง users
    static async getusers() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM myadmin.users', [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
    // ทำการเช็ค username password ในฐานข้อมูล และ return ค่าออกไป
    static async getUserPass(username, password) {
        const [rows] = await db
            .promise()
            .execute('SELECT COUNT(*) AS count FROM myadmin.users WHERE username = ? AND password = ?', [username, password]);

        return rows[0].count === 1;
    }
        // เรียกดูข้อมูลในตาราง users
        static async getSensorData() {
            return new Promise((resolve, reject) => {
                db.query('SELECT * FROM myadmin.sensor_data', [], (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
            });
        }
    // ทำการ เลือก data ในตาราง โดยจะเอาตัวล่าสุด และส่งค่าออกไป
    static async getLastData() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM myadmin.sensor_data ORDER BY date DESC LIMIT 1", [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
    // ทำการเพิ่มข้อมูลเข้าไปในฐานข้อมูล
    static async insertData(data) {
        try {
            const { temperature, humidity, soil_moisture, light, ph } = data.Sensor;
            await db
                .promise()
                .execute(
                    'INSERT INTO myadmin.sensor_data (temperature, humidity, soil_moisture, light, pH ,date) VALUES (?, ?, ?, ?, ?,  CURRENT_TIMESTAMP)',
                    [temperature, humidity, soil_moisture, light, ph]
                );
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = Usermodel;