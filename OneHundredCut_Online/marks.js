window.onload=function(){
    a();
    b();
}
$(function a() {
			
    var indicator = $('#indicator'),
            indicatorHalfWidth = indicator.width()/2,
            lis = $('#tabs').children('li');
    $("#tabs").tabs("#content section", {
        effect: 'fade',
        fadeOutSpeed: 0,
        fadeInSpeed: 400,
        onBeforeClick: function(event, index) {
            var li = lis.eq(index),
                newPos = li.position().left + (li.width()/2) - indicatorHalfWidth+35;
            indicator.stop(true).animate({ left: newPos }, 600, 'easeInOutExpo');
        }
    });	

});
$(function b(){
    $("#input1").click(function(){
        jQuery.alertWindow("标题设置","内容设置");
    });
    $("#input2").click(function(){
        jQuery.alertWindow("来自地球的消息","火星很好!");
    });
});


