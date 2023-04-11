import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Alteracao from "./alteracao"

export default class AlteracaoProduto extends Alteracao {

    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }

    public alterar(): void {
        console.log(`\nInício da Alteração do cliente`);
        let idServico = this.entrada.receberNumero(`Por favor informe o id do Serviço: `)
        this.servicos.forEach(servico => {
            if (servico.getIdServico == idServico) {
                let nomeServico = this.entrada.receberTexto('Por favor Informe o novo Nome do Serviço: ')
                let descricaoServico = this.entrada.receberTexto('Por favor Informe a nova Descrição do Serviço: ')
                servico.nomeServico = nomeServico
                servico.descricao = descricaoServico
            }
        });
    }
}