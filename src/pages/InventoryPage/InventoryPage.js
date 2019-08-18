import React from "react";
import axios from "axios";
import TurntablesAndEquipment from "../../components/TurntablesAndEquipment/TurntablesAndEquipment";
import "./InventoryPage.scss";
import ReactPlayer from "react-player";

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
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=8_Qo4qCDgyk"
            playing
          />
        </div>
        {turntables.map(item => (
          <TurntablesAndEquipment key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default Inventory;
