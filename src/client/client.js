//startup point for client side app
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';

ReactDom.hydrate(
	<BrowserRouter>
	 <Routes />
	</BrowserRouter> 
	, document.querySelector('#root')
);
