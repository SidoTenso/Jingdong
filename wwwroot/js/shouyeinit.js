
$('.j-event .close').click(function () {
    $(this).parents('.j-event').hide()
})
var htmlStr = ''
var addArr = ["北京", "上海", "天津", "重庆", "河北", "山西", "河南", "辽宁", "吉林", "黑龙江", "内蒙古", "江苏", "山东", "安徽", "浙江", "福建", "湖北", "湖南", "广东", "广西", "江西", "四川", "海南", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "港澳", "台湾", "钓鱼岛", "海外"]
addArr.forEach(function (item) {
    htmlStr += `
        <div class="additem">
            <a href="#">${item}</a>
        </div>
    `
})
$('.addList').append(htmlStr)
$('.additem').click(function () {
    $(this).find('a').addClass('active').end().siblings().find('a').removeClass('active')
    $('.addBox>span:nth-child(2)').text($(this).find('a').text())
})
$('.addBox').hover(function () {
    $('.addList').show().find('.additem a').removeClass('active')
    $(`.additem a:contains("${$('.addBox>span:nth-child(2)').text()}")`).addClass('active')

}, function () {
    $('.addList').hide()
})
$('.navitem').hover(function () {
    $(this).find('.navToggle').show()
}, function () {
    $(this).find('.navToggle').hide()
})


$('#user_btn').click(function(){
    $.removeCookie('username')
    location.href='login.html'
})
if($.cookie('username')){
    $('#user').text($.cookie('username'))
    $('#user_btn').text('退出')
}

var myjdList = [[[{ "hreff": "//order.jd.com/center/list.action", "text": "待处理订单" }, { "hreff": "//myjd.jd.com/afs/indexNew.action?entry=1", "text": "返修退换货" }, { "hreff": "//t.jd.com/product/followProductList.action?isReduce=true", "text": "降价商品" }], [{ "hreff": "//joycenter.jd.com/msgCenter/queryHistoryMessage.action", "text": "消息" }, { "hreff": "http://question.jd.com/myjd/getMyjdAnswerList.action", "text": "我的问答" }, { "hreff": "//t.jd.com/home/follow", "text": "我的关注" }]], [[{ "hreff": "//bean.jd.com/myJingBean/list", "text": "我的京豆" }, { "hreff": "//baitiao.jd.com/", "text": "我的白条" }], [{ "hreff": "//quan.jd.com/user_quan.action", "text": "我的优惠券" }, { "hreff": "//trade.jr.jd.com/centre/browse.action", "text": "我的理财" }]]]
var jdListStr = ''
myjdList.forEach(function (item) {
    var jditemstr = ''
    item.forEach(function (jditem) {
        var itemstr = ''
        jditem.forEach(function (item) {
            itemstr += `<div class="item">
                            <a href="${item.hreff}">${item.text}</a>
                        </div>`
        })
        // console.log(itemstr)
        jditemstr += `<div class="jdList-item">${itemstr}</div>`
    })
    // console.log(jditem)
    jditemstr += '<div class="clear"></div>'
    jdListStr += `<div class="jdList">${jditemstr}</div>`
})
// console.log(jdListStr)
$('#jdList').append(jdListStr)

var clientList = [{ "title": "客户", "data": [{ "href": "//help.jd.com/index.html", "text": "帮助中心" }, { "href": "//myjd.jd.com/afs/indexNew.action?entry=2", "text": "售后服务" }, { "href": "//chat.jd.com/jdchat/custom.action ", "text": "在线客服" }, { "href": "//myjd-crm.jd.com/opinion/orderList.action", "text": "意见建议" }, { "href": "//myjd-crm.jd.com/appoint/telebooking.action", "text": "电话客服" }, { "href": "//www.jd.com/contact/service.html", "text": "客服邮箱" }, { "href": "https://jrhelp.jd.com/", "text": "金融咨询" }, { "href": "//chat.jd.com/jd/chat?entry=jd_web_joybuy", "text": "售全球客服" }] }, { "title": "商户", "data": [{ "href": "//vc.jd.com/cooperation.html ", "text": "合作招商" }, { "href": "//xue.jd.com/", "text": "学习中心" }, { "href": "//shop.jd.com/", "text": "商家后台" }, { "href": "//jm.jd.com/index/index.html", "text": "京麦工作台" }, { "href": "//helpcenter.jd.com/venderportal/index.html", "text": "商家帮助" }, { "href": "//rule.jd.com/rule/index.action", "text": "规则平台" }] }]
var clientListStr = ''
clientList.forEach(function (item) {
    var title = item.title;
    arr = item.data
    var cliitemStr = ''
    arr.forEach(function (item) {
        cliitemStr += `
            <div class="clList-item">
                <a href="${item.href}">${item.text}</a>
            </div>
        `
    })
    clientListStr += `<div class="clList"><h4>${title}</h4>${cliitemStr}<div class="clear"></div></div>`
})
$('#clientList').append(clientListStr)


// 网站导航

var wangzhanList = [{ "title": "特色主题", "data": [{ "href": "//try.jd.com/", "text": "京东试用" }, { "href": "//jr.jd.com/", "text": "京东金融" }, { "href": "//global.jd.com/", "text": "全球售" }, { "href": "https://www.joybuy.com/  ", "text": "国际站" }, { "href": "//vip.jd.com/", "text": "京东会员" }, { "href": "//xinpin.jd.com/", "text": "京东预售" }, { "href": "//what.jd.com/", "text": "买什么" }, { "href": " https://www.jd.ru/", "text": "俄语站" }, { "href": "//diy.jd.com/", "text": "装机大师" }, { "href": " https://pingce.jd.com/index.html", "text": "0元评测" }, { "href": "//ding.jd.com/", "text": "定期送" }, { "href": "//cn.jd.com/", "text": "港澳售" }, { "href": "//a.jd.com/", "text": "优惠券" }, { "href": "//miaosha.jd.com/", "text": "秒杀" }, { "href": "//red.jd.com/", "text": "闪购" }, { "href": "https://www.jd.id/", "text": "印尼站" }, { "href": "https://ft.jd.com", "text": "京东金融科技" }, { "href": "//jr.jd.com/buy/index", "text": "In货推荐" }, { "href": "https://up.jd.com/?entrance=pc_dh_a", "text": "陪伴计划" }, { "href": "//join.jd.com/app/welcome.html#/", "text": "出海招商" }] }, { "title": "行业频道", "data": [{ "href": "//shouji.jd.com/", "text": "手机" }, { "href": "https://shuma.jd.com/", "text": "智能数码" }, { "href": "//3c.jd.com/", "text": "玩3C" }, { "href": "//diannao.jd.com/", "text": "电脑办公" }, { "href": "https://jiadian.jd.com/", "text": "家用电器" }, { "href": "//smart.jd.com/", "text": "京东智能" }, { "href": "//channel.jd.com/fashion.html", "text": "服装城" }, { "href": "//channel.jd.com/beauty.html", "text": "美妆馆" }, { "href": "//channel.jd.com/jiazhuang.html", "text": "家装城" }, { "href": "//baby.jd.com/", "text": "母婴" }, { "href": "//channel.jd.com/chaoshi.html", "text": "食品" }, { "href": "//channel.jd.com/sports.html", "text": "运动户外" }, { "href": "//nong.jd.com/", "text": "农资频道" }, { "href": "http://car.jd.com", "text": "整车" }, { "href": "//book.jd.com/", "text": "图书" }] }, { "title": "生活服务", "data": [{ "href": "//z.jd.com/", "text": "京东众筹" }, { "href": "//www.baitiao.com", "text": "白条" }, { "href": "//m.jr.jd.com/helppage/downApp/jrAppPromote.html", "text": "京东金融App" }, { "href": "//trade.jr.jd.com/myxjk/jrbincome.action", "text": "京东小金库" }, { "href": "//licai.jd.com/", "text": "理财" }, { "href": "//smartcloud.jd.com/app", "text": "京东微联" }, { "href": "//chongzhi.jd.com/", "text": "话费" }, { "href": "//jiaofei.jd.com/", "text": "水电煤" }, { "href": "//caipiao.jd.com/", "text": "彩票" }, { "href": "//trip.jd.com/", "text": "旅行" }, { "href": "//jipiao.jd.com/", "text": "机票酒店" }, { "href": "//movie.jd.com/", "text": "电影票" }, { "href": "//daojia.jd.com/html/welcome.html", "text": "京东到家" }, { "href": "//try-smart.jd.com/", "text": "京东众测" }, { "href": "//game.jd.com/", "text": "游戏" }] }, { "title": "更多精选", "data": [{ "href": "//vc.jd.com/cooperation.html ", "text": "合作招商" }, { "href": "//mobile.jd.com/index.do", "text": "京东通信" }, { "href": "//o.jd.com/market/index.action", "text": "京东E卡" }, { "href": "//b.jd.com/", "text": "企业采购" }, { "href": "//fw.jd.com/", "text": "服务市场" }, { "href": "https://bg.jd.com/", "text": "办公生活馆" }, { "href": "//zhaomu.jd.com/XCDLzm.html", "text": "乡村招募" }, { "href": "//zhaomu.jd.com/intro.html", "text": "校园加盟" }, { "href": "//you.jd.com/index.html?entrance=jd_home", "text": "京友邦" }, { "href": "//sale.jd.com/act/Wjr0xYRh6Z.html ", "text": "京东社区" }, { "href": "http://group.jd.com/site/20000121/20000032.htm", "text": "智能社区" }, { "href": "http://group.jd.com/index/20000001.htm", "text": "游戏社区" }, { "href": "//ipr.jd.com/edition", "text": "知识产权维权" }] }]
var wangzhanListStr = ''
wangzhanList.forEach(function (item) {
    var title = item.title
    var arr = item.data
    var wzStr = ''
    arr.forEach(function (item) {
        wzStr += `
            <div class="wzItem">
                    <a href="${item.href}">${item.text}</a>
            </div>
        `
    })
    wangzhanListStr += `
        <div class="wangzhanList">
            <h4>${title}</h4>
            ${wzStr}
            <div class="clear"></div>
        </div>
    `
})
$('#wangzhanList').append(wangzhanListStr)
$('.upload-bg').click(function () {
    $(this).next().click()
})
$('.searchItem').click(function () {
    $(this).find('[name="keyword"]').focus()
})
$('#mygwc').hover(function () {
    $('.gwctoggle').show()
}, function () {
    $('.gwctoggle').hide()
})


// 搜索框
$('[name="keyword"]').focus(function(){
    $(this).on('keyup',function(){
        // console.log($(`a[title*="${$(this).val()}"]`))
        var target = $(`#hmgg a[title*="${$(this).val()}"]`)
        var arr=[]
        if(target.length>0){
            target.each(function(){

                arr.push($(this).attr('title'))
            })
        }
        if(arr.length>0){
            var listr=''
            arr.forEach(function(item){
                listr+=`
                    <div class="search_li">
                        ${item}
                    </div>
                `
            })
            $(this).parents('.searchItem').find('.searchList').show().find('.searbox').html(listr)
        }else{
            $(this).parents('.searchItem').find('.searchList').hide()
        }
    })
})
$('.searchList').on('click','.search_li',function(){
    $(this).parents('.searchItem').find('[name="keyword"]').val($(this).text().trim())
    $(this).parents('.searchList').hide()
})
$('.search_close').click(function(){
    $(this).parents('.searchList').hide()
})
$('[name="keyword"]').blur(function(){
    $(this).off('keyup')
})



// 渲染轮播List
$.get('/getData', { fileName: 'cblMenu' }, function (data) {
    // console.log(data)
    if (data.code == 2) {
        var str = ''
        var grid_content = ''
        data.msg.forEach(function (item, index) {
            var aArr = ''
            item.aTagArr.forEach(function (aItem) {
                aArr += `
                    <a href="${aItem.href}">${aItem.text}</a> <span>/<span>`
            })
            // aArr=aArr.substr(0,aArr.length-13)
            str += `
                <div class="grid_item" data-index="${index}">
                    ${aArr.substr(0, aArr.length - 13)}
                </div>
            `
            // 更多内容
            grid_content += `
                <div class="grid_content" data-index="${index}">
                    <div class="grid_left">
                        <div class="gridl_top">
                        </div>
                        <div class="gridlb">
                        </div>
                    </div>

                    <div class="grid_right">

                    </div>
                </div>

            `
        })
        $('.grid_list').append(str)
        $('.grid_list').append(grid_content)
    }

    $.get('/getData', { fileName: 'lchannel' }, function (data) {
        console.log(data)
        data.msg.forEach(function (item) {
            var grid_content = $(`.grid_content[data-index="${item.index}"]`)
            var channelStr = ''
            item.lchannel.forEach(function (item) {
                channelStr += `
                <div class="glt_item"><a href="${item.href}">${item.text}</a> <span></span></div>
                `
            })
            $(grid_content).find('.gridl_top').html(channelStr)
            $.get('/getData', { fileName: 'lchannel' + item.index }, function (data) {
                // console.log(data)
                if (data.code == 2) {
                    var gridlb_item = ''
                    data.msg.ldetail.forEach(function (item) {
                        var gitem_head = `
                            <div class="gitem_head">
                                <a href="${item.detail_tit.href}">${item.detail_tit.text} <span></span></a>
                            </div>
                        `
                        // var arr = item.detail_arr
                        var gitem_bodystr = ''
                        item.detail_arr.forEach(function (item) {
                            gitem_bodystr += `
                                <a href="${item.href}">${item.text}</a>
                            `
                        })
                        gitem_body = `
                        <div class="gitem_body">
                            ${gitem_bodystr}
                        </div>
                        `
                        gridlb_item += `
                        <div class="gridlb_item">
                            ${gitem_head + gitem_body}
                        </div>
                        `
    
    
                    })
    
                    $(grid_content).find('.gridlb').html(gridlb_item)
                }
    
            })
    
        })
    })
    // 获取右边图片
    $.get('/getData', { fileName: 'rpic' }, function (data) {
        console.log(data)
        data.msg.forEach(function (item) {
            var index = item.index
            var grid_content = $(`.grid_content[data-index="${index}"]`)
            var bpic = item.rpic.bpic,
                spic = item.rpic.spic
            var bpicStr = ''
            var spicStr = ''
            bpic.forEach(function (item) {
                bpicStr += `
                    <a href="${item.href}"><img src="${item.src}" alt=""></a>
                `
            })
            spic.forEach(function (item) {
                spicStr += `
                    <a href="${item.href}"><img src="${item.src}" alt=""></a>
                `
            })
            var grid_right = `
                <div class="spicBox">
                    ${spicStr}
                </div>
                <div class="bpicBox">
                    ${bpicStr}
                </div>
            `
            grid_content.find('.grid_right').append(grid_right)
        })
    })
})
$('.grid_list').on({
    'mouseenter': function (e) {
        // console.log(e)
        // console.log($(`.grid_content[data-index="${index}"]`))
        var index = $(e.currentTarget).attr('data-index')
        $(`.grid_content`).hide().filter(`[data-index="${index}"]`).show()
    }

}, '.grid_item')
$('.grid_list').on({
    'mouseleave': function (e) {
        // console.log($(e.delegateTarget).hasClass('grid_list'))
        // if($(e.delegateTarget).hasClass('grid_list')){
        // var index = $(e.currentTarget).attr('data-index')
        $(`.grid_content`).hide()
        // }

    }
})
// 轮播图
$.get('/getData', { fileName: 'dalb' }, function (data) {
    // console.log(data)
    var liStr = ''
    data.msg.forEach(function (item, index) {
        liStr += `
            <li class="lb_item" data-index="${index}">
                <a href="${item.href}"><img src="${item.src}" alt=""></a>
            </li>
        `
    })
    $('.lbbox ul').html(liStr)
    $('.lbbox ul li').hide().eq(0).show()

    var timer = setInterval(function () {
        var ele = $('.lbbox ul li:visible')
        var next = $(ele).next().length == 0 ? $(ele).siblings().eq(0) : $(ele).next()
        move(ele, next)
    }, 2000)
    $('.lbbox').hover(function () {
        clearInterval(timer)
    }, function () {
        timer = setInterval(function () {
            var ele = $('.lbbox ul li:visible')
            var next = $(ele).next().length == 0 ? $(ele).siblings().eq(0) : $(ele).next()
            move(ele, next)
        }, 2000)
    })
    $('.contr_left').click(function () {
        omove(false)
    })
    $('.contr_right').click(function () {
        omove(true)
    })
    function omove(t) {
        var ele = $('.lbbox ul li:visible')
        if (t) {
            var next = $(ele).next().length == 0 ? $(ele).siblings().eq(0) : $(ele).next()
        } else {
            // 往左
            var next = $(ele).prev().length == 0 ? $(ele).siblings().last() : $(ele).prev()
        }
        move(ele, next)
    }

    function move(ele, next) {

        $(ele).siblings().hide().end().fadeOut()
        $(next).fadeIn()

        var index = $(next).attr('data-index')
        $('.lb_index').eq(index | 0).addClass('lb_active').siblings().removeClass('lb_active')
    }

    $('.lb_list .lb_index').click(function () {
        var index = $(this).siblings().removeClass('lb_active').end().addClass('lb_active').index()
        // console.log(index)
        $(`.lb_item[data-index="${index}"]`).siblings().fadeOut().end().fadeIn()
    })


})


// 新闻
$.get('/getData', { fileName: 'news' }, function (data) {
    // console.log(data)
    var str = ''
    data.msg.forEach(function (item) {
        var newStr = ''
        item.forEach(function (item) {
            var text = item.text.length > 10 ? item.text.substr(0, 10) + '...' : item.text
            newStr += `
                <a href="${item.href}">${text}</a>
            `
        })
        str += `
            <div class="news">${newStr}</div>
        `
    })
    $('.newbox').append(str)
    $('.news').eq(0).show()
})
$('.newlk').mouseenter(function (e) {
    // console.log($(e.target).position())
    $('.xhx').stop().animate({
        left: $(e.target).position().left,
        // top: $(e.target).position().left,
    }, 300)
    // console.log($(this).index('.newtit a'))
    $('.news').eq($(this).index('.newtit a')).show().siblings().hide()
})

$('.siup').on('mouseenter', function () {
    open(this);
    $(this).addClass('suipactiv')
})
function open(t) {
    $('.siup span').removeClass('suipb')
    console.log($(t))
    $(t).find('span').addClass('suipb')
    $('.siup a').find('i').slideUp()
    $('.siupbox').stop().animate({
        "top": '22px',
    }, 250)
}
$('.siupbox .close').click(function (e) {
    $('.siup span').removeClass('suipb')
    // $(this).find('span').addClass('suipb')
    $('.siup a').find('i').stop().slideDown()
    $('.siup[class!="suipactiv"]').on('mouseenter', function () {
        open(this)
        $(this).addClass('suipactiv').siblings().removeClass('suipactiv')
    })
    $('.siup').last().off('mouseenter')
    $('.siupbox').stop().animate({
        "top": '210px',
    }, 250, function () {

    })
})
$('.siup').last().mouseleave(function () {
    $(this).on('mouseenter', function () {
        open(this);
        $(this).addClass('suipactiv').siblings().removeClass('suipactiv')
    })
})

$('.siupbox .hftit span').hover(function () {
    $(this).addClass('bg-red').siblings().removeClass('bg-red')
}, function () { })
function getdate() {
    var date = new Date(Date.now() + 3600 * 2 * 1000),
        year = date.getFullYear(),
        month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
        day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
        h = date.getHours() > 9 ? date.getHours() : '0' + date.getHours(),
        m = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes(),
        s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds(),
        str = `${year}-${month}-${day} ${h}:${m}:${s}`
    return str
}

// 倒计时插件
$('.djstime').countDown({
    "startTime": 0,
    "endTime": getdate(),
    "nowTime": 0,
    "interval": 1000,
    "minDigit": true,
    "showDay": false,
    "timeUnitCls": {
        // "day":'aa',
        "hour": 'hour',
        "min": 'min',
        "sec": 'sec'
    },
    "startTips": '',
    "endTips": '',
    "stopTips": '',
    "timeStamp": false
})


$.get('/getData', { fileName: 'mslunbo' }, function (data) {
    // console.log(data)
    var listr = ''
    data.msg.forEach(function (item) {
        listr += `
        <li>
            <a href="${item.href}">
                <img src="${item.imgSrc}" alt="">
                <p>
                    ${item.title}
                </p>
            </a>
            <p>
                <span class="newprice">
                    <sub>￥</sub>
                    <b>${item.newPrice}</b>
                </span>
                <sub class="originprice">￥<del>${item.originPrice}</del></sub>
            </p>
        </li>
        `
    })
    $('.lbulbox div ul').html(listr)
    $('.lbulbox div ul a').hover(function () {
        $(this).find('img').css({
            // margin: '0 auto  34px',
            transform: "translateY(-10px)"
        })
    }, function () {
        $(this).find('img').css({
            // margin: '17px auto',
            transform: "translateY(0px)"
        })

    })
    $('div[class*="scontr"]').on('click', function () {
        var dir = $(this).attr('data-cont') * 1
        move(dir)
    })
    function move(dir) {
        var leftIndex = $('.lbulbox ul').attr('data-left') * 1
        // if(leftIndex<=0){
        //     leftIndex=5
        // }
        // $('.lbulbox ul').css({
        //     left:-leftIndex*1000
        // })
        leftIndex += dir

        $('.lbulbox ul').stop().animate({
            left: -leftIndex * 1000
        }, 500, function () {

            $('.lbulbox ul').css({
                left: -$('.lbulbox ul').attr('data-left') * 1000
            })

        })
        if (leftIndex == 0 || leftIndex == 5) {
            $('div[class*="scontr"]').off('click')
            setTimeout(function () {
                $('div[class*="scontr"]').on('click', function () {
                    var dir = $(this).attr('data-cont') * 1
                    move(dir)
                })
            }, 500)
        }
        leftIndex = leftIndex == 0 ? 4 : leftIndex
        leftIndex = leftIndex == 5 ? 1 : leftIndex

        $('.lbulbox ul').attr('data-left', leftIndex)
    }
})
function fbt() {
    // 发现好货
    $.get('/getData', { fileName: 'findGoods' }, function (data) {
        // console.log(data)
        var listr = ''
        data.msg.body.forEach(function (item) {
            listr += `
                <li class="fgitem">
                    <a class="hmove" href="${item.href}">
                        <p>${item.title}</p>
                        <img src="${item.src}" alt="">
                    </a>
                </li>
                `
        })
        $('.fbtbox .ulbox ul').html(listr)
    })
    // 会买专辑

    $.get('/getData', { fileName: 'huimai' }, function (data) {
        // console.log(data.msg)
        var subboxStr = ''
        data.msg.body.forEach(function (item, index) {
            var aStr = ''
            item.forEach(function (aTag) {
                var imgStr = ''
                aTag.imgs.forEach(function (img) {
                    imgStr += `
                    <img src="${img}" alt="">
                    `
                })
                aStr += `
                <a href="${aTag.href}">
                    <p>${aTag.desc}</p>
                    ${imgStr}
                </a>
                `

            })
            subboxStr += `
            <div class="subitem mylunboitem" data-index="${index}">${aStr}</div>
            `

        })
        subboxStr=`
        
        <div class="fengex"></div>
        <div class="mylubcontrbox">
            <div class="mlbctr"></div>
            <div class="mlbctr"></div>
            <div class="mlbctr"></div>
        </div>
        <div class="mylbctr_left"><i></i></div>
        <div class="mylbctr_right"><i></i></div>
        ${subboxStr}
        `
        $('.subbox').append(subboxStr)
        $('.subbox .subitem:first').show().siblings('.subitem').hide()
        mylunbo($('.subbox.mylunbo'), 'mlbctr_active')
    })

    // 排行榜

    $.get('/getData', { fileName: 'paihangbang' }, function (data) {
        console.log(data.msg)
        var titStr = ''
        data.msg.body.body_tit.forEach(function (item) {
            titStr += `
            <a href="${item.href}">${item.text}</a>
            `
        })
        titStr = `
            <div class="top_tit">
                ${titStr}
                <div class="top_slide"><i></i></div>
            </div>
            `

        var boxStr = ''
        data.msg.body.body_cont.forEach(function (item) {
            var liStr = ''
            item.forEach(function (li) {
                liStr += `
                    <li>
                        <div class="top_rank">${li.rank}</div>
                        <a href="${li.href}">
                            <img src="${li.img}" alt="">
                            <p>${li.name}</p>
                        </a>
                    </li>
            `
            })
            var topitemStr = `
                <div class="topitem">
                    <div class="topulbox">
                        <ul>
                        ${liStr}
                        </ul>
                    </div>
                </div>
                `
            boxStr += topitemStr
        })
        $('.top_rank .fbtbox').html(titStr + boxStr)
        $('.top_rank .fbtbox').find('.topitem').hide().eq(0).show()
        $('.top_tit a').on('mouseenter', function () {
            console.log($(this).index())
            var left = $(this).position().left
            $(this).siblings('.top_slide').css('left', left)
            $('.topitem').hide().eq($(this).index()).show()
        })

    })
    // 领券中心

    $.get('/getData', { fileName: 'lingquan' }, function (data) {
        console.log(data.msg)
        var listr = ''
        data.msg.body.forEach(function (item) {
            listr += `
            <li class="cuponitem">
                <a class="hmove" href="${item.href}" title="${item.atitle}">
                    <img src="${item.img}" alt="" >
                    <div class="cuponinfo">
                        <p class="price">
                            <sub>￥</sub><span class="cupon_price">${item.price}</span>
                        </p>
                        <p class="cupon_desc">${item.desc}</p>
                        <p class="limit">
                                ${item.limit}
                        </p>
                        <p class="more">${item.more}</p>
                    </div>
                </a>
            </li>
            `
        })
        $('.cupon .box_hd ul').html(listr)
    })


    // 觅me
    $.get('/getData', { fileName: 'mime' }, function (data) {
        console.log(data.msg)
        var mimeItemStr = ''
        data.msg.body.forEach(function (item, index) {
            mimeItemStr += `
                <div class="mimeItem mylunboitem" data-index="${index}">
                    <a href="${item.href}">
                        <img src="${item.img}" alt="">
                        <h5>${item.title}</h5>
                        <p>${item.desc}<span class="desc">查看原文&gt;</span></p>
                        <p class="mimeseen"><i></i>${item.seen}</p>
                    </a>
                </div>
                `
        })
        $('.mime .mimebox').append(mimeItemStr)
        mylunbo($('.mime .mimebox'), 'mlbctr_active')
    })
}
function xpzLoad() {
    // 享品质
    $.get('/getData', { fileName: '享品质' }, function (data) {
        console.log(data.msg)
        var floatRight = data.msg.floatRight;


        var itemStr = ''
        floatRight.liList.forEach(function (item, index) {
            itemStr += `
                <div class="mylunboitem zpxlbbox" data-index="${index}">
                
                        
                        <img src="${item.img}" alt="">
                        <div class="zpxcover">

                        </div>
                        <div class="audio-play"></div>
                        <div class="xpzdesc">
                            <h5><i class="vedio_logo"></i>${item.h5}</h5>
                            <p>${item.p}</p>
                        </div>
                    <a href="//jdlive.jd.com">
                    </a>
                </div>
            `
        })
        var flrStr = `
            <li class="xpzright">
                <div class="xpzlunb mylunbo">
                    <a class="xpzr_tit" href="${floatRight.tithref}">
                        ${floatRight.title}
                        <span>更多<i class="gologo"></i></span>
                    </a>
                    <div class="mylubcontrbox">
                        <div class="mlbctr"></div>
                        <div class="mlbctr"></div>
                        <div class="mlbctr"></div>
                        <div class="mlbctr"></div>
                        <div class="mlbctr"></div>
                    </div>
                    <div class="mylbctr_left"><i></i></div>
                    <div class="mylbctr_right"><i></i></div>
                    ${itemStr}
                </div>
            </li>
        `

        var floatLeft = data.msg.floatLeft;
        console.log(floatLeft)
        var fllStr = ''
        floatLeft.forEach(function (item) {
            fllStr += `
                <li class="xpzleft">
                    <a href="${item.href}" class="lhmove">
                        <img src="${item.img}" alt="">
                        <div class="xpzinfo" style="background:${item.bgcolor}">
                            <h4>${item.h4}</h4>
                            <p>${item.p}</p>
                        </div>
                    </a>
                </li>
            `
        })
        $('.xpzbox ul').html(flrStr + fllStr)



        mylunbo($('.xpzlunb'), 'mlbctr_active')
    })
}
function gethmgg(){
    $.get('/getData',{fileName:'还没逛够'},function(data){
        console.log(data.msg)
        var liStr = ''
        data.msg.forEach(function(item){
            liStr+=`
            <li>
                <a href="${item.href}" title="${item.title}">
                    <img src="${item.img}" alt="">
                    <div class="hmgg_info">
                        <p class="desc">${item.title}</p>
                        <p class="pric">￥${item.price}</p>
                    </div>
                </a>
            </li>
            `
        })
        $('#hmgg .hmggbox ul').html(liStr)
    })
}
var lazyLoad = [
    {id:'#fbt',fn:fbt}, 
    {id:'#xpz',fn:xpzLoad},
    {
        id: '#hmgg',
        fn: gethmgg
    },
    {
        id: '#aishenghuo',
        fileName: '爱逛爱美丽',
        fnWrite:writeHtml,
        length: 570,
        fn: small
    },
    {
        id: '#jiadianguan',
        fileName: '家电馆搞机派',
        fnWrite:writeHtml,
        length: 570,
        fn: small
    },
    {
        id: '#wan3c',
        fileName: '玩3C爱运动',
        fnWrite:writeHtml,
        length: 570,
        fn: small
    },
    {
        id: '#aibaobao',
        fileName: '爱宝宝爱家',
        fnWrite:writeHtml,
        length: 570,
        fn: small
    },
    {
        id: '#aiyuedu',
        fileName: '爱阅读爱车',
        fnWrite:writeHtml,
        length: 570,
        fn: small
    },
    {
        id: '#aiyouxi',
        fileName: '爱游戏京东金融',
        fnWrite:writeHtml,
        length: 570,
        fn: small
    },
    {
        id: '#aijiankang',
        fileName: '生活旅行爱健康',
        fnWrite:writeHtml,
        length: 570,
        fn: small
    },
    {
        id: '#diannao',
        fileName: '电脑数码',
        fnWrite:writeBigHtml,
        length: 1190,
        fn: small
    }, 
    {
        id: '#aichi',
        fileName: '爱吃',
        fnWrite:writeBigHtml,
        length: 1190,
        fn: small
    }

]
$(window).scroll(function (e) {
    // console.log($(this).scrollTop())
    var slunbo = $('#slunbo')
    // console.log(slunbo.offset().top)
    if (slunbo.offset().top - 50 <= $(this).scrollTop()) {
        $('.fixtop').slideDown()
    } else {
        $('.fixtop').hide()
    }


    scrolltop = $(window).scrollTop() + $(window).innerHeight() / 2+200
    if (scrolltop > $('#xpz').offset().top) {
        $('.fixleft').fadeIn()
        for (let i = 0; i < $('.fixleft a').length - 1; i++) {
            let target = $($('.fixleft a').eq(i).attr('data-target'))
            if (scrolltop >= target.offset().top) {
                console.log(target)
                $('.fixleft a').eq(i).addClass('fixactive').siblings().removeClass('fixactive')
            } else {
                break;
            }
        }
    } else {
        console.log(2)
        $('.fixleft').fadeOut()
    }

    
    lazyLoad.forEach(function(item,index){
        if($(window).scrollTop()+ $(window).innerHeight()/2 > $(item.id).offset().top){
            item.fn()
            lazyLoad.splice(index,1)
            
        }
    })

})
$('.fixleft a').on('click', function (e) {
    // console.log($(this).index())
    var target = $($(this).attr('data-target'))
    $('body').animate({ scrollTop: target.offset().top - 50 }, 600)
})
function small() {
    var id = this.id,
        length = this.length,
        fnWrite = this.fnWrite
    $.get('/getData', { fileName: this.fileName }, function (data) {

        $(id).html(fnWrite(data.msg)).css({
            height: 'auto',
            background: 'none'
        })
        simpleLunbo(id, length)
    })
}

function simpleLunbo(id, length) {
    var ul = $(id).find('.ashulbox ul')
    ul.attr('data-index', '1')
    ul.css({

        transform: 'translateX(-'+length+'px)'
    })
    ul.each(function () {
        $(this)[0].addEventListener("transitionend", function () {
            console.log('过渡完成')
            $(this).css({
                transiton: 'none'
            })
            var index = $(this).attr('data-index') * 1
            if (index > 2) {
                index = 1
            }
            if (index < 1) {
                index = 2
            }
            $(this).css({
                transition: 'none',
                transform: `translateX(-${length * index}px)`
            })
            $(this).attr('data-index', index)
        })
    })
    $(id).find('.lbctr_right').click(function () {
        var ul = $(this).parent().find('.ashulbox ul')
        var index = ul.attr('data-index') * 1
        index++;
        if (index > 3) {
            return;
        }
        ul.css({
            transition: 'transform 0.5s cubic-bezier(.41,1.34,.83,1.18)',
            transform: `translateX(-${length * index}px)`
        })
        ul.attr('data-index', index)
        console.log(1)


    })
    $(id).find('.lbctr_left').click(function () {
        var ul = $(this).parent().find('.ashulbox ul')
        var index = ul.attr('data-index') * 1
        index--;
        if (index < 0) {
            return;
        }
        ul.css({
            transition: 'transform 0.5s cubic-bezier(.41,1.34,.83,1.18)',
            transform: `translateX(-${length * index}px)`
        })
        ul.attr('data-index', index)
        console.log(1)


    })
}
function writeHtml(data) {
    var ashsection = ''
    data.forEach(function (item) {
        var color = item.head.h_bgcolor
        var headStr = ''
        var tagsStr = ''
        item.head.tags.forEach(function (item) {
            tagsStr += `
            <a href="${item.href}">${item.text}</a>
            `
        })
        tagsStr = `
        <div class="ash_tags">
            ${tagsStr}
        </div>
        `
        headStr = `
        <div class="ashtit" style="background-color: ${item.head.h_bgcolor};">
            <div class="ash_tit">
                <span>${item.head.h_tit}</span>
            </div>
            <div class="qrcode">
                <i></i>
                <div class="qrcode_box">
                    <img src="${item.head.h_QRCode}" alt="">
                    <p style="color: ${item.head.h_bgcolor};">扫码进入手机版</p>
                </div>
            </div>
            ${tagsStr}
        </div>
        `

        var bodyStr = ''
        var lbpic = `
        <div class="lbpic">
            <a href="${item.body.lBigPic.href}" class="lhmove">
                <img src="${item.body.lBigPic.img}" alt="">
            </a>
        </div>
        `
        var trList = ''
        item.body.trList.forEach(function (item) {
            trList += `
            <li>
                <a href="${item.href}" class="lhmove">
                    <img src="${item.img}" alt="">
                    <div class="trList_info">
                        <p class="tit" style="color: ${color};">${item.tit}</p>
                        <p class="desc">${item.pro}</p>
                    </div>
                </a>
            </li>
            `
        })
        trList = `
        <div class="trList">
            <ul>
            ${trList}
            </ul>
        </div>
        `

        var bList = ''
        item.body.bList.forEach(function (item) {
            bList += `
            <a href="${item.href}" class="lhmove">
                <img src="${item.img}" alt="">
            </a>
            `
        })
        bList = `
        <div class="bList">${bList}</div>
        `

        var lunboList = ''
        item.body.lunboList.forEach(function (lbitem, index) {
            var img = lbitem.img
            // if(index<6){
            //     img = item.body.lunboList[index+12].img
            // }
            // if(index>17){
            //     img = item.body.lunboList[index-12].img

            // }
            // console.log(index)
            // console.log(img)
            lunboList += `
            <li>
                <a href="${lbitem.href}">
                    <img src="${img}" alt="">
                </a>
            </li>
            `
        })
        lunboList = `
        <div class="lunboList">
            <div class="ashulbox">
                <ul class="animated bounceInLeft">
                ${lunboList}
                </ul>
            </div>
            <div class="lbctr_left"><i></i></div>
            <div class="lbctr_right"><i></i></div>
        </div>
        `

        bodyStr = `
        <div class="ashbody">
        ${lbpic + trList + bList + lunboList}
        </div>
        `
        ashsection += `
        <div class="ashsection">
        ${headStr + bodyStr}
        </div>
        `
    })
    return ashsection
}
function writeBigHtml(data) {
    var ashsection = ''
    var data1 = [data]
    // console.log(data1)
    data1.forEach(function (item) {
        var color = item.head.h_bgcolor
        var headStr = ''
        var tagsStr = ''
        item.head.tags.forEach(function (item) {
            tagsStr += `
            <a href="${item.href}">${item.text}</a>
            `
        })
        tagsStr = `
        <div class="ash_tags">
            ${tagsStr}
        </div>
        `
        headStr = `
        <div class="ashtit" style="background-color: ${item.head.h_bgcolor};">
            <div class="ash_tit">
                <span>${item.head.h_tit}</span>
            </div>
            <div class="qrcode">
                <i></i>
                <div class="qrcode_box">
                    <img src="${item.head.h_QRCode}" alt="">
                    <p style="color: ${item.head.h_bgcolor};">扫码进入手机版</p>
                </div>
            </div>
            ${tagsStr}
        </div>
        `

        var bodyStr = ''
        var contentStr = ''
        // console.log(item.body.contentArr)
        item.body.contentArr.forEach(function (item) {
            console.log(item)
            var lbpic = ''
            item.lBigPic.forEach(function (item) {
                lbpic += `
                <div class="lbpic">
                    <a href="${item.href}" class="lhmove">
                        <img src="${item.img}" alt="">
                    </a>
                </div>
                `
            })
            var trList = ''
            item.trList.forEach(function (item) {
                trList += `
                <li>
                    <a href="${item.href}" class="lhmove">
                        <img src="${item.img}" alt="">
                        <div class="trList_info">
                            <p class="tit" style="color: ${color};">${item.tit}</p>
                            <p class="desc">${item.pro}</p>
                        </div>
                    </a>
                </li>
                `
            })
            trList = `
            <div class="trList">
                <ul>
                ${trList}
                </ul>
            </div>
            `

            var bList = ''
            item.bList.forEach(function (item) {
                bList += `
                <a href="${item.href}" class="lhmove">
                    <img src="${item.img}" alt="">
                </a>
                `
            })
            bList = `
            <div class="bList">${bList}</div>
            `
            contentStr += `
            <div class="ashsection">
            ${lbpic + trList + bList}
            </div>
            `

        })

        var lunboList = ''
        item.body.lunboList.forEach(function (lbitem, index) {
            var img = lbitem.img
            // if(index<6){
            //     img = item.body.lunboList[index+12].img
            // }
            // if(index>17){
            //     img = item.body.lunboList[index-12].img

            // }
            // console.log(index)
            // console.log(img)
            lunboList += `
            <li>
                <a href="${lbitem.href}">
                    <img src="${img}" alt="">
                </a>
            </li>
            `
        })
        lunboList = `
        <div class="lunboList">
            <div class="ashulbox">
                <ul class="animated bounceInLeft">
                ${lunboList}
                </ul>
            </div>
            <div class="lbctr_left"><i></i></div>
            <div class="lbctr_right"><i></i></div>
        </div>
        `

        bodyStr = `
        ${contentStr + lunboList}
        `
        ashsection += `
        ${headStr + bodyStr}
        `
    })
    return ashsection
}

$.get('/getData', { fileName: '底部栏' }, function (data) {
    console.log(data.msg)
    var liStr = ''
    data.msg.top.forEach(function (item) {
        var itemStr = ''
        item.li.forEach(function (item) {
            itemStr += `
            <p><a href="${item.href}">${item.text}</a></p>
            `
        })
        liStr += `
            <li>
                <p>${item.tit}</p>
                ${itemStr}
            </li>
        `
    })
    $('.severul').html(liStr)
    var henglanStr = ''
    data.msg.henglan.forEach(function (item) {
        henglanStr += `
        <a href="${item.href}">${item.text}</a>
        `
    })
    $('footer .hentlan').html(henglanStr)
    data.msg.xinxi.forEach(function (item) {
        $('footer .xinxi').append(`<p>${item}</p>`)
    })


})
