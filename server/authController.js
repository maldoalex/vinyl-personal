const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { first_name, last_name, email, newUsername, newPassword } = req.body;
    const db = req.app.get("db");
    const result = await db.get_user(newUsername);
    const existingUser = result[0];
    if (existingUser) {
      return res.status(409).send("username taken");
    }
    const hash = await bcrypt.hash(newPassword, 10);
    const registeredUser = await db.register_user([
      first_name,
      last_name,
      email,
      newUsername,
      hash
    ]);
    const user = registeredUser[0];
    console.log(user);
    req.session.user = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      username: user.username,
      id: user.id
    };
    return res.status(200).send(req.session.user);
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const matchUser = await req.app.get("db").get_user([username]);
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
    req.session.user = { id: user.id, username: user.username };
    return res.json(req.session.user);
  },
  logout: (req, res) => {
    req.session.destroy();
    return res.sendStatus(200);
  }
};
