import database from "../database.js";

class RoomController {
  async createRoom(req, res) {
    const {number, category, status_free} = req.body;
    const hotel = await database.query(`INSERT INTO rooms (number, category, status_free) VALUES ($1, $2, $3) RETURNING *`, [number, category, status_free]);
    res.json(hotel.rows[0]);
  }
  async getFreeRoom (req, res) {
    const freeHotel = await database.query(`SELECT * FROM rooms WHERE status_free = 'Свободен'`);
    res.json(freeHotel.rows)
  }

  async reverseStatus (req, res) {
    const {id} = req.params;
    const result = await database.query(`SELECT status_free FROM rooms WHERE id = $1`, [id]);
    const currentStatus = result.rows[0].status_free;
    const newStatus = currentStatus === 'Свободен' ? 'Занят' : 'Свободен';
    
    await database.query(`UPDATE rooms SET status_free = $1 WHERE id = $2`, [newStatus, id]);
    res.json({newStatus})
  }
}

export default new RoomController();
