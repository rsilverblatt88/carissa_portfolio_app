function nameModal() {
    $(".carousel").bind('slide.bs.carousel', function (e) {
        var modal_name = $('.illustration_slide').parent(".active").children("img   ").data("modal_name");
        $('#myModalLabel').text(modal_name);
    });
}

$(function() {
    nameModal();
});