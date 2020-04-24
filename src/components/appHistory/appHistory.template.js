import { html } from 'r9x_js'
import postSkin from '../../assets/img/cover.jpg'

const postTemplate = (history) => html `
    <div class="grid-d grid-n grid-t grid-s">
        <a href="#/post/646454464646546" class="post-link">
            <article class="post-wrapper">
                <header class="post-header">
                    <img src="${postSkin}" class="post-image">
                    <h1 class="post-title">${history.title}</h1>
                </header>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error recusandae placeat sit, provident atque.</p>
                <span>${history.time}</span>                    
            </article>              
        </a>
    </div>                      
`

const repeatTemplate = (history) => {
    return history.map(historyItem => postTemplate(historyItem)).join('')
}


export default (state, props) => {
    return () => html `
        <section class="section-history">
            <div class="content grid">
                <h1 class="section-title">Histórico de leitura</h1>
                ${repeatTemplate(state.history)}
            </div>
        </section>
    `
}