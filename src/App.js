import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import HomeMenu from './Pages/Home/HomeMenu';
import TaxiMenu from './Pages/Taxi/TaxiMenu';
import TourismMenu from './Pages/Tourism/TourismMenu';
import WorkplaceMenu from './Pages/Workplace/WorkplaceMenu';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/HomeMenu" element={<HomeMenu />}/>
        <Route path="/TaxiMenu" element={<TaxiMenu />}/>
        <Route path="/TourismMenu" element={<TourismMenu />}/>
        <Route path="/WorkplaceMenu" element={<WorkplaceMenu />}/>
      </Routes>
    </div>
  );
}

export default App;
