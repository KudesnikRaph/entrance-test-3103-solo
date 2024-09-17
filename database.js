import pg from "pg";
const { Pool } = pg;

export default new Pool({
    user: "admin",
    password: "admin",
    host: "localhost",
    port: "5432",
    database: "hotel",
})