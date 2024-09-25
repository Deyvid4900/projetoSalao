import {React} from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.css"; // Certifique-se de que o arquivo CSS está importado
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
   const navigate = useNavigate();
  const services = [
    { title: "Corte de Cabelo", description: "Corte e modelagem de cabelo.", price: "R$ 25", duration: "30 mins" },
    { title: "Manicure", description: "Serviços de manicure e pedicure.", price: "R$ 20", duration: "45 mins" },
    { title: "Maquiagem", description: "Maquiagem para todas as ocasiões.", price: "R$ 50", duration: "1h" },
    { title: "Massagem", description: "Relaxamento e bem-estar.", price: "R$ 60", duration: "1h 30mins" },
    { title: "Penteado", description: "Estilos para eventos especiais.", price: "R$ 40", duration: "45 mins" },
  ];

  
  
  const handleAgendarClick = (servico) => {
    // Redireciona para a página de agendamento, passando o serviço como estado
    navigate('/agendamento', { state: { servico } });
  };
  
  return (
    <>
      {/* Hero Section */}
      <div className="hero d-flex justify-content-end align-items-end">
        <div className="overlay"></div>
        <div
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"end",
            textAlign: "end",
            color: "white",
            padding: 25,
            position: "relative",
            zIndex: 2,
          }}
        >
          <button className="btn btn-md btn-success" onClick={() => handleAgendarClick(services)}>
            <i className="fas fa-calendar-check me-2"></i> Reserve Agora
          </button>
          <h1 className="pt-2" style={{ fontWeight: 500 }}>
            Nome do Salão
          </h1>
          <h6 style={{ fontWeight: 400, color: "rgba(248, 247, 255, 0.8)" }}>
            Distância: 19km
          </h6>
        </div>
      </div>

      {/* Action Section */}
      <div className="d-flex gap-3 justify-content-end action py-4 px-3">
        <div>
          <i className="fa-solid fa-phone"></i> Ligar
        </div>
        <div>
          <i className="fa-solid fa-map"></i> Visitar
        </div>
        <div>
          <i className="fa-solid fa-share-nodes"></i> Compartilhar
        </div>
      </div>

      {/* Divisor */}
      <div className="divider w-100" style={{ height: 25, backgroundColor: "#C4C4C4" }}></div>

      {/* Serviços */}
      <div className="container">
        <div className="search-bar my-3">
            <h1>Serviços</h1>
          <input
            className="form-control"
            placeholder="Pesquise um serviço..."
            type="text"
          />
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={index}
              className="card mb-3 d-flex flex-row align-items-center p-3 flex-wrap"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}
            >
              {/* Imagem Placeholder */}
              <div
                className="image-placeholder"
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "#C4C4C4",
                  borderRadius: "8px",
                  marginRight: "15px",
                }}
              ></div>

              {/* Detalhes do Serviço */}
              <div className="service-details flex-grow-1">
                <h5 className="service-title mb-1">{service.title}</h5>
                <p className="service-info text-muted">
                  {service.price} • {service.duration}
                </p>
              </div>

              {/* Botão de Agendar */}
              <div className="mt-2 mt-md-0">
                <button className="btn btn-success" onClick={() => handleAgendarClick(service)}>
                  <i className="fas fa-calendar-check me-2"></i> Agendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home