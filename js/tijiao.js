$(function() {
	$('#public_sublit').click(function() {
		var name = $('#public_name').val();
		var neednumber = $('#money').val();
		var place = $('#place1').val()+"省"+$('#place2').val()+"市"+$('#place3').val()+"县";
		var desc = $('#desc').val();
		var bbb = {
			name:name,
			neednumber: neednumber,
			place:place,
			desc:desc
		}
		var pub = JSON.stringify(bbb);

		localStorage.setItem('pub',pub)
		var data2 = JSON.parse(localStorage.getItem('pub'));
//		console.log("pub"+data2) 
		
	})
/*	var pub = JSON.parse(localStorage.getItem('pub'));
	if(pub != null){
		$("#div_desc").text(pub.desc);
	}		
	if(pub != null){
		var li = "<li type=\"none\"><div class=\"media media-x\" onclick=\"window.location.href='add_info.html'\"><a class=\"float-left\" href=\"add_info.html\"><img src=\"images/gaoliang.jpg\" class=\"radius\" alt=\"...\"></a><div class=\"media-body\"><strong>"+pub.name+"</strong>"+pub.desc+"<br/><a class=\"button button-little border-red swing-hover\" href=#>查看详情</a> </div> </div> </li>";
		var html = document.getElementById("div_id").innerHTML;
		document.getElementById("div_id").innerHTML = html + li;
		
	}*/

/*	$("#name").text(pub.name);
	$("#desc").text(pub.desc);
	div_desc
	
	console.log(pub.desc);
		$("#div_desc").text(pub.desc);*/
})