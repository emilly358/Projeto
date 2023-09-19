
function togglePass(){
    const senha1 = document.querySelector("#senha1")
    const senha2 = document.querySelector("#senha2")

    if  (senha1.type == "password" || senha2.type == "password"){
        senha1.type = "text"
        senha2.type = "text"
    }else {
        senha1.type = "password"
        senha2.type = "password"
    }
}
function ckSenha(){
    const senha1 = document.querySelector("#senha1")
    const senha2 = document.querySelector("#senha2")
    if(senha1.value != senha2.value){
        alert ("As senhas não conferem")
    } else if (senha1.value.length ==0   || senha2.value.length ==0){
        alert ("Um dos campos de senha está vazio")
    }else{
       document.querySelector("#userok").innerHTML = "Usuário Disponivel" 
    }
}