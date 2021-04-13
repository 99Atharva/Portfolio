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
           <Grid  className={classes.outer_2} item direction="column" justify="center" alignItems="stretch"  >
           <Slide direction="right" in="true" timeout={600} mountOnEnter unmountOnExit>
             <img src={ME} alt="My_pic"/>
             </Slide>
           </Grid>
            
        </Grid>

        <Grid item xs={12} md={6}>
            <Grid className={classes.outer} item direction="column" alignItems="stretch">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p> 
            </Grid> 
        </Grid>

      </Grid>
    </div>
  );
}
