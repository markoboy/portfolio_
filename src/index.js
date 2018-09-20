import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
// registerServiceWorker();
