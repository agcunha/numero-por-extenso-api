'use strict';
 
const Number = require('../json/number');
const numeroext = require('numero-por-extenso');
 
class NumberRepository {
    constructor() {
    }
	
	getFullNumber(number) {
        var objnumber = new Number(number);
        objnumber.extenso = numeroext.porExtenso(number);
        return({'extenso' : objnumber.extenso});
    }
}
 
const numberRepository = new NumberRepository();
 
module.exports = numberRepository;