let title = document.createElement('title');
title.innerHTML = 'Choose Your Option';

let metaUTF8 = document.createElement('meta');
metaUTF8.setAttribute('charset', 'UTF-8');


let metaXUA = document.createElement('meta');
metaXUA.setAttribute('http-equiv', 'X-UA-Compatible');
metaXUA.setAttribute('content', 'IE=edge');


let meta3 = document.createElement('meta');
meta3.setAttribute('name', 'viewport');
meta3.setAttribute('content', 'width=device-width, initial-scale=1.0');

document.head.appendChild(metaUTF8);
document.head.appendChild(metaXUA);
document.head.appendChild(meta3);
document.head.appendChild(title);

// let lang = document.createElement('lang');
// lang.setAttribute('lang','en');
// document.html.appendChild(lang);

let style = document.createElement('style');
style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@600&family=Open+Sans:wght@400;600;700&display=swap');

    .title{
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 48px;
        color: #212121;
        text-align:center;
        padding-top:3%;
    }

    .div_title{
        font-family: 'OpenSans';
        font-size: 20px;
        line-height: 26px;
        color: #9FA3A7;
        text-align:center;
    }

    .div_blocks{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 55px;
    }
    
    .block1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #E8E9ED;
        width: 401px;
        height: 480px;
        align-items: center;
    }

    .p1{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #9FA3A7;
    }

    .h3_block1{
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 46px;
        color: #212121;
    }

    .p1_block1{  
        font-family: 'OpenSans';
        font-size: 16px;
        line-height: 25px;
        color: #9FA3A7;
    }

    .a1{
        margin-top:50px;
        text-decoration: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #212121;
        border: 3px solid #FFC80A;
        padding: 4%;
        border-radius: 30px;
        width: 140px;
        height: 15px;
        text-align: center;
    }

    .block2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #8F75BE;
        width: 401px;
        height: 480px;
        align-items: center;
    }
    
    .p2{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #FFC80A;
    }

    .h3_block2{
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 46px;
        color: #FFFFFF;
    }

    .p2_block2{
        font-family: 'OpenSans';
        font-size: 16px;
        line-height: 25px;
        color: #FFFFFF;        
    }

    .a2{
        margin-top:50px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #FFFFFF;       
        text-decoration: none;
        border: 3px solid #FFC80A;
        border-radius: 30px;
        padding: 4%;
        width: 140px;
        height: 15px;
        text-align: center;
    }
`;
document.head.appendChild(style);

// let body = document.createElement('body');
// document.appendChild('body');

let h2 = document.createElement('h2');
h2.innerHTML = 'Choose Your Option';
h2.setAttribute('class','title');
document.body.appendChild(h2);

let div1 = document.createElement('div');
div1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
div1.setAttribute('class','div_title');
document.body.appendChild(div1);

let div_blocks = document.createElement('div'); 
div_blocks.setAttribute('class','div_blocks');
document.body.appendChild(div_blocks);

let div_block1 = document.createElement('div'); 
div_block1.setAttribute('class','block1');
div_blocks.appendChild(div_block1);

let p1 = document.createElement('p'); 
p1.setAttribute('class','p1');
p1.innerHTML =`FREELANCER`;
div_block1.appendChild(p1);

let h3_block1 = document.createElement('h3');
h3_block1.setAttribute('class','h3_block1') ;  
h3_block1.innerHTML =`Initially </br> designed to `;
div_block1.appendChild(h3_block1);

let p2_block1 = document.createElement('p'); 
p2_block1.setAttribute('class','p1_block1');
p2_block1.innerHTML =`But I must explain to you how all this </br>  mistaken idea of denouncing `;
div_block1.appendChild(p2_block1);

let a1 = document.createElement('a');  
a1.setAttribute('href','#');
a1.setAttribute('class','a1');
a1.innerHTML =`START HERE `;
div_block1.appendChild(a1);

let div_block2 = document.createElement('div'); 
div_block2.setAttribute('class','block2');
div_blocks.appendChild(div_block2);

let p2 = document.createElement('p');  
p2.setAttribute('class','p2');
p2.innerHTML =`STUDIO`;
div_block2.appendChild(p2);

let h3_block2 = document.createElement('h3');
h3_block2.setAttribute('class','h3_block2') ; 
h3_block2.innerHTML =`Initially </br> designed to `;
div_block2.appendChild(h3_block2);

let p2_block2 = document.createElement('p'); 
p2_block2.setAttribute('class','p2_block2') ;
p2_block2.innerHTML =`But I must explain to you how all this </br> mistaken idea of denouncing  `;
div_block2.appendChild(p2_block2);

let a2 = document.createElement('a'); 
a2.setAttribute('href','#');
a2.setAttribute('class','a2');
a2.innerHTML =`START HERE `;
div_block2.appendChild(a2);
