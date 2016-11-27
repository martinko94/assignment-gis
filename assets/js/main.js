$('#evaluate').prop('checked', true);

L.mapbox.accessToken = 'pk.eyJ1IjoibWFydGluZXo5NCIsImEiOiJjaXZxdmpuM3YwMDJqMnltaW9qanA0NmRmIn0.7_E4-7ijeoHjycUUdq9PJw';
var map = L.mapbox.map('mapa', 'mapbox.streets')
    .setView([48.1453, 17.1045], 13);

/*var geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          17.118759155273438,
          48.147992238446264
        ]
      },
      properties: {}
    }
  ]
};

var myLayer = L.mapbox.featureLayer().addTo(map);
myLayer.setGeoJSON(geojson);*/

var selectedp = [];
var markers = [];
var circles = [];
var pointData = [];
var distm=[];
var buss=[];
var es=[];
var asad=0;

map.on('click',function(e){
        //console.log(e);
				if (selectedp.length<3){
					var icon = L.mapbox.marker.icon({
										'marker-size': 'small',
										'marker-symbol': ''+(selectedp.length+1),
										'marker-color': '#6666ff'
								});
						setMark(icon,e);
				}
				//console.log((69000/countArea())*100);
});

$('#vycisti').on('click',function () {
	clearAll();
});

$('#vycistiM').on('click',function () {
	clearMarkers();
});

$('#search').on('click',function () {
			if (selectedp.length===3){
			//selectedp.forEach(function(item){
				asad=99;
	pointData=[];
				async.each(selectedp,function(item,callbackTop){
						var tasks = [];
								if($("#kindergarten").is(':checked')){
										//vyhladajSkolky(item);
										tasks.push(function(callback){
												vyhladajSkolky(item, function(err, result) {
														if(err){
														}
														callback(null,{skolky:result});//null,result);
												});
										});
										//vyhladajIhriska(item);
									tasks.push(function(callback){
												vyhladajIhriska(item, function(err, result) {
														if(err){
														}
														callback(null,{ihriska:result});//null,result);
												});
										});
								}
								if($("#school").is(':checked')){
										//vyhladajSkoly(item);
										tasks.push(function(callback){
												vyhladajSkoly(item, function(err, result) {
														if(err){
														}
														callback(null,{skoly:result});//null,result);
												});
										});
										/*tasks.push(function(callback){
												vyhladajIhriska(item, function(err, result) {
														if(err){
														}
														callback(null,{ihriska:result});//null,result);
												});
										});*/
									}
								if($("#college").is(':checked')){
										//vyhladajGymnazia(item);
									tasks.push(function(callback){
												vyhladajGymnazia(item, function(err, result) {
														if(err){
														}
														callback(null,{gymnazia:result});//null,result);
												});
										});
								}
								if($("#sports").is(':checked')){
										//sports(item);
									tasks.push(function(callback){
												sports(item, function(err, result) {
														if(err){
														}
														callback(null,{sports:result});//null,result);
												});
										});
								}
								if($("#culture").is(':checked')){
										//cultures(item);
									tasks.push(function(callback){
												cultures(item, function(err, result) {
														if(err){
														}
														callback(null,{cultures:result});//null,result);
												});
										});
								}
								if($("#nightlife").is(':checked')){
										//nightlife(item);
										tasks.push(function(callback){
												nightlife(item, function(err, result) {
														if(err){
														}
														callback(null,{nightlife:result});//null,result);
												});
										});
								}
								if($("#car").is(':checked')){
										//nightlife(item);
										tasks.push(function(callback){
												car(item, function(err, result) {
														if(err){
														}
														callback(null,{car:result});//null,result);
												});
										});
								}
								//zelenaPlocha(item);
							
								tasks.push(function(callback){
										zelenaPlocha(item, function(err, result) {
												if(err){
												}
												callback(null, {zelena:result});
										});
								});
							
								tasks.push(function(callback){
										lekaren(item, function(err, result) {
												if(err){
												}
												distm.push(result);
												callback(null, {lekaren:result});
										});
								});

								tasks.push(function(callback){
										bus(item, function(err, result) {
												if(err){
												}
												buss.push(result);
												
												callback(null, {bus:result});
										});
								});

								tasks.push(function(callback){
										hospital(item, function(err, result) {
												if(err){
												}
												
												callback(null, {hospital:result});
										});
								});

								async.series(tasks, function(err, results) {
        				// results je pole vsetkych vysledkov
								//console.log(results);
								pointData.push({results,point:item});
        				callbackTop();
    						});
			});
			}
			else {
				alert("Prosím zvoľte tri lokality na mape");
			}
});

$('#evaluate').on('click',function () {
	if (distm.length>0){
		
		clearMarkers();
		//console.log(buss);
		//console.log(distm);
		//console.log(pointData);
		var ratings=evaluate(pointData);
		console.log(ratings);
		var m=-99;
		for (var p=0;p<ratings.length;p++){
			if (ratings[p]>m) m=ratings[p];
		}
		var index=ratings.indexOf(m);
		console.log(es[index]);
		map.removeLayer(selectedp[index]);
		//console.log(rating1+" "+rating2+" "+rating3);
		var icon = L.mapbox.marker.icon({
										'marker-size': 'small',
										'marker-symbol': 'star',
										'marker-color': '#cc7a00'
								});
		var au = L.marker([es[index].latlng.lat, es[index].latlng.lng],{
								icon: icon
							}).addTo(map);
							markers.push(au);
	}

	
});


function clearAll(){
  markers.forEach(function(item){
		  map.removeLayer(item);
	});
	circles.forEach(function(item){
		  map.removeLayer(item);
	});
	selectedp.forEach(function(item){
		  map.removeLayer(item);
	});
	selectedp=[];
	markers=[];
	circles=[];
	document.querySelector("#vystup1").value="";
	document.querySelector("#vystup2").value="";
	document.querySelector("#vystup3").value="";
	$("#perc").hide();
	distm=[];
	buss=[];
	pointData=[];
	es=[];

	$('#kindergarten').prop('checked', false);
	$('#school').prop('checked', false);
	$('#college').prop('checked', false);
	$('#sports').prop('checked', false);
	$('#culture').prop('checked', false);
	$('#nightlife').prop('checked', false);
	$('#car').prop('checked', false);
}

function clearMarkers(){
  markers.forEach(function(item){
		  map.removeLayer(item);
	});
	markers=[];
}

function setMark(icon,e){
	selectedPoint = L.marker([e.latlng.lat, e.latlng.lng],{
								icon: icon
							}).addTo(map);
						//markers.push(selectedPoint);
						console.log(selectedPoint);
						selectedp.push(selectedPoint);
						es.push(e);
						var cc=L.circle([e.latlng.lat, e.latlng.lng], document.querySelector('#distance').value).addTo(map);
						/*var cc=L.circle([e.latlng.lat, e.latlng.lng], {
							color: 'red',
							fillColor: '#f03',
							fillOpacity: 0.5,
							radius: document.querySelector('#distance').value
						}).addTo(map);*/
						circles.push(cc);
}

function countArea(){
	r=document.querySelector('#distance').value;
	return (3.14*(r*r));
}


function evaluate(points){
	var ratings=[0,0,0];
	//ratings.push(0);
	//ratings.push(0);
	//ratings.push(0);
	
	var point1=points[0].results;
	var point2=points[1].results;
	var point3=points[2].results;
	//console.log(points[0].point);

	rateLekaren(points,ratings);
	rateBus(points,ratings);
	rateHospital(points,ratings);
	rateSkolky(points,ratings);
	rateIhriska(points,ratings);
	rateSkoly(points,ratings);
	rateGymnazia(points,ratings);
	rateCultures(points,ratings);
	rateNightlife(points,ratings);
	rateSports(points,ratings);
	rateZelena(points,ratings);
	rateCar(points,ratings);

	return ratings;
}

function searchBlah(){
	
}