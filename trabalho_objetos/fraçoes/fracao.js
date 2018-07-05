class Fraction{
    constructor(numerator,denominator){
        this._numerator = numerator;
        this._denominator = denominator;
    }
    get numerator(){
        return this._numerator;
    }
    get denominator(){
        return this._denominator;
    }
    toString(){
        return (this._numerator+'/'+this._denominator);
    }
    mmc(n,n2){
        let a = n1;
        let b = n2;
        do {
            resto = a % b;
            a = b;
            b = resto;
        } 
        while (resto != 0);  
            return ( n1 * n2) / a;
    }
    plus(n){
        if (n.denominator === this._denominator) {
            return new Fraction(this._numerator +
                n.numerator, this._denominator);
        }
    }
    get canReduce(){
        if (this._numerator > this._denominator) {
            for (let i = 2; i <= this._numerator; i++) {
                if ((this._numerator % i === 0) && (this._denominator % i === 0)){
                    return true; 
                }
            }
            return false;
        }
        if (this._numerator < this._denominator) {
            for (let i = 2; i <= this._denominator; i++) {
                if ((this._numerator % i === 0) && (this._denominator % i === 0)){
                    return true;
                }
            }
            return false;
        }
    }
    reduce() {
        if (this.canReduce) {
            if (this._numerator > this._denominator) {
                for (let i = 2; i <= this._numerator; i++) {
                    if ((this._numerator % i === 0) && (this._denominator % i === 0)) {
                        this._numerator = this._numerator / i;
                        this._denominator = this._denominator / i;
                    }
                }
            }
            if (this._numerator < this._denominator) {
                for (let i = 2; i <= this._denominator; i++) {
                    if ((this._numerator % i === 0) && (this._denominator % i === 0)) {
                        this._numerator = this._numerator / i;
                        this._denominator = this._denominator / i;
                    }
                }
            }
        }  
    }

    divide(n){
        return ((n.denominator*this._numerator)+'/'+(n.numerator*this._denominator));
    }
    multiply(n){
        return ((n._numerator*this._numerator)+'/'+(n.denominator*this._denominator));
    }
    greaterThan(n) {
        const n1 = n.numerator / n.denominator;
        const n2 = this._numerator / this._denominator;
        if (n1 < n2){
            return true;
        } 
        else{
            return false;
        } 
    }
    lessThan(n) {
        const n1 = n.numerator / n.denominator;
        const n2 = this._numerator / this._denominator;
        if (n1 > n2){
            return true;
        } 
        else{
            return false;
        } 
    }
    equals(n){
        const n1 = n.numerator / n.denominator;
        const n2 = this._numerator / this._denominator;
        if (n1 === n2){
            return true;
        } 
        else{
            return false;
        } 
    }
}
        
// Fraction(numerator, denominator)
const fr = new Fraction(3, 4); // para representar "três quartos"
console.log(fr.numerator === 3);
console.log(fr.denominator === 4);
console.log(fr.toString()); // imprime, por exemplo: "3/4"
console.log(fr.toString() === '3/4');
// as seguintes linhas não devem funcionar
fr.numerator = 10;
fr.denominator = 10;
// -----------------------
 
const f1 = new Fraction(4, 15);
console.log(f1.toString() === '4/15');
 
const f2 = new Fraction(5, 15);
console.log(f2.toString() === '5/15');
 
const f3 = f1.plus(f2); // representaria uma situação de: f1 + f2
console.log(f3.toString()); // imprime "9/15"
console.log(f3.toString() === '9/15');
// TODO: mais 3 casos de teste com plus
const f4 = new Fraction(1, 3);
console.log(f4.canReduce); // imprime false
console.log(f4.canReduce === false);
 
const f5 = new Fraction(9, 15);
console.log(f5.canReduce); // imprime true
console.log(f5.canReduce === true);
 
f5.reduce();
console.log(f5.toString() === '3/5');
console.log(f5.canReduce === false);
// TODO: escreva mais 3 casos de teste com reduce
 
const f6 = new Fraction(25, 4);
const f7 = new Fraction(2, 5);
 
const f8 = f6.divide(f7);
console.log(f8); // imprime "125/8"
// TODO: escreva mais 3 casos de teste com divide
 
const f9 = new Fraction(3, 7);
const f10 = new Fraction(2, 3);
 
const f11 = f9.multiply(f10);
console.log(f11.toString()); // imprime "6/21"
console.log(f11.toString() === '6/21'); // imprime "6/21"
// TODO: escreva mais 3 casos de teste com multiply
 
const f12 = new Fraction(7, 8);
const f13 = new Fraction(2, 5);
 
console.log(f12.greaterThan(f13)); // imprime "true"
console.log(f12.greaterThan(f13) === true);
console.log(f12.lessThan(f13)); // imprime "false"
console.log(f12.lessThan(f13) === false);
console.log(f12.equals(f13)); // false
console.log(f12.equals(f13) === false);
 
const f14 = new Fraction(2, 3);
const f15 = new Fraction(12, 36);
const f16 = new Fraction(1, 3);
// TODO: escreva mais 9 casos de teste com greaterThan, lessThan e equals
 
const f17 = new Fraction(4);
// TODO: escreva casos de teste para o valor que se espera de f17
 
const f18 = new Fraction();
// TODO: escreva casos de teste para o valor que se espera de f18