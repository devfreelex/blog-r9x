import { css } from 'r9x_js'

export default (ctx) => {
    return css `

    .category-wrapper { 
        display:block;
        float:left;        
        width: 100%;
        height:350px;
        background: url("//www.devmedia.com.br/view/img/grid.png"), linear-gradient(to right, rgba(0, 126, 174, .85), rgba(26, 193, 187, .85));        
        border-bottom-left-radius:100px;
        border-bottom-right-radius:100px;
        position:relative;
    }

    .category-list{
        display:block;
        float:left;
        width:350px;
        height:350px;
        margin:0 calc((100% - 350px) / 2);
        border-radius:50px;
        border:1px #fff solid;
        background:#f9f9f9;
        position:absolute;
        top:calc(50% - 16px);
        overflow:hidden;
        box-shadow: 3px 3px 7px #ebebeb
    }

    .category-item {
        display:block;
        float:left;
        width:174px;
        height:175px;
        line-height:175px;
        text-align:center;
        position:relative;
    }

    .category-item:hover {
        background:#fff
    }

    .category-item:first-of-type,
    .category-item:first-of-type + .category-item{
        border-bottom: 1px #ebebeb solid
    }

    .category-item:nth-child(2n + 1) {
        border-right:1px #ebebeb solid;
    }

    .category-link {
        display:block;
        float:left;
        width:100%;
        height:100%;
        text-decoration:none;
        outline:none;
        color:#a09b9b;
        position:absolute;
        top:0;
        left:0;
        trasition: .5s ease-in;
    }

    .category-link:hover {
        color:#31aec0
    }



    `
}