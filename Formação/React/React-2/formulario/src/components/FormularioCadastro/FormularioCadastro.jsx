import React, {useState} from "react";
// import Button from '@mui/material/Button'
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <form
     onSubmit={(event) => {
        event.preventDefault();   
        console.log(nome, sobrenome);
    }}>
      <TextField
        value={nome}
        onChange={(event) => {
            let tempNome = event.target.value;
            if (tempNome.length >= 5){
                tempNome = tempNome.substring(0,5);   
            }
            setNome(tempNome);

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
        id="cpf"
        label="Cpf"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
