import { html } from 'r9x_js'
import cover from '../../assets/img/cover.jpg'

const postTemplate = (post) => html `
    <div class="grid-d grid-n grid-t grid-s">
        <a href="#/post/${post._id}" class="post-link">
            <article class="post-item">
                <div class="post-image">
                    <img src="${cover}">
                    <header class="post-header">
                        <h1 class="post-title">${post.title}</h1>
                    </header>
                </div>
                <p class="post-tagline">${post.description.resume}</p>
            </article>
        </a>
    </div>
`

const postsRepeat = (state) => {
    return state.postsView.map(post => postTemplate(post)).join('')
}


export default (state, props) => {
    return () => html `
        <section class="posts-wrapper grid">
            <h1 class="section-title"> Postagens recentes </h1>
            ${postsRepeat(state)}
        </section>
        `
}