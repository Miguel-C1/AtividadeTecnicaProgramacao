import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import BuscarProduto from "./buscarProduto";
import BuscarServico from "./buscarServico";


export default class RegistrarConsumo {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, servicos: Array<Servico>, produtos: Array<Produto>) {
        this.clientes = clientes
        this.servicos = servicos
        this.produtos = produtos
        this.entrada = new Entrada
    }

    public registrarConsumo(): void {

        console.log(`\nInício de Registro de Consumo`);
        let idCliente = this.entrada.receberNumero(`Por favor informe o id do cliente: `);

        console.log('---');
        console.log(`Cadastro de Pets`);
        console.log(`Opções:`);
        console.log(`0 - Registrar o Consumo de Produto`);
        console.log(`1 - Registrar o Consumo de Serviços`);

        let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `)

        switch (opcao) {
            case 0:
                let idProduto = this.entrada.receberNumero('Por favor, Informe o ID do Produto: ')
                const buscarProduto = new BuscarProduto(this.produtos, idProduto)
                const produto = buscarProduto.obterProdutoPorId()
                let clienteEncontradoProd = this.clientes.find(cliente => cliente.getId === idCliente)
                if (clienteEncontradoProd && produto) {
                    clienteEncontradoProd.produtosConsumidos.push(produto)
                }
                break;
            case 1:
                let idServico = this.entrada.receberNumero('Por favor, Informe o ID do Serviço: ')
                const buscarServico = new BuscarServico(this.servicos, idServico)
                const servico = buscarServico.obterServicoPorId()
                let clienteEncontrado = this.clientes.find(cliente => cliente.getId == idCliente)
                if (clienteEncontrado && servico) {
                    clienteEncontrado.servicosConsumidos.push(servico)
                }
                break;
        }
    }
}