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
    borderRadius: '30px',
		
    
	},

	gridListTile: {
		
	}



});

function TitlebarGridList(props) {
	const { classes } = props;


	return (
		<div className = {classes.root}>
		  <GridList  cellHeight = {250} className = {classes.gridList} spacing = {40} cols = {3} >
		   {papers.map(paper => (
		   	 <GridListTile className = {classes.gridListTile} key = {paper.id}>
		   	  <img className= {classes.img} src={paper.imageUrl} alt = {paper.title} />
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