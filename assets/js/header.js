// grab an element
var header = document.querySelector("#header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(header, {
    offset: 50,
    tolerance: 10,
});
// initialise
headroom.init();
