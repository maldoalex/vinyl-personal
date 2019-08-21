module.exports = {
  addOrder: async (req, res) => {
    const { hardware_id } = req.body;
    const { id } = req.session.user;
    const dbInstance = req.app.get("db");

    dbInstance
      .add_order([id, hardware_id])
      .then(() => res.sendStatus(200))
      .catch(error => {
        console.log(error);
      });
  }
};
