addEvent (document, "DOMContentLoaded", function () {
    console.log("DOM content loaded");
    
    const arrows_left = document.getElementsByClassName("arrowbox-left"),
    arrows_right = document.getElementsByClassName("arrowbox-right");
    
    function nextImg (carousel) {
        let active = document.querySelector(`#${carousel} > .active`);
        let id = active.id;
        console.log(id);
    }
    
    addEvent(arrows_right[0], "click", function () {nextImg("carousel1")});
});