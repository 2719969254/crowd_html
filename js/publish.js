function publish() {
    console.log($('#form1').serialize());
    console.log(JSON.stringify($('#form1').serializeJSON()));
    //	console.log(JSON.stringify($('#form1').serialize().replace(/=/g, ':').split("&")));
    $.ajax({
        // TODO: 2018/10/1 上传服务器需要修改之处
        url: "http://47.95.234.255:8080/crowd/addInitiate",
        //url: "http://localhost/addInitiate",
        dataType: "json",
        data: $('#form1').serialize(),
        success: function (data) {
            alert("提交成功");
            window.location.href = 'index_pro.html';
        }
    });
}

function upload() {
    var formData = new FormData();
    formData.append('file', $('#file')[0].files[0]); //从div input 中取得
    $.ajax({
        // TODO: 2018/10/1 上传服务器需要修改之处
        url: 'http://47.95.234.255:8080/crowd/upLoad',
        //url: 'http://localhost/upLoad',
        type: 'POST',
        cache: false,
        async: false, //同步（不是必须）
        data: formData,
        processData: false, //上传必须
        contentType: false, //上传必须
        success: function (data) {
            console.log(data);
            var t1 = document.getElementById("#img_path");
            var t2 = "<input class=\"input\" type=\"hidden\"  name=\"img_path\" value=" + data + ".png>";
            document.getElementById("img_path").innerHTML = t2;
            //$("#img_path").text(data);
            console.log(document.getElementById("img_path"));
            alert("成功");
        }
    });
}

/*
$.ajax({
	url: 'localhost/upLoad',
	type: 'POST',
	cache: false,
	async: false, //同步（不是必须）
	data: formData,
	processData: false, //上传必须
	contentType: false, //上传必须
	success: function(data) {
		url = $.parseJSON(data).src; //回调解析，图片路径
	}
});*/