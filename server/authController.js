const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    console.log("hello");
    const { first_name, last_name, email, display_name, password } = req.body;
    const db = req.app.get("db");
    const result = await db.get_user(display_name);
    const existingUser = result[0];
    if (existingUser) {
      return res.status(409).send("username taken");
    }
    const hash = await bcrypt.hash(password, 10);
    const registeredUser = await db.register_user([
      first_name,
      last_name,
      email,
      display_name,
      hash
    ]);
    const user = registeredUser[0];
    console.log(user);
    req.session.user = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      display_name: user.display_name,
      id: user.id
    };
    return res.status(200).send(req.session.user);
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const matchUser = await req.app.get("db").get_user([email]);
    const user = matchUser[0];
    console.log(user);
    if (!user) {
      return res
        .status(401)
        .send("User not found, please register as new user");
    }
    const authenticate = bcrypt.compareSync(password, user.password);
    if (!authenticate) {
      return res.status(403).send("incorrect password");
    }
    req.session.user = { id: user.id, email: user.email };
    return res.json(req.session.user);
  },
  signOut: (req, res) => {
    req.session.destroy();
    return res.sendStatus(200);
  }
};
