/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import InterfaceCliente from "./InterfaceCliente";
import FormularioAlteracaoCliente from "./formularioAlteracaoCliente";
import InterfaceProduto from "./InterfaceProduto";
import ListaProduto from "./listaProduto";
import FormularioAlteracaoProduto from "./formularioAlteracaoProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroConsumoCliente from "./formularioCadastroConsumoCliente";
import InterfaceServico from "./InterfaceServiço";
import ListaServico from "./listaServico";
import FormularioAlterarServico from "./formularioAlteracaoServico";
import FormularioCadastroServico from "./formularioCadastroServico";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <InterfaceCliente tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'Listar Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <ListaCliente tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )

        } else if (tela === 'AlterarCliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <FormularioAlteracaoCliente tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )

        } else if (tela === 'Cadastrar Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <FormularioCadastroCliente tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'Registrar Consumo do Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <FormularioCadastroConsumoCliente tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <InterfaceProduto tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'Listar Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <ListaProduto tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'AlterarProduto') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <FormularioAlteracaoProduto tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'Cadastrar Produto') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <FormularioCadastroProduto tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <InterfaceServico tema="#e3f2fd" seletorView={selecionarView}/>
                </>
            )
        } else if (tela === 'Listar Servicos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <ListaServico tema="#e3f2fd" seletorView={selecionarView}/>
                </>
            )
        } else if (tela === 'Cadastrar Servicos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <FormularioCadastroServico tema="#e3f2fd" seletorView={selecionarView}/>
                </>
            )
        } else if (tela === 'AlterarServico') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <FormularioAlterarServico tema="#e3f2fd" seletorView={selecionarView}/>
                </>
            )
        } else if (tela === 'Listagens Especiais') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Listagens Especiais']} />
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}