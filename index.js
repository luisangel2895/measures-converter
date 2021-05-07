
export default function measures_converter(quantity, type){

    if(type == "lb") {
        return `${quantity} lb is equivalence to ${quantity * 0.453592} kg`
    } else if(type == "kg") {
        return `${quantity} kg is equivalence to ${quantity * 2.20462} lb`
    } else {
        return "Please use a valid type"
    }

}
