function menu(){
    let x = document.getElementsByClassName("nav_mobile_menu");
    for(let i = 0; i < x.length; i++){
        if(window.getComputedStyle(x[i]).display==="none"){
            x[i].style.display="block";
        }
        else{
            x[i].style.display="none";
        }
    }
}

function dropdown_contact(){
    let x = document.getElementsByClassName("contact_details");
    let y = document.getElementsByClassName("project_details");
    for(let i = 0; i < x.length; i++){
        if(window.getComputedStyle(x[i]).display==="none"){
            x[i].style.display="block";
            y[i].style.display="none";
            document.getElementsByClassName("navArrow_mobile1")[0].style.display="none";
            document.getElementsByClassName("navArrowDropdown_mobile1")[0].style.display="block";
            document.getElementsByClassName("navArrow_mobile2")[0].style.top=329;
            document.getElementsByClassName("navArrowDropdown_mobile2")[0].style.display="none";
            document.getElementsByClassName("navArrow_mobile2")[0].style.display="block";
        }
        else{
            x[i].style.display="none";
            document.getElementsByClassName("navArrow_mobile1")[0].style.display="block"; 
            document.getElementsByClassName("navArrowDropdown_mobile1")[0].style.display="none";
            document.getElementsByClassName("navArrow_mobile2")[0].style.top=177;
        }
    }
}

function dropdown_project(){
    let x = document.getElementsByClassName("project_details");
    let y = document.getElementsByClassName("contact_details");
    for(let i = 0; i < x.length; i++){
        if(window.getComputedStyle(x[i]).display==="none"){
            x[i].style.display="block";
            y[i].style.display="none";
            document.getElementsByClassName("navArrow_mobile1")[0].style.display="block"; 
            document.getElementsByClassName("navArrowDropdown_mobile1")[0].style.display="none";
            document.getElementsByClassName("navArrow_mobile2")[0].style.display="none";
            document.getElementsByClassName("navArrowDropdown_mobile2")[0].style.display="block";
        }
        else{
            x[i].style.display="none";
            document.getElementsByClassName("navArrow_mobile2")[0].style.display="block";
            document.getElementsByClassName("navArrowDropdown_mobile2")[0].style.display="none";
            document.getElementsByClassName("navArrow_mobile2")[0].style.top=177;
        }
    }
}
