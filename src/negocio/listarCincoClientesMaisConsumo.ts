import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";


export default class ListarCincoClientesMaisConsumos {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }

    public listarClientesPorConsumoDeProdutos(): Array<{cliente: Cliente, valorTotalGasto: number}> {
        return this.clientes.map(cliente => {
          const valorTotalGasto = cliente.getProdutosConsumidos.reduce((acc, produto) => acc + produto.valor, 0)
          return { cliente, valorTotalGasto }
        }).sort((a, b) => b.valorTotalGasto - a.valorTotalGasto)
        .slice(0, 5)
    }
    
    public listarClientesPorConsumoDeServico(): Array<{cliente: Cliente, valorTotalGasto: number}> {
        return this.clientes.map(cliente => {
          const valorTotalGasto = cliente.getServicosConsumidos.reduce((acc, servico) => acc + servico.valor, 0)
          return { cliente, valorTotalGasto }
        }).sort((a, b) => b.valorTotalGasto - a.valorTotalGasto)
        .slice(0, 5)
      }
      

}