import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import papers from './papers.js';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

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
		color: 'black',


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
    },

   	titleWrap: {

    }

});

function TitlebarGridList(props) {
	const { classes } = props;


	return (
		<div className = {classes.root}>
		  <GridList  cellHeight = {250} className = {classes.gridList} spacing = {72} cols = {3} >
		   {papers.map(paper => (
		   	 <GridListTile className = {classes.gridListTile} key = {paper.id} classes={{ tile: classes.tile}}>
		   		<NavLink to = {`/paper/${paper.id}`} className = 'Nav_linkPaper'>

		   	  		<img className= {classes.img} src={paper.imageUrl} alt = {paper.title} />

				   	  <GridListTileBar 
				   	  	classes = {{titleWrap: classes.titleWrap}}
				   	  	title = {paper.title}
				   	  	subtitle = {paper.author}
				   	  />

		   		</NavLink>
		   	</GridListTile> 	
		   	)
		   )
		}
	   </GridList> 
	  </div> 

		);
}


	export default withStyles(styles)(TitlebarGridList);