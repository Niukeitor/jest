// importar la función sum del archivo app.js
//*const { sum } = require('./app.js');

// comienza tu primera prueba
//test('adds 14 + 9 to equal 23', () => {
//dentro de la prueba llamamos a nuestra función sum con 2 números
//let total = sum(14, 9);

// esperamos que la suma de esos 2 números sea 23
//expect(total).toBe(23);
//});
test("One dollar shoul be 153.48 Yens", function () {
    // importar la función sum del archivo app.js
    const { fromDollarToYen } = require('./app.js');


    // utilizo la funcion de la forma que espera que funcione
    const Yens = fromDollarToYen(1)

    const expected = 1 * 153.48;

    expect(expected).toBe(Yens);
})
test("One euro shoul be 1.206 dollars", function () {
    // importar la función sum del archivo app.js
    const { fromEuroToDollar } = require('./app.js');


    // utilizo la funcion de la forma que espera que funcione
    const dollar = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2;

    expect(expected).toBe(dollar);
})

test("One yen shoul be 0.0067", function () {
    // importar la función sum del archivo app.js
    const { fromYenToPound } = require('./app.js');


    // utilizo la funcion de la forma que espera que funcione
    const yen = fromYenToPound(1000)

    const expected = 1000 * 0.0067;

    expect(expected).toBe(yen);
})

