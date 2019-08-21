module.exports = {
  checkForCart: (req, res, next) => {
    if (!req.session.cart) {
      req.session.cart = [];
    }
    next();
  },
  addToCart: async (req, res) => {
    const { item } = req.body;
    req.session.cart = [item, ...req.session.cart];
    res.status(200).json(req.session.cart);
  },
  getCart: (req, res) => {
    res.status(200).json(req.session);
  },
  removeFromCart: (req, res) => {
    const { id } = req.params;
    console.log(id);
    const index = req.session.cart.findIndex(item => id == item.id);
    console.log(index);
    req.session.cart.splice(index, 1);
    res.status(200).json(req.session.cart);
  }
};
