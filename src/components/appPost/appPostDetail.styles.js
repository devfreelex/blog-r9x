import { css } from 'r9x_js'

export default (ctx) => {
    return css `

    .section-wrapper {
        display:block;
        float:left;
        width:100%;
    }

    .post-wrapper {
        display:block;
        clear:both;
        width:100%;
        max-width:1180px;
        margin:0 auto;
        height:250px;
        padding:250px 15px 15px 15px
    }

    .post-title {
        font-size: 3em
    }    
    
    .post-description {
        display:block;
        float:left;
        width:100%;
        padding:15px;
    }

    .post-description p {
        display:block;
        float:left;
        width:100%;
        padding:0 0 15px 0;
        text-align:justify;
        font-size:1.2em;
        line-height:1.5em;
        color:#706b82
    }

    `
}