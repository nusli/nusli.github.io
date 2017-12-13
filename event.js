function addEvent (element, event, fn) {
    if (element.attachEvent) {
        return element.attachEvent("on"+event, fn);
    } else {
        return element.addEventListener(event, fn);
    }
}
function addEvents (list, event, fn) {
    
     if (list[0].attachEvent) {
         for (let i = 0; i<list.length; i++) {
           list[i].attachEvent("on"+event, fn);
         }
     } else {
         for (let i = 0; i<list.length; i++) {
           list[i].addEventListener(event, fn);
         }
     }   
 }