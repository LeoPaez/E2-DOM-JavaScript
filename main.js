const pizzas = [
    {},
    {
        "id": 1,
        "nombre": "Muza",
        "ingredientes": ["Tomate", "Mozarela", "Oregano"],
        "precio": 500
    },
    {
        "id": 2,
        "nombre": "Margarita",
        "ingredientes": ["Tomate", "Mozarela", "Albahaca"],
        "precio": 600
    },
    {
        "id": 3,
        "nombre": "Cuatro Quesos",
        "ingredientes": ["Mozarela", "Gorgonzola", "Fontina", "Parmesano"],
        "precio": 800
    },
    {
        "id": 4,
        "nombre": "Fugazzeta",
        "ingredientes": ["Mozarela", "Cebolla"],
        "precio": 600
    },
    {
        "id": 5,
        "nombre": "Pepperoni",
        "ingredientes": ["Tomate", "Mozarela", "Pepperoni"],
        "precio": 700
    },
    {
        "id": 6,
        "nombre": "JamonYMorron",
        "ingredientes": ["Tomate", "Mozarela", "Jamon", "Morron"],
        "precio": 700
    }
]

const pizzasContainer = document.getElementById('pizzas-container');
const form = document.getElementById("form")
const spanH2 = document.getElementById("span-h2")
const spanH4 = document.getElementById("span-h4")
const falla = document.getElementById("falla")
const clear = document.getElementById("clear")

function capturar() {
  // Obtenemos el valor por el id
  const input = document.getElementById("pizzas-input").value;

  if(input >= 1 && input <= 6) {
    spanH2.innerHTML = `
    ${pizzas[input]["nombre"]}
    
    `
    spanH4.innerHTML = `
    ${pizzas[input]["precio"]}
    
    `
    spanH2.classList.remove("null")
    spanH4.classList.remove("null")
    falla.classList.add("ok")

  } else {
    falla.innerHTML = `
        No hay una pizza con ese ID
    `
    falla.classList.remove("ok")
  }
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
})

clear.onclick = () => {
    spanH2.innerHTML = `
    Ingrese un ID
    `
    spanH4.innerHTML = `
    Ingrese un ID
    `
    spanH2.classList.add("null")
    spanH4.classList.add("null")
}
