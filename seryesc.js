class Dado{
    lanzarDado(){
        return Math.ceil(Math.random()*6);
    }
}
class Ficha{
    constructor(nomb){
        this.nomb = nomb
        this.pos = 0
        this.avan = 0
    }
    avanzar(num){
        this.avan = num + this.pos
        return this.avan
    }
}
class Tablero{
    cas(num){
        switch (num){
        case 2:
            console.log("Escalera de casilla 2, subes a la casilla 38 ")
            return 38;
        case 7:
            console.log("Escalera de casilla 7, subes a la casilla 14 ")
            return 14;
        case 8:
            console.log("Escalera de casilla 8, subes a la casilla 31 ")
            return 31;
        case 15:
            console.log("Escalera de casilla 15, subes a la casilla 26 ")
            return 26;
        case 21:
            console.log("Escalera de casilla 21, subes a la casilla 42 ")
            return 42;
        case 28:
            console.log("Escalera de casilla 28, subes a la casilla 84 ")
            return 84;
        case 36:
            console.log("Escalera de casilla 36, subes a la casilla 44 ")
            return 44;
        case 51:
            console.log("Escalera de casilla 51, subes a la casilla 67 ")
            return 67;
        case 71:
            console.log("Escalera de casilla 71, subes a la casilla 91 ")
            return 91;
        case 87:
            console.log("Escalera de casilla 87, subes a la casilla 94 ")
            return 94;
        case 16: 
        console.log("Serpiente de casilla 16, caes a la casilla 6 ")
            return 6;
        case 46:
            console.log("Serpiente de casilla 46, caes a la casilla 25 ")
            return 25;
        case 49:
            console.log("Serpiente de casilla 49, caes a la casilla 11 ")
            return 11;
        case 62:
            console.log("Serpiente de casilla 62, caes a la casilla 19 ")
            return 19;
        case 64:
            console.log("Serpiente de casilla 64, caes a la casilla 60 ")
            return 60;
        case 47:
            console.log("Serpiente de casilla 47, caes a la casilla 53 ")
            return 53;
        case 89:
            console.log("Serpiente de casilla 89, caes a la casilla 68 ")
            return 68;
        case 92:
            console.log("Serpiente de casilla 92, caes a la casilla 88 ")
            return 88;
        case 95:
            console.log("Serpiente de casilla 95, caes a la casilla 75 ")
            return 75;
        case 99:
            console.log("Serpiente de casilla 99, caes a la casilla 80 ")
            return 80;
        default: 
        return num
        }
    }
}
let dado = new Dado();
let mesa = new Tablero();
let fich1 = new Ficha("Ficha roja");
let fich2 = new Ficha("Ficha azul");

while (fich1.pos <= 100 && fich2.pos <=100){
    fich1.pos = mesa.cas(fich1.avanzar(dado.lanzarDado()));
    console.log(`${fich1.nomb} está en la casilla: ${fich1.pos}`)
    fich2.pos = mesa.cas(fich2.avanzar(dado.lanzarDado()));
    console.log(`${fich2.nomb} está en la cassilla: ${fich2.pos}`)
}
if(fich1.pos >= 100){
    console.log(`La ${fich1.nomb} ganó`)
}else if (fich2.pos >= 100){
    console.log(`La ${fich2.nomb} ganó`)
}