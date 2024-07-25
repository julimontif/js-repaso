const Rectangulo = class R {
}

class Chancho {
   propiedad = "mi propiedad"
   #hambre
   static estatico = 42
    constructor(estado = "feliz", hambre = true) {
        //console.log(`soy un chancho ${estado}`);
        this.estado = estado
        this.#hambre = hambre
    }

    hablar(){
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? "con mucha hambre!" : "satisfecho!"}`);
    }

    static comer(){
        console.log(this.estatico, "estoy comiendo");
    }
}

Chancho.comer()
const feliz = new Chancho("feliz")
//console.log(feliz);
//feliz.hablar()
const triste = new Chancho("triste")
//console.log(triste);
triste.hablar()
const nose = new Chancho()
//nose.hablar()

