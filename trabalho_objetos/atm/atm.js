class ATM{
    constructor(numeroSerie){
        this._numeroSerie = numeroSerie;
        this._din=[[5,0],[10,0],[20,0],[50,0],[100,0]];
        this._contem = 0;    
    }
    get numeroSerie(){
        return this._numeroSerie;
    }
    get valor(){
        this._aux2=0;
        for (var i = 0; i < this._din.length; i++) {
             this._contem = this._din[i][0] * this._din[i][1];
             this._aux2+=this._contem;
        }
        return this._aux2;
    }
    abastecer(abastece,dinheiro){
        if(((this._din[0][0]==dinheiro)||(this._din[1][0]==dinheiro)||(this._din[2][0]==dinheiro)||(this._din[3][0]==dinheiro)||(this._din[4][0]==dinheiro))&&((abastece>0)&&(abastece<=100))) {
            this._dinheiro = dinheiro;
            this._din = this._din;
             for(let i=0;i<5;i++){
               if(this._din[i][0]==dinheiro){
                   return this._din[i][1] = abastece;
               }
             }
           }
           else {
             return 0;
           }
    }
    cedulas(dinheiro){
        if (dinheiro==5 || dinheiro==10 || dinheiro == 20 || dinheiro == 50 || dinheiro == 100) {
            for(let i=0;i<5;i++){
              if(this._din[i][0]==dinheiro+""){
                return this._din[i][1];
              }
            }
          }
          else {
            return 0;
          }
    }
    retirar(saque) {
        if (saque <= this._aux2) {
        var i = this._din.length-1;
        let aux4=saque;
        while (i>=0) {
            let div = parseInt(aux4/this._din[i][0]);
            if(this._din[i][1]>=div){
            aux4-= this._din[i][0]*div;
          }
          if(aux4==0) {
             break;
          }
          i--;
        }
        if(aux4 == 0){
          for (var i = this._din.length-1; i >= 0; i--) {
            let div = parseInt(saque/this._din[i][0]);
            if (this._din[i][1]>= div) {
               for (var ctd = this._din.length-1; ctd >=0; ctd--) {
                    if (saque > 0 && this._din[ctd][1]>0 ) {
                      let div = parseInt(saque/this._din[ctd][0]);
                      if (this._din[ctd][1]>=div) {
                        this._aux2-=this._din[ctd][0]*div;
                        saque-= this._din[ctd][0]*div;
                        let aux1 = this._din[ctd][1]-div;
                        this._din[ctd][1] = aux1;
                      }
                    }
                 }
              }
            }
          }
        }
      }

}





const atm = new ATM(2344499);
console.log(atm.numeroSerie === 2344499);
// a linha a seguir não deve fazer efeito
atm.numeroSerie = 34883444;
console.log(atm.numeroSerie === 2344499);
// o ATM não tem dinheiro no início
console.log(atm.valor); // 0
console.log(atm.valor === 0);
// abastecendo com 33 notas de 100
atm.abastecer(33, 100);
// verificando a quantidade de cédulas de 100
console.log(atm.cedulas(100)); // 33
// espera-se 33 cédulas
console.log(atm.cedulas(100) === 33);
// e 33 * R$ 100 totalizando R$ 3300
console.log(atm.valor === 3300);
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.cedulas(5)); // 0
console.log(atm.cedulas(5) === 0);
console.log(atm.cedulas(50)); // 0
console.log(atm.cedulas(50) === 0);
// mesmo os que não existem podem ser consultados, mas retornam 0
console.log(atm.cedulas(3)); // 0
console.log(atm.cedulas(3) === 0);
// abastecimento de cédulas não existentes são rejeitados
atm.abastecer(8, 3); // 8 cédulas de R$ 3,00
console.log(atm.cedulas(3) === 0);
// consultando o valor
console.log(atm.valor); // 33 * 100 = 3300 reais
console.log(atm.valor === 3300);
// retirada rejeitada
atm.retirar(350); // não há cédulas de R$ 50,00
console.log(atm.cedulas(100) === 33);
console.log(atm.valor === 3300);
// retirada válida
atm.retirar(300); // 3 cédulas de 100
console.log(atm.cedulas(100) === 30);
console.log(atm.valor === 3000);
// retirada rejeitada
atm.retirar(3100); // não há cédulas suficientes
console.log(atm.cedulas(100) === 30);
console.log(atm.valor === 3000);
// retirada válida
atm.retirar(3000); // vai esvaziar o ATM
console.log(atm.cedulas(100) === 0);
console.log(atm.valor === 0);
// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecer(10, 10); // 10 cédulas de R$ 10,00
atm.abastecer(10, 50); // 10 cédulas de R$ 50,00
console.log(atm.cedulas(10) === 10);
console.log(atm.cedulas(50) === 10);
console.log(atm.valor === 600); // 10 * 10 + 10 * 50
// retirada prioriza cédulas de maior valor
atm.retirar(100); // retira 2 cédulas de R$ 50,00
console.log(atm.cedulas(10) === 10);
console.log(atm.cedulas(50) === 8);
console.log(atm.valor === 500); // 10 * 10 + 8 * 50
// retirada combinada
atm.retirar(90); // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.cedulas(10) === 6);
console.log(atm.cedulas(50) === 7);
console.log(atm.valor === 410); // 6 * 10 + 7 * 50
// até aqui 0.5 pts
// incluir casos de teste pessoais com retiradas
// quem combinam 3, 4 e 5 cédulas (+0.5 pts)
// ---------------------------------------------------
console.log('Meus testes ----------------------------------------');

atm.abastecer(10, 5);
    atm.abastecer(10, 100);
    atm.retirar(215);
    console.log(atm.cedulas(100) === 8); //800
    console.log(atm.cedulas(50) === 7); //350
    console.log(atm.cedulas(10) === 5);//50
    console.log(atm.cedulas(5) === 9);//45
    console.log(atm.valor === 1245); //800+350+50+45 = 1245
    atm.retirar(56);
    console.log(atm.cedulas(100) === 8); //800
    console.log(atm.cedulas(50) === 7); //350
    console.log(atm.cedulas(10) === 5);//50
    console.log(atm.cedulas(5) === 9);//45
    console.log(atm.valor === 1245); //800+350+50+45 = 1245
    atm.retirar(85);
    console.log(atm.cedulas(100) === 8);
    console.log(atm.cedulas(50) === 6);
    console.log(atm.cedulas(10) === 2);
    console.log(atm.cedulas(5) === 8);
    console.log(atm.valor === 1160);
    atm.retirar(25);
    console.log(atm.cedulas(100) === 8);
    console.log(atm.cedulas(50) === 6);
    console.log(atm.cedulas(10) === 0);
    console.log(atm.cedulas(5) === 7);
    console.log(atm.valor === 1135);
    atm.abastecer(10,20)
    atm.retirar(375);
    console.log(atm.cedulas(100) === 5);
    console.log(atm.cedulas(50) === 5);
    console.log(atm.cedulas(20) === 9);
    console.log(atm.cedulas(5) === 6);
    console.log(atm.valor === 960);//500+250+180+30 = 960
    atm.retirar(405);
    console.log(atm.cedulas(100) === 1);
    console.log(atm.cedulas(50) === 5);
    console.log(atm.cedulas(20) === 9);
    console.log(atm.cedulas(5) === 5);
    console.log(atm.valor === 555);//100+250+180+25 = 555
    atm.retirar(130);
    console.log(atm.cedulas(100) === 0);
    console.log(atm.cedulas(50) === 5);
    console.log(atm.cedulas(20) === 8);
    console.log(atm.cedulas(5) === 3);
    console.log(atm.valor === 425);//250+160+15 = 425
    atm.abastecer(10,10);
    atm.retirar(45);
    console.log(atm.cedulas(10) === 10);
    console.log(atm.cedulas(50) === 5);
    console.log(atm.cedulas(20) === 6);
    console.log(atm.cedulas(5) === 2);
    console.log(atm.valor === 480);//100+250+120+10 = 480
    atm.abastecer(10,100);
    atm.retirar(185);
    console.log(atm.cedulas(100) === 9);
    console.log(atm.cedulas(10) === 9);
    console.log(atm.cedulas(50) === 4);
    console.log(atm.cedulas(20) === 5);
    console.log(atm.cedulas(5) === 1);
    console.log(atm.valor === 1295);//900+90+200+100+5 = 1295
    atm.retirar(189);
    console.log(atm.cedulas(100) === 9);
    console.log(atm.cedulas(10) === 9);
    console.log(atm.cedulas(50) === 4);
    console.log(atm.cedulas(20) === 5);
    console.log(atm.cedulas(5) === 1);
    console.log(atm.valor === 1295);//900+80+150+120+5 = 1255