import { css } from 'r9x_js'

export default (ctx) => {
    return css `

    .menu-wrapper { 
        display:block;
        float:left;        
        width: calc(100% - 150px);
        position:relative;
    }

    .menu-button {
        display:block;
        float:right;
        padding:27px;
        font-size:1.5em
    }

    .menu-list-wrapper { 
        display:block;
        float:right;  
        width:150px;
        height:auto;
        padding:15px;
        background:rgba(0, 0, 0, .87);
        border:1px #183532 solid;
        border-top-left-radius:30px;
        border-top-right-radius:15px;
        border-bottom-right-radius:30px;
        box-shadow:3px 3px 7px rgba(0, 0, 0, .5);
        position:absolute;
        top:70px;
        right:15px;
        z-index:100
     }

     .menu-list-wrapper::before {
         content:'';
         border-color: #000 transparent;
         border-style: solid;
         border-width:0 10px 15px 10px;
         height:0;
         width:0;
         position:absolute;
         top:-15px;
         right:15px;
     }

     .menu-list {
         display:block;
         float:left;
         width:100%;
     }

    .menu-item,
    .menu-link {
        width:100%;
        display:block;
        float:left;
    }

    .menu-item {}

    .menu-link {
        padding:15px;
        outline:none;
        text-decoration:none;
        color:#3a8d8b;
        font-size: .875em;
        border-bottom: 1px #3bc6c426 solid;
        text-align:left;
        transition: .5s ease-in-out
    }

    .menu-item:last-of-type .menu-link {
        border:0
    }

    .menu-link:hover {
        color:#3bc8c5
    }

    `
}