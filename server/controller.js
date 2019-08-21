module.exports = {
  addHardware: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const {
      product_name,
      product_description,
      product_image,
      product_price
    } = req.body;

    dbInstance
      .add_hardware([
        product_name,
        product_description,
        product_image,
        product_price
      ])
      .then(() => res.sendStatus(200))
      .catch(error => {
        res.status(500).send({ msg: "error!" });
        console.log(error);
      });
  },

  getAllHardware: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log("hit");
    dbInstance
      .get_all_hardware()
      .then(hardware => res.status(200).send(hardware))
      .catch(error => {
        res.status(500).send({ msg: "error!" });
        console.log(error);
      });
  }
};
