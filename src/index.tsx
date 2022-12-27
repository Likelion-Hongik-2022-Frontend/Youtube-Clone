import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
	<ThemeProvider theme={lightTheme}>
		<GlobalStyle />
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);
