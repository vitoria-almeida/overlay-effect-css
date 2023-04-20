fetch('http://localhost:3000/burgers')
.then(req => req.json())
.then((data) => dados(data))

function dados(burgers) {
    const burgerHtml = burgers.map((burger) =>  
        `
            <div id="content">
                <img src="${burger.imagem}" id="image"/>

                <div id="image_overlay" class=${burger.classe}>
                    <div id="title">${burger.nome}</div>
                    <p id="price">${burger.preco}</p>
                </div>
            </div>
        `
    )

    document.getElementById('main').innerHTML = burgerHtml
}