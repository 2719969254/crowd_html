$(function () {
    console.log($.getUrlParam('id'));
   /* $.ajax({

        //url: "http://47.95.234.255:8080/crowd/selectInitiateById?id=" + $.getUrlParam('id') + "",
        url: "http://localhost/selectInitiateById?id=" + $.getUrlParam('id') + "",
        dataType: "json",
        success: function (data) {

        }
    });*/
});

$('#canyu_sub').on('click', function () {
    $.ajax({
       url:"http://localhost/insertActivity?pid=" + $.getUrlParam('id'),
        dataType:"json",
        data:$('#canyu_form').serialize(),
        success:function () {
            let i = window.confirm("参加成功，是否查看推荐车队协助您的运输");
            if (i !== false) {
                window.location.href = "tuijian.html";
            }
        }
    });
});