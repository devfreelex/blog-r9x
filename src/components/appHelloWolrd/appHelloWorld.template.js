import { html } from 'r9x_js'

export default (state, props) => {
    return () => html `
        <h1>${state.title}</h1>
    `
}