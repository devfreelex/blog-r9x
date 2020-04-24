import { html } from 'r9x_js'

const categories = (state) => {
    return state.categories.map(category => html `
        <li class="category-item"><a href="${category.link}" class="category-link">${category.title}</a></li>
    `).join('')
}

export default (state, props) => {
    return () => html `
        <div class="category-wrapper">
            <ul class="category-list">
                ${categories(state)}
            </ul>
        </div>
    `
}