import React from 'react';
import NavBar from './components/navbar/NavBar';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import Home from './pages/home/Home';
import { AuthProvider } from './context/auth/AuthProvider';
import ProtectedRoute from './context/auth/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

export default function App() {
	
	return (
		<Box>
			<AuthProvider>
				<NavBar />
				<Routes>
					<Route index element={<SignUp />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/home' element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					} />
				</Routes>
			</AuthProvider>
		</Box>
  	);
}