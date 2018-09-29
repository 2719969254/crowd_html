$(function() {
		var data2 = JSON.parse(localStorage.getItem('data1'));
		console.log(data2)
	
	var tempData = {
		place: data
	}
	var tempData2 = {
		items2: data
	}
	var html = template("J_Template_Test", tempData); //读取模板文件;
	$('#lay').append(html);
	
	$("#a").text(data2.imageurl);
});
