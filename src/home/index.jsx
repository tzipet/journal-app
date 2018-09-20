import React from 'react';
import GridList from './GridList';
import PropTypes from 'prop-types';
import '../App.css';


	function home(props) { 
		const {classes} = props;
		console.log('classes', classes)
		return (
	<div>
		<h1 className ="App-header">
	        Journal App
	            <p className = "descritpionPar"> 
	            	<div>
	            	A decentralized platform for submitting and download <br/>
	                scientific journals and research papers
	                </div>
	            </p>
	     </h1> 

	      <div className="GridList">
	      <GridList></GridList>
	      </div>
    </div>

      );

  }

export default home;