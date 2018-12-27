function onComplete(position){
    console.log('succeed',position)
}
function onError(error){
    console.log('error',error)
}
window.onload = function () {
    var map = new AMap.Map('container', {
        resizeEnable: true,
        zoom:11,
    });

    map.plugin('AMap.Geolocation',function () {
        var geolocation = new AMap.Geolocation({
            buttonPosition:'RB',
            zoomToAccuracy:true
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation,'complete',onComplete);
        AMap.event.addListener(geolocation,'error',onError);
    });
    // AMap.service(["AMap.PlaceSearch"], function() {
    //     //构造地点查询类
    //     var placeSearch = new AMap.PlaceSearch({
    //         type: '餐饮服务', // 兴趣点类别
    //         pageSize: 5, // 单页显示结果条数
    //         pageIndex: 1, // 页码
    //         city: "010", // 兴趣点城市
    //         citylimit: true,  //是否强制限制在设置的城市内搜索
    //         map: map, // 展现结果的地图实例
    //         panel: "panel", // 结果列表将在此容器中进行展示。
    //         autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
    //     });
    //
    //     var cpoint = [116.405467, 39.907761]; //中心点坐标
    //     placeSearch.searchNearBy('', cpoint, 200, function(status, result) {
    //
    //     });
    // });
};
