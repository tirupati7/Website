import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/homeCoursel.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import firebase from "../firebase/config";

class HomeCoursel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courselImgs: [],
    };
  }

  componentDidMount() {
    let storageRef = firebase.storage().ref();
    const fetchImages = async () => {
      let result = await storageRef.child("homePageCoursels").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );
      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      this.setState({
        courselImgs: urls,
      });
    };

    loadImages();
  }

  render() {
    return (
      <Carousel style={{ marginTop: "54px" }}>
        {this.state.courselImgs.length > 0 &&
          this.state.courselImgs.map((eachCoursel, i) => {
            return (
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={eachCoursel}
                  alt="First slide"
                  width="100%"
                  height="400px"
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
            );
          })}
      </Carousel>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeCoursel)
);
