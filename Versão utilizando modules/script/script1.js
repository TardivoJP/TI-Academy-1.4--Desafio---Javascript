window.onload=async function(){

    //função para pegar os dados JSON
    //não me parece a forma ideal mas foi a única que eu encontrei
    //que realmente funcionou no javascript puro
    //
    //acredito que talvez o fato do arquivo ser local dificultou
    //um pouco as coisas
    //
    //é importante notar que esta função não funciona offline apenas
    //com os arquivos html e js, necessita de algum servidor ou
    //simulação rodando como por exemplo o apache através do xampp
    //
    //todavia, também acredito que os diversos frameworks JS facilitam
    //muito essa questão da importação de um JSON
    let pegarJSON=async function(){
        try{
            let dadosFetch=await fetch('script/usuario.json');
            let dadosJSON=await dadosFetch.json();
            return dadosJSON;
        
        }catch(error){
            alert(error);
        }
    }

    const listaDeUsuarios= await pegarJSON();
       

    const usuario=document.querySelector("#user");
    const senha=document.querySelector("#pws");
    const verificarDados=document.querySelector("#verificarDados");

    verificarDados.addEventListener("click",function(){
        //criamos essa variável para determinar se o usuário
        //existe ou não para depois verificarmos a senha
        let usuExist=0;

        //percorremos a array para verificar os usuarios
        for (const item of Object.entries(listaDeUsuarios)) {
            for(chave of item[1]){

                if(usuario.value==chave['user']){
                    //se entrarmos neste if, encontramos um usuário válido
                    //agora vamos verificar se a senha bate com a dele no sistema
                    usuExist=1;

                    if(senha.value==chave['pws']){
                        //se ambos o usuario existe e a senha deste for correta
                        //então encaminhamos o usário para a próxima página
                        location.href='pagina2.html';
                    }else{
                        if(senha.value!=chave['pws']){
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