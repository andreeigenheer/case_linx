fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`)
.then(resposta => resposta.json()) 
.then((dados)=>{
    $('.container-produtos-email').prepend(`<div class="lista-um" id="produtos-linha-um"></div>`)
    
    let {products} = dados
    let [item0,item1] = products
    let products1 = [item0,item1]   
    
    products1.forEach((item) => {
        $(`#produtos-linha-um`).append(`<div class="produtos"> 
              <img class="imagem-produtos-email" src="http:${item.image}">
              <h5 class="produtos-nome-email">${item.name}</h5>
              <p class="descricao-email">${item.description}</p>
              <p class="preco-antigo-email">De: R$${item.oldPrice}</p>
              <p class="preco-email"> Por: R$${item.price}</p>
              <p class="parcelamento-email"> ou ${item.installments.count}x de R$${item.installments.value}</p>
              <button class="button-comprar-email">Comprar</button>
              
              </div>`);
        
               
})
});