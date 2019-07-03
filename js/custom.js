"use strict";

//COPY CODE
//-------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    function selectText(elementId) {
        var doc = document,
            text = doc.getElementById(elementId),
            range,
            selection;
        if (doc.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
    $(".copy").click(function () {
        selectText(this.id);
        document.execCommand("copy");
    });
});


$(document).ready(function() {
    $('.paraWrapper').mousemove(function(e) {
        parallax(e, document.getElementById('c8'), 1);
    });
});

function parallax(e, target, layer) {
    var strength = 20;
    var layer_coeff = strength / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    $(target).offset({
        top: y,
        left: x
    });
};