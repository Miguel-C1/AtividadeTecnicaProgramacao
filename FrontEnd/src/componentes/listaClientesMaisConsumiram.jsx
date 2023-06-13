/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaClientesMaisConsumiram(props) {
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
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Cliente 1</td>
                            <td>063.442.980-90</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Cliente 2</td>
                            <td>168.204.420-33</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Cliente 3</td>
                            <td>079.062.520-20</td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}