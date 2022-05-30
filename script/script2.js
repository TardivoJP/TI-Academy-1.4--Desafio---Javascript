window.onload=function(){

    //começo dos clientes
    let listaDosClientes=[
        {
        "codCliente":1,
        "nomeCliente":"Donald Blake",
        "dataCadCli":"12/10/2010",
        },        
        {
        "codCliente":2,
        "nomeCliente":"Bruce Wayne",
        "dataCadCli":"01/08/2017",
        },
        {
        "codCliente":3,
        "nomeCliente":"Diana",
        "dataCadCli":"02/05/2020",
        },         
    ]
    
    let dataAtual=new Date();
    let dataAtualFormatada=dataAtual.toLocaleString("pt-BR",{year:"numeric",month:"2-digit",day:"2-digit"});

    const btnAbrirClientes=document.querySelector("#btnAbrirClientes");
    const janelaClientes=document.querySelector("#clientes");
    
    const codCliente=document.querySelector("#codigo-cliente");
    const nomeCliente=document.querySelector("#nome-cliente");
    const dataCadCliente=document.querySelector("#data-cadastro-cliente");

    const voltarCliente=document.querySelector("#voltar-cliente");
    const avancarCliente=document.querySelector("#avancar-cliente");

    const novoCliente=document.querySelector("#novo-cliente");
    const salvarCliente=document.querySelector("#salvar-cliente");

    const btnFecharCliente=document.querySelector("#btn-fechar-cliente");

    let seletorCliente=0;

    function atualizarCliente(arrKey){
            codCliente.value=listaDosClientes[arrKey]["codCliente"];
            nomeCliente.value=listaDosClientes[arrKey]["nomeCliente"];
            dataCadCliente.value=listaDosClientes[arrKey]["dataCadCli"];
    }

    atualizarCliente(seletorCliente);


    avancarCliente.addEventListener("click",function(){
        if(seletorCliente<listaDosClientes.length-1){
            seletorCliente++;
            atualizarCliente(seletorCliente);
        }else{
            alert("Fim do registro de clientes")
        }  
    })

    voltarCliente.addEventListener("click",function(){
        if(seletorCliente>0){
            seletorCliente--;
            atualizarCliente(seletorCliente);
        }else{
            alert("Fim do registro de clientes")
        }
    })

    novoCliente.addEventListener("click",function(){       
        codCliente.value=listaDosClientes.length+1;
        nomeCliente.value="";
        dataCadCliente.value=dataAtualFormatada;
    })

    salvarCliente.addEventListener("click",function(){

        if( !(codCliente.value>=0&&codCliente.value<=listaDosClientes.length) ){

            if(nomeCliente.value==""){
                alert("Você não inseriu um nome para o cliente!");
            }else{
                listaDosClientes.push({
                    "codCliente":codCliente.value,
                    "nomeCliente":nomeCliente.value,
                    "dataCadCli":dataCadCliente.value,
                });
                alert("Dados cadastrados com sucesso");
                seletorCliente=0;
                atualizarCliente(seletorCliente);
            }
            
        }else{
            alert("Clique em novo para criar um registro");
        }
    })

    btnFecharCliente.addEventListener("click",function(){
        janelaClientes.classList.add("display-none");
    })

    btnAbrirClientes.addEventListener("click",function(){
        janelaProdutos.classList.add("display-none");
        janelaClientes.classList.remove("display-none");
        atualizarCliente(seletorCliente);
    })
    //fimd dos clientes




    //começo dos produtos
    let listaDosProdutos=[
        {
        "codProduto":1,
        "descProduto":"Caneta esferográfica",
        "precoProduto":0.80,  
        "qtdEstoqueProd":10,
        },        
        {
        "codProduto":2,
        "descProduto":"Cola Print",
        "precoProduto":3.65,  
        "qtdEstoqueProd":50,
        },       
    ]


    const btnAbrirProdutos=document.querySelector("#btnAbrirProdutos");
    const janelaProdutos=document.querySelector("#produtos");
    
    const codProduto=document.querySelector("#codigo-produto");
    const descricaoProduto=document.querySelector("#descricao-produto");
    const precoProduto=document.querySelector("#preco-produto");
    const quantidadeProduto=document.querySelector("#quantidade-produto");

    const voltarProduto=document.querySelector("#voltar-produto");
    const avancarProduto=document.querySelector("#avancar-produto");

    const novoProduto=document.querySelector("#novo-produto");
    const salvarProduto=document.querySelector("#salvar-produto");

    const btnFecharProduto=document.querySelector("#btn-fechar-produto");

    let seletorProduto=0;

    function atualizarProduto(arrKey){
            codProduto.value=listaDosProdutos[arrKey]["codProduto"];
            descricaoProduto.value=listaDosProdutos[arrKey]["descProduto"];
            precoProduto.value=listaDosProdutos[arrKey]["precoProduto"];
            quantidadeProduto.value=listaDosProdutos[arrKey]["qtdEstoqueProd"];
    }

    atualizarProduto(seletorProduto);

    avancarProduto.addEventListener("click",function(){
        if(seletorProduto<listaDosProdutos.length-1){
            seletorProduto++;
            atualizarProduto(seletorProduto);
        }else{
            alert("Fim do registro de produtos")
        }  
    })

    voltarProduto.addEventListener("click",function(){
        if(seletorProduto>0){
            seletorProduto--;
            atualizarProduto(seletorProduto);
        }else{
            alert("Fim do registro de produtos")
        }
    })

    novoProduto.addEventListener("click",function(){
        codProduto.value=listaDosProdutos.length+1;
        descricaoProduto.value="";
        precoProduto.value="";
        quantidadeProduto.value="";
    })

    salvarProduto.addEventListener("click",function(){

        if( !(codProduto.value>=0&&codProduto.value<=listaDosProdutos.length) ){

            if(descricaoProduto.value==""||precoProduto.value==""||quantidadeProduto.value==""){
                alert("Você não inseriu todos os dados necessários para realizar o cadastro!");
            }else{

                if(isNaN(Number(precoProduto.value))||isNaN(Number(quantidadeProduto.value))){
                    alert("Você não inseriu um preço ou quantidade válidos!");

                }else{
                    listaDosProdutos.push({
                        "codProduto":codProduto.value,
                        "descProduto":descricaoProduto.value,
                        "precoProduto":Number(precoProduto.value),  
                        "qtdEstoqueProd":Number(quantidadeProduto.value),
                    });
                    alert("Dados cadastrados com sucesso");
                    seletorProduto=0;
                    atualizarProduto(seletorProduto);
                }
            }
                      
        }else{
            alert("Clique em novo para criar um registro");
        }
    })

    btnFecharProduto.addEventListener("click",function(){
        janelaProdutos.classList.add("display-none");
    })

    btnAbrirProdutos.addEventListener("click",function(){
        janelaClientes.classList.add("display-none");
        janelaProdutos.classList.remove("display-none");
        atualizarProduto(seletorProduto);
    })
    //fim dos produtos



    const btnAbrirPedidos=document.querySelector("#btnAbrirPedidos");
    const janelaPedidos=document.querySelector("#pedidos");
    
    const codClientePedido=document.querySelector("#codigo-cliente-pedido");
    const nomeClientePedido=document.querySelector("#nome-cliente-pedido");

    const codProdutoPedido=document.querySelector("#codigo-produto-pedido");
    const descricaoProdutoPedido=document.querySelector("#descricao-produto-pedido");
    const precoProdutoPedido=document.querySelector("#preco-produto-pedido");
    const quantidadeProdutoPedido=document.querySelector("#quantidade-produto-pedido");

    const btnFecharPedido=document.querySelector("#btn-fechar-pedido");


    codClientePedido.addEventListener("blur",function(){
        let arrayKey=Number(codClientePedido.value)-1;
            nomeClientePedido.value=listaDosClientes[arrayKey]["nomeCliente"];
    })

    codProdutoPedido.addEventListener("blur",function(){
        let arrayKey=Number(codProdutoPedido.value)-1;
        descricaoProdutoPedido.value=listaDosProdutos[arrayKey]["descProduto"];
        precoProdutoPedido.value=listaDosProdutos[arrayKey]["precoProduto"];
        quantidadeProdutoPedido.value=listaDosProdutos[arrayKey]["qtdEstoqueProd"];
    })


    console.log(listaDosClientes);
    console.log(listaDosClientes.length);
    console.log(listaDosClientes[0]);
    console.log(listaDosClientes[0]["codCliente"]);
    console.log(listaDosClientes[0]["nomeCliente"]);
    console.log(listaDosClientes[0]["dataCadCli"]);



}