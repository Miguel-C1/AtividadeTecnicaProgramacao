import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de Produto`);
        let nomeProduto = this.entrada.receberTexto('Por favor, informe o nome do Produto: ')
        let descricao = this.entrada.receberTexto('Por favor, faça uma breve descrição do Produto: ')
      
        let idProduto =  this.produtos[this.produtos.length - 1].getIdProduto + 1;
        let valorProduto = this.entrada.receberNumero('Por favor, Informe o novo Valor do Produto: ')
        let produto = new Produto(nomeProduto, descricao, valorProduto,idProduto)
        this.produtos.push(produto)
    }  
}