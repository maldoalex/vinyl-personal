import React from "react";
import axios from "axios";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/hardware")
      .then(response => {
        console.log(response);
        this.setState({ collections: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(item => (
          <CollectionItem
            key={item.id}
            product_name={item.product_name}
            product_price={item.product_price}
            product_image={item.product_image}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
