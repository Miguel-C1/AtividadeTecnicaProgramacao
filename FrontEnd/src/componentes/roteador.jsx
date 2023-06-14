import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import InterfaceCliente from "./InterfaceCliente";
import InterfaceProduto from "./InterfaceProduto";
import InterfaceServico from "./InterfaceServiço";
import InterfaceListagem from "./InterfaceListagem";
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioAlteracaoCliente from "./formularioAlteracaoCliente";
import ListaProduto from "./listaProduto";
import FormularioAlteracaoProduto from "./formularioAlteracaoProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroConsumoCliente from "./formularioCadastroConsumoCliente";
import ListaServico from "./listaServico";
import FormularioAlterarServico from "./formularioAlteracaoServico";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaClientesMaisConsumiram from "./listaClientesMaisConsumiram";
import ListaProdutosServicosConsumidos from "./listaProdutosServicosConsumidos";
import ListaClienteMaisConsumiramQuantidade from "./listaListagemClientesConsumiram";

const telas = {
    Clientes: {
        componente: InterfaceCliente,
        props: {},
    },
    "Listar Clientes": {
        componente: ListaCliente,
        props: {},
    },
    AlterarCliente: {
        componente: FormularioAlteracaoCliente,
        props: {},
    },
    "Cadastrar Cliente": {
        componente: FormularioCadastroCliente,
        props: {},
    },
    "Registrar Consumo do Cliente": {
        componente: FormularioCadastroConsumoCliente,
        props: {},
    },
    Produtos: {
        componente: InterfaceProduto,
        props: {},
    },
    "Listar Produtos": {
        componente: ListaProduto,
        props: {},
    },
    AlterarProduto: {
        componente: FormularioAlteracaoProduto,
        props: {},
    },
    "Cadastrar Produto": {
        componente: FormularioCadastroProduto,
        props: {},
    },
    Serviços: {
        componente: InterfaceServico,
        props: {},
    },
    "Listar Servicos": {
        componente: ListaServico,
        props: {},
    },
    "Cadastrar Servicos": {
        componente: FormularioCadastroServico,
        props: {},
    },
    AlterarServico: {
        componente: FormularioAlterarServico,
        props: {},
    },
    "Listagens Especiais": {
        componente: InterfaceListagem,
        props: {},
    },
    "Listagem dos 10 clientes que mais consumiram em quantidade": {
        componente: ListaClienteMaisConsumiramQuantidade,
        props: {},
    },
    "Listagem geral dos serviços e produtos mais consumidos em quantidade": {
        componente: ListaProdutosServicosConsumidos,
        props: {},
    },
    "Listagem dos 5 clientes que mais consumiram em valor": {
        componente: ListaClientesMaisConsumiram,
        props: {},
    },
};

export default function Roteador() {
    const [tela, setTela] = useState("Clientes");
    const [clienteId, setClienteId] = useState(null);


    const selecionarView = (valor, e, clienteId) => {
        e.preventDefault();
        setTela(valor);
        setClienteId(clienteId); // Adicione essa linha para armazenar o ID do cliente
    };


    const ViewAtual = telas[tela].componente;

    return (
        <>
            <BarraNavegacao
                seletorView={selecionarView}
                tema="#e3f2fd"
                botoes={[
                    "Clientes",
                    "Produtos",
                    "Serviços",
                    "Listagens Especiais",
                ]}
            />
            <ViewAtual tema="#e3f2fd" id={clienteId} seletorView={selecionarView} {...telas[tela].props} />
        </>
    );
}
