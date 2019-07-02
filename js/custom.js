"use strict";

//SIDEBAR MENU
//-------------------------------------------------

function ifChecked() {

    $("#hmt").click(function () {
        var checked = $(".ul-menu__hidden-ticker").prop("checked");
        if (checked) {
            $(".ul-menu__wrap").addClass("checked");
            $(".ul-menu__hidden-ticker").prop("checked")
        } else {
            $(".ul-menu__wrap").removeClass("checked");
        }
    });

};

document.onclick = function (e) {

    var targetElement = e.target;
    var header = $('.ul-menu__wrap')[0];
    var input = $('#hmt');

    var clickedInside = ($.contains(header, targetElement) || (targetElement === header));

    if (targetElement.classList.contains('link-to-page')) {
        $('.link-to-page').removeClass('active');
        targetElement.classList.add('active');
        closeMenu();
        return;
    }

    if (!clickedInside) {
        closeMenu();
    }

}

function closeMenu() {
    $(".ul-menu__wrap").removeClass("checked");
    $(".ul-menu__hidden-ticker")[0].checked = false;
}


window.onload = function () {
    ifChecked();
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    if (scrollUpBtn) {
        scrollUpBtn.onclick = function () {
            scrollToTop()
        };
    }

    checkScrollUpBtn();

    //revolution toggle
    //Set default open/close settings
    var divsToShow = $('.revolution__description').hide(); //Hide/close all containers

    var actionBtns = $('.revolution__action');
    if (divsToShow.length != 0 && actionBtns.length != 0) {
        actionBtns.click(function (e) {

            var target = e.target.parentElement.parentElement;
            divsToShow.not($($(target).children('.revolution__description'))).slideUp()
            actionBtns.not(this).removeClass('active');
            actionBtns.not(this).text('Детальніше')
            $(this).text($(this).text() === 'Згорнути' ? 'Детальніше' : 'Згорнути')
            $(this).toggleClass('active')
            $(target).children('.revolution__description').slideToggle();
            return false; //Prevent the browser jump to the link anchor

        });
    }

}

window.onscroll = function () {
    checkScrollUpBtn();
}

function checkScrollUpBtn() {
    if (document.getElementById("scrollUpBtn")) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("scrollUpBtn").style.display = "block";
        } else {
            document.getElementById("scrollUpBtn").style.display = "none";
        }
    }
}

function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 200, 'linear');
}
