
import { Routes, Route} from "react-router-dom";
import './App.css';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
