$(function () {
    console.log($.getUrlParam('id'));
    $.ajax({

        //url: "http://47.95.234.255:8080/crowd/selectInitiateById?id=" + $.getUrlParam('id') + "",
        url: "http://localhost/selectInitiateById?id=" + $.getUrlParam('id') + "",
        dataType: "json",
        success: function (data) {
            for (var key in data) {
                var imgpatharr = data[key].imgurl.split(".");
                var imgpath = imgpatharr[0] + "." + imgpatharr[1] + "." + imgpatharr[2] + "." + imgpatharr[3] + "." + imgpatharr[4];
                document.getElementById("coverimg").innerHTML = "<img src=" + imgpath + ".png.png/>";
                //alert("请求成功");
                console.log(data);
            }
        }
    });
});