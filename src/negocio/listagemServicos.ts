import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.servicos.forEach(servico => {
            console.log('Id: ' + servico.getIdServico)
            console.log(`Nome do Produto: ` + servico.getNomeServico);
            console.log(`Descrição: ` + servico.getDescricao);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}