export default class Servico {
    private idServico : number
    public nomeServico: string
    public descricao: string
    constructor(nomeServico: string, descricao: string, idServico: number) {
        this.nomeServico = nomeServico
        this.descricao = descricao
        this.idServico = idServico
    }

    public get getNomeServico(): string {
        return this.nomeServico
    }
    public get getDescricao(): string {
        return this.descricao
    }
    public get getIdServico(): number {
        return this.idServico
    }
}