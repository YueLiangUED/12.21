/**
 * Created by wangbiaozy on 2017/12/1.
 */
(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);
$(function () {



    //显示弹窗1
    function showTc_1() {
        $('.tc_1').show();
        showMask();
    }
    //关闭弹窗1
    function hideTc_1() {
        $('.tc_1').hide();
        hideMask();
    }
    //显示弹窗2
    function showTc_2() {
        $('.tc_2').show();
        showMask();
    }
    //关闭弹窗2
    function hideTc_2() {
        $('.tc_2').hide();
        hideMask();
    }
    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }
});
