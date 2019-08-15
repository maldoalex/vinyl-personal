import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import { toggleCartHidden, getCart } from "../../redux/Cart/cartReducer";
import { store } from "../../redux/store";
import "./CartSlide.scss";

//create a cart component that slides in from right when icon is clicked
//map through cart items and send to CartItem component

// ({ cartItems, history, dispatch })

//make into class component on componentdidmoutn run getitems
class CartSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartSlideItems: []
    };
  }
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    const { history, cartItems } = this.props;
    console.log(cartItems);
    return (
      <div className="cart-slide">
        {/* {console.log(props)} */}
        <div className="cart-items">
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
        <CustomButton
          onClick={() => {
            store.dispatch(toggleCartHidden());
            history.push("/order");
          }}
        >
          Complete Order
        </CustomButton>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return { cartItems: reduxState.cart.cartItems };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getCart }
  )(CartSlide)
);
