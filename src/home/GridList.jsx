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
		marginLeft: 48,
		marginRight: 48,
		color: 'black',


	},
	gridList: {
		width: 'auto',
		height: 'auto',

	},

	img: {
	width: '100%',
	display: 'block',
    
	},


	tile: {
        borderRadius: 8,
        width: '100%',

    },



});

function TitlebarGridList(props) {
	const { classes } = props;


	return (
		<div className = {classes.root}>
		  <GridList  cellHeight = {250} className = {classes.gridList} spacing = {72} cols = {3} >
		   {papers.map(paper => (
		   	 <GridListTile className = {classes.gridListTile} key = {paper.id} classes={{ tile: classes.tile}}>
		   		<Link to = {`/paper/${paper.id}`} className = 'Nav_linkPaper'>
		   		  <div>		
		   	  		<img className= {classes.img} src={paper.imageUrl} alt = {paper.title} />
		   	  		<div className='overlay'>
		   	  		<div className='hoverText'>{paper.title}<br/><br/>{paper.author}</div>
				   	</div>
				   	<GridListTileBar title = {paper.headline} /> 
				  </div> 	  
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