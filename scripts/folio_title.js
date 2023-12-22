let y;
function folio_title_transform(){
    let x = document.getElementsByClassName("folio");
    if(x[0].style.animationName == undefined | x[0].style.animationName == ""){
        x[0].style.animationName = "port_folio";
        setTimeout(()=>{
            x[0].style.animationName = "";
        }, 4000);
    }
    y = setTimeout(()=>{
        folio_title_transform()
    }, 4000)
}
function folio_title_transform_off(){
    clearTimeout(y);
}