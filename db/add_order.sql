INSERT INTO orders (users_id, hardware_id)
VALUES ($1, $2)
RETURNING *