function createBuffer() {

    return (function (){
        let z = "";
        return function (name) {
            if(name !== undefined){
                z += name;
            }
            return z;
        }
    })();
}
// let buffer = createBuffer();
// buffer('Data');
// buffer(' aequatione ');
// buffer('quotcunque');
// console.log(buffer());