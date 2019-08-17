import React from "react";
// import LogOut from "../../components/LogOut/LogOut";
import LogIn from "../../components/Login/LogIn";
import Register from "../../components/Register/Register";

import "./RegisterAndLoginPage.scss";

class RegisterAndLoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      flip: false
    };
    this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip() {
    this.setState({
      flip: true
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="flip">
            <LogIn />
          </div>
          <div className="flip">
            <Register />
          </div>
          <div className="card-action">
            <button onClick={this.handleFlip} style={{ cursor: "pointer" }}>
              FLIP
            </button>
          </div>
        </div>
      </div>
      // <div>
      //   <div className="container">
      //     <div className={this.state.flip ? "flip" : ""}>
      //       <LogIn />
      //     </div>
      //     <div className={this.state.flip ? "flip" : ""}>
      //       <Register />
      //     </div>
      //     <div className="card-action">
      //       <button
      //         onClick={this.onFlip.bind(this)}
      //         style={{ cursor: "pointer" }}
      //       >
      //         FLIP
      //       </button>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default RegisterAndLoginPage;

// import React from "react";
// import LogOut from "../../components/LogOut/LogOut";
// import LogIn from "../../components/Login/LogIn";
// import Register from "../../components/Register/Register";

// import "./RegisterAndLoginPage.scss";

// //Page where users can log in to account or register, each respective component is rendered
// const RegisterAndLoginPage = () => (
//   <div className="reg-login">
//     <LogIn />
//     <Register />
//     <LogOut />
//   </div>
// );

// export default RegisterAndLoginPage;
