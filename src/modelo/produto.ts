export default class Produto {
    private idProduto : number
    public nomeProduto: string
    public descricao: string
    constructor(nomeProduto: string, descricao: string, idProduto: number) {
        this.nomeProduto = nomeProduto
        this.descricao = descricao
        this.idProduto = idProduto
    }

    public get getNomeProduto(): string {
        return this.nomeProduto
    }
    public get getDescricao(): string {
        return this.descricao
    }
    public get getIdDescricao(): number {
        return this.idProduto
    }
}