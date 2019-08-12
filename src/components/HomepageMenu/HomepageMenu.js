import React from "react";
import HomepageTiles from "../HomepageTiles/HomepageTiles";

import "./HomepageMenu.scss";

//map over tiles on menu and send to 'homepagetiles'
class HomepageMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      tiles: [
        {
          title: "VINYL CATALOG",
          image:
            "https://www.recordsonwalls.com/wp-content/uploads/2013/08/17_record_frames_on_walls.jpg",
          size: "large",
          id: 1,
          page: "catalog"
        },
        {
          title: "ABOUT VINYLSIDE",
          image: "",
          id: 2,
          page: "about"
        },
        {
          title: "INVENTORY",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kyUVoFGAP4OHZEDNeVfrOpYr8RQFaA9YABlMpTio8FNxa5oYJA",
          id: 3,
          page: "inventory"
        },
        {
          title: "LIVE SHOWS & EVENTS",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiW5USKvFK1Fosv4W1Jhwnz18-6LF3F2hBA6RS-gbWM2djNptl",
          id: 4,
          page: ""
        },
        {
          title: "MEMBERS",
          image: "",
          size: "large",
          id: 5,
          page: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="homepage-tiles">
        {this.state.tiles.map(({ id, ...otherSectionProps }) => (
          <HomepageTiles key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default HomepageMenu;
