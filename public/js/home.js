  let servicos = []
  let clients = []
  let vendas = []
  let pedidos = []
  let pagamentos = []
  let empresa ;

  let aparecer = "aparecer"
    
  let container = [
//home    
{
    nome:'home',
    conteudo:`
    <header>
    <h1>Orçamentos</h1>
</header>
<div class="header-iterage">
<input type="text" id="pesquisar-pessoa" placeholder="pesquisar servico" class="home" list="todoServico">
<button  onclick="pesquisarServico()"type="submit">
<ion-icon name="search-outline"></ion-icon>
</button>
</div>

<dvi class="pessoas-cadastradas">

</dvi>
<datalist id="todaPessoa"></datalist>
    
    `
},
//pessoas
{
    nome:'pessoas',
    conteudo:`
    <header>
    <h1>pessoas cadastradas</h1>
    <form action="/cadastraPessoa" method="POST">
    <button type="submit">
        <ion-icon name="add-outline"></ion-icon>
    </button>
    </form>
    <h3>cadastrar pessoa</h3>
</header>
<div class="header-iterage">
<input type="text" id="pesquisar-pessoa" placeholder="pesquisar pessoa" autocomplete="off" list="todaPessoas">
<button  onclick="prcurarPessoa()"type="submit">
<ion-icon name="search-outline"></ion-icon>
</button>
</div>

<dvi class="pessoas-cadastradas">

</dvi>
<datalist id="todaPessoas"></datalist>
    `
},
//serviços
{
    nome:'serviços',
    conteudo:`
    <header>
    <h1>serviços cadastradas</h1>
    <form action="/cadastraServico" method="POST">
    <button type="submit">
        <ion-icon name="add-outline"></ion-icon>
    </button>
    <h3>cadastrar serviço</h3>
</header>
<div class="header-iterage">
<input type="text" id="pesquisar-servico" placeholder="pesquisar servico" list="todoServico">
<button  onclick="pesquisarServico()"type="submit">
<ion-icon name="search-outline"></ion-icon>
</button>
</div>

<dvi class="pessoas-cadastradas">

</dvi>
<datalist id="todoServico"></datalist>
    
    `
},
//vendas
{
  nome:'vendas',
    conteudo:` <header>
    <h1>todas as vendas</h1>

</header>
<div class="header-iterage">
<input type="text" id="pesquisar-venda" placeholder="pesquisar venda" list="todasvendas">
<button  onclick="pesquisarServico()"type="submit">
<ion-icon name="search-outline"></ion-icon>
</button>
</div>

<dvi class="pessoas-cadastradas">

</dvi>
<datalist id="todasvendas"></datalist>`
},
//pagamentos
{
  nome:'pagamentos',
    conteudo:` <header>
    <h1>pagamentos</h1>

</header>
<div class="header-iterage">
<input type="text" id="pesquisar-pagamento" placeholder="pesquisar pagamento" list="todaspagamento">
<button  onclick="pesquisarServico()"type="submit">
<ion-icon name="search-outline"></ion-icon>
</button>
</div>

<dvi class="pessoas-cadastradas">

</dvi>
<datalist id="todaspagamento"></datalist>`
},
//empresa
{
  nome:'empresa',
    conteudo:` 
    <header>
      <h1>dados da empresa</h1>
      <form action="/gastos" method="POST">
        <button type="submit">
          <ion-icon name="cash-outline"></ion-icon>
        </button>
      </form>
      <h3>gastos</h3>
      <form action="/cadastraEmpresa" method="POST">
        <button type="submit">
          <ion-icon name="pencil-outline"></ion-icon>   
        </button>
      </form>
      <h3>editar dados</h3>
    </header>
    <div id="dados"></div>
    <datalist id="todaspagamento"></datalist>`
},
]

function prcurarPessoa(){
  let input = document.querySelector('#pesquisar-pessoa')
  for(pessoa of clients){
    if(input.value == pessoa.nome)
    document.querySelector('.pessoas-cadastradas').innerHTML = itemPessoa(pessoa)
  }
input.value = ''
}

function mostraInfoPessoa(i){
  let id = Number(i.id)
  pessoa = clients[Number(id)]
  console.log(clients[Number(id)])
  if(i.style.height == 'revert'){
  console.log('esconder')
  i.style.height = 'auto'
  i. style.justifyContent = "";
      i.style.alignItems = ""
      i.style.flexDirection = ""
  i.innerHTML = itemPessoa(pessoa,"cont");

  }else{
    console.log('adicionar')
      i.style.display = "flex"
      i. style.justifyContent = "flex-start";
      i.style.alignItems = "flex-start"
      i.style.flexDirection = "column"
      i.style.height = 'revert'
      i.innerHTML = `
      <h2>`+pessoa.nome+`</h2>
      <h3>telefone: `+pessoa.telefone+`</h3><br>
      <h3>email: `+pessoa.email+`</h3><br>
      <h3>endereço: `+pessoa.endereco+`</h3><br>
      <h3>cep: `+pessoa.cep+`</h3><br>
      <h3>cpf: `+pessoa.cpf+`</h3><br>
      `
  }
  
}
function mudarconteudo(i){
    for(item of container){
        if(item.nome == i.id){
            document.getElementById('containe-principal').innerHTML = item.conteudo;
           if(i.id == 'pessoas'){
                colocarPessoas();
            }
            if(i.id == 'serviços')
            colocarSevicos();
            if(i.id == 'home')
            mostraAllPedidos()
             if(i.id == 'vendas')
            mostraAllPedidos()
            if(i.id == 'pagamentos')
            colocarPagamentos()
            if(i.id == 'empresa')
             colocarDadosEmpresa()

        }
    }
}
function colocarDadosEmpresa(){
  if(empresa !=null){
     document.querySelector('#dados').innerHTML=`
     <h1 style="color:black">`+empresa.nome+`</h1>
     <h2>endereço: `+empresa.endereco+`</h2>
     <h2>cidade: `+empresa.cidade+`</h2>
     <h2>cnpj: `+empresa.cnpj+`</h2>
     <h2>telefone: `+empresa.telefone+`</h2>
     
     `
  }else{
    document.querySelector('#dados').innerHTML=`
     <h2>cadastra dados da empresa</h2>
    <div class="circle-1"></div>
    <div class="circle-2"></div>
    <div class="circle-3"></div>
    <form action="/cadastraEmpresa" method="POST">
    <button style="border:none; background:rgba(0,0,0,0.2); border-radius:10px; cursor:pointer;"type="submit">
    <ion-icon name="business-outline"></ion-icon>
    </button>
    </form>
    `
  }
}
function colocarPagamentos(){
  for(pagamento of pagamentos){
    document.querySelector('.pessoas-cadastradas').innerHTML +=`
    <div class="">
          <ion-icon name="card-outline"></ion-icon>
     <h3>`+pagamento.client+`</h3><br>
     <h4>valor: R$`+pagamento.valorTotal+`,00</h4>
     <h4>Vencimento:`+pagamento.Vencimento+`</h4>
    </div>
    `
  }
}
function colocarPessoas(){

  for(let pessoa of clients ){
    document.querySelector('.pessoas-cadastradas').innerHTML +=itemPessoa(pessoa)
        
        document.querySelector('#todaPessoas').innerHTML+=`
        <option  value="`+pessoa.nome+`"></option>
        `
  }
}
function colocarSevicos(){
    document.querySelector('.pessoas-cadastradas').innerHTML = '';
   
    for(item of servicos){
     document.querySelector('.pessoas-cadastradas').innerHTML += `
     <div>
     <ion-icon name="hammer-outline"></ion-icon>
     <h3>`+item.nome+`</h3><br>
     <h4>valor: R$`+item.valor+`</h4>
    
     <button onclick="deletarServico(`+item.id+`)">
     <ion-icon  name="trash-outline" class="red `+aparecer+`"></ion-icon>
     </button>
     
     </div>
     
     `
    }
}
 function deletarServico(id){
document.querySelector('body').innerHTML+=`
<div class="fosco">
<div class="b-branco">
  <h1>deseja deletar?</h1>
  <form action="/deletServico/`+id+`" method="POST">
<button class="b-red">deletar</button>
</form>
<button class="b-cinza" onclick="desligarFosco()">cancelar</button>

</div>
</div>
`
}
function desligarFosco(){
document.querySelector('.fosco').remove()

}
function converterVendas(){
  for(pagamento of pagamentos){
if(pagamento.tipoPagamento == 'parcela'){
    pagamento.Vencimento = newArray(pagamento.Vencimento);
    
  } 
 }
}
let ver = 'dataPagamento'
function deletarPessoa(id){
document.querySelector('body').innerHTML+=`
<div class="fosco">
<div class="b-branco">
  <h1>deseja deletar?</h1>
  <form action="/deletPessoa/`+id+`" method="POST">
<button class="b-red">deletar</button>
</form>
<button class="b-cinza" onclick="desligarFosco()">cancelar</button>

</div>
</div>
`
}
function dataPagamento(){
  for(pagamento of pagamentos){
   if(pagamento.tipoPagamento == 'parcela'){
    let vencimentos = []
  let text = pagamento.Vencimento
  let newitem =''
 for(i=0;i<text.length;i++){
   if(text[i] ==','){
     vencimentos.push(newitem)
     newitem = ''
   }else{
     newitem+=text[i]
   }
 }
   for(vencimento of vencimentos){
       var data = new Date();
  var dia     = data.getDate();
  var mes     = data.getMonth()+1;
  var ano    = data.getFullYear();
  if(vencimento == dia+'/'+mes+'/'+ano){
     Swal.fire({
    icon: 'info',
  title: 'pagamento!',
  text: 'temos um pagamento de '+pagamento.client+' que a data de vencimento é hoje',
  confirmButtonText: 'ok'
  })
  }
   }
   
   }else{
      var data = new Date();
  var dia     = data.getDate();
  var mes     = data.getMonth()+1;
  var ano    = data.getFullYear();
  
  newdia = mes<10?String('0'+mes):mes;
  hoje = ano+'-'+newdia+'-'+dia 
     if( pagamento.Vencimento ==hoje){
        
         Swal.fire({
    icon: 'info',
  title: 'pagamento!',
  text: 'temos um pagamento de '+pagamento.client+' que a data de vencimento é hoje',
  confirmButtonText: 'ok'
}).then((result) => {

  if (result.isConfirmed) {
     ver = "entrega"
  }
  })

     }
   }
   }
  ver = "entrega"
}

function itemPessoa(i,cont){
  
    if(cont == undefined||cont == ""){
      return `
        <div ondblclick="mostraInfoPessoa(this)" id="`+clients.indexOf(i)+`">
          <ion-icon name="person-circle-outline"></ion-icon>
          <h3>`+i.nome+`</h3><br>
          <h4>telefone: `+i.telefone+`</h4>
          <button onclick="deletarPessoa(`+i.id+`)">
            <ion-icon class="red `+aparecer+`" id="" name="trash-outline"></ion-icon>
          </button>

          <form action="/cadastraPedido?id=`+i.id+`" method="post">
            <button type="submit">
              <ion-icon name="hammer-outline" class="`+aparecer+` blue" id="`+i.nome+`" ></ion-icon>
            </button>
          </form>
        </div>`
}else{
  return `
  <ion-icon name="person-circle-outline"></ion-icon>
  <h3>`+i.nome+`</h3><br>
  <h4>telefone: `+i.telefone+`</h4>
  <button onclick="deletarPessoa(`+i.id+`)">
    <ion-icon class="red aparecer" id="" name="trash-outline"></ion-icon>
  </button>

  <form action="/cadastraPedido?id=`+i.id+`" method="post">
    <button type="submit">
      <ion-icon name="hammer-outline" class="aparecer blue" id="`+i.nome+`" ></ion-icon>
    </button>
  </form>
  `
}
}
function newArray(t){
  let array = [];
  let item = '';
  for(let i = 0;i<t.length;i++){
    if(t[i]!=','){
      item+= t[i];
    }else{
      array.push(item);
    }
  }
  return array;
} 