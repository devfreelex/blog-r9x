import { css } from 'r9x_js'

export default (ctx) => {
    return css `
    ${ctx} { 
        display:block;
        float:left;
        width:100%;
        padding:15px;
        margin:15px;
        border:1px #ebebeb solid;
        text-align:center;
    }
    `
}