import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from "./assets/1.jpg";
import pic2 from "./assets/2.png";
import pic3 from "./assets/p1.png";
export default class Crousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={pic1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={pic2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={pic3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}
// export default Crousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
