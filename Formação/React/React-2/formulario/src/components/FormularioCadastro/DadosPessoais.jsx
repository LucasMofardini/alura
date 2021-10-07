import React, {useState} from "react";
// import Button from '@mui/material/Button'
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

function DadosPessoais({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState(
    {cpf:{valido:true, texto:""}}
    );

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
        onBlur={(event)=>{
          const ehValido = validarCPF(event.target.value);
          setErros({cpf:ehValido});
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
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
          onChange={(event)=>{
          setPromocoes(event.target.checked);
        }} name="promocoes" defaultChecked={promocoes}  color="primary" required />}
        
      /> 

      <FormControlLabel
        label="Novidades"
        control={<Switch
          checked={novidades}
          onChange={(event)=>{
          setNovidades(event.target.checked);
        }} name="Novidades" defaultChecked={novidades}  color="primary" required />}
      />

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
