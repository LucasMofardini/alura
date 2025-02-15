import React, { useState, useContext } from "react";
// import Button from '@mui/material/Button'
import { TextField, Button, Switch, FormControlLabel, Box } from "@mui/material";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {

          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}>
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        label="Cpf"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch
          checked={promocoes}
          onChange={(event) => {
            setPromocoes(event.target.checked);
          }} name="promocoes" defaultChecked={promocoes} color="primary" />}

      />

      <FormControlLabel
        label="Novidades"
        control={<Switch
          checked={novidades}
          onChange={(event) => {
            setNovidades(event.target.checked);
          }} name="Novidades" defaultChecked={novidades} color="primary" />}
      />

      <Box mt={2}>
        <Button variant="contained" color="primary" type="submit" margin="normal">
          Proximo
        </Button>
      </Box>
    </form>
  );
}

export default DadosPessoais;
