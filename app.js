// esta es mi función que suma dos números
//const sum = (a,b) => {
  //  return a + b
//}

// solo un registro en consola para nosotros.
//console.log(sum(7,3))//

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
const fromEuroToDollar = (Value) => {
    return Value * 1.2
}

const fromDollarToYen = (Value) => {
    return Value * 153.48
}

const fromYenToPound = (Value) => {
    return Value * 0.0067
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
