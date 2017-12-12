addEvent (document, "DOMContentLoaded", function () {
    console.log("DOM content loaded");
    
    // functions to change portfolio images
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
        hideLayer(active);
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
        /* Select previous Image */
        else if(id[1] == 1) { id[1] = items.toString();}
        else {
            id[1] = (Number(id[1]) - 1).toString();
        }

        newID = id.join("-");
        active.className = imageClassName;
        document.getElementById(newID).className = `${imageClassName} active`; //Assign 'active'class
        hideLayer(active);
    }
    
    addEvent(arrows_right[0], "click", function () {nextImg("carousel1")});
    addEvent(arrows_right[1], "click", function () {nextImg("carousel2")});
    addEvent(arrows_left[0], "click", function () {prevImg("carousel1")});
    addEvent(arrows_left[1], "click", function () {prevImg("carousel2")});

    /* functions to show image layer in portfolio */
    const teamProjects = document.getElementsByClassName("teamproject_img"),
    singleProjects =  document.getElementsByClassName("singleproject_img");

    function showLayer () {
        let anchor = this.children[0];
        anchor.style.height = "93%"
        anchor.style.padding = "4% 4% 0 4%";
    }
    function hideLayer ( element ) {
        let layer = element.children[0];
        if (layer.style.height !== 0) {
            layer.style.height = 0;
            layer.style.padding = "0 4% 0 4%";
        }
    }
    //addEvent(teamProjects[1], "click", showLayer);

    for (let i=0; i < teamProjects.length; i++) {
        addEvent(teamProjects[i], "click", showLayer);
    } 
    
    for (let i=0; i < singleProjects.length; i++) {
        addEvent(singleProjects[i], "click", showLayer);
    }
});