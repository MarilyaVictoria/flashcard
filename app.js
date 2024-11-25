function criacartao (categoria, pergunta, resposta) {
    let container = document.getElementById ('conainer')
    let cartao = document.createElement ('article')
    cartao.className = 'cartao'

    cartao.innerHTML = ` 
    <div class="cartao__conteudo">
    <h3>História</h3>
    <div class="cartao__conteudo__pergunta">
        <p>Qual é o nome do presidente do Brasil que ficou conhecido como Jango?</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>João Goulart</p>
    </div>
    `

    container.appendChild(cartao)
}