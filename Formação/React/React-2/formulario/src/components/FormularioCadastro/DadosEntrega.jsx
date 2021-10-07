import React from 'react'
import { TextField, Button } from '@mui/material'

function DadosEntrega() {
  return (
    <form>
      <TextField id="cep" label="CEP" type="number" margin="normal" required />
      <TextField id="endereco" label="Endereço" type="text" margin="normal" fullWidth required />
      <TextField id="numero" label="Numero" type="number" margin="normal" required />
      <TextField id="estado" label="Estado" type="text" margin="normal"  required />
      <TextField id="cidade" label="Cidade" type="text" margin="normal" required />
      <Button variant="contained" type="submit" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  )
}

export default DadosEntrega
