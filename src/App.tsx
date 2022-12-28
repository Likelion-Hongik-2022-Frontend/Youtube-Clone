import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Search from './pages/Search';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={lightTheme}>
				<GlobalStyle />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/search' element={<Search />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
