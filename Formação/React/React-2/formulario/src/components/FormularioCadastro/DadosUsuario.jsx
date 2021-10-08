import React, { useState } from 'react'
// import Button from '@mui/material/Button'
import { TextField, Button, Switch, FormControlLabel, Box } from '@mui/material'

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({ email, senha });
    }}>
      <TextField
        value={email}
        onChange={
          (e) => {
            setEmail(e.target.value);
            console.log(email);
          }
        }
        required id="email" label="email" type="email" margin="normal" fullWidth
      />
      <TextField value={senha}
        onChange={
          (e) => {
            setSenha(e.target.value);
            console.log(senha);
          }
        }
        required id="senha" label="senha" type="password" margin="normal" fullWidth />
      <Box mt={2}>
        <Button variant="contained" color="primary" type="submit" margin="normal">
          Cadastrar
        </Button>
      </Box>
    </form>
  )
}

export default DadosUsuario
