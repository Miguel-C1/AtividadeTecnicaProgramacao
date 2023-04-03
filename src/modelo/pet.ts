export default class Pet {
    public nome: string
    public tipo: string
    public raca: string
    public genero: string
    private idPet : number

    constructor(nome: string, raca: string, genero: string, tipo: string, idPet: number) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.idPet = idPet
    }

    public get getNome() {
        return this.nome
    }
    public get getRaca() {
        return this.raca
    }
    public get getGenero() {
        return this.genero
    }
    public get getTipo() {
        return this.tipo
    }
    public get getIdPet() {
        return this.idPet
    }
}