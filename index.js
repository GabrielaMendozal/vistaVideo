function login(elemento){
    if(elemento.innerText === "Login"){
        elemento.innerText = "Logout";
    }
    else{
        elemento.innerText = "Login";
    }
}