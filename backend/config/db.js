import mysql from "mysql2";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./config/db.env" });

const db = mysql.createConnection({
    host     : process.env.DB_HOST || "localhost",
    port     : process.env.DB_PORT || 3348,  // Ensure it matches XAMPP MySQL
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
    database : process.env.DB_DATABASE || "Airlines"
});

// Connect to XAMPP's MySQL
db.connect((err) => {
    if (err) {
        console.error("❌ XAMPP MySQL Connection Failed:", err);
        return;
    }
    console.log("✅ Connected to XAMPP MySQL Database!");
});

export default db;
