import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroServico from "../negocio/cadastroServico"
import AlteracaoServico from "../negocio/alteracaoServico";
import DeletarServico from "../negocio/deletarServico";
import AlteracaoCliente from "../negocio/alteracaoCliente";
import AlteracaoProduto from "../negocio/alteracaoProduto";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import DeletarCliente from "../negocio/deletarCliente";
import DeletarProduto from "../negocio/deletarProduto";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import Listagem from "../negocio/listagem";
import RegistrarConsumo from "../negocio/registrarConsumo";
import ListagemProdustosServicosConsumidos from "../negocio/listarProdutosServicosMaisConsumidos";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log('3 - Alterar Clientes');
    console.log('4 - Deletar Clientes');
    console.log('--- PRODUTOS ---')
    console.log('5 - Cadastrar Produto');
    console.log(`6 - Listar todos os clientes`);
    console.log('7 - Alterar Produto');
    console.log('8 - Deletar Produto');
    console.log('--- SERVIÇOS ---')
    console.log('9 - Cadastrar Serviço');
    console.log(`10 - Listar todos os clientes`);
    console.log('11 - Alterar Serviço');
    console.log('12 - Deletar Serviço');
    console.log('--- ---')
    console.log('13 - Registrar de Consumo')
    console.log('--- LISTAGEM ESPECIAIS ---')
    console.log('14 - Listar Serviços mais consumidos');
    console.log('15 - Listar Produtos mais consumidos');

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let alterarUsuario = new AlteracaoCliente(empresa.getClientes)
            alterarUsuario.alterar()
            break;
        case 4:
            let deletarUsuario = new DeletarCliente(empresa.getClientes)
            deletarUsuario.deletar()
            break;
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let listagemProduto = new ListagemProdutos(empresa.getProdutos)
            listagemProduto.listar()
            break;
        case 7:
            let alterarProduto = new AlteracaoProduto(empresa.getProdutos)
            alterarProduto.alterar()
            break;
        case 8:
            let deletarProduto = new DeletarProduto(empresa.getProdutos)
            deletarProduto.deletar()
            break;
        case 9:
            let cadastrarServico = new CadastroServico(empresa.getServicos)
            cadastrarServico.cadastrar()
            break;
        case 10:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 11:
            let alterarServico = new AlteracaoServico(empresa.getServicos)
            alterarServico.alterar()
            break;
        case 12:
            let deletarServico = new DeletarServico(empresa.getServicos)
            deletarServico.deletar()
            break;
        case 13:
            let registrarConsumo = new RegistrarConsumo(empresa.getClientes, empresa.getServicos, empresa.getProdutos)
            registrarConsumo.registrarConsumo()
            break;
        case 14:
            let listagemServicosConsumidos = new ListagemProdustosServicosConsumidos(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listagemServicosConsumidos.listarServisoMaisConsumidos()
            break;
        case 15:
            let listagemProdutosConsumidos = new ListagemProdustosServicosConsumidos(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listagemProdutosConsumidos.listarProdutosMaisConsumidos()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}