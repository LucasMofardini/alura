import * as React from 'react';
// import Button from '@mui/material/Button'
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

function FormularioCadastro() {
    return (  
        <form>
            <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />

            <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />
            
            <TextField id="cpf" label="Cpf" variant="outlined" margin="normal" fullWidth />
            
            <FormControlLabel label="Promoções" control={<Switch name="promocoes" defaultChecked color="primary"/> }/>

            <FormControlLabel label="Novidades" control={<Switch name="promocoes" defaultChecked color="primary"/>} />

            <Button variant="contained" type="submit">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;