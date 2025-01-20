import './App.css';
import DistanceRunningPage from './pages/distance-running';
import { Navigation } from './pages/shared-components/Navigation';
import TrackAndFieldPage from './pages/track-and-field';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
	return (
    <BrowserRouter>
		<div className="App">
				<Routes>index.html
					<Route
						path='/'
						element={<Navigate to='/distancerun' />}
					/>
					<Route
						path='/index.html'
						element={<Navigate to='/distancerun' />}
					/>
					<Route
						path='/distancerun'
						element={<DistanceRunningPage />}
					/>
					<Route
						path='/track'
						element={<TrackAndFieldPage />}
					/>
				</Routes>
				<Navigation />
		</div>
    </BrowserRouter>
	);
}

export default App;
