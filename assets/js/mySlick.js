$(document).ready(function(){
    $('.car').slick({
        dots: true,
        arrows: false,
        draggable: false,
        fade: true,
        cssEase: 'ease-out',
        infinite: true,
        customPaging : function(slider, i) {
            if(i == 0){
                return '<a><img class="dotBrain" src="assets/images/brainIcon128.png" class="dots"></a><p class="dotBrainHome">Home</p>';
            }else{
                return '<a><img class="dotMe" src="assets/images/meIcon.gif" class="dots"></a>';
            }
        }
    });
});

