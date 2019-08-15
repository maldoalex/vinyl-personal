module.exports = {
  addOrder: async (req, res) => {
    const { users_id, hardware_id } = req.body;
    const dbInstance = req.app.get("db");

    dbInstance
      .add_order([users_id, hardware_id])
      .then(() => res.sendStatus(200))
      .catch(error => {
        // res.status(500).send({ message: "error" });
        console.log(error);
      });
  }
};

//req.session.user_id
//req.session.hardware_id
