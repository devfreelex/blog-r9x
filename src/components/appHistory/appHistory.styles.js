import { css } from 'r9x_js'

export default (ctx) => {
    return css `

    .section-wrapper {
        display:block;
        float:left;
        width:100%;
    }

    .content {
        display:block;
        clear:both;
        width:100%;
        padding:250px 15px 15px 15px;
        max-width:1180px;
        margin:0 auto;
    }

    .section-title {
        display:block;
        float:left;
        width:100%;
        font-size:2em;
        text-align:left;
        padding-left:15px;
    }

    .post-wrapper {
        display:block;
        float:left;
        width:100%;
        text-align:left;  
    }
    .post-header{
        display:block;
        float:left;
        width:100%;        
    }
    .post-image{
        display:block;
        float:left;
        width:100%;
    }
    .post-title{
        display:block;
        float:left;
        width:100%;      
        padding:15px 0;
        font-weight:500
    }
    .post-description{
        display:block;
        float:left;
        width:100%;     
        padding:0 0 15px 0;   
    }
    .post-link {
        display:block;
        float:left;
        width:100%;
        text-decoration:none;
        color:#666
    }

    `
}