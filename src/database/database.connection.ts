import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: process.env.DATABASE_PASSWORD,
    database: "mybooks"
})

export { connection };