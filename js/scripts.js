// BACK END LOGIC






// FRONT END LOGIC
$(document).ready(function(){

// SIDE NAV
    $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
        $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
        e.preventDefault();
      });
});
