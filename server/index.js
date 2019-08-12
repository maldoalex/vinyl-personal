require("dotenv").config();
const express = require("express");
const app = express();
const controller = require("./controller");
const massive = require("massive");
const session = require("express-session");
const authController = require("./authController");
const cartController = require("./cartController");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("massive connected");
  })
  .catch(error => console.log(error));

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
  })
);
app.use(cartController.checkForCart);

//hardware
app.get("/api/hardware", controller.getAllHardware);
// app.get("/api/hardware/:id", controller.getHardware);
app.post("/api/hardware/", controller.addHardware);
// app.delete("/api/hardware/:id", controller.deleteHardware);

// //users
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);
app.get("/auth/logout", authController.logout);

//cart
app.get("/api/cart", cartController.getCart);
app.post("/api/cart", cartController.addToCart);
app.delete("/api/cart/:id", cartController.removeFromCart);

// //orders
// app.get("/api/orders/:id", controller.getOrder);
// app.post("/api/orders", controller.addOrder);
// app.delete("/api/orders/:id", controller.deleteOrder);

// //order detail
// app.get("/api/order_detail/:id", controller.getOrderDetail);

app.listen(SERVER_PORT, () => {
  console.log(`server is listening port ${SERVER_PORT}`);
});
