import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from "./pages/Dashboard";
import CreateProduct from "./pages/CreateProduct";
import CreateUser from "./pages/CreateUser";
import ProductView from "./pages/ProductView";
import UserView from "./pages/UserView";
import AgentView from "./pages/AgentView";
import CreateAgent from "./pages/CreateAgent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/create-property" element={<CreateProduct />} />
        <Route path="/product-view" element={<ProductView />} />
        <Route path="/user-view" element={<UserView />} />
        <Route path="/create-agent" element={<CreateAgent />} />
        <Route path="/agent-view" element={<AgentView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
