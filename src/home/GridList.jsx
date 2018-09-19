import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import papers from './papers.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const styles = theme => ({
	root: {
		display: 'flex',
		justify: 'space-around',
		overflow: 'hidden',
		backgroundColor: 'white',
		direction: "row",
		alignItems: "center",
		marginLeft: '50px',
		marginRight: '50px',
		color: '#033B56',


	},
	gridList: {
		width: 'auto',
		height: 'auto',
		




	},

	img: {
	width: '100%',
    
	},


	tile: {
        borderRadius: 8,
        width: '100%',
    }



});

function TitlebarGridList(props) {
	const { classes } = props;


	return (
		<div className = {classes.root}>
		  <GridList  cellHeight = {250} className = {classes.gridList} spacing = {72} cols = {3} >
		   {papers.map(paper => (
		   	 <GridListTile className = {classes.gridListTile} key = {paper.id} classes={{ tile: classes.tile}}>

		   	<Link to = { '/paper/'}>

		   	  <img className= {classes.img} src={paper.imageUrl} alt = {paper.title} />
		   	  <GridListTileBar 
		   	  	title = {paper.title}
		   	  	subtitle = {'Author'}

		   	  />
		   	</Link>
		   	 </GridListTile> 	
		   	)
		   )
		}
	   </GridList> 
	  </div> 

		);
}


	export default withStyles(styles)(TitlebarGridList);