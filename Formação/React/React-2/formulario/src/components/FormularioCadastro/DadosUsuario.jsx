import React, { useState, useContext } from 'react'
// import Button from '@mui/material/Button'
import { TextField, Button, Box } from '@mui/material'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);




  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (possoEnviar()) {
        aoEnviar({ email, senha });
      }
    }}>
      <TextField
        value={email}
        onChange={
          (e) => {
            setEmail(e.target.value);
            console.log(email);
          }
        }
        required id="email" name="email" label="email" type="email" margin="normal" fullWidth
      />
      <TextField value={senha}
        onChange={
          (e) => {
            setSenha(e.target.value);
            console.log(senha);
          }
        }
        onBlur={validarCampos}
        erro={!erros.senha.valido}
        helperText={erros.senha.texto}
        required id="senha" name="senha" label="senha" type="password" margin="normal" fullWidth />
      <Box mt={2}>
        <Button variant="contained" color="primary" type="submit" margin="normal">
          Cadastrar
        </Button>
      </Box>
    </form>
  )
}

export default DadosUsuario
