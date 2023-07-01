import logo from './logo.svg';
import './App.css';
import RegisteredInterns from './components/RegisteredInterns';
import Register from './components/RegisterInterns';


function App() {
  return (
    <div  style={{ margin: 0, padding: 0 }} >
    <Register />
    <RegisteredInterns />
    </div>
  );
}

export default App;
