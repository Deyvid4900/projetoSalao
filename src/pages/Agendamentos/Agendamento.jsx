import React from 'react';
import './Agendamento.css'; // Estilização personalizada

const AgendamentoPage = () => {
  return (
    <div className="agendamento-container">
      {/* Cabeçalho */}
      <div className="agendamento-header">
        <h2>Finalizar Agendamento</h2>
        <p>Escolha um horário e método de pagamento.</p>
      </div>

      {/* Serviço selecionado */}
      <div className="servico-selecionado">
        <div className="servico-info">
          <div className="servico-img-placeholder"></div>
          <div className="servico-detalhes">
            <p>Corte de cabelo masculino premium</p>
            <p className="preco">R$ 25,00</p>
          </div>
        </div>
      </div>

      {/* Seção de datas */}
      <div className="datas">
        <h4>Pra quando você gostaria de agendar?</h4>
        <div className="dias-semana-scroll">
          <div className="dias-semana">
            <button className="btn-dia ativo">Dom <br /> 20 Abr</button>
            <button className="btn-dia">Seg <br /> 21 Abr</button>
            <button className="btn-dia">Ter <br /> 22 Abr</button>
            <button className="btn-dia">Qua <br /> 23 Abr</button>
            <button className="btn-dia">Qui <br /> 24 Abr</button>
            <button className="btn-dia">Sex <br /> 25 Abr</button>
            <button className="btn-dia">Sáb <br /> 26 Abr</button>
            {/* Continue adicionando mais dias aqui */}
          </div>
        </div>
      </div>

      {/* Seção de horas */}
      <div className="horarios">
        <h4>Que horas?</h4>
        <div className="horas-disponiveis-scroll">
          <div className="horas-disponiveis">
            <button className="btn-hora">10:00</button>
            <button className="btn-hora">11:00</button>
            <button className="btn-hora ativo">11:30</button>
            <button className="btn-hora">12:00</button>
            <button className="btn-hora">12:30</button>
            <button className="btn-hora">13:00</button>
            {/* Continue adicionando mais horários aqui */}
          </div>
        </div>
      </div>

      {/* Escolher especialista */}
      <div className="especialista-selecao">
        <h4>Gostaria de escolher um especialista específico?</h4>
        <div className="especialista-opcoes-scroll">
          <div className="especialista-opcoes">
            <div className="especialista-card">
              <div className="especialista-img-placeholder"></div>
              <p>Silvio Sampaio</p>
              <button className="btn-especialista">Escolher </button>
            </div>
            <div className="especialista-card">
              <div className="especialista-img-placeholder"></div>
              <p>Maria Oliveira</p>
              <button className="btn-especialista">Escolher </button>
            </div>
            <div className="especialista-card">
              <div className="especialista-img-placeholder"></div>
              <p>João Silva</p>
              <button className="btn-especialista">Escolher </button>
            </div>
            {/* Continue adicionando mais especialistas aqui */}
          </div>
        </div>
      </div>

      {/* Botão de confirmação */}
      <button className="btn-confirmar">Confirmar meu agendamento</button>
    </div>
  );
};

export default AgendamentoPage;
