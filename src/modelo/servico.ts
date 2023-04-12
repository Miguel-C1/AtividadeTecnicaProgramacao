export default class Servico {
    private idServico : number
    public nomeServico: string
    public descricao: string
    public valor: number

    constructor(nomeServico: string, descricao: string, valor:number , idServico: number) {
        this.nomeServico = nomeServico
        this.descricao = descricao
        this.valor = valor
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
    public get getValor(): number {
        return this.valor
    }
}