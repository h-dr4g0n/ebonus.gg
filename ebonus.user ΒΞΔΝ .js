// ==UserScript==
// @name         ebonus
// @namespace    Munem2x
// @version      1
// @description  Auto click on next video and auto click on bubble
// @author       Munem2x
// @match        https://ebonus.gg/earn-coins/watch
// @grant        none
// ==/UserScript==

$(document).ready(function(){
    var coinsclicker = setInterval(function() {
        ClickNext();
        ClickOnBubble();
    }, 1000);

    window.ClickNext = function(){
        if ($(".coins_popup").length > 0) {
            console.log("clicked");
            $(".coins_popup").click();
        }
    };
    window.ClickOnBubble = function(){
        if ($(".sweet-alert.showSweetAlert.visible").length > 0) {
            console.log("clicked");
            $(".confirm").click();
        }
    };
});