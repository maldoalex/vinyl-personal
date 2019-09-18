require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const smtpTransport = require("nodemailer-smtp-transport");

const nodemailer = require("nodemailer");
const controller = require("./controller");
const massive = require("massive");
const session = require("express-session");
const authController = require("./authController");
const cartController = require("./cartController");
const orderController = require("./orderController");
const {
  SERVER_PORT,
  CONNECTION_STRING,
  SESSION_SECRET,
  STRIPE_SECRET_KEY
} = process.env;
const stripe = require("stripe")(STRIPE_SECRET_KEY);

app.use(express.json());

app.use(express.static(`${__dirname}/../build`));

let transporter = nodemailer.createTransport(
  smtpTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    // port: 587,
    secure: false, //
    auth: {
      user: "alexmdevmtn@gmail.com", // generated ethereal user
      pass: "devmtn123"
      // user: "abagail.kris46@ethereal.email", // generated ethereal user
      // pass: "b8W3ZyNv5a1efYP3PA" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  })
);
app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const email = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: "recordshop@gmail.com"</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

    let mailOptions = {
      from: "recordshop@gmail.com", // sender address
      to: "alexmdevmtn@gmail.com", // list of receivers
      subject: "nodemailer email test", // Subject line
      text: req.body.message, // plain text body
      html: email // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

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

// //users
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);
app.get("/auth/logout", authController.logout);
app.get("/auth/user", authController.getSession);
app.put("/auth/update", authController.updateUser);

//Cart
app.get("/api/cart", cartController.getCart);
app.post("/api/cart", cartController.addToCart);
app.delete("/api/cart/:id", cartController.removeFromCart);

// //orders
// app.get("/api/orders/:id", controller.getOrder);
app.post("/api/order", orderController.addOrder);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

// stripe
app.post("/api/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body.orderToken
    });
    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});

app.listen(SERVER_PORT, () => {
  console.log(`server is listening port ${SERVER_PORT}`);
});
