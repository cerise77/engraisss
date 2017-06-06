
$(document).ready(function () {

    var $cart = $('.cart-items');
    var menu_navigation = $('#main-nav'),
          $L = 900,
          cart_trigger = $('#cart-trigger'),
          hamburger_icon = $('#hamburger-menu'),
          cart = $('#cart'),
          shadow_layer = $('#shadow-layer');


    hamburger_icon.on('click', function () {
        cart.removeClass('speed-in');
        toggle_panel_visibility(menu_navigation, shadow_layer, $('body'));
    });

});


function toggle_panel_visibility(panel, background_layer, body) {
if (panel.hasClass('speed-in')) {
    panel.removeClass('speed-in');
    background_layer.removeClass('is-visible');
    body.removeClass('overflow-hidden');
} else {
    panel.addClass('speed-in');
    background_layer.addClass('is-visible');
    body.addClass('overflow-hidden');
}
}
