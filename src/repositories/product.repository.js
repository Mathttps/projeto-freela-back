import { db } from "../database/dbconnect.js";

export const insertProd = async (ownerId, name, description, categoryId, price, photo) => {
  const result = await db.query(
    `INSERT INTO photos (url) VALUES ($1) RETURNING id;`,
    [photo]
  );
  const photoId = result.rows[0].id;

  return db.query(
    `
    INSERT INTO products (owner_id, name, description, category_id, price, photo_id) 
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `,
    [ownerId, name, description, categoryId, price, photoId]
  );
};

export const categoriesList = async () => {
  return db.query(`SELECT id AS value, name AS label FROM categories`);
};

export const prodID = async (id) => {
  return db.query(
    `
    SELECT p.name, p.description, u.name AS "ownerName", u.email, u.phone, c.name AS categoria, p.price, p1.url AS "imageUrl" 
      FROM products p
        JOIN users u 
          ON u.id = p.owner_id
        JOIN categories c
          ON c.id = p.category_id
        JOIN photos p1 
          ON p1.id = p.photo_id
      WHERE p.id = $1 AND p.available = TRUE;
  `,
    [id]
  );
};
