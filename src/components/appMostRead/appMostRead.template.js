import { html } from 'r9x_js'
import postSkin from '../../assets/img/cover.jpg'


const postTemplate = (post) => {
    return html `

        <article class="post">
            <header class="post-header">
                <div class="post-skin">
                    <img src="${postSkin}">
                </div>
                <a href="#/post/${post._id}"><h1 class="post-title">${post.title}</h1></a>
            </header>
            <div class="post-text">
                <a href="#/post/${post._id}">${post.description.paragraphs[0]}</a>
                <span class="post-views"> <b class="post-label-views">Views:</b> ${post.views || '0'}</span>
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