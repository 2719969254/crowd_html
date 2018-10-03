/*$(function () {
    let map = new AMap.Map("container", {
        resizeEnable: true,
        center: [116.397428, 39.90923],
        zoom: 13
    });

//获取用户所在城市信息
    function showCityInfo() {
        //实例化城市查询类
        var citysearch = new AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    let cityinfo = result.city;
                    let citybounds = result.bounds;
                     document.getElementById('info').innerHTML = '您当前所在城市：' + cityinfo;
                    console.log(cityinfo);
                    //地图显示当前城市
                    map.setBounds(citybounds);
                }
            } else {
                document.getElementById('info').innerHTML = result.info;
            }
        });
    }

    showCityInfo();
});*/

$('#buy').on('click', function () {
    var i = window.confirm("预约成功，是否立即与发起方取得联系");
    if (i != 0) {
        /*window.location.href="index.html";*/
        window.location.href = "tel:15364882057";
    }
});
$('#add').on('click', function () {
    var i = window.confirm("稍后将继续提醒您预约此批货车");
});

