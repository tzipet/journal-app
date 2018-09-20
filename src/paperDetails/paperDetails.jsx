import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import papers from '../home/papers.js'


const styles = theme => ({

	root: {
		display: 'flex',
		direction: 'row',
		justify: 'space-around',
		alignItems: 'flex-start',
		margin: '16px',
		spacing: '8',
		borderColor: '#044362',
		borderStyle: 'none',
		borderRadius: 8,
		borderWidth: 1,
		marginLeft: 48,
    	marginRight: 48,
    	paddingTop: 16,
	},

	image: {
		width: '15%',
		height: '15%',
		borderRadius: 8,
		

	},

	description: {
		textAlign: 'left',
		marginLeft: '16px',
		borderRadius: 8,
		marginRight: 256
		
	
		},

	title: {
		color: 'white'
	},

	author: {
		color: ' white'
	},

	abstract: {
		color: 'white',
		textDecorationLine: 'underline'
	},

	abstract1: {
		color: '#white'
	},
})

function PaperDetails(props) {
	const { classes, match } = props

	

	const filteredPapers = papers.filter(paper => match.params.id == paper.id)

	const paper = filteredPapers[0]

	return (
		<div className = { classes.root } spacing = {16}>

					<img className = {classes.image} src = {paper.imageUrl} alt = {paper.title} />

					<div className = {classes.description}>
					  <Typography variant="title" className = {classes.title}>
					  	 {paper.title} 
					  </Typography> <br/>
					  <Typography variant="subheading" className = { classes.author}>
					  	{paper.author}
					  </Typography> <br/>
					  <Typography className = { classes.abstract}>
					  	Abstract:
					  </Typography>
					  <Typography color="white" className = { classes.abstract1}>
					  	 {paper.abstract}
					  </Typography>
					 </div>

			
					
				
			
		 
		</div>
		)
	}

	export default withStyles(styles)(PaperDetails);