import { css } from 'r9x_js'

export default (ctx) => {
    return css `
    .header-wrapper { 
        display:block;
        float:left;
        width:100%;
        height:75px;
        position:relative;
        background: url("//www.devmedia.com.br/view/img/grid.png"), linear-gradient(to right, rgba(0, 126, 174, .85), rgba(26, 193, 187, .85));
    }

    .container {
        width:100%;
        max-width:1180px;
        margin:0 auto;
    }

    .logo {
        display:block;
        float:left;
        width:150px;
        height:75px;
        font-size:2em;
        line-height:75px;
        color:#fff;
    }
    `
}