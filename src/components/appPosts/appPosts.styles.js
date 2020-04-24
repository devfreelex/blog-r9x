import { css } from 'r9x_js'

export default (ctx) => {
    return css `

    .posts-wrapper {
        display:block;
        clear:both;
        width:100%;
        max-width:1180px;
        padding:250px 15px 15px 15px;
        margin:0 auto;
        text-align:left;
    }

    .section-title {
        display:block;
        float:left;
        width:100%;
        padding:15px;
    }

    .post-item {
        display:block;
        float:left;
        width:100%;
        margin-bottom:15px;
        border-radius:10px;
        border:1px #ebebeb solid;
        background:#fff;
        overflow:hidden;
        box-shadow: 3px 3px 15px #ebebeb
    }

    .post-image {
        display:block;
        float:left;
        width:100%;
        height:250px;
        background:#ebebeb;
        background:#f9f9f9;
        position:relative;
        overflow:hidden
    }

    .post-image img {
        position:absolute;
        top:0;
        left:0;
        opacity: .5
    }

    .post-header {
        display:block;
        float:left;
        width:100%;
        padding:0;
        position:absolute;
        bottom:0;
    }

    .post-title {
        display:block;
        float:left;
        width:100%;      
        padding:15px;
        font-weight:400;
        line-height:1.2em;
        color:#fff;
        background:#34255ead;
    }

    .post-tagline {
        display:block;
        float:left;
        width:100%;  
        padding:15px;
        line-height:1.2em;
        font-size:.875em;
        color:#666 
    }


    `
}