function mylunbo(mlb,active,time){
    time =time||5000;
    var items=$(mlb).find('.mylunboitem'),
        mylbctrs=$(mlb).find('.mlbctr'),
        ctrleft=$(mlb).find('.mylbctr_left'),
        ctrright=$(mlb).find('.mylbctr_right')
    items.eq(0).show().siblings('.mylunboitem').hide()
    mylbctrs.removeClass(active).eq(items.filter(':visible').attr('data-index')*1).addClass(active)
    ctrleft.click(function(){
        var nows= items.eq(mylbctrs.index(mylbctrs.filter('.'+active)))
        var next = nows.prev('.mylunboitem').length==0?items.last():nows.prev('.mylunboitem')
        items.finish().fadeOut()
        next.finish().fadeIn()
        mylbctrs.removeClass(active).eq(items.index(next)).addClass(active)
        
    })
    ctrright.click(function(){
        var nows= items.eq(mylbctrs.index(mylbctrs.filter('.'+active)))
        var next = nows.next('.mylunboitem').length==0?items.first():nows.next('.mylunboitem')
        items.finish().fadeOut()
        next.finish().fadeIn()
        mylbctrs.removeClass(active).eq(items.index(next)).addClass(active)

    })
    $(mlb).find('[class*="mylbctr"]').hide()
    $(mlb).hover(function(){
        $(mlb).find('[class*="mylbctr"]').show()
    },function(){
        $(mlb).find('[class*="mylbctr"]').hide()
    })
}