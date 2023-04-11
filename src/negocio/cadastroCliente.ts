import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Pet from "../modelo/pet"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"
import CadastroPet from "./cadastroPet"
import CadastroTelefone from "./cadastroTelefone"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let execucao = true
        let telefones: Array<Telefone> = []
        let cadastrarTelefone = new CadastroTelefone

        console.log(`Opções:`);
        console.log(`0 - Parar de Cadastrar Telefone`);
        console.log(`1 - Cadastrar Telfone`);

        while (execucao) {

            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
            console.log(opcao);
            switch (opcao) {
                case 1:
                    let telefone = cadastrarTelefone.cadastrar()
                    telefones.push(telefone);
                    break;
                case 0:
                    execucao = false
                    console.log(`Você parou de realizar os cadastros de telefones!`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }

        console.log(`-----`);
        console.log(`Cadastro de Pets`);
        console.log(`Opções:`);
        console.log(`0 - Parar de Cadastrar Pet`);
        console.log(`1 - Cadastrar Pet`);

        execucao = true
        let pets: Array<Pet> = []
        let cadastrarPet = new CadastroPet()
        while (execucao) {
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (opcao) {
                case 1:
                    let pet = cadastrarPet.cadastrar(pets)
                    pets.push(pet);
                    break;
                case 0:
                    execucao = false
                    console.log(`Você parou de realizar os cadastros de Pets!`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }
        let idCliente = Object.keys(this.clientes).length;
        let cliente = new Cliente(nome, nomeSocial, cpf, telefones, pets, idCliente);
        this.clientes.push(cliente)

        console.log(`\nCadastro concluído :)\n`);
    }
}