import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de Produto`);
        let nomeServico = this.entrada.receberTexto('Por favor, informe o nome do Serviço: ')
        let descricao = this.entrada.receberTexto('Por favor, faça uma breve descrição do Serviço: ')
        let valorServico = this.entrada.receberNumero('Por favor, Informe o Novo Valor do serviço: ')

        let idProduto = this.servicos.length > 0 ? this.servicos[this.servicos.length - 1].getIdServico + 1 : 1;

        let servico = new Servico(nomeServico, descricao, valorServico,idProduto)
        this.servicos.push(servico)
    }  
}