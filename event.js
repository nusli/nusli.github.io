function addEvent (element, event, fn) {
    if (element.attachEvent) {
        return element.attachEvent("on"+event, fn);
    } else {
        return element.addEventListener(event, fn);
    }
}