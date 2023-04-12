import Entrada from "../io/entrada"
import RG from "../modelo/rg";

export default class CadastroPet {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public cadastrar() {
        let valor = this.entrada.receberTexto('Por favor, Digite o valor do RG: ');
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let rg = new RG(valor, dataEmissao)
        return rg
    }
}    

