import './App.css';
import DistanceRunningPage from './pages/distance-running';
import { Navigation } from './shared-components/Navigation';
import TrackAndFieldPage from './pages/track-and-field';
import { Route, Routes, BrowserRouter } from 'react-router';

function App() {
	return (
    <BrowserRouter>
			<div className="App">
					<Routes>
						<Route
							path='/'
							element={<DistanceRunningPage />}
						/>
						<Route
							path='/index.html'
							element={<DistanceRunningPage />}
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