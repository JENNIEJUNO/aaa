import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Banner from './Banner/Banner';

function App() {

  return (
    <div>
      <Banner />
      <Routes>
        <Route path="/" element={<Homepage/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
