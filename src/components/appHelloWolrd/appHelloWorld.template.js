import { html } from 'r9x_js'

export default (state, props) => {
    return () => html `
        <h1 class="title">${state.title}</h1>
    `
}