// liquidificadorr

class liquidificador1{
    constructor(watts, marca, VPMmin, VPMmax) {
        this._watts = watts;
        this._marca = marca;
        this._VPMmin = VPMmin;
        this._VPMmax = VPMmax;
        this._on = false;
        this._velocity = 0;
        this._rpm = 0;
    }
    get watts() {
        return this._watts;
    }
    get marca() {
        return this._marca;
    }
    get VPMmin() {
        return this._VPMmin;
    }
    get VPMmax() {
        return this._VPMmax;
    }
    get on() {
        return this._on;
    }
    get off() {
        return ! this._on;
    }
    get velocity() {
        return this._velocity;
    }
    get rpm() {
        return this._rpm;
    }
    speedUp() {
        this._on = true;
        this._velocity < 3? this._velocity++:this._velocity;
        this._velocity === 1? this._rpm = this._VPMmin:null;
        this._velocity === 2? this._rpm = (this._VPMmin + this._VPMmax)/2:null;
        this.velocity === 3? this._rpm = this._VPMmax:null;
    }
    slowDown() {
        if (this._velocity === 1) {
            this._on = ! this._on;
            this._rpm = 0;
            this._velocity = 0;
        } else {
            this._velocity > 0? this._velocity--:null;
            this._velocity === 2?this._rpm =(this._VPMmin + this.VPMmax)/2:null;
            this.velocity === 1? this._rpm = this.VPMmin: null;
        }
    }
    turnOff() {
        this._on = false;
        this._velocity = 0;
        this._rpm = 0;
    }
}
const liquidificador = new liquidificador1(100, 'philco', 50, 110);
console.log(liquidificador.watts === 100);
console.log(liquidificador.marca === 'philco');
console.log(liquidificador.VPMmin === 50);
console.log(liquidificador.VPMmax === 110);

console.log(liquidificador.on); // false
console.log(liquidificador.on === false);
console.log(liquidificador.off); // true
console.log(liquidificador.off === true);
console.log(liquidificador.velocity); // 0
console.log(liquidificador.velocity === 0);
console.log(liquidificador.rpm); // 0
console.log(liquidificador.rpm === 0);

liquidificador.speedUp();
console.log(liquidificador.on === true);
console.log(liquidificador.off === false);
console.log(liquidificador.velocity === 1);
console.log(liquidificador.rpm === 100);

liquidificador.slowDown();
console.log(liquidificador.on === false);
console.log(liquidificador.off === true);
console.log(liquidificador.velocity === 0);
console.log(liquidificador.rpm === 0);

console.log(liquidificador.on === false);
console.log(liquidificador.off === true);
console.log(liquidificador.velocity === 0);
console.log(liquidificador.rpm === 0);

console.log(liquidificador.on === false);
console.log(liquidificador.off === true);
console.log(liquidificador.velocity === 0);
console.log(liquidificador.rpm === 0);

liquidificador.speedUp();
console.log(liquidificador.on === true);
console.log(liquidificador.off === false);
console.log(liquidificador.velocity === 1);
console.log(liquidificador.rpm === 100);
liquidificador.speedUp();
console.log(liquidificador.on === true);
console.log(liquidificador.off === false);
console.log(liquidificador.velocity === 2);
console.log(liquidificador.rpm === 200); // mean between min and max
liquidificador.speedUp();
console.log(liquidificador.on === true);
console.log(liquidificador.off === false);
console.log(liquidificador.velocity === 3);
console.log(liquidificador.rpm === 300);
liquidificador.speedUp(); // should not have effect
console.log(liquidificador.on === true);
console.log(liquidificador.off === false);
console.log(liquidificador.velocity === 3);
console.log(liquidificador.rpm === 300);

liquidificador.slowDown();
console.log(liquidificador.on === true);
console.log(liquidificador.off === false);
console.log(liquidificador.velocity === 2);
console.log(liquidificador.rpm === 200);
liquidificador.slowDown();
console.log(liquidificador.on === true);
console.log(liquidificador.off === false);
console.log(liquidificador.velocity === 1);
console.log(liquidificador.rpm === 100);
liquidificador.slowDown();
console.log(liquidificador.on === false);
console.log(liquidificador.off === true);
console.log(liquidificador.velocity === 0);
console.log(liquidificador.rpm === 0);
liquidificador.slowDown(); // should not have effect
console.log(liquidificador.on === false);
console.log(liquidificador.off === true);
console.log(liquidificador.velocity === 0);
console.log(liquidificador.rpm === 0);

const liquidificador2 = new liquidificador1(250, 'seila', 80, 400);
console.log(liquidificador2.watts === 250);
console.log(liquidificador2.marca === 'seila');
console.log(liquidificador2.VPMmin === 80);
console.log(liquidificador2.VPMmax === 400);
console.log(liquidificador2.on === false);
console.log(liquidificador2.off === true);
console.log(liquidificador2.velocity === 0);
console.log(liquidificador2.rpm === 0);

liquidificador2.speedUp();
console.log(liquidificador2.velocity === 1);
console.log(liquidificador2.rpm === 80);
liquidificador2.speedUp();
console.log(liquidificador2.velocity === 2);
console.log(liquidificador2.rpm === 240); // mean between min and max
liquidificador2.speedUp();
console.log(liquidificador2.velocity === 3);
console.log(liquidificador2.rpm === 400);

liquidificador2.turnOff();
console.log(liquidificador2.on === false);
console.log(liquidificador2.off === true);
console.log(ventliquidificador22.velocity === 0);
console.log(liquidificador2.rpm === 0);