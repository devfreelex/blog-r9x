import { html } from 'r9x_js'

export default (state, props) => {
    return () => html `
    <div>
        <h1>#404#</h1>
        <p>Página não encontrada</p>
    </div>
    `
}