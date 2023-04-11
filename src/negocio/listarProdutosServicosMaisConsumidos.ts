import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";


export default class ListagemProdustosServicosConsumidos {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada 
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada
    }
 
    public listarServisoMaisConsumidos(): void{
        const servicosMaisConsumidos = new Map<number, number>();
        
        // Percorra cada cliente
        this.clientes.forEach(cliente => {
          // Percorra cada produto consumido pelo cliente
          cliente.getServicosConsumidos.forEach(servico => {
            // Se o produto já foi adicionado ao mapa, incremente o contador
            if (servicosMaisConsumidos.has(servico.getIdServico)) {
                const count = servicosMaisConsumidos.get(servico.getIdServico);
                if (count !== undefined) {
                    servicosMaisConsumidos.set(servico.getIdServico, count + 1);
                }
              } else {
                // Caso contrário, adicione o produto ao mapa com contador 1
                servicosMaisConsumidos.set(servico.getIdServico, 1);
              }
          });
        });
      
        // Classifique os produtos por ordem decrescente de consumo
        const servicosOrdenados = [...servicosMaisConsumidos.entries()].sort((a, b) => b[1] - a[1]);
      
        // Imprima os 10 produtos mais consumidos
        console.log("Produtos mais consumidos:");
        for (let i = 0; i < 10 && i < servicosOrdenados.length; i++) {
          const servicoId = servicosOrdenados[i][0];
          const quantidadeConsumida = servicosOrdenados[i][1];
          const servico = this.servicos.find(p => p.getIdServico === servicoId);
          if (servico) {
            console.log(`${i + 1}. ${servico.getNomeServico} (${quantidadeConsumida} vezes)`);
          }
        }
    }
 
    public listarProdutosMaisConsumidos(): void {
        const produtosMaisConsumidos = new Map<number, number>();
        
        // Percorra cada cliente
        this.clientes.forEach(cliente => {
          // Percorra cada produto consumido pelo cliente
          cliente.getProdutosConsumidos.forEach(produto => {
            // Se o produto já foi adicionado ao mapa, incremente o contador
            if (produtosMaisConsumidos.has(produto.getIdProduto)) {
                const count = produtosMaisConsumidos.get(produto.getIdProduto);
                if (count !== undefined) {
                  produtosMaisConsumidos.set(produto.getIdProduto, count + 1);
                }
              } else {
                // Caso contrário, adicione o produto ao mapa com contador 1
                produtosMaisConsumidos.set(produto.getIdProduto, 1);
              }
          });
        });
      
        // Classifique os produtos por ordem decrescente de consumo
        const produtosOrdenados = [...produtosMaisConsumidos.entries()].sort((a, b) => b[1] - a[1]);
      
        // Imprima os 10 produtos mais consumidos
        console.log("Produtos mais consumidos:");
        for (let i = 0; i < 10 && i < produtosOrdenados.length; i++) {
          const produtoId = produtosOrdenados[i][0];
          const quantidadeConsumida = produtosOrdenados[i][1];
          const produto = this.produtos.find(p => p.getIdProduto === produtoId);
          if (produto) {
            console.log(`${i + 1}. ${produto.getNomeProduto} (${quantidadeConsumida} vezes)`);
          }
        }
      }
}