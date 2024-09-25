import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';  // A página de listagem de serviços
import AgendamentoPage from './pages/Agendamentos/Agendamento'; // A página de agendamento

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamento" element={<AgendamentoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
