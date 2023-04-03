import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";
import Alteracao from "./alteracao";
import CadastroPet from "./cadastroPet";
import CadastroTelefone from "./cadastroTelefone";



export default class AlteracaoCliente extends Alteracao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public alterar(): void {
        console.log(`\nInício da Alteração do cliente`);
        let idCliente = this.entrada.receberNumero(`Por favor informe o id do cliente: `)
        this.clientes.forEach(cliente => {
            if (cliente.getId == idCliente) {

                let execucao = true

                console.log(`Opções:`);
                console.log(`0 - Alterar Cliente`);
                console.log(`1 - Não alterar Cliente `);

                while (execucao) {
                    let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
                    switch (opcao) {
                        case 1:
                            let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
                            let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
                            cliente.nome = nome
                            cliente.nomeSocial = nomeSocial
                        case 0:
                            execucao = false
                            console.log(`Você escolheu não alterar os dados do cliente`)
                            break;
                        default:
                            console.log(`Operação não entendida :(`)
                    }
                }


                console.log(cliente.getPets)

                execucao = true

                console.log(`Opções:`);
                console.log(`0 - Alterar Pets do Cliente`);
                console.log(`1 - Não alterar Pets do Cliente `);

                while (execucao) {
                    let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
                    switch (opcao) {
                        case 1:
                            
                            let cadastrarPet = new CadastroPet
                            let idPet = this.entrada.receberNumero("Digite o Id do Pet que você deseja alterar, ou -1 para criar um novo: ")
                            
                            if (idPet == -1) {
                                let pet = cadastrarPet.cadastrar(cliente.pets)
                                cliente.pets.push(pet)
                            } else {
                                cliente.pets.forEach(pet => {
                                    if (pet.getIdPet == idPet) {
                                        pet.nome = this.entrada.receberTexto('Por favor, digite o novo nome do Pet: ')
                                        pet.raca = this.entrada.receberTexto('Por favor, digite a nova raça do Pet: ')
                                        pet.tipo = this.entrada.receberTexto('Por favor, digite o novo Tipo do Pet:')
                                    }
                                });
                            }
                            break;
                        case 0:
                            execucao = false
                            console.log(`Você escolheu não alterar os dados de TELEFON do cliente`)
                            break;
                        default:
                            console.log(`Operação não entendida :(`)
                    }
                }

            
            }
        });
    }
}