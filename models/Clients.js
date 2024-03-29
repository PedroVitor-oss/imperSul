const db = require('./bancDado')

const Pagamento = db.sequelize.define('pagamento',{
    client:{
        type:db.Sequelize.STRING
    },
    dataPedido:{
        type:db.Sequelize.STRING
    },
    valorTotal:{
        type:db.Sequelize.INTEGER
    },
    tipoPagamento:{
        type: db.Sequelize.STRING
    },
    formaPagamneto:{
        type: db.Sequelize.STRING
    },
    parcelado:{
        type: db.Sequelize.STRING
    },
    valorParcelado:{
        type: db.Sequelize.STRING
    },
    Vencimento:{
        type: db.Sequelize.STRING
    },
    Servicos:{
        type: db.Sequelize.STRING
    },
    valores:{
        type:db.Sequelize.STRING
    }
})

const Client = db.sequelize.define('clients',{
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    endereco:{
        type: db.Sequelize.TEXT
    },
    cep: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
});
const Servico = db.sequelize.define('servicos',{
    nome: {
        type: db.Sequelize.STRING
    },
    descricao: {
        type: db.Sequelize.TEXT
    },
    valorUnitario: {
        type: db.Sequelize.INTEGER
    },
});
const Vendas = db.sequelize.define('vendas',{
    client:{
        type:db.Sequelize.STRING
    },
    nomeServico:{
        type:db.Sequelize.STRING
    },
    quantidade:{
        type:db.Sequelize.INTEGER
    },
    valor:{
        type: db.Sequelize.STRING
    },
    dataCreate:{
        type: db.Sequelize.STRING
    },
    dataEntrega:{
        type: db.Sequelize.STRING
    },
    valorServico:{
        type: db.Sequelize.STRING
    },
});
const Empresa= db.sequelize.define('empresa',{
    nome: {
        type: db.Sequelize.STRING
    },
    logo:{
        type:db.Sequelize.STRING      
    },
    cidade:{
        type: db.Sequelize.STRING
    },
    endereco:{
        type: db.Sequelize.STRING
    },
    cnpj:{
        type: db.Sequelize.STRING(14)
    },
    telefone:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    }
})
const Gastos= db.sequelize.define('gastos',{
    tipo:{
        type: db.Sequelize.TEXT
    },
    para:{
        type: db.Sequelize.TEXT
    },
    valor:{
        type: db.Sequelize.TEXT
    },
    dia:{
        type:db.Sequelize.TEXT
    },
    describe:{
        type:db.Sequelize.TEXT
    }
})
const Pgastos= db.sequelize.define('Pgastos',{
    nome:{
        type: db.Sequelize.TEXT
    },
    numero:{
        type: db.Sequelize.TEXT
    },
    cpf:{
        type: db.Sequelize.TEXT
    },
    empresa:{
        type:db.Sequelize.TEXT
    },
    tipo:{
        type:db.Sequelize.TEXT
    },

})
// Gastos.sync({force:true})
// Client.sync({force:true})
// Servico.sync({force:true})
// Vendas.sync({force:true})
// Pagamento.sync({force:true})
// Empresa.sync({force:true})
// Pgastos.sync({force:true})


 module.exports = {Client,Servico,Vendas,Pagamento,Empresa,Gastos,Pgastos}