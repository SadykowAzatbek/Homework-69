import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <header className="bg-primary text-start p-3 mb-5">
        <h1 className="text-white">TV Show</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows/:id" element={<Home />} />
          <Route path="*" element={<h2>Not found</h2>} />
        </Routes>
      </main>
    </>
  )
}

export default App;
