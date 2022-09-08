console.log("funcionando ")
function moudePedido(i){
    return{
      cliente:i.cliente,
      dataCreate:i.dataCreate,
      dataEntrega:i.dataEntrega,
      servicos:[],
      id:pedidos.length+1,
    }
  }
function colocarVendas(){
  for(venda of vendas){
    if(pedidos.length >0){
     for(pedido of pedidos){
       if(pedido.cliente == venda.cliente&
       pedido.dataEntrega == venda.dataEntrega&
       pedido.dataCreate ==venda.dataCreate){
         pedido.servicos.push(venda.servico)
       }else{
         for(p of pedidos){
           if(p.cliente == venda.cliente &p.dataCreate == venda.dataCreate){
            
           }else{
           pedidos.push(moudePedido(venda))
       
           break; 
           }
         }
       }
     }
    }else{

      pedidos.push(moudePedido(venda))
      colocarVendas()
      break;
    }
  }
  
 pedidosIguais()
}
function pedidosIguais(){
  for(pedido of pedidos){
    for(p of pedidos){
      if(p.cliente == pedido.cliente &p.dataCreate == pedido.dataCreate & p.dataEntrega == pedido.dataEntrega){
        if(p.servicos != pedido.servicos)
          if(p.servicos.length>pedido.servicos.length){
            pedidos.splice(pedidos.indexOf(pedido),1)
          }else{
             pedidos.splice(pedidos.indexOf(p),1)
          }
        
      }
    }
  }
}
function colocarPedidos(){
    
  

    
  for(pedido of pedidos){
    let dataEntrega =pedido.dataEntrega;
    var data = new Date();
    var dia     = data.getDate();
    var mes     = data.getMonth()+1;
    var ano    = data.getFullYear();
  
    let newAno = '';
    let newMes = '';
    let newDia='';
  for(i = 0;i<dataEntrega.length;i++){
    if(i<4)
      newAno+=dataEntrega[i]
    if(i>4&i<7)
      newMes+=dataEntrega[i]
    if(i>7)
      newDia+=dataEntrega[i]
  }
  let newdataEntrega = newDia+'/'+newMes+'/'+ newAno;
  console.log(pedidos);
if(newAno >= ano)
 if(newMes >=mes){
if(newMes == mes&newDia>=dia){
    document.querySelector('.pessoas-cadastradas').innerHTML +=`
    <div id="`+pedidos.indexOf(pedido)+`" ondblclick="mostraServicoDoPedido(this)">
      <h3>pedido para: `+pedido.cliente+`</h3>
      <h4> data de entrga: `+newdataEntrega+`</h4>
      <form action="/cadastraPagmento?id=`+pedido.id+`" method="POST">
      <button type="submit">
        <ion-icon name="cash-outline" class="green `+aparecer+`"></ion-icon>
      </button>
      </form>
      <form action="/ordenServico?id=`+pedido.id+`" method="POST">
      <button type="submit" title="ordende serviço">
        <ion-icon name="document-text-outline" class="`+aparecer+`" ></ion-icon>
      </button>
      </form>
 
    </div>
    
    `
}else{
    if(newMes > mes)
    document.querySelector('.pessoas-cadastradas').innerHTML +=`
    <div id="`+pedidos.indexOf(pedido)+`" ondblclick="mostraServicoDoPedido(this)">
      <h3>pedido para: `+pedido.cliente+`</h3>
      <h4> data de entrga: `+newdataEntrega+`</h4>
      <form action="/cadastraPagmento?id=`+pedido.id+`" method="POST">
      <button type="submit">
        <ion-icon name="cash-outline" class="green `+aparecer+`"></ion-icon>
      </button>
      </form>
 
    </div>
    
    `}
 }
 
  }
}
function mostraServicoDoPedido(i){
   let id = Number(i.id)
  if(i.style.height != "revert"){
  i.style.height = "revert";

  i. s
  tyle.justifyContent = "flex-start";
  i.style.alignItems = "flex-start"
i.style.flexDirection = "column"

  
  for(let item of pedidos[id].servicos){
  i.innerHTML+=`
  <h3>`+item+`</h3><br>
  `
  }
  }else{
  i.style.flexDirection = "row"
     i.style.height = "auto"
     i.innerHTML = `
      <h3>Pedido para: `+pedidos[id].cliente+`</h3>
      <h4> data de entrga: `+pedidos[id].dataEntrega+`</h4>
            <form action="/cadastraPagmento?id=`+pedidos[id].id+`" method="POST">
      <button type="submit">
        <ion-icon name="cash-outline" class="green `+aparecer+`"></ion-icon>
      </button>
      </form>
      <form action="/ordenServico?id=1" method="POST">
      <button type="submit" title="ordende serviço">
        <ion-icon name="document-text-outline" class="`+aparecer+` md hydrated" role="img" aria-label="document text outline"></ion-icon>
      </button>
      </form>
      `
  }
}
function mostraAllPedidos(){
for(pedido of pedidos){
 document.querySelector('.pessoas-cadastradas').innerHTML +=`
    <div id="`+pedidos.indexOf(pedido)+`" ondblclick="mostraServicoDoPedido(this)">
      <h3> `+pedido.cliente+`</h3>
      <h4> data de entrga: `+pedido.dataEntrega+`</h4>
      <form action="/cadastraPagmento?id=`+pedido.id+`" method="POST">
      <button type="submit">
        <ion-icon name="cash-outline" class="green `+aparecer+`"></ion-icon>
      </button>
      </form>
      <form action="/ordenServico?id=`+pedido.id+`" method="POST">
      <button type="submit" title="ordende serviço">
        <ion-icon name="document-text-outline" class="`+aparecer+` md hydrated" role="img" aria-label="document text outline"></ion-icon>
      </button>
      </form>
    </div>
    
    `
}
}