String.prototype.erLik = function(text){
    if (text == this){
        return true;
    }
    let go = this.replace(/å/g, 'aa')
        .replace(/Å/g, 'Aa')
        .replace(/[óòô]/g,'o')
        .replace(/[ÓÒÔ]/g,'O')
        .replace(/[éèê]/g, 'e')
        .replace(/[ÉÈÊ]/g, 'E')
        .replace(/æ/g, 'ae')
        .replace(/Æ/g, 'Ae')
        .replace(/ø/g, 'oe')
        .replace(/Ø/g, 'Oe');
    return go === text;
}

var test = String("bokmÒØl");
console.log(test.erLik("bokmaal"));
console.log(test.erLik("bokmOOel"));