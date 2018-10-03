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
$(function() {
    console.log(data);

    $('#add1').click(function() {
        var vaaa = $('#account').val()
        var bbb = {
            imageurl:vaaa,
            name: vaaa
        }
        var ccc = JSON.stringify(bbb);
        //data.push(ccc)
//		console.log(data)
        localStorage.setItem('data1',ccc)

    })

    var tempData = {
        items: data
    }
    var tempData2 = {
        items2: data
    }
    var html = template("J_Template_Test", tempData); //读取模板文件;
    $('#lay').append(html);
})