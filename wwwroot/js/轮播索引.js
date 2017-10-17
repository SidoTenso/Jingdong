$(document).ready(function(){
    var id=$('.mylunbo[data-mytarget]').attr('data-mytarget'),
        activeClass = $('.mylunbo[data-mytarget]').attr('data-actclass'),
        index = $('.mylunbo[data-mytarget] .mylunbo_item[data-active]').attr('data-actindex');
    // console.log(id,activeClass,index)
    $(`#${id}`).find('.listitem').removeClass(activeClass).filter(`[data-actindex="${index}"]`).addClass(activeClass)
    $(`#${id} .listitem`).mouseenter(function(){
        $(this).addClass(activeClass).siblings().removeClass(activeClass)
        var ele = `[data-mytarget="${$(this).parent().attr("id")}"] .mylunbo_item[data-actindex="${$(this).attr("data-actindex")}"]`

        $(ele).attr('data-active',"true").fadeIn().siblings('.mylunbo_item').removeAttr('data-active').fadeOut()
    })
})