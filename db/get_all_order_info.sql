SELECT *
FROM orders
INNER JOIN users
ON users.users_id = orders.users_id
WHERE orders.orders_id = $1;