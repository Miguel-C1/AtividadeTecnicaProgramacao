/* eslint-disable jsx-a11y/anchor-is-valid */
export default function InterfaceServico(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li key={'Listar Servicos'}>
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => props.seletorView('Listar Servicos', e)}>{'Listar Serviços'}</button>
                </li>
                <br />
                <li key={'Cadastrar Servicos'} >
                    <button type="button" className="btn btn-outline-primary" onClick={(e) => props.seletorView('Cadastrar Servicos', e)}>{'Cadastrar Serviços'}</button>
                </li>
                <br />
            </ul>
        </div>
    )
}