import { html } from 'r9x_js'

export default (state, props) => {
    return () => html `
    <div class="wrapper-main">
        <h1>It's R9X</h1>
        <router-view></router-view>
        <p>Minimalistic library for reactive SPA'S creation.</p>
    </div>
    `
}