import { Step, StepLabel, Stepper, Typography, Box } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCPF }) {
  // Ele 'agenda' o setState, ele é assincrono 
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual == formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
    // O useEffect é chamado quando o componente é:
    // Criado, Atualizado e Destruido
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro</Typography>
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Box m={2} pt={2}>
        <Stepper activeStep={etapaAtual} >
          <Step><StepLabel>Login</StepLabel></Step>
          <Step><StepLabel>Pessoal</StepLabel></Step>
          <Step><StepLabel>Entrega</StepLabel></Step>
          <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
      </Box>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
