import React from "react";
import MenuItem from "../MenuItem/MenuItem";

import "./Directory.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "vinyl",
          imageUrl:
            "https://www.recordsonwalls.com/wp-content/uploads/2013/08/17_record_frames_on_walls.jpg",
          size: "large",
          id: 1,
          link: "shop"
        },
        {
          title: "about",
          imageUrl: "",
          id: 2,
          link: ""
        },
        {
          title: "hardware",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kyUVoFGAP4OHZEDNeVfrOpYr8RQFaA9YABlMpTio8FNxa5oYJA",
          id: 3,
          link: ""
        },
        {
          title: "events",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiW5USKvFK1Fosv4W1Jhwnz18-6LF3F2hBA6RS-gbWM2djNptl",
          id: 4,
          link: ""
        },
        {
          title: "members",
          imageUrl: "",
          size: "large",
          id: 5,
          link: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
