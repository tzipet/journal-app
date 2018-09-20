import React from 'react';
import GridList from './GridList';
import PropTypes from 'prop-types';
import '../App.css';


	function home(props) { 
		const {classes} = props;
		console.log('classes', classes)
		return (
	<div>
		
	            <p className = "descritpionPar"> 
	            	<div>
	            	A decentralized platform for submitting and download <br/>
	                scientific journals and research papers
	                </div>
	            </p>

	      <div className="GridList">
	      <GridList></GridList>
	      </div>
    </div>

      );

  }

export default home;