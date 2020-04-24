import { css } from 'r9x_js'

export default (ctx) => {
    return css `

    .most-view-wrapper {
        display:block;
        float:left;
        width:100%;
        padding:250px 15px 15px 15px;
    }

    .content {
        display:block;
        width:100%;
        max-width:1180px;
        margin:0 auto;
    }

    .title {
        display:block;
        float:left;
        width:100%;
        margin-bottom:15px;
        font-size:2em;
        text-align:left;
    }

    .post {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        margin-bottom:15px;
        border-radius:4px;
        border:1px #ebebeb solid;
        box-shadow:3px 3px  15px #ebebeb;
        background:#fff;
    }

    .post-header {
        display:block;
        float:left;
        width:100%;
        padding-left:90px;
        position:relative;
    }

    .post-skin {
        display: block;
        float:left;
        width:75px;
        height:75px;
        border-radius:3px;
        background:#ebebeb;
        position:absolute;
        top:0;
        left:0;
        overflow:hidden;
    }

    .post-skin img {
        display:block;
        float:left;
        height:120%;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%)
    }

    .post-title,
    .post-text {
        display:block;
        float:left;
        width:calc(100% - 90px);
        padding:0 0 15px 0;
        text-align:left;
        color:#666
    }

    .post-title {
        font-size: 1.2em
    }

    .post-text {
        position:relative;
        left:90px;
        font-size: .875em;
        line-height:1.2em
    }
    
    .post-text p {
        color:#666
    }

    `
}