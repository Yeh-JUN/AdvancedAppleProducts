


//象徵get
function $g(selector){
    let nodelist = document.querySelectorAll(selector);
    
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}
//象徵creat
function $c(element){
    return document.createElement(element);
}

//多參數模組化
function $cc(parent , element , text){
    let el = document.createElement(element);
    el.innerText = text;
    parent.appendChild(el);

}



export {$g as $got , $c , $cc};