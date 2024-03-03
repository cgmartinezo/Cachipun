// Declaracion Variables
let ganaUsuario = 0
let ganaMaquina = 0
let empate = 0

// Comienza el Juego
let cantidadJuegos = parseInt(prompt(`Ingrese Cantidad de Juegos:`))
document.write("Cantidad Juegos: " + cantidadJuegos + " | ")

for (let i = 1; i <= cantidadJuegos; i++) {

    // ingrso Opcion del Usuario
    let juegoUsuario = parseInt(prompt(`Ingrese Numero de Juego: 
    1. Piedra 
    2. Papel 
    3.Tijera`))

    opciones(juegoUsuario)

    console.log(`"Juego Usuario" ${diceOpcion}`)
    document.write("Juego Usuario: " + diceOpcion + " | ")

    // recepcion juego de la maquina
    let juegoMaquina = Math.floor(Math.random() * 3) + 1
    opciones(juegoMaquina)
    console.log(`"Juego Maquina" ${diceOpcion}`)
    document.write("Juego Maquina: " + diceOpcion + " | ")

    console.log(`"Juego Nro " ${i} "de " ${cantidadJuegos}`)

    if (juegoUsuario === 3 && juegoMaquina === 2) {
        ganador = "usuario"
        funcionGanador(ganador)

    } else if (juegoUsuario === 2 && juegoMaquina === 1) {
        ganador = "usuario"
        funcionGanador(ganador)

    } else if (juegoUsuario === 1 && juegoMaquina === 3) {
        ganador = "usuario"
        funcionGanador(ganador)

    } else if (juegoMaquina === 3 && juegoUsuario === 2) {
        ganador = "maquina"
        funcionGanador(ganador)

    } else if (juegoMaquina === 2 && juegoUsuario === 1) {
        ganador = "maquina"
        funcionGanador(ganador)

    } else if (juegoMaquina === 1 && juegoUsuario === 3) {
        ganador = "maquina"
        funcionGanador(ganador)

    } else {
        ganador = "empate"
        funcionGanador(ganador)
    }
}

//Funcion del Ganador
function funcionGanador(ganador) {

    if (ganador === "usuario") {
        ganaUsuario++
        console.log(`"Gana Usuario" ${ganador}`)
        alert(`"Felicidades, le has ganado a la Maquina" ${ganaUsuario}`)
    } else if (ganador === "maquina") {
        ganaMaquina++
        console.log(`"Gana Maquina" ${ganaMaquina}`)
        alert(`"Lo siento,  te ha ganado la Maquina" ${ganaMaquina}`)
    } else {
        empate++
        console.log(`"Empate" ${empate}`)
        alert(`"Se ha declarado un empate" ${empate}`)
    }
}

// Funcion de Opciones del Juego
function opciones(opcion) {

    if (opcion === 1) {
        diceOpcion = "Piedra"
    } else if (opcion === 2) {
        diceOpcion = "Papel"
    } else {
        diceOpcion = "Tijera"

    }
}
