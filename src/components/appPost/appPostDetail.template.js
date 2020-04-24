import { html } from 'r9x_js'

export default (state, props) => {
    return () => html `
        <section class="section-wrapper">
            <h1 class="section-title absolute-centerfont-zero">Post</h1>
            <article class="post-wrapper">
                <header>
                    <h1 class="post-title">${state.post.title}</h1>
                </header>

                <div class="post-description">
                    ${state.post.description.paragraphs.map( paragraph => html`
                        <p class="paragraph">${paragraph}</p>
                    `).join('')}
                </div>
            </article>
        </section>
        `
}