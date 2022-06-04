const express = require('express')
const app = express()
const mysql = require('mysql2')
const port =  3000;
const bodyPar = require('body-parser');
const dados = require('./models/Clients');

//tabelas
const Clients = dados.Client;
const Servicos = dados.Servico;
const Vendas = dados.Vendas;
const Pagamento = dados.Pagamento;
const Empresa = dados.Empresa;

//configurar body parser
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));

// configurar handlebars
const handlebars = require('express-handlebars');
const { json } = require('express/lib/response');
app.engine('handlebars', handlebars.engine('main'));
app.set('view engine', 'handlebars');
app.set('views', './views');


//rotas
//entrada
app.get('/',(req, res)=>{
  Empresa.findAll({order:[['id','ASC']]}).then(function(empresa){
  res.render('entrar',{empresa:empresa})
})
});
app.get('/test',(req,res)=>{
  res.render('teste')
})
//home
app.post('/home', (req, res)=>{
  Clients.findAll({order:[['id','DESC']]}).then(function(client){
    Servicos.findAll({order:[['id','DESC']]}).then(function(servico){
      Vendas.findAll({order:[['id','DESC']]}).then(function(vendas){
        Pagamento.findAll({order:[['id','DESC']]}).then(function(pagamento){
          Empresa.findAll({order:[['id','ASC']]}).then(function(empresa){
            res.render('home',{client:client,servico:servico,vendas:vendas,pagamento:pagamento,empresa:empresa});
          })
        })
      })
    })
  })
});
app.post('/cadastraEmpresa',(req,res)=>{
  Empresa.findAll({order:[['id','ASC']]}).then(function(empresa){
      res.render('cadastraE',{empresa:empresa})
  })
})
app.post('/addEmpresa', (req, res)=>{
  Empresa.create({
  nome:req.body.nome ,
  logo:req.body.imagem,
  cidade:req.body.cidade,
  endereco:req.body.endereco,
  cnpj:req.body.cnpj,
  telefone:req.body.telefone,
  senha:req.body.senha
  }).then(
    res.render('certo')
  );
})
app.post('/cadastraPessoa', (req, res) => {
  res.render('cadastraC')
});
app.post('/cadastraServico',(req,res)=>{
  res.render('cadastraS')
});

app.post('/cadastraPedido', (req, res)=>{
  Clients.findAll({order:[['id','DESC']]}).then(function(client){
    Servicos.findAll({order:[['id','DESC']]}).then(function(servico){
      res.render('cadastraV',{client:client,servico:servico})
    })
  })
});
app.post('/cadastraPagmento', (req, res)=>{
  Vendas.findAll({order:[['id','ASC']]}).then(function(vendas){
    res.render('cadastraPg',{vendas:vendas})
  })
  
});
app.post('/addPagamento',(req, res)=>{
  let tipo= req.body.tipoPagamneto
  if(tipo == 'avista'){
    Pagamento.create({
      client:req.body.client,
      dataPedido:req.body.dataPedido,
      valorTotal:req.body.valorTotal,
      tipoPagamento:req.body.tipoPagamneto,
      formaPagamneto:req.body.formaPagamneto,
     parcelado:null,
     valorParcelado:null,
     Vencimento:req.body.Vencimento
    }).then(
      res.render('certo')
    );
  }else{
    Pagamento.create({
      client:req.body.client,
      dataPedido:req.body.dataPedido,
      valorTotal:req.body.valorTotal,
      tipoPagamento:req.body.tipoPagamneto,
      formaPagamneto:req.body.formaPagamneto,
      parcelado:req.body.quantParcela,
      valorParcelado:req.body.valorParcelado,
      Vencimento:req.body.datasPaga
    }).then(
      res.render('certo')
    );
  }
})
app.post('/addPedido', (req, res)=>{
  Vendas.create({
    client:req.body.client,
    nomeServico:req.body.servico,
    quantidade:req.body.quantidade,
    valor:req.body.valorUnit,
    valorServico:req.body.valorServico,
    dataCreate:req.body.dataCreate,
    dataEntrega:req.body.dataEnt,
   
  }).then(
  res.render('certo')
)
})
app.post('/addPessoa', (req, res) => {
  Clients.create({
    nome:req.body.nome,
    email:req.body.email,
    telefone:req.body.telefone,
    endereco:req.body.endereco,
    cep:req.body.cep,
    cpf:req.body.cpf
  }).then(
  res.render('certo')
)
})
app.post('/addServico',(req,res)=>{
  Servicos.create({
    nome:req.body.servico,
    descricao:req.body.descricao,
    valorUnitario:req.body.valor,
  }).then(
    res.render('certo')
  )
}) 
app.post('/deletPessoa/:id', (req, res)=>{
  Clients.destroy(
  {where:{'id':req.params.id}}).then(
    res.render('certo')
)

})
app.post('/deletServico/:id', (req, res)=>{
  Servicos.destroy(
  {where:{'id':req.params.id}}).then(
    res.render('certo')
)

})
app.post('/relatorios',(req, res)=>{
  Clients.findAll({order:[['id','DESC']]}).then(function(client){
    Servicos.findAll({order:[['id','DESC']]}).then(function(servico){
      Vendas.findAll({order:[['id','DESC']]}).then(function(vendas){
        Pagamento.findAll({order:[['id','DESC']]}).then(function(pagamento){
         res.render('relatarios',{client:client,servico:servico,vendas:vendas,pagamento:pagamento})
        })
      })
    })
  })
})
app.post('/ordenServico',(req,res)=>{
  Clients.findAll({order:[['id','DESC']]}).then(function(client){
    Servicos.findAll({order:[['id','DESC']]}).then(function(servico){
      Vendas.findAll({order:[['id','DESC']]}).then(function(vendas){
        Pagamento.findAll({order:[['id','DESC']]}).then(function(pagamento){
          Empresa.findAll({order:[['id','ASC']]}).then(function(empresa){
            res.render('ordenServico',{client:client,servico:servico,vendas:vendas,pagamento:pagamento,empresa:empresa})
          })
        })
      })
    })
  })
})

app.listen(port, err => {
  if (!err) {
    console.log('aberto no site localhost:', port)
  } else {
    console.log(err)
  }
})
// © 2022 GitHub, Inc.
// Terms
// Privacy
// Security