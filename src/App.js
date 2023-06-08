import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Survey from './components/Survey';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='' element={<Welcome />} />
        <Route path='survey' element={<Survey />} />
        <Route path='thank-you' element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
