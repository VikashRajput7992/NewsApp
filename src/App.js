import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ModeState from './components/context/ModeState';


function App() {
  const pageSize = 5;
  const country = "in";
  const apiKey = process.env.REACT_APP_NEWS_API_TWO;
  return (
    <>
      <ModeState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News apiKey={apiKey} pageSize={pageSize} country={country} category="general" />}></Route>
            <Route path="/general" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />}></Route>
            <Route path="/business" element={<News apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />}></Route>
            <Route path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />}></Route>
            <Route path="/health" element={<News apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />}></Route>
            <Route path="/science" element={<News apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />}></Route>
            <Route path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />}></Route>
            <Route path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />}></Route>
          </Routes>
        </Router >
      </ModeState>
    </>
  );
}

export default App;
