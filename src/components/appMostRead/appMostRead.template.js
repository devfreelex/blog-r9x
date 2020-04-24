import { html } from 'r9x_js'
import postSkin from '../../assets/img/cover.jpg'



export default (state, props) => {
    return () => html `
        <section class="most-view-wrapper">
            <div class="content">
                <h1 class="title">Posts em alta</h1>

                <article class="post">
                    <header class="post-header">
                        <div class="post-skin">
                            <img src="${postSkin}">
                        </div>
                        <h1 class="post-title">Most view post title</h1>
                    </header>
                    <div class="post-text">
                        <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro omnis ipsam amet numquam dolores dignissimos velit explicabo hic aliquam, aut ex assumenda iure voluptates aliquid necessitatibus ducimus, rem sapiente?</p>
                    </div>
                </article>
                

                <article class="post">
                    <header class="post-header">
                        <div class="post-skin">
                            <img src="${postSkin}">
                        </div>
                        <h1 class="post-title">Most view post title</h1>
                    </header>
                    <div class="post-text">
                        <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro omnis ipsam amet numquam dolores dignissimos velit explicabo hic aliquam, aut ex assumenda iure voluptates aliquid necessitatibus ducimus, rem sapiente?</p>
                    </div>
                </article>
                

                <article class="post">
                    <header class="post-header">
                        <div class="post-skin">
                            <img src="${postSkin}">
                        </div>
                        <h1 class="post-title">Most view post title</h1>
                    </header>
                    <div class="post-text">
                        <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro omnis ipsam amet numquam dolores dignissimos velit explicabo hic aliquam, aut ex assumenda iure voluptates aliquid necessitatibus ducimus, rem sapiente?</p>
                    </div>
                </article>
                

                <article class="post">
                    <header class="post-header">
                        <div class="post-skin">
                            <img src="${postSkin}">
                        </div>
                        <h1 class="post-title">Most view post title</h1>
                    </header>
                    <div class="post-text">
                        <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro omnis ipsam amet numquam dolores dignissimos velit explicabo hic aliquam, aut ex assumenda iure voluptates aliquid necessitatibus ducimus, rem sapiente?</p>
                    </div>
                </article>
                

                <article class="post">
                    <header class="post-header">
                        <div class="post-skin">
                            <img src="${postSkin}">
                        </div>
                        <h1 class="post-title">Most view post title</h1>
                    </header>
                    <div class="post-text">
                        <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro omnis ipsam amet numquam dolores dignissimos velit explicabo hic aliquam, aut ex assumenda iure voluptates aliquid necessitatibus ducimus, rem sapiente?</p>
                    </div>
                </article>
                

                <article class="post">
                    <header class="post-header">
                        <div class="post-skin">
                            <img src="${postSkin}">
                        </div>
                        <h1 class="post-title">Most view post title</h1>
                    </header>
                    <div class="post-text">
                        <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro omnis ipsam amet numquam dolores dignissimos velit explicabo hic aliquam, aut ex assumenda iure voluptates aliquid necessitatibus ducimus, rem sapiente?</p>
                    </div>
                </article>
                

            </div>
        </section>
    `
}