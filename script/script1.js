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
        let usuExist=0;

        for(let arr of listaUsuarios){
            for(let key in arr){

                if(key=="user"&&usuario.value==arr[key]){
                    usuExist=1;

                    if(senha.value==arr["pws"]){
                        //alert("Usuário e senha corretos!");
                        location.href='pagina2.html';
                    }else{
                        if(senha.value!=arr["pws"]){
                            alert("Senha errada!");
                        }
                    }
                }
            }
        }

        if(usuExist!=1){
            alert("Usuário não existe!");
        }

    })


}