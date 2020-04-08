/**
 * File: conversions.ts
 * Author: Renato Reis
 * Date: 07/04/2020
 */

 class Conversions {

    public convertStringtoFloat(value){
        let number = value.slice(2,11);
        number = number.replace(".", "");
        number = number.replace(",",".");
        number = parseFloat(number);
        number = number.toFixed(2);
        return number;
    }

    public convertCoin(value) {
        let vlr = parseFloat(value);
        let number = vlr.toFixed(2).split('.');
        number[0] = "R$" + number[0].split(/(?=(?:...)*$)/).join('.');
        let vlrConvert = number.join(',');
        return vlrConvert;

    }

 }

 const conversions = new Conversions();
 export default conversions;