import React, { Fragment } from "react";
import "./Home.css";
import "./Backgrnd/Portfolio.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import About from "./About";

function Home() {
  return (
    <div className="home">
      <div className="head">Portfolio</div>

      <div className="intro">
        <div>
          <h1>Hi!!</h1>
          <p>
            {/* YOUR NAME AND YOUR DESIGNATION */}
            I'm Atharva <br /> I'm a full stack
          </p>
        </div>

        <div className="intro_bt">
          <Button variant="contained" href="#stack" disableRipple>
            developer
          </Button>
        </div>
      </div>

      <div className="links">
        <ul>
          <li>
            <IconButton
              className="bt"
              onClick={() => {
                window.open("https://github.com/99Atharva");
              }}
            >
              <GitHubIcon fontSize="large" style={{ color: "white" }} />
            </IconButton>
          </li>
          <li>
            <IconButton
              className="bt"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/atharva-tilwankar-07b20a1a9/"
                );
              }}
            >
              <LinkedInIcon fontSize="large" style={{ color: "white" }} />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
