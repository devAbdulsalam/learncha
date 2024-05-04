import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './fonts/Ribeye/Ribeye-Regular.ttf';
import './fonts/Ribeye_Marrow/RibeyeMarrow-Regular.ttf';
import { BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
    	<BrowserRouter>
			<App />
		</BrowserRouter>
	// </React.StrictMode>
);
