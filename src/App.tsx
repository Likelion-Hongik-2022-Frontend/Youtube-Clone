import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={lightTheme}>
				<GlobalStyle />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/search' element={<SearchPage />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
