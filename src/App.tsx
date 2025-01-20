import './App.css';
import DistanceRunningPage from './pages/distance-running';
import { Navigation } from './pages/shared-components/Navigation';
import TrackAndFieldPage from './pages/track-and-field';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReloadPrompt from './ReloadPrompt';

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
				<ReloadPrompt />
		</div>
    </BrowserRouter>
	);
}

export default App;
