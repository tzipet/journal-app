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
		justify: 'space-around',
		overflow: 'hidden',
		backgroundColor: '#033B56',
		container: 'true',
		direction: "column",
		alignItems: "flex-start",
		marginLeft: '40px',

		


	},
	gridList: {
		width: '100%',
		height: '100%',
		
		

		


	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
});

function TitlebarGridList(props) {
	const { classes } = props;


	return (
		<div className = {classes.root}>
		  <GridList cellHeight = {250} className = {classes.gridList} spacing = {40} cols = {3} >
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