import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1500,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
      width: '',
      height: 100,
  },
  chip: {
    margin: theme.spacing(0.5),
    height: 100,
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function MiddleDividers() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        
        <Grid container alignItems="center">
          <Grid item xs={6}>
          
    
        <div className={classes.section1}>
        <Avatar alt="Remy Sharp" src="https://image.flaticon.com/icons/svg/194/194938.svg" />
        </div>
          </Grid>
          <Grid item xs>
            
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              Developer
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="h2">
          Jessica Jones
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="h3">
          About
        </Typography>
        <div xs={6}>
          <Chip className={classes.chip}  label="jessicajones@gmail.com" color="secondary" />
          <Chip className={classes.chip} color="primary" label="Joining Date- 17-02-2020" />
          <Chip className={classes.chip} label="Female" />
          <Chip className={classes.chip} label="Permanent Employee" />
        </div>
      </div>
      <div className={classes.section3}>
        <Button color="primary" variant="outlined" href="./login">Log Out</Button>
      </div>
    </div>
  );
}
