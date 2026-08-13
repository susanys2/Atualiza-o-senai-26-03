import {soma, subtrai} from '../calculadora.js';

//FUNÇÃO
describe("Testes para realizar calculos matemáticos", () => {
    test("Deve somar dois números corretamente", () => {
        expect(soma(3, 4)).toBe(7)
    })
})