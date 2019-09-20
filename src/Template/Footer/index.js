import React from "react";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container>
        <Grid item xs={12} sm={10}>
          <p>Copyright © 2019 Quang Vu Van. All rights reserved.</p>
        </Grid>
        <Grid item xs={12} sm={2}>
          <div className="footer__social">
            <div>
              <FontAwesomeIcon icon={faFacebookSquare} title="Facebook" />
            </div>
            <div>
              <FontAwesomeIcon icon={faInstagram} title="Instagram" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
