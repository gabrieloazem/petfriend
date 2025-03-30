addEventListener('submit', (event) =>{
    event.preventDefault()    
})

function paginaCadastro(){
    document.getElementById('login').style.display = 'none'
    document.getElementById('cadastro').style.display = 'flex'
}

function paginaLogin(){
    document.getElementById('login').style.display = 'flex'
    document.getElementById('cadastro').style.display = 'none'
}

function logar(){
    var email = document.getElementById('loginEmail').value
    var senha = document.getElementById('loginSenha').value
    if(email.includes('@') && senha.length > 0){
        alert('Login realizado com sucesso !')
    }
}

function cadastrarrr(){
    var erro = ""
    var senha1 = document.getElementById('cadastroSenha1').value
    var senha2 = document.getElementById('cadastroSenha2').value
    if(senha1 == "" || senha2 == ""){
        erro = "Senha invalida !"
    }
    if(senha1 != senha2){
        erro = "Senhas diferentes !"
    }
    if(erro != ""){
        alert(erro)
    }
    if(erro == ""){
        alert("Cadastro realizado com sucesso")
        paginaLogin()
    }
}