import { html } from 'r9x_js'

export default (state, props) => {
    return () => html `
    <div class="wrapper-main">
        <app-header></app-header>
        <app-category></app-category>
        <router-view></router-view>
    </div>
    `
}