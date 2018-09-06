import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import papers from './papers'

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 500,
		height: 450,

	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
});

function TitlebarGridList(props) {
	const { classes } = props;


	return (
		<div className = {classes.root}>
		  <GridList cellHeight = {250} className = {classes.gridList} spacing = {10}>
		   {papers.map(paper => (
		   	 <GridListTile key = {paper.id}>
		   	  <img src={paper.imageUrl} alt = {paper.title} />
		   	  <GridListTileBar 
		   	  	title = {paper.title}
		   	  	subtitle = {'Author'}
		   	  	
		   	  />
		   	 </GridListTile> 	
		   	)
		   )
		}
	   </GridList> 
	  </div> 

		);
}


	export default withStyles(styles)(TitlebarGridList);