$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });


    $( function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );
});




// console.clear();
//
// const nav = document.querySelector("nav");
// const navLinksContainer = document.querySelector(".nav-links");
// const navLinks = [...document.querySelectorAll(".link")];
// const menuBtn = document.querySelector(".menu-btn");
// const subMenuBtn = document.querySelector(".sub-menu-btn");
//
// function createHoverEl() {
//     let hoverEl = document.createElement("div");
//     hoverEl.className = "hover-el";
//     hoverEl.style.setProperty("--y", "0px");
//     hoverEl.style.setProperty("--mousex", "0px");
//     hoverEl.style.setProperty("--mousey", "0px");
//     navLinksContainer.appendChild(hoverEl);
// }
// createHoverEl();
//
// navLinks.forEach((link, index) => {
//     let hoverEl = navLinksContainer.querySelector(".hover-el");
//     link.style.setProperty("--delay", `${index * 50}ms`);
//     link.addEventListener("mousemove", function(e) {
//         hoverEl.style.setProperty("--y", `${index * 60}px`);
//         hoverEl.style.setProperty("opacity", "1");
//         hoverEl.style.setProperty("--mousex", `${e.pageX - hoverEl.offsetLeft}px`);
//         hoverEl.style.setProperty("--mousey", `${e.pageY - hoverEl.offsetTop}px`);
//     });
//     navLinksContainer.addEventListener("mouseout", function() {
//         hoverEl.style.setProperty("opacity", "0");
//     });
//     link.addEventListener("click", function() {
//         let hoverEl = navLinksContainer.querySelector(".hover-el");
//         hoverEl.style.opacity = '0';
//         toggleSubmenu(link);
//     });
// });
//
// menuBtn.addEventListener("click", function() {
//     nav.classList.toggle("nav-open");
//     menuBtn.classList.toggle("close");
// });
// subMenuBtn.addEventListener("click", function() {
//     nav.classList.toggle("sub-menu-open");
//     removeSubmenu();
// });
//
// function toggleSubmenu(el) {
//     let subMenu = nav.querySelector(".sub-menu");
//     if (el.children[1]) {
//         createSubmenu(el);
//     } else if (nav.contains(subMenu)) {
//         removeSubmenu();
//     } else {
//         return;
//     }
// }
//
// function createSubmenu(el) {
//     let subMenuContainer = document.createElement("div");
//     subMenuContainer.className = "sub-menu";
//     let subMenuItem = el.children[1].cloneNode(true);
//     let subMenuItemList = [...subMenuItem.children];
//     subMenuItemList.forEach((item, index) => {
//         item.classList.add("off-menu");
//         item.style.setProperty("--delay", `${index * 40}ms`);
//     });
//     nav.classList.toggle("sub-menu-open");
//     nav.appendChild(subMenuContainer);
//     subMenuContainer.appendChild(subMenuItem);
//     setTimeout(function() {
//         subMenuItemList.forEach(item => {
//             item.classList.remove("off-menu");
//             item.classList.add("on-menu");
//         });
//     }, 200);
// }
// function removeSubmenu() {
//     let subMenu = nav.querySelector(".sub-menu");
//     let subMenuItemList = [...subMenu.children[0].children];
//     if (nav.contains(subMenu)) {
//         subMenuItemList.forEach(item => {
//             item.classList.add("off-menu");
//             item.classList.remove("on-menu");
//         });
//         setTimeout(function() {
//             nav.removeChild(subMenu);
//         }, 500);
//     }
// }


(function($) { "use strict";

    //Page cursors

    // document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    //     t.style.left = n.clientX + "px",
    //         t.style.top = n.clientY + "px",
    //         e.style.left = n.clientX + "px",
    //         e.style.top = n.clientY + "px",
    //         i.style.left = n.clientX + "px",
    //         i.style.top = n.clientY + "px"
    // });
    // var t = document.getElementById("cursor"),
    //     e = document.getElementById("cursor2"),
    //     i = document.getElementById("cursor3");
    // function n(t) {
    //     e.classList.add("hover"), i.classList.add("hover")
    // }
    // function s(t) {
    //     e.classList.remove("hover"), i.classList.remove("hover")
    // }
    // s();
    // for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    //     o(r[a])
    // }
    // function o(t) {
    //     t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    // }

    //Navigation

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
        };
        init();
    }();


    //Switch light/dark

    $("#switch").on('click', function () {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $("#switch").removeClass("switched");
        }
        else {
            $("body").addClass("light");
            $("#switch").addClass("switched");
        }
    });

})(jQuery);
