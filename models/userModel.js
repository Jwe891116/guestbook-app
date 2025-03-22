import { query } from "../config/db.js";

export const getAllGuest = async () => {
 try {
   const result = await query("SELECT username, message FROM guestbook");
   return result.rows;
 } catch (error) {
   console.error("Error fetching message:", error);
   throw error;
 }
};

export const addGuest = async (username, message) => {
      try {
        const result = await query(
          "INSERT INTO guestbook(username, message) VALUES ($1, $2) RETURNING *",
          [username, message]
        );
        return result.rows[0];
      } catch (error) {
        console.error("Error adding guest:", error);
        throw error;
      }
     };
     