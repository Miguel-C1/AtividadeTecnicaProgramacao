import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.produtos.forEach(produto => {
            console.log('Id: ' + produto.getIdProduto)
            console.log(`Nome do Produto: ` + produto.getNomeProduto);
            console.log(`Descrição: ` + produto.getDescricao);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}