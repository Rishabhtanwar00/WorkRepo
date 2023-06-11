import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Homepage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
