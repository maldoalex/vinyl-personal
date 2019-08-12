import React from "react";
import axios from "axios";
import TurntablesAndEquipment from "../../components/TurntablesAndEquipment/TurntablesAndEquipment";

//Page to request turntables and equipment

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turntables: []
    };
  }

  //axios call to retrieve data from hardware table
  componentDidMount() {
    axios
      .get("/api/hardware")
      .then(response => {
        console.log(response);
        this.setState({ turntables: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { turntables } = this.state;
    return (
      <div className="inventory">
        {turntables.map(item => (
          <TurntablesAndEquipment key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default Inventory;
