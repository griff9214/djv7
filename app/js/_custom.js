document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu( "#my-menu", {
            "extensions": [
                "pagedim-black",
                "position-right",
                "theme-dark"
            ],
            // "navbars": [
            //     {
            //         "position": "top",
            //         // "content": [
            //         //     "prev",
            //         //     "title"
            //         // ]
            //     }
            // ]
        });
    }
);

var menu = new Mmenu( "#my-menu" );
var api = menu.API;

api.bind( "open:finish",
    function ( panel ) {
        $(".menuLink").addClass("is-active");
    }
);
api.bind( "close:finish",
    function ( panel ) {
        $(".menuLink").removeClass("is-active");
    }
);