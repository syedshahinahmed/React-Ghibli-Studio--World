import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  // const dateUpdate = document.write(new Date().getFullYear());

  render() {
    return (
      <footer>
        <h5 className="txt">Get connected with us on social networks!</h5>
        <div className="social-item">
          {/* <!--Facebook--> */}
          <a className="fb-ic" href="#">
            <i className="fab fa-facebook "> </i>
          </a>
          {/* <!--Twitter--> */}
          <a className="tw-ic" href="#">
            {" "}
            <i className="fab fa-twitter "> </i>
          </a>
          {/* <!--Google +--> */}
          <a className="gplus-ic" href="#">
            <i className="fab fa-google-plus "> </i>
          </a>
          {/* <!--Linkedin--> */}
          <a className="li-ic" href="#">
            <i className="fab fa-linkedin "> </i>
          </a>
          {/* <!--Instagram--> */}
          <a className="ins-ic" href="#">
            <i className="fab fa-instagram "> </i>
          </a>
        </div>
        <div className="footer-copyright">
          <p>
            © 2019 Copyright:{" "}
            <Link className="footer-brand" to="/">
              Ghibli Studio
            </Link>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
