import { html } from 'r9x_js'
import postSkin from '../../assets/img/cover.jpg'


const postTemplate = (post) => {
    return html `
        <article class="post">
            <header class="post-header">
                <div class="post-skin">
                    <img src="${postSkin}">
                </div>
                <h1 class="post-title">${post.title}</h1>
            </header>
            <div class="post-text">
                <p class="content">${post.description.paragraphs[0]}</p>
            </div>
        </article>
    `
}

const repeatPostTemplate = (posts) => {
    return posts.map(post => postTemplate(post)).join('')
}

export default (state, props) => {
    return () => html `
        <section class="most-view-wrapper">
            <div class="content">
                <h1 class="title">Posts em alta</h1>
                ${repeatPostTemplate(state.mostRead)}
            </div>
        </section>
    `
}