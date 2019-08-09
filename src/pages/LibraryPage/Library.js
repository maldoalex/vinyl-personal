import React from "react";
import axios from "axios";
import LibraryItem from "../../components/LibraryItem/LibraryItem";

class LibraryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      searchedAlbums: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=1970s&limit=50&api_key=a524b0809a03f493e68a5abff436a312&format=json"
      )
      .then(response => {
        console.log(response.data.albums.album);
        this.setState({
          albums: response.data.albums.album
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // let filteredAlbums = this.state.searchedAlbums.map(album => {
    console.log(this.state.searchedAlbums);

    return (
      <div className="decades">
        {this.state.albums.map(album => (
          <LibraryItem album={album} />
        ))}
      </div>
    );
    // });
  }
}

export default LibraryPage;
