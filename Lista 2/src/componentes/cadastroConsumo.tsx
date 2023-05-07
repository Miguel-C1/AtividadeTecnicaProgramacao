import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroConsumo extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <select name="Cliente" id="cliente" className="form-control" placeholder="Clientes" aria-label="Clientes" aria-describedby="basic-addon1">
                            <option value="Cliente 1">Cliente 1</option>
                            <option value="Cliente 2">Cliente 2</option>
                            <option value="Cliente 3">Cliente 3</option>
                            <option value="Cliente 4">Cliente 4</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                    <select name="Produto" id="produto"   className="form-control" placeholder="Produtos" aria-label="Produto" aria-describedby="basic-addon1">
                            <option value="Produto 1">Produto 1</option>
                            <option value="Produto 2">Produto 2</option>
                            <option value="Produto 3">Produto 3</option>
                            <option value="Produto 4">Produto 4</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Registrar Consumo</button>
                    </div>
                </form>
            </div>
        )
    }
}