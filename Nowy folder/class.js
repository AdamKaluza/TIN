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
             obj.className.trim();
         }
     }else {
         obj.className = obj.className + " " + visible;
     }
}

// switchClassName(obj, 'visible');
// console.log(obj.className);
// switchClassName(obj, 'bordered');
// console.log(obj.className);

