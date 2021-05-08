import React from 'react';
import "./About.css";
import ME from "../Components/Backgrnd/me.png";
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#e57373',
    flexWrap:'wrap',
    padding: 40,
    textAlign:'center'
  },
  paper: {
      padding:20,
  },

    outer: {
        
        padding:40,
    }
 
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <h1 id="Me">About Me
      
      </h1>
      <Grid container spacing={3} direction="row"  justify="space-around" 
      alignItems="center"  > 

        <Grid item xs={12} md={5}>
           <Grid  className={classes.outer_2}    >
           <Slide direction="right" in={true} timeout={1000} >
             <img src={ME} alt="My_pic"/>
             </Slide>
           </Grid>
            
        </Grid>

        <Grid item xs={12} md={6}>
            <Grid className={classes.outer}  >
                <p>I am currently an undergraduate student in the department of CSE. I am a full stack developer ,I have been developing web apps for about a year now.
                    Along with full stack web dev I have worked with c++ and python. You can check the stack i use below.
                    I love painting , gaming and outdoor sports🏃‍♀️.
                    </p> 
            </Grid> 
        </Grid>

      </Grid>
    </div>
  );
}
