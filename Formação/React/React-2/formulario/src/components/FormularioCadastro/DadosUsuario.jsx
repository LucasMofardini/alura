import React, { useState, useContext } from 'react'
// import Button from '@mui/material/Button'
import { TextField, Button, Switch, FormControlLabel, Box } from '@mui/material'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState(
    { senha: { valido: true, texto: "" } }
  );
  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);

  }
  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

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
