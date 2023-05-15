/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaClienteMaisConsumiramQuantidade(props) {
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Cliente 1</td>
                            <td>063.442.980-90</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Cliente 2</td>
                            <td>168.204.420-33</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Cliente 3</td>
                            <td>079.062.520-20</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}