/* eslint-disable jsx-a11y/anchor-is-valid */
export default function InterfaceProduto(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
                <ul className="navbar-nav">
                    <li key={'Listar Produtos'}>
                        <button type="button" className="btn btn-outline-primary" onClick={(e) => props.seletorView('Listar Produtos', e)}>{'Listar Produtos'}</button>
                    </li>
                    <br />
                    <li key={'Cadastrar Produto'} >
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => props.seletorView('Cadastrar Produto', e)}>{'Cadastrar Produto'}</button>
                    </li>
                    <br />
                </ul>
            </div>
    )
}