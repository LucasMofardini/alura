import React, { Fragment, useState } from 'react'
import DadosEntrega from './DadosEntrega'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'

function FormularioCadastro({ aoEnviar, validarCPF }) {
  return (
    <Fragment>
      <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
      <DadosUsuario />
      <DadosEntrega />
    </Fragment>
  )
}

export default FormularioCadastro
