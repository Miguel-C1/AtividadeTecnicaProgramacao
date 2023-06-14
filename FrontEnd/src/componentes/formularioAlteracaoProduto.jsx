

export default function FormularioAlteracaoProduto(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Descrição Produto" aria-label="Descrição Produto" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Alterar</button>
                    </div>
                </form>
            </div>
    )
}