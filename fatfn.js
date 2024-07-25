function Fn(){
    this.prop = "propiedad"
}

Fn.prototype.lala = function FuncionDePrototipo() {}

console.log(this);
const r =  new Fn();
//console.log(r);
console.log(r.__proto__);

const Fatfn = () => {
    this.prop ="lala";
}
const r1 = Fatfn();
console.log(this);

const fnR = () => 2
console.log(fnR());
