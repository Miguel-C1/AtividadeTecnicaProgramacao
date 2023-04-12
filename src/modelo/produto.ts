export default class Produto {
    private idProduto : number
    public nomeProduto: string
    public valor: number
    public descricao: string

    constructor(nomeProduto: string, descricao: string, valor: number,idProduto: number) {
        this.nomeProduto = nomeProduto
        this.descricao = descricao
        this.valor = valor
        this.idProduto = idProduto
    }

    public get getNomeProduto(): string {
        return this.nomeProduto
    }
    public get getDescricao(): string {
        return this.descricao
    }
    public get getValor(): number{
        return this.valor
    }
    public get getIdProduto(): number {
        return this.idProduto
    }
}