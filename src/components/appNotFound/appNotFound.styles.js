import { css } from 'r9x_js'

export default (ctx) => {
    console.log('---->', ctx)
    return css `
    , app-not-found { 
        display:block;
        float:left;
        width:100%;
    }
    
    * { box-sizing: border-box }

    .wrapper-not-found {
        display:block;
        float:left;
        width:100%;
        color:red
    }

    h1, p { color: red }
    `
}