import './App.css';
import DistanceRunningPage from './pages/distance-running';
import { Navigation } from './pages/shared-components/Navigation';
import TrackAndFieldPage from './pages/track-and-field';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/distancerun" />} />
          <Route path="distancerun" element={<DistanceRunningPage />} />
          <Route path="track" element={<TrackAndFieldPage />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
