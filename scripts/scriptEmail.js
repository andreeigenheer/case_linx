fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`)
.then(resposta => resposta.json()) 
.then((dados)=>{
    $('.container-produtos-email').prepend(`<div class="lista-um" id="produtos-linha-um"></div>`)
    
    let {products} = dados
    let [item0,item1] = products
    let products1 = [item0,item1]   
    
    products1.forEach((item) => {
      $(`#produtos-linha-um`).append(`<div class="produtos"> 
      <img class="imagem-produtos" src="http:${item.image}">
      <div class="produtos-itens">
      <h4 class="produtos-nome">${item.name}</h4>
      <p class="descricao">${item.description}</p>
      <p class="preco-antigo">De:${item.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}</p>
      <p class="preco"> Por:${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}</p>
      <p class="parcelamento"> ou ${item.installments.count.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}x de ${item.installments.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}</p>
      <button class="button-api">Comprar</button>

       
              
              </div>`);
        
               
})
});