import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Alteracao from "./alteracao"



export default class AlteracaoProduto extends Alteracao {

    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }

    public alterar(): void {
        console.log(`\nInício da Alteração do cliente`);
        let idProduto = this.entrada.receberNumero(`Por favor informe o id do Produto: `)
        this.produtos.forEach(produto => {
            if (produto.getIdProduto == idProduto) {

                let nomeProduto = this.entrada.receberTexto('Por favor, Informe o novo Nome do produto: ')
                let descricaoProduto = this.entrada.receberTexto('Por favor, Informe a nova Descrição do produto: ')
                let valorProduto = this.entrada.receberNumero('Por favor, Informe o novo Valor do Produto: ')
                produto.nomeProduto = nomeProduto
                produto.descricao = descricaoProduto
                produto.valor = valorProduto
            }
        });


    }

}