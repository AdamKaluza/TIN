let obj = {
    className: 'first bordered'
}

function switchClassName(obj, visible) {
     let array = obj.className.split(" ");
     if(array.includes(visible)){
         array.splice(array.indexOf(visible),1);

          obj.className = "";
          for (let i =0; i < array.length;i++){
             obj.className = obj.className + array[i] + " ";
         }
         obj.className = obj.className.trim();
     }else {
         obj.className = obj.className + " " + visible;
     }
}

// switchClassName(obj, 'visible');
// console.log(obj.className + "a");
// switchClassName(obj, 'bordered');
// console.log(obj.className + "a");

var ob = {
    className: 'one twofold two unvisible'
}

switchClassName(ob, 'visible');
console.log(ob.className);
switchClassName(ob, 'visible');
console.log(ob.className);
switchClassName(ob, 'visible');
console.log(ob.className);
switchClassName(ob, 'two');
console.log(ob.className);
switchClassName(ob, 'two');
console.log(ob.className);
switchClassName(ob, 'one');
console.log(ob.className);