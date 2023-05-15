/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaCliente(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
                <div className="list-group">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">CPF</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><button type="button" className="btn btn-outline-dark" onClick={(e) => props.seletorView('AlterarCliente', e)}>Alterar</button></th>
                                <td>Cliente 1</td>
                                <td>063.442.980-90</td>
                                <td><input type="checkbox" name="" id="" /></td>
                            </tr>
                            <tr>
                            <th scope="row"><button type="button" className="btn btn-outline-dark" onClick={(e) => props.seletorView('AlterarCliente', e)}>Alterar</button></th>
                                <td>Cliente 2</td>
                                <td>168.204.420-33</td>
                                <td><input type="checkbox" name="" id="" /></td>
                            </tr>
                            <tr>
                            <th scope="row"><button type="button" className="btn btn-outline-dark" onClick={(e) => props.seletorView('AlterarCliente', e)}>Alterar</button></th>
                                <td>Cliente 3</td>
                                <td>079.062.520-20</td>
                                <td><input type="checkbox" name="" id="" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-outline-primary">{'Deletar'}</button>
                </div>
            </div>
    )
}