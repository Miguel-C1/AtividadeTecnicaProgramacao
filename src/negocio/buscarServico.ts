
import Servico from "../modelo/servico";


export default class BuscarServico {
    private servicos: Array<Servico>
    private idServico: number

    constructor(servicos: Array<Servico>, idServico: number) {
        this.servicos = servicos
        this.idServico = idServico
    }

    public obterServicoPorId(): Servico | null {
        const servicoEncontrado = this.servicos.find(s => s.getIdServico == this.idServico);
      
        if (!servicoEncontrado) {
          return null; // Servico não encontrado
        }
      
        const nomeServico = servicoEncontrado.getDescricao;
        const descricao = servicoEncontrado.getDescricao;
        const servico = new Servico(nomeServico, descricao, this.idServico);
    
        return servico;
      }
    

}