import React, {useState} from "react";
// import Button from '@mui/material/Button'
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

function FormularioCadastro({aoEnviar}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form
     onSubmit={(event) => {
        event.preventDefault();   
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
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
      />

      <TextField
         onChange={(event) => {
          setCpf(event.target.value);
      }}
        id="cpf"
        label="Cpf"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch
          checked={promocoes}
          onChange={(event)=>{
          setPromocoes(event.target.checked);
        }} name="promocoes" defaultChecked={promocoes}  color="primary" />}
      /> 

      <FormControlLabel
        label="Novidades"
        control={<Switch
          checked={novidades}
          onChange={(event)=>{
          setNovidades(event.target.checked);
        }} name="Novidades" defaultChecked={novidades}  color="primary" />}
      />

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
