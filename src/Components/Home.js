import React from 'react';
import './Home.css';
import "./Backgrnd/Portfolio.jpg";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';


function Home() {
    return (

        <div className="home">
            <div className="head"> 
                Portfolio
            </div>

            <div className="intro">
                
                <p><h1>HI!</h1>
                    I'm Atharva <br/> I'm a full stack <Button variant="contained"  disableRipple className="introbox">developer</Button>
                </p>
            </div>
            <div className="links">
               <ul>
                   <li>
                    <IconButton className="bt"  onClick={() => { window.open("https://github.com/99Atharva") }} >
                       <GitHubIcon fontSize="large" style={{color:"white"}} />
                    </IconButton>
                   </li>
                   <li>
                    <IconButton className="bt" onClick={() => { window.open("https://www.instagram.com/98_atharva/") }} >
                       <InstagramIcon fontSize="large" style={{color:"white"}}/>
                    </IconButton>
                   </li>
                   <li>
                    <IconButton className="bt" onClick={() => { window.open("https://www.linkedin.com/in/atharva-tilwankar-07b20a1a9/") }} >
                        <LinkedInIcon fontSize="large" style={{color:"white"}} />
                    </IconButton>
                   </li>
               </ul>        
                
                
            </div>
        </div>
        
    )
}

export default Home;
