import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './routes/Home/index';
function App() {

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App