import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import InterfaceCliente from "./interfaceClientes";
import FormularioAlterarCliente from "./alterarCliente";
import InterfaceProduto from "./interfaceProdutos";
import InterfaceServicos from "./interfaceServicos";
import ListaProduto from "./listaProdutos";
import ListaServicos from "./listaServicos";
import FormularioAlterarProduto from "./alterarProduto";
import FormularioAlterarServico from "./alterarServico";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioCadastroConsumo from "./cadastroConsumo";
import ListaProdutosServicosConsumidos from "./listaProdutosServicosConsumidos";
import ListaClienteMaisConsumiramQuantidade from "./listaListagemClientesConsumiram";
import ListaClienteMaisConsumiramValor from "./listaClientesMaisConsumiram";
import InterfaceListagem from "./interfaceListagem";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'Listagens Especiais']} />
        
        switch (this.state.tela) {
            case 'Listagens Especiais':
                return (
                    <>
                        {barraNavegacao}
                        <InterfaceListagem tema="#e3f2fd" seletorView={this.selecionarView} />
                    </>
                )
                break;
            case 'Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <InterfaceCliente tema="#e3f2fd" seletorView={this.selecionarView} />
                    </>
                )
                break;
            case 'Produtos':
                return (
                    <>
                    {barraNavegacao}
                    <InterfaceProduto tema="#e3f2fd" seletorView={this.selecionarView}/>
                </>
                )
            case 'Servicos': 
            return (
                <>
                {barraNavegacao}
                <InterfaceServicos tema="#e3f2fd" seletorView={this.selecionarView}/>
            </>
            )
            case 'AlterarCliente':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioAlterarCliente tema="#e3f2fd"/>
                    </>
                )
            case 'AlterarProduto':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioAlterarProduto tema="#e3f2fd"/>
                    </>
                )
            case 'AlterarServico':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioAlterarServico tema="#e3f2fd"/>
                    </>
                )
            case 'Listar Clientes':
                return (<>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" seletorView={this.selecionarView}/>
                </>)
                break;
            case 'Listar Produtos':
                return (<>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" seletorView={this.selecionarView}/>
                </>)
            case 'Listar Servicos':
                return (<>
                    {barraNavegacao}
                    <ListaServicos tema="#e3f2fd" seletorView={this.selecionarView}/>
                </>)
            case 'Cadastrar Cliente':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroCliente tema="#e3f2fd" />
                    </>
                )
                break;
            case 'Cadastrar Produto':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroProduto tema="#e3f2fd" />
                    </>
                )
            case 'Cadastrar Servicos':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroServico tema="#e3f2fd" />
                    </>
                )
            case 'Registrar Consumo do Cliente':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroConsumo tema="#e3f2fd" />
                    </>
                )
            case 'Listagem dos 10 clientes que mais consumiram em quantidade':
                return (
                    <>
                        {barraNavegacao}
                        <ListaClienteMaisConsumiramQuantidade tema="#e3f2fd" />
                    </>
                )
                break;
            case 'Listagem geral dos serviços e produtos mais consumidos em quantidade':
                return (
                    <>
                        {barraNavegacao}
                        <ListaProdutosServicosConsumidos tema="#e3f2fd" />
                    </>
                )
                break;
            case 'Listagem dos 5 clientes que mais consumiram em valor':
                return (
                    <>
                        {barraNavegacao}
                        <ListaClienteMaisConsumiramValor tema="#e3f2fd" />
                    </>
                )
                break;

        }
    }
}