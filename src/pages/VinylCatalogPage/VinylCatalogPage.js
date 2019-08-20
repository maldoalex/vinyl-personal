// import React from "react";
// import axios from "axios";
// import CatalogItem from "../../components/CatalogItem/CatalogItem";

// class VinylCatalogPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       albums: [],
//       searchedAlbums: [],
//       show: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({ show: !this.state.show });
//   }
//   //use axios to get data from api
//   componentDidMount() {
//     axios
//       .get(
//         "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=1960s&limit=50&api_key=a524b0809a03f493e68a5abff436a312&format=json"
//       )
//       .then(response => {
//         // console.log(response.data.albums.album);
//         this.setState({
//           albums: response.data.albums.album
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     // let filteredAlbums = this.state.searchedAlbums.map(album => {
//     // console.log(this.state.searchedAlbums);

//     return (
//       <div className="decades">
//         {this.state.albums.map((album, i) => (
//           <CatalogItem album={album} key={i} />
//         ))}
//       </div>
//     );
//     // });
//   }
// }

// export default VinylCatalogPage;

import React from "react";
import axios from "axios";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import { UncontrolledCarousel } from "reactstrap";
import RightArrow from "../../components/CarouselArrows/RightArrow";
import LeftArrow from "../../components/CarouselArrows/LeftArrow";
import "./VinylCatalog.scss";

class VinylCatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      currentIndex: 0,
      translateValue: 0,
      searchedAlbums: [],
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  //use axios to get data from api
  componentDidMount() {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=1960s&limit=50&api_key=a524b0809a03f493e68a5abff436a312&format=json"
      )
      .then(response => {
        // console.log(response.data.albums.album);
        this.setState({
          albums: response.data.albums.album
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.albums.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    // let filteredAlbums = this.state.searchedAlbums.map(album => {
    // console.log(this.state.searchedAlbums);
    // const slider = () <UncontrolledCarousel albums={albums}/>
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.state.albums.map((album, i) => (
            <CatalogItem album={album} key={i} />
          ))}
        </div>
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
    // });
  }
}

export default VinylCatalogPage;
