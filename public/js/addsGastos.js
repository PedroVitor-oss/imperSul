const adds=[
    {
        nome:"Pessoas gastos",
        inner:`
        <form action="/addPessoaGasto" method="post">
        <h1>nome</h1>
        <input type="text" name="nome">
        <h1>numero</h1>
        <input type="text" name="numero">
        <h1>CPF</h1>
        <input type="text" name="cpf">
        <h1 >empresa</h1>
        <input type="text" name="empresa">
        <div  onclick="empresa(this)" class="no-ative" >não</div>
        <h1>tipo</h1>
        <input type="text" name="tipo" list="tiposG">
        <button type="submit">Cadastrar</button>
    </form>
    <datalist id="tiposG"></datalist>
        `
    },
    {
        nome:"gasto",
        inner:`
        <form action="/addGasto" method="post" >
        <div class="tipos">
        <h1>Tipo de gasto</h1>
        <select name="tipo" id="tipoGastSelect"></select>
        </div>
        <h1>Para</h1>
        <select name="para" id="paraQuem"></select>
        <h1>valor</h1>
        <input type="number" name="valor">
        <h1>data</h1>
        <input type="text" name="data" id="data">
        <h1>descrição</h1>
        <textArea type="text" name="describe" ></textArea>
        <button type="submit">Cadastrar</button>
        </form>
        `
    }
]
const urlParams = new URLSearchParams(window.location.search);
const tipo = urlParams.get("t")
tipo=='p'?$("body").append(adds[0].inner):$("body").append(adds[1].inner);

if(tipo == 'g'){
    //adicionando opição de tipos
    opitions = []
    for(let item of PessoasGastos){
        jaExist = 0;
        for(opt of opitions){
            if(opt == item.tipo){
                jaExist = 1;
            }
        }
        if(!jaExist){
            opitions.push(item.tipo);
            $("#tipoGastSelect").append(`<option value="`+item.tipo+`">`+item.tipo+`</option>`)
        }
    }
    //adicionando pessoas
    for(item of PessoasGastos){
        $("#paraQuem").append(`<option value="`+item.nome+`">`+item.nome+`</option>`)
    }
    //adicionando data 
    let data = new Date();
    let dia = data.getDate();
    dia = String(dia)
    if(dia.length == 1){
        dia = '0'+dia
    }
    let mes = data.getMonth()+1
    mes = String(mes)
    if(mes.length == 1){
        mes = '0'+mes
    }
    let ano = data.getFullYear();
    $('input#data').val(dia+"/"+mes+"/"+ano)
    console.log( $('input#data').val())
}else{
     //adicionando opição de tipos
     opitions = []
     for(let item of PessoasGastos){
         jaExist = 0;
         for(opt of opitions){
             if(opt == item.tipo){
                 jaExist = 1;
             }
         }
         if(!jaExist){
             opitions.push(item.tipo);
             $("#tiposG").append(`<option value="`+item.tipo+`">`+item.tipo+`</option>`)
         }
     }
}

const empresaValue = $('input[name="empresa"]');
function empresa(i){
    if(i.classList[0] == 'no-ative'){
        i.classList.remove('no-ative');
        i.classList.add('ative');
        i.innerHTML = 'sim'
        
        empresaValue.val('1')
    }else{
        i.classList.remove('ative');
        i.classList.add('no-ative');
        i.innerHTML = 'não'
        empresaValue.val('0')
    }
    console.log(empresaValue.val())
}