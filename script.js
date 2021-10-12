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
            <img class="imagem-produtos" src="${item.image}">
            <h5 class="produtos-nome">${item.name}</h5>
            <p class="descricao">${item.description}</p>
            <p class="preco-antigo">De: R$${item.oldPrice}</p>
            <p class="preco"> Por: R$${item.price}</p>
            <p class="parcelamento"> ou ${item.installments.count}x de R$${item.installments.value}</p>
            <button class="button-api">Comprar</button>
            
            </div>`);
    });
    products2.forEach((item) => {
      $(`#produtos-linha-dois`).append(`<div class="produtos"> 
            <img class="imagem-produtos" src="${item.image}">
            <h5 class="produtos-nome">${item.name}</h5>
            <p class="descricao">${item.description}</p>
            <p class="preco-antigo">De: R$${item.oldPrice}</p>
            <p class="preco"> Por: R$${item.price}</p>
            <p class="parcelamento"> ou ${item.installments.count}x de R$${item.installments.value}</p>
            <button class="button-api">Comprar</button>
             
            </div>`);
    });
  });

$(".mais-api").click(() => {
  $(".mais-button").css("display", "none");
  $(".verMenos-button").css("display", "block");

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
        <img class="imagem-produtos" src="${item.image}">
                    <h5 class="produtos-nome">${item.name}</h5>
            <p class="descricao">${item.description}</p>
            <p class="preco-antigo">De: R$${item.oldPrice}</p>
            <p class="preco"> Por: R$${item.price}</p>
            <p class="parcelamento"> ou ${item.installments.count}x de R$${item.installments.value}</p>
            <button class="button-api">Comprar</button>
         
            </div>`);
      });

      products2.forEach((item) => {
        $(`#produtos-linha-quatro`).append(`<div class="produtos"> 
        <img class="imagem-produtos" src="${item.image}">
        
        <h5 class="produtos-nome">${item.name}</h5>
        <p class="descricao">${item.description}</p>
        <p class="preco-antigo">De: R$${item.oldPrice}</p>
        <p class="preco"> Por: R$${item.price}</p>
        <p class="parcelamento"> ou ${item.installments.count}x de R$${item.installments.value}</p>
        <button class="button-api">Comprar</button>
            
            </div>`);
      });
    });
});

$(".verMenos-button").click(() => {
  $("#produtos-linha-tres").remove();
  $("#produtos-linha-quatro").remove();
  $(".verMenos-button").css("display", "none");
  $(".mais-button").css("display", "block");
});
