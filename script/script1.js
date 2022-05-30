window.onload=function(){

    const usuario=document.querySelector("#user");
    const senha=document.querySelector("#pws");
    const verificarDados=document.querySelector("#verificarDados");


    let listaUsuarios=[
        {
            user:"Master",
            pws:"12345"
        },
        {
            user:"Marcelo",
            pws:"senha"
        }
    ]

    verificarDados.addEventListener("click",function(){
        //criamos essa variável para determinar se o usuário
        //existe ou não para depois verificarmos a senha
        let usuExist=0;

        //percorremos a array para verificar os usuarios
        for(let arr of listaUsuarios){
            for(let key in arr){

                if(key=="user"&&usuario.value==arr[key]){
                    //se entrarmos neste if, encontramos um usuário válido
                    //agora vamos verificar se a senha bate com a dele no sistema
                    usuExist=1;

                    if(senha.value==arr["pws"]){
                        //se ambos o usuario existe e a senha deste for correta
                        //então encaminhamos o usário para a próxima página
                        location.href='pagina2.html';
                    }else{
                        if(senha.value!=arr["pws"]){
                            //caso a senha para este usuário for incorreta
                            //enviamos um alerta na tela do usuário
                            alert("Senha errada!");
                        }
                    }
                }
            }
        }

        //caso um usuário inválido tenha sido digitado
        //enviamos um alerta na tela
        if(usuExist!=1){
            alert("Usuário não existe!");
        }

    })


}