$(document).ready(function () {
    //$(".count").on('change',recalcSum);
    $(".type-p").on('change',recalcSum);
    $(".type-u").on('change',recalcSum);
    $("#squere").on('input',recalcSum);
    $(".dop1").on('change',recalcSum);
    $(".dop2").on('change',recalcSum);
    $(".dop3").on('change',recalcSum);
    function recalcSum() {
            pmoney = +$(".type-p.checked").data('sum'),
            umoney = +$('.type-u.checked').data('sum'),
            squere = +$('#squere').val();
            if($(".dop1 input").prop("checked")){
              dop1 = +$(".dop1.checked").data('sum');
            }else{
              dop1 = 0;
            }
            if($(".dop2 input").prop("checked")){
              dop2 = +$(".dop2.checked").data('sum');
            }else{
              dop2 = 0;
            }
            if($(".dop3 input").prop("checked")){
              dop3 = +$(".dop3.checked").data('sum');
            }else{
              dop3 = 0;
            }
            dop = dop1 + dop2 + dop3

            total = (pmoney * umoney * squere) + dop;
        $('span.total').text(total + " ₽");
    }
});
