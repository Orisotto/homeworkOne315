function initURLListener() {
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function() {
    initURLListener ();
});