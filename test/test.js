const expect = require('chai').expect
const measures_converter = require('..').default
describe('Testeando el paquete mesures-converter', function(){

    it('Convertion lb to kg', function(){ 
        const convertion = measures_converter(10, "lb")
        expect(convertion).to.equal("10 lb is equivalence to 4.53592 kg")
    })

    it('Convertion kg to lb', function(){ 
        const convertion = measures_converter(10, "kg")
        expect(convertion).to.equal("10 kg is equivalence to 22.0462 lb")
    })

})