addEvent (document, "DOMContentLoaded", function () {
    console.log("DOM content loaded");
    
    const arrows_left = document.getElementsByClassName("arrowbox-left"),
    arrows_right = document.getElementsByClassName("arrowbox-right");
    
    function nextImg (carousel) {
        
        if (carousel === "carousel1") {
            var imageClassName = "teamproject_img";
        } else {
            var imageClassName = "singleproject_img";
        }

        let active = document.querySelector(`#${carousel} > .active`),
        images = document.getElementsByClassName(imageClassName);
        items = images.length, 
        id = active.id.split("-");
        
        if (!Number(id[1])) { console.log("Error: Invalid class-name") }
        else if(id[1] == items) { id[1] = "1"}
        else {
            id[1] = (Number(id[1]) + 1).toString();
        }

        newID = id.join("-");
        active.className = imageClassName;
        document.getElementById(newID).className = `${imageClassName} active`;
    }
    
    function prevImg (carousel) {
        
        if (carousel === "carousel1") {
            var imageClassName = "teamproject_img";
        } else {
            var imageClassName = "singleproject_img";
        }

        let active = document.querySelector(`#${carousel} > .active`),
        images = document.getElementsByClassName(imageClassName);
        items = images.length, 
        id = active.id.split("-");
        
        if (!Number(id[1])) { console.log("Error: Invalid class-name") }
        else if(id[1] == 1) { id[1] = items.toString();}
        else {
            id[1] = (Number(id[1]) - 1).toString();
        }

        newID = id.join("-");
        active.className = imageClassName;
        document.getElementById(newID).className = `${imageClassName} active`;
    }
    
    addEvent(arrows_right[0], "click", function () {nextImg("carousel1")});
    addEvent(arrows_right[1], "click", function () {nextImg("carousel2")});
    addEvent(arrows_left[0], "click", function () {prevImg("carousel1")});
    addEvent(arrows_left[1], "click", function () {prevImg("carousel2")});
});