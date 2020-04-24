import { html } from 'r9x_js'

const menuTemplate = (state) => html`
    <div class="menu-list-wrapper">
        <ul class="menu-list">
            ${state.menu.data.map(menuItem => html`
                <li class="menu-item"><a href="${menuItem.link}" class="menu-link">${menuItem.title} </a></li>
            `).join('')}
        </ul>
    </div>
`

const toggle = (state) => {
    if(state.menu.status) return menuTemplate(state)
    return ''
}

export default (state, props) => {
    return () => html `
        <div class="menu-wrapper">
            <div class="menu-button">&#9776</div>
            ${toggle(state)}
        </div>
    `
}