import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      aoEnviar({ cep, endereco, numero, estado, cidade });
    }

    } >
      <TextField value={cep}
        onChange={
          (e) => {
            setCep(e.target.value);
          }
        } id="cep" label="CEP" type="number" margin="normal" required />
      <TextField value={endereco}
        onChange={
          (e) => {
            setEndereco(e.target.value);
          }
        } id="endereco" label="Endereço" type="text" margin="normal" fullWidth required />
      <TextField value={numero}
        onChange={
          (e) => {
            setNumero(e.target.value);
          }
        } id="numero" label="Numero" type="number" margin="normal" required />
      <TextField value={estado}
        onChange={
          (e) => {
            setEstado(e.target.value);
          }
        } id="estado" label="Estado" type="text" margin="normal" required />
      <TextField value={cidade}
        onChange={
          (e) => {
            setCidade(e.target.value);
          }
        } id="cidade" label="Cidade" type="text" margin="normal" required />

      <Box mt={2}>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Finalizar cadastro
        </Button>
      </Box>
    </form >
  )
}

export default DadosEntrega
