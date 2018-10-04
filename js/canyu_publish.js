$(function () {
    $.ajax({
        // TODO: 2018/10/1 上传服务器需要修改之处
        url: "http://47.95.234.255:8080/crowd/selectInitiate",
        //url: "http://localhost/selectInitiate",
        dataType: "json",
        success: function (data) {
            var t1 = document.getElementById("name_1").innerHTML;
            var li2 = "";
            for (var key in data) {
                console.log(data[key].desces);
                var li = "<li><div class='media media-x'>" +
                    "<input type=\"hidden\" id=" + data[key].id + " value=" + data[key].id + "><a class=\"float-left\" href=#>" +
                    "<img src=" + data[key].imgurl + " class=\"radius\" alt=\"...\">" +
                    "</a><div class=\"media-body\" > " +
                    "<strong >" + data[key].name + "</strong>" + data[key].desces + "<br/>" +
                    "<a class=\"button button-little border-red swing-hover\" href=\"add_canyu_info.html?id=" + data[key].id + "\">查看详情</a>" +
                    "</div>" +
                    "</div>" +
                    "</li>";
                li2 = li2 + li;
            }
            document.getElementById("name_1").innerHTML = t1 + li2;
        }
    });
});