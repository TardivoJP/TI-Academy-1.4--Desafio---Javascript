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
    
    //variável para a data atual
    let dataAtual=new Date();
    let dataAtualFormatada=dataAtual.toLocaleString("pt-BR",{year:"numeric",month:"2-digit",day:"2-digit"});

    //elementos HTML que vão ser manipulados
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

    //variável para servir como chava para a array da lista dos clientes
    let seletorCliente=0;

    //função para pegar os dados de cada código e mostrar na tela para o usuário 
    function atualizarCliente(arrKey){
            codCliente.value=listaDosClientes[arrKey]["codCliente"];
            nomeCliente.value=listaDosClientes[arrKey]["nomeCliente"];
            dataCadCliente.value=listaDosClientes[arrKey]["dataCadCli"];
    }

    //evento para a seta direita da interface
    //caso chegarmos em um valor fora da array enviamos um alerta ao usuário
    avancarCliente.addEventListener("click",function(){
        if(seletorCliente<listaDosClientes.length-1){
            seletorCliente++;
            atualizarCliente(seletorCliente);
        }else{
            alert("Fim do registro de clientes")
        }  
    })

    //evento bem similar para a seta esquerda da interface
    voltarCliente.addEventListener("click",function(){
        if(seletorCliente>0){
            seletorCliente--;
            atualizarCliente(seletorCliente);
        }else{
            alert("Fim do registro de clientes")
        }
    })

    //evento para o botao de novo cliente
    //inserimos o próximo código
    //limpamos o nome para o usuario inserir o que desejar
    //inserimos a data atual conforme declarada anteriormente
    novoCliente.addEventListener("click",function(){       
        codCliente.value=listaDosClientes.length+1;
        nomeCliente.value="";
        dataCadCliente.value=dataAtualFormatada;
    })

    //evento para salvar um cliente criado
    //caso este botao for clicado antes de clicar no botao novo
    //o usuario vai receber um alerta
    //
    //se o usuario utilizar corretamente o evento vai
    //realisar um push() para a array com as novas informações
    //além disso ele volta para o código 1 conforme os parâmetros do desafio
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

    //evento para fechar a janela dos clientes
    btnFecharCliente.addEventListener("click",function(){
        janelaClientes.classList.add("display-none");
    })

    //evento para abrir a janela dos clientes
    //certificamos de que todos as outras janelas estão fechadas
    //bem como chamamos a nossa função para mostrar
    //os clientes começando pelo código 1
    //conforme os parâmetros do desafio
    btnAbrirClientes.addEventListener("click",function(){
        janelaProdutos.classList.add("display-none");
        janelaPedidos.classList.add("display-none");
        janelaClientes.classList.remove("display-none");
        atualizarCliente(seletorCliente);
    })
    //fim dos clientes




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


    //elementos HTML que vão ser manipulados
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

    //variável para servir como chava para a array da lista dos produtos
    let seletorProduto=0;

    //função para pegar os dados de cada código e mostrar na tela para o usuário
    function atualizarProduto(arrKey){
            codProduto.value=listaDosProdutos[arrKey]["codProduto"];
            descricaoProduto.value=listaDosProdutos[arrKey]["descProduto"];
            precoProduto.value=listaDosProdutos[arrKey]["precoProduto"];
            quantidadeProduto.value=listaDosProdutos[arrKey]["qtdEstoqueProd"];
    }

    //evento para a seta direita da interface
    //similar ao realizado para os clientes
    avancarProduto.addEventListener("click",function(){
        if(seletorProduto<listaDosProdutos.length-1){
            seletorProduto++;
            atualizarProduto(seletorProduto);
        }else{
            alert("Fim do registro de produtos")
        }  
    })

    //evento para a seta esquerda da interface
    //similar ao realizado para os clientes
    voltarProduto.addEventListener("click",function(){
        if(seletorProduto>0){
            seletorProduto--;
            atualizarProduto(seletorProduto);
        }else{
            alert("Fim do registro de produtos")
        }
    })

    //evento para o botao de novo produto
    //similar ao realizado para os clientes
    novoProduto.addEventListener("click",function(){
        codProduto.value=listaDosProdutos.length+1;
        descricaoProduto.value="";
        precoProduto.value="";
        quantidadeProduto.value="";
    })

    //evento para salvar um produto criado
    //similar ao realizado para os clientes
    //porem precisamos de um pouco mais de atenção
    //quanto a alguns valores devido as difrenças
    //entre string e number
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

    //evento para fechar a janela dos produtos
    //similar ao realizado para os clientes
    btnFecharProduto.addEventListener("click",function(){
        janelaProdutos.classList.add("display-none");
    })

    //evento para abrir a janela dos produtos
    //similar ao realizado para os clientes
    btnAbrirProdutos.addEventListener("click",function(){
        janelaClientes.classList.add("display-none");
        janelaPedidos.classList.add("display-none");
        janelaProdutos.classList.remove("display-none");
        atualizarProduto(seletorProduto);
    })
    //fim dos produtos



    //começo dos pedidos

    //elementos HTML que vão ser manipulados
    //optei por declarar novas contantes para cada um deles
    //para não acontecer qualquer confusão ou alteração
    //na visualização das caixas de informação dos clientes ou produtos
    const btnAbrirPedidos=document.querySelector("#btnAbrirPedidos");
    const janelaPedidos=document.querySelector("#pedidos");
    
    const codClientePedido=document.querySelector("#codigo-cliente-pedido");
    const nomeClientePedido=document.querySelector("#nome-cliente-pedido");

    const codProdutoPedido=document.querySelector("#codigo-produto-pedido");
    const descricaoProdutoPedido=document.querySelector("#descricao-produto-pedido");
    const precoProdutoPedido=document.querySelector("#preco-produto-pedido");
    const quantidadeProdutoPedido=document.querySelector("#quantidade-produto-pedido");

    const lancarPedido=document.querySelector("#lancar-pedido");

    const pedidoItem=document.querySelector("#pedido-item");
    const pedidoDescricao=document.querySelector("#pedido-descricao");
    const pedidoPreco=document.querySelector("#pedido-preco");
    const pedidoQtd=document.querySelector("#pedido-qtd");
    const pedidoSubTotal=document.querySelector("#pedido-sub-total");

    const containerValorTotalPedido=document.querySelector("#container-valor-total-pedido");
    const valorTotalPedido=document.querySelector("#valor-total-pedido");

    const btnFecharPedido=document.querySelector("#btn-fechar-pedido");


    //evento para pegarmos as informações do código digitado pelo usuário
    //nota-se o metodo blur ao inves de click conforme os parametros do desafio
    codClientePedido.addEventListener("blur",function(){
        let arrayKey=Number(codClientePedido.value)-1;
            nomeClientePedido.value=listaDosClientes[arrayKey]["nomeCliente"];
    })

    //evento similar para o produto, porem deixamos a quantidade à critério
    //do usuário
    codProdutoPedido.addEventListener("blur",function(){
        let arrayKey=Number(codProdutoPedido.value)-1;
        descricaoProdutoPedido.value=listaDosProdutos[arrayKey]["descProduto"];
        precoProdutoPedido.value=listaDosProdutos[arrayKey]["precoProduto"];
    })

    //aqui declaramos duas variáveis, uma para o total a ser calculado no final do pedido
    //e a segunda para criar uma array com os items que já foram adicionados ao carrinho
    //pois um dos parametros do desafio é evitar a repetição de items no carrinho
    let total=0;
    let itemNoCarrinho=[];

    //evento para lancar o pedido no carrinho
    lancarPedido.addEventListener("click",function(){

        //declaramos uma variavel local para buscarmos as informacoes do produto
        let arrayKey=Number(codProdutoPedido.value)-1;

        //verificamos se o usuario preencheu todos os campos
        if(codProdutoPedido.value==""||quantidadeProdutoPedido.value==""){
            alert("Você não inseriu todos os dados necessários para realizar o pedido!");
        }else{
            //verificamos se o usuario digitou valores numericos
            if(isNaN(Number(codProdutoPedido.value))||isNaN(Number(quantidadeProdutoPedido.value))){
                alert("Você não inseriu um código ou quantidade válidos!");
            }else{
                //verificamos se o usuario digitou um valor maior que o estoque
                //do produto selecionado
                if(Number(quantidadeProdutoPedido.value)>listaDosProdutos[arrayKey]["qtdEstoqueProd"]){
                    alert("Estoque insuficiente para esta quantidade!");
                }else{
                    //verificamos se o usuario digitou um valor float para
                    //a quantidade
                    if((Number(quantidadeProdutoPedido.value % 1)!==0)){
                        alert("Insira um valor inteiro para a quantidade!");
                    }else{
                        //verificamos se o usuario inseriu um item repetido no carrinho
                        if(itemNoCarrinho.includes(codProdutoPedido.value)){
                            alert("Este item já está cadastrado!");
                        }else{
                            //se tudo corre bem, chegamos neste ponto
                            //aqui adicionamos o código do item inserido para a nossa
                            //array declarada anteriormente para verificarmos
                            //se o usuario posteriormente não vai adiconar items repetidos
                            itemNoCarrinho.push(codProdutoPedido.value);

                            //aqui poderiamos usar esta linha abaixo
                            //para subtrair o estoque de cada produto
                            //porem como o desafio não permite itens repetidos
                            //no carrinho, deixei ela comentada
                            //listaDosProdutos[arrayKey]["qtdEstoqueProd"]=(listaDosProdutos[arrayKey]["qtdEstoqueProd"])-(Number(quantidadeProdutoPedido.value));

                            //finalmente adicionamos cada item no carrinho
                            let divPedidoItem=document.createElement("div");
                                pedidoItem.appendChild(divPedidoItem).textContent=codProdutoPedido.value;

                            let divPedidoDescricao=document.createElement("div");
                                pedidoDescricao.appendChild(divPedidoDescricao).textContent=descricaoProdutoPedido.value;

                            let divPedidoPreco=document.createElement("div");
                                pedidoPreco.appendChild(divPedidoPreco).textContent=precoProdutoPedido.value;

                            let divPedidoQtd=document.createElement("div");
                                pedidoQtd.appendChild(divPedidoQtd).textContent=quantidadeProdutoPedido.value;

                            //aqui realizamos um simples calculo para verificar o subtotal deste item
                            let divPedidoSubTotal=document.createElement("div");
                                pedidoSubTotal.appendChild(divPedidoSubTotal).textContent=(precoProdutoPedido.value)*(quantidadeProdutoPedido.value);

                            //adicionamos o nosso subtotal ao total geral do carrinho
                            total=total+((precoProdutoPedido.value)*(quantidadeProdutoPedido.value));
                            valorTotalPedido.textContent=total.toLocaleString(`pt-BR`,{style:`currency`,currency:`BRL`});
                            
                            //removemos o display none para mostrarmos o total geral ao usuario
                            //conforme os parametros do desafio
                            containerValorTotalPedido.classList.remove("display-none");
                        }
                    }
                }
            }
        }
    })

    //evento para fechar a janela dos pedidos
    //similar ao realizado para os clientes e produtos
    btnFecharPedido.addEventListener("click",function(){
        janelaPedidos.classList.add("display-none");
    })

    //evento para abrir a janela dos pedidos
    //similar ao realizado para os clientes e produtos
    btnAbrirPedidos.addEventListener("click",function(){
        janelaClientes.classList.add("display-none");
        janelaProdutos.classList.add("display-none");
        janelaPedidos.classList.remove("display-none");
    })
    //fim dos pedidos

}