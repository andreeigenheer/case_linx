//Mascara para o CPF

function mascara(i){
   
  var v = i.value;
  
  if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
     i.value = v.substring(0, v.length-1);
     return;
  }
  
  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";

}


fetch(
  `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`
)
  .then((resposta) => resposta.json())
  .then((dados) => {
    $(".container-produtos").prepend(
      `<div class="lista-um" id="produtos-linha-um"></div>`
    );
    $(".container-produtos").append(
      `<div class="lista-dois" id="produtos-linha-dois"></div>`
    );

    let { products } = dados;
    let [item0, item1, item2, item3, item4, item5, item6, item7] = products;
    let products1 = [item0, item1, item2, item3];
    let products2 = [item4, item5, item6, item7];

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
    });
    products2.forEach((item) => {
      $(`#produtos-linha-dois`).append(`<div class="produtos"> 
            <img class="imagem-produtos" src="http:${item.image}">
            <div class="produtos-itens">
            <h4 class="produtos-nome">${item.name}</h4>
            <p class="descricao">${item.description}</p>
            <p class="preco-antigo">De: ${item.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}</p>
            <p class="preco"> Por:${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}</p>
            <p class="parcelamento"> ou ${item.installments.count.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}x de ${item.installments.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}</p>
            <button class="button-api">Comprar</button>
             
            </div>`);
    });
  });

$(".mais-api").click(() => {
  $(".mais-api").css("display", "none");
  $(".menos-api").css("display", "block");

  fetch(
    `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2`
  )
    .then((resposta) => resposta.json())
    .then((dados) => {
      $(".container-produtos").append(
        `<div class="lista-tres" id="produtos-linha-tres"></div>`
      );
      $(".container-produtos").append(
        `<div class="lista-quatro" id="produtos-linha-quatro"></div>`
      );
      let { products } = dados;
      let [item0, item1, item2, item3, item4, item5, item6, item7] = products;
      let products1 = [item0, item1, item2, item3];
      let products2 = [item4, item5, item6, item7];
      console.log(products1);
      products1.forEach((item) => {
        $(`#produtos-linha-tres`).append(`<div class="produtos"> 
        <img class="imagem-produtos" src="http:${item.image}">
        <div class="produtos-itens">
            <h4 class="produtos-nome">${item.name}</h4>
            <p class="descricao">${item.description}</p>
            <p class="preco-antigo">De:${item.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}</p>
            <p class="preco"> Por:${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}</p>
            <p class="parcelamento"> ou ${item.installments.count.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}x de R$${item.installments.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}</p>
            <button class="button-api">Comprar</button>
         
            </div>`);
      });

      products2.forEach((item) => {
        $(`#produtos-linha-quatro`).append(`<div class="produtos"> 
        <img class="imagem-produtos" src="http:${item.image}">
        <div class="produtos-itens">
         <h4 class="produtos-nome">${item.name}</h4>
        <p class="descricao">${item.description}</p>
        <p class="preco-antigo">De: R$${item.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}</p>
            <p class="preco"> Por:${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}</p>
            <p class="parcelamento"> ou ${item.installments.count.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}x de R$${item.installments.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minDigits: 2 })}</p>
        <button class="button-api">Comprar</button>
            
            </div>`);
      });
    });
});

$(".menos-api").click(() => {
  $("#produtos-linha-tres").remove();
  $("#produtos-linha-quatro").remove();
  $(".menos-api").css("display", "none");
  $(".mais-api").css("display", "block");
});
