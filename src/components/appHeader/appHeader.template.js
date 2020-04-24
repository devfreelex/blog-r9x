import { html } from 'r9x_js'

export default (state, props) => {
    return () => html `
        <div class="header-wrapper">
            <div class="container">
                <div class="logo">beeLearn</div>
                    <app-menu></app-menu>
                </div>
            </div>
        </div>
    `
}