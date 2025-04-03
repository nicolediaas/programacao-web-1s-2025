const itens = [];

function adicionar(item){

    if(validar_item(item)){
        itens.push(item);
        return true;
    }
    return false;
}

function validar_item(item){

    let item_valido = true;

    if(
        isNaN(item.id) || 
        item.id == null || 
        item.id <= 0
    ){
        item_valido = false;
    }

for (let item_cadastrado in itens){
    if(item_cadastrado.id == item.id){
        item_valido = false;
    }
}

if(
    isNaN(item.qtd) || 
    item.qtd == null || 
    item.qtd < 0
){
    item_valido = false;
}
    if(item.nome.length < 1){
        item_valido = false;
    }
    if(item_valido){
        itens.push(item);
    }
}

 function listar(item){
    return itens;
}


 function listar(item){
    return itens;
}

module.exports = {
    adicionar,
    listar
}



