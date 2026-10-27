const adega = [
    {
        nome: "Cabernet Sauvignon Reserva",
        tipo: "Tinto",
        safra: 2023,
        estoque: 6
    },

    {
        nome: "Casa Valduga Naturelle",
        tipo: "Rosé",
        safra: 2016,
        estoque: 7
    },

    {
        nome: "Chardonnay Reserva",
        tipo: "Branco",
        safra: 2006,
        estoque: 4
    },
]

function adicionar_vinhos(nome, tipo, safra, estoque){
  adega.push({nome, tipo, safra, estoque})
}

function listar_vinhos(lista){
  lista.forEach(vinho => {
    console.log(`Nome: ${vinho.nome}\nTipo: ${vinho.tipo}\nSafra: ${vinho.safra}\nEstoque: ${vinho.estoque}\n----------------------------------------`)
  })
}

function estoque_baixo(limite = 5){
  return adega.filter(vinho => vinho.estoque < limite)
}

function estoque_total(){
  return adega.reduce((total, vinho) => total + vinho.estoque, 0)
}

adicionar_vinhos("Merlot Seleção", "Tinto", 2022, 3)
adicionar_vinhos("Pinot Noir", "Tinto", 2022, 13)

alert("Vinhos cadastrados! Veja melhor no console")

console.log("Vinhos:")
listar_vinhos(adega)

console.log("\nVinhos com estoque baixo:")
const estoqueBaixo = estoque_baixo(5)
listar_vinhos(estoqueBaixo)

console.log("\nEstoque total:")
const total = estoque_total()
console.log(`${total} garrafas`)