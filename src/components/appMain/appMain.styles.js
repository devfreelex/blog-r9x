import { css } from 'r9x_js'

export default (ctx) => {

    return css `
    , app-main {
        box-sizing: border-box;
        display:block;
        float:left;
        width:100%  
    }

    * { box-sizing:border-box }

    .wrapper-main { 
        display:block;
        float:left;
        width:100%;
        text-align:center;
    }
    `
}