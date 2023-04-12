import Produto from "../modelo/produto";


export default class BuscarProduto {
  private produtos: Array<Produto>
  private idProduto: number

  constructor(produtos: Array<Produto>, idProduto: number) {
    this.produtos = produtos
    this.idProduto = idProduto
  }

  public obterProdutoPorId(): Produto | null {
    const produtoEncontrado = this.produtos.find(p => p.getIdProduto === this.idProduto);

    if (!produtoEncontrado) {
      return null; // Produto não encontrado
    }

    const nomeProduto = produtoEncontrado.getDescricao;
    const descricao = produtoEncontrado.getDescricao;
    const valor = produtoEncontrado.getValor;
    const produto = new Produto(nomeProduto, descricao, valor, this.idProduto);

    return produto;
  }


}