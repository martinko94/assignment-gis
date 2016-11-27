function vyhladajSkoly(x,cb){
	var point = [x._latlng.lng, x._latlng.lat];
	var distance = document.querySelector('#distance').value;//100;
	var request = $.ajax({url: "/api/schools", data: {point: point, distance: distance} });

	request.done(function(result){
		//console.log(result);
		result.forEach(function(item){
			var geojson = JSON.parse(item.geojson);
			var tmp = L.marker([geojson.coordinates[1], geojson.coordinates[0]],{
	        	icon: L.mapbox.marker.icon({
			        'marker-size': 'medium',
			        'marker-symbol': 'school',
			        'marker-color': '#8080ff'
			    })
	        }).addTo(map);
	        //tmp.bindPopup('<h3>'+item.name+'<h4>'+item.shop+'</h4>'+'</h3>');//popup on marker
					tmp.bindPopup('<h3>'+item.name+'</h3>');
	        markers.push(tmp);
		});
    return cb(null, result);//doc);
    }).fail(function(err){
    	console.log(err);
			return cb(err);
    });
}

function vyhladajGymnazia(x,cb){
	var point = [x._latlng.lng, x._latlng.lat];
	var distance = document.querySelector('#distance').value;//100;
	var request = $.ajax({url: "/api/colleges", data: {point: point, distance: distance} });

	request.done(function(result){
		//console.log(result);
		result.forEach(function(item){
			var geojson = JSON.parse(item.geojson);
			var tmp = L.marker([geojson.coordinates[1], geojson.coordinates[0]],{
	        	icon: L.mapbox.marker.icon({
			        'marker-size': 'medium',
			        'marker-symbol': 'college',
			        'marker-color': '#604020'
			    })
	        }).addTo(map);
	        //tmp.bindPopup('<h3>'+item.name+'<h4>'+item.shop+'</h4>'+'</h3>');//popup on marker
					tmp.bindPopup('<h3>'+item.name+'</h3>');
	        markers.push(tmp);
		});
    return cb(null, result);//doc);
    }).fail(function(err){
    	console.log(err);
			return cb(err);
    });
}

function vyhladajSkolky(x,cb){
	var point = [x._latlng.lng, x._latlng.lat];
	var distance = document.querySelector('#distance').value;//100;
	var request = $.ajax({url: "/api/kindergartens", data: {point: point, distance: distance} });

	request.done(function(result){
		//console.log(result);
		result.forEach(function(item){
			var geojson = JSON.parse(item.geojson);
			var tmp = L.marker([geojson.coordinates[1], geojson.coordinates[0]],{
	        	icon: L.mapbox.marker.icon({
			        'marker-size': 'medium',
			        'marker-symbol': 'pitch',
			        'marker-color': '#db70b8'
			    })
	        }).addTo(map);
	        //tmp.bindPopup('<h3>'+item.name+'<h4>'+item.shop+'</h4>'+'</h3>');//popup on marker
					tmp.bindPopup('<h3>'+item.name+'</h3>');
	        markers.push(tmp);
		});
    return cb(null, result);//doc);
    }).fail(function(err){
    	console.log(err);
			return cb(err);
    });
}

function vyhladajIhriska(x,cb){
	var point = [x._latlng.lng, x._latlng.lat];
	var distance = document.querySelector('#distance').value;//100;
	var request = $.ajax({url: "/api/playgrounds", data: {point: point, distance: distance} });

	request.done(function(result){
		//console.log(result);
		result.forEach(function(item){
			var geojson = JSON.parse(item.geojson);
			var tmp = L.marker([geojson.coordinates[1], geojson.coordinates[0]],{
	        	icon: L.mapbox.marker.icon({
			        'marker-size': 'medium',
			        'marker-symbol': 'playground',
			        'marker-color': '#ff0080'
			    })
	        }).addTo(map);
					var temp="";
					if (!item.name){temp="Detské ihrisko";}
					else {temp=item.name;}
	        //tmp.bindPopup('<h3>'+item.name+'<h4>'+item.shop+'</h4>'+'</h3>');//popup on marker
					tmp.bindPopup('<h3>'+temp+'</h3>');
	        markers.push(tmp);
		});
    return cb(null, result);//doc);
    }).fail(function(err){
    	console.log(err);
			return cb(err);
    });
}

function zelenaPlocha(x,cb){
	var point = [x._latlng.lng, x._latlng.lat];
	var distance = document.querySelector('#distance').value;//100;
	var request = $.ajax({url: "/api/area_parks", data: {point: point, distance: distance} });

	request.done(function(result){
		//console.log(result);
		result.forEach(function(item){
					//$("#perc").show();
					if (!document.querySelector("#vystup1").value){
						document.querySelector("#vystup1").value=(item.sum/countArea())*100+"%";
					} else if (!document.querySelector("#vystup2").value){
						document.querySelector("#vystup2").value=(item.sum/countArea())*100+"%";
					} else if (!document.querySelector("#vystup3").value){
						document.querySelector("#vystup3").value=(item.sum/countArea())*100+"%";
					}
					return cb(null, ((item.sum/countArea())*100));
		});
    }).fail(function(err){
    	console.log(err);
			return cb(err);
    });


}

function sports(x,cb){
	var point = [x._latlng.lng, x._latlng.lat];
	var distance = document.querySelector('#distance').value;//100;
	var request = $.ajax({url: "/api/sports", data: {point: point, distance: distance} });

	request.done(function(result){
		//console.log(result);
		result.forEach(function(item){
			var geojson = JSON.parse(item.geojson);
			var tmp = L.marker([geojson.coordinates[1], geojson.coordinates[0]],{
	        	icon: L.mapbox.marker.icon({
			        'marker-size': 'medium',
			        'marker-symbol': 'soccer',
			        'marker-color': '#009933'
			    })
	        }).addTo(map);
					tmp.bindPopup('<h3>'+item.leisure+'</h3><h3>'+item.sport+'</h3>');
	        markers.push(tmp);
					
		});
    return cb(null, result);//doc);
    }).fail(function(err){
    	console.log(err);
			return cb(err);
    });


}

function cultures(x,cb){
	var point = [x._latlng.lng, x._latlng.lat];
	var distance = document.querySelector('#distance').value;//100;
	var request = $.ajax({url: "/api/cultures", data: {point: point, distance: distance} });

	request.done(function(result){
		//console.log(result);
		result.forEach(function(item){
			var geojson = JSON.parse(item.geojson);
			var tmp = L.marker([geojson.coordinates[1], geojson.coordinates[0]],{
	        	icon: L.mapbox.marker.icon({
			        'marker-size': 'medium',
			        'marker-symbol': 'town-hall',
			        'marker-color': '#001a09'
			    })
	        }).addTo(map);
	        tmp.bindPopup('<h3>'+item.name+'<h4>'+item.amenity+'</h4>'+'</h3>');//popup on marker
					//tmp.bindPopup('<h3>'+item.name+'</h3>');
	        markers.push(tmp);
		});
    return cb(null, result);//doc);
    }).fail(function(err){
    	console.log(err);
			return cb(err);
    });
}

function nightlife(x,cb){
	var point = [x._latlng.lng, x._latlng.lat];
	var distance = document.querySelector('#distance').value;//100;
	var request = $.ajax({url: "/api/nightlife", data: {point: point, distance: distance} });
	//var doc=[];

	request.done(function(result){
		//console.log(result);
		result.forEach(function(item){
			var geojson = JSON.parse(item.geojson);
			var tmp = L.marker([geojson.coordinates[1], geojson.coordinates[0]],{
	        	icon: L.mapbox.marker.icon({
			        'marker-size': 'medium',
			        'marker-symbol': 'bar',
			        'marker-color': '#8000ff'
			    })
	        }).addTo(map);
	        tmp.bindPopup('<h3>'+item.name+'<h4>'+item.amenity+'</h4>'+'</h3>');//popup on marker
					//tmp.bindPopup('<h3>'+item.name+'</h3>');
	        markers.push(tmp);	
			//doc.push(item);
		});
		return cb(null, result);//doc);
    }).fail(function(err){
    	console.log(err);
			return cb(err);
    });
}

function lekaren(x, cb){
    var point = [x._latlng.lng, x._latlng.lat];
    var distance = document.querySelector('#distance').value;//100;
    var request = $.ajax({url: "/api/lekaren", data: {point: point, distance: distance} });
 
    request.done(function(result){
        //console.log(result);
        result.forEach(function(item){
            var geojson = JSON.parse(item.geojson);
            var tmp = L.marker([geojson.coordinates[1], geojson.coordinates[0]],{
                icon: L.mapbox.marker.icon({
                    'marker-size': 'medium',
                    'marker-symbol': 'pharmacy',
                    'marker-color': '#ff0000'
                })
            }).addTo(map);
            tmp.bindPopup('<h3>'+item.name+'<h4>'+item.amenity+'</h4>'+'</h3>');//popup on marker
                    //tmp.bindPopup('<h3>'+item.name+'</h3>');
                    //console.log(item.distance);
            distm.push(parseInt(item.distance));
            markers.push(tmp);
        });
		return cb(null, result);
    }).fail(function(err){
        console.log(err);
        return cb(err);
    });
}

function bus(x, cb){
    var point = [x._latlng.lng, x._latlng.lat];
    var distance = document.querySelector('#distance').value;//100;
    var request = $.ajax({url: "/api/bus", data: {point: point, distance: distance} });
 
    request.done(function(result){
        //console.log(result);
        result.forEach(function(item){
            var geojson = JSON.parse(item.geojson);
            var tmp = L.marker([geojson.coordinates[1], geojson.coordinates[0]],{
                icon: L.mapbox.marker.icon({
                    'marker-size': 'medium',
                    'marker-symbol': 'bus',
                    'marker-color': '#e6b800'
                })
            }).addTo(map);
            tmp.bindPopup('<h3>'+item.name+'</h3>');//popup on marker
                    //tmp.bindPopup('<h3>'+item.name+'</h3>');
                    //console.log(item.distance);
            buss.push(parseInt(item.distance));
            markers.push(tmp);
            
        });
		return cb(null, result);
    }).fail(function(err){
        console.log(err);
        return cb(err);
    });
}

function hospital(x, cb){
    var point = [x._latlng.lng, x._latlng.lat];
    var distance = document.querySelector('#distance').value;//100;
    var request = $.ajax({url: "/api/hospital", data: {point: point, distance: distance} });
 
    request.done(function(result){
        //console.log(result);
        result.forEach(function(item){
					//pointData[ii].data.hospitalD=item.distance;
					//ii++;
            var geojson = JSON.parse(item.geojson);
            var tmp = L.marker([geojson.coordinates[1], geojson.coordinates[0]],{
                icon: L.mapbox.marker.icon({
                    'marker-size': 'medium',
                    'marker-symbol': 'hospital',
                    'marker-color': '#8080ff'
                })
            }).addTo(map);
            tmp.bindPopup('<h3>'+item.name+'<h4>'+item.amenity+'</h4>'+'</h3>');//popup on marker
                    //tmp.bindPopup('<h3>'+item.name+'</h3>');
                    //console.log(item.distance);
            //distm.push(parseInt(item.distance));
            markers.push(tmp);
			
        });
		return cb(null, result);
    }).fail(function(err){
        console.log(err);
        return cb(err);
    });
}

function car(x,cb){
	var point = [x._latlng.lng, x._latlng.lat];
	var distance = document.querySelector('#distance').value;//100;
	var request = $.ajax({url: "/api/car", data: {point: point, distance: distance} });

	request.done(function(result){
		//console.log(result);
		result.forEach(function(item){
			var geojson = JSON.parse(item.geojson);
			var tmp = L.marker([geojson.coordinates[1], geojson.coordinates[0]],{
	        	icon: L.mapbox.marker.icon({
			        'marker-size': 'medium',
			        'marker-symbol': 'car',
			        'marker-color': '#009933'
			    })
	        }).addTo(map);
					tmp.bindPopup('<h3>'+item.amenity+'</h3>');
	        markers.push(tmp);
					
		});
    return cb(null, result);//doc);
    }).fail(function(err){
    	console.log(err);
			return cb(err);
    });


}
