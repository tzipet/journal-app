import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import './App.css'; 

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'left',


  },
  flex: {
    flexGrow: 1,
    padding: 20,
     

  },


};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'white', color: "#044362"}} >
        <Toolbar>
         <NavLink to = "/"  className="Nav_linkHomeButton">
          <Typography variant="title" color="inherit" className={classes.flex}>
            Home
          </Typography>
        </NavLink>   
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);