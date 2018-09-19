import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import papers from '../home/papers.js'


const styles = theme => ({

	root: {
		display: 'flex',
	},

	image: {
		width: '50%',
		heigth: '50%',
	},

	description: {
		color: "white",
	},



})



function PaperDetails(props) {
	const { classes } = props;

	return (
		<div className = { classes.root }>
			{papers.map(paper =>(
				<div key = { paper.id } className = { classes.details }>
					<img className = {classes.image} src = {paper.imageUrl} alt = {paper.title} />

					<div className = {{description: classes.description }}>

					  <Typography className = {classes.title}>
					  	Title: {paper.title}
					  </Typography> 
					  <Typography className = { classes.author}>
					  	Author: {paper.author}
					  </Typography>
					  <Typography className = { classes.abstract}>
					  	Abstract: {paper.abstract}
					  </Typography>
					 </div>

					</div>	  
					
				)
			)  
		} 
		</div>
		)
	}

	export default withStyles(styles)(PaperDetails);