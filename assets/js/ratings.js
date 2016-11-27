function rateHospital(points,ratings){
	var min=1000;
	for(var l=0;l<3;l++){
			//console.log(points[l]);
			var h=points[l].results.find(function (d) {
					return d.hospital;
					}
			);
			if (h.hospital.length==0) {
				//console.log("nemam nemocnicu");//h.hospital.length);//+
                ratings[l]--;
			}
			else {
				if (h.hospital[0].distance<min) min=h.hospital[0].distance;
			}
		}
		//console.log(min);
		for(var l=0;l<3;l++){
			var h=points[l].results.find(function (d) {
					return d.hospital;
					}
			);
            if (h.hospital.length>0) {
			    if (h.hospital[0].distance==min) ratings[l]++;
            }
		}
}

function rateBus(points,ratings){
    var min=1000;
	for(var l=0;l<3;l++){
			//console.log(points[l]);
			var h=points[l].results.find(function (d) {
					return d.bus;
					}
			);
			if (h.bus.length==0) {
				//console.log("nemam nemocnicu");//h.hospital.length);//+
                ratings[l]--;
			}
			else {
				if (h.bus[0].distance<min) min=h.bus[0].distance;
			}
		}
		//console.log(min);
		for(var l=0;l<3;l++){
			var h=points[l].results.find(function (d) {
					return d.bus;
					}
			);
            if (h.bus.length>0) {
			    if (h.bus[0].distance==min) ratings[l]++;
            }
		}
}

function rateLekaren(points,ratings){
    var min=1000;
	for(var l=0;l<3;l++){
			//console.log(points[l]);
			var h=points[l].results.find(function (d) {
					return d.lekaren;
					}
			);
			if (h.lekaren.length==0) {
				//console.log("nemam nemocnicu");//h.hospital.length);//+
                ratings[l]--;
			}
			else {
				if (h.lekaren[0].distance<min) min=h.lekaren[0].distance;
			}
		}
		//console.log(min);
		for(var l=0;l<3;l++){
			var h=points[l].results.find(function (d) {
					return d.lekaren;
					}
			);
            if (h.lekaren.length>0) {
			    if (h.lekaren[0].distance==min) ratings[l]++;
            }
		}
}

function rateSkolky(points,ratings){
    if($("#kindergarten").is(':checked')){
    var max=0;
	    for(var l=0;l<3;l++){
			console.log(points[l]);
			var h=points[l].results.find(function (d) {
					return d.skolky;
					}
			);
			if (h.skolky.length>0) {
				if (h.skolky.length>max) max=h.skolky.length;
			}
            else {ratings[l]--;}
		}
		for(var l=0;l<3;l++){
			var h=points[l].results.find(function (d) {
					return d.skolky;
					}
			);
            if (h.skolky.length>0) {
			    if (h.skolky.length==max) ratings[l]++;
            }
		}
    }
}

function rateIhriska(points,ratings){
    if($("#kindergarten").is(':checked')){
    var max=0;
	    for(var l=0;l<3;l++){
			console.log(points[l]);
			var h=points[l].results.find(function (d) {
					return d.ihriska;
					}
			);
			if (h.ihriska.length>0) {
				if (h.ihriska.length>max) max=h.ihriska.length;
			}
            else {ratings[l]--;}
		}
		for(var l=0;l<3;l++){
			var h=points[l].results.find(function (d) {
					return d.ihriska;
					}
			);
            if (h.ihriska.length>0) {
			    if (h.ihriska.length==max) ratings[l]++;
            }
		}
    }
}

function rateSkoly(points,ratings){
    if($("#school").is(':checked')){
    var max=0;
	    for(var l=0;l<3;l++){
			console.log(points[l]);
			var h=points[l].results.find(function (d) {
					return d.skoly;
					}
			);
			if (h.skoly.length>0) {
				if (h.skoly.length>max) max=h.skoly.length;
			}
            else {ratings[l]--;}
		}
		for(var l=0;l<3;l++){
			var h=points[l].results.find(function (d) {
					return d.skoly;
					}
			);
            if (h.skoly.length>0) {
			    if (h.skoly.length==max) ratings[l]++;
            }
		}
    }
}

function rateGymnazia(points,ratings){
    if($("#college").is(':checked')){
    var max=0;
	    for(var l=0;l<3;l++){
			console.log(points[l]);
			var h=points[l].results.find(function (d) {
					return d.gymnazia;
					}
			);
			if (h.gymnazia.length>0) {
				if (h.gymnazia.length>max) max=h.gymnazia.length;
			}
            else {ratings[l]--;}
		}
		for(var l=0;l<3;l++){
			var h=points[l].results.find(function (d) {
					return d.gymnazia;
					}
			);
            if (h.gymnazia.length>0) {
			    if (h.gymnazia.length==max) ratings[l]++;
            }
		}
    }
}

function rateCultures(points,ratings){
    if($("#culture").is(':checked')){
    var max=0;
	    for(var l=0;l<3;l++){
			console.log(points[l]);
			var h=points[l].results.find(function (d) {
					return d.cultures;
					}
			);
			if (h.cultures.length>0) {
				if (h.cultures.length>max) max=h.cultures.length;
			}
            else {ratings[l]--;}
		}
		for(var l=0;l<3;l++){
			var h=points[l].results.find(function (d) {
					return d.cultures;
					}
			);
            if (h.cultures.length>0) {
			    if (h.cultures.length==max) ratings[l]++;
            }
		}
    }
}

function rateSports(points,ratings){
    if($("#sports").is(':checked')){
    var max=0;
	    for(var l=0;l<3;l++){
			console.log(points[l]);
			var h=points[l].results.find(function (d) {
					return d.sports;
					}
			);
			if (h.sports.length>0) {
				if (h.sports.length>max) max=h.sports.length;
			}
            else {ratings[l]--;}
		}
		for(var l=0;l<3;l++){
			var h=points[l].results.find(function (d) {
					return d.sports;
					}
			);
            if (h.sports.length>0) {
			    if (h.sports.length==max) ratings[l]++;
            }
		}
    }
}

function rateNightlife(points,ratings){
    if($("#nightlife").is(':checked')){
    var max=0;
	    for(var l=0;l<3;l++){
			console.log(points[l]);
			var h=points[l].results.find(function (d) {
					return d.nightlife;
					}
			);
			if (h.nightlife.length>0) {
				if (h.nightlife.length>max) max=h.nightlife.length;
			}
            else {ratings[l]--;}
		}
		for(var l=0;l<3;l++){
			var h=points[l].results.find(function (d) {
					return d.nightlife;
					}
			);
            if (h.nightlife.length>0) {
			    if (h.nightlife.length==max) ratings[l]++;
            }
		}
    }
}

function rateZelena(points,ratings){
	var max=0;
	for(var l=0;l<3;l++){
			//console.log(points[l].results);
			var h=points[l].results.find(function (d) {
                //console.log(d);
					return d.zelena;
					}
			);
            if (h!=undefined){
                //console.log(h.zelena);
                if (h.zelena>max) max=h.zelena;
            }
            else {ratings[l]--;}
		}
		//console.log(max);
		for(var l=0;l<3;l++){
			var h=points[l].results.find(function (d) {
					return d.zelena;
					}
			);
            if (h!=undefined){
                if (h.zelena>0) {
                    if (h.zelena==max) ratings[l]++;
                }
            }
		}
}

function rateCar(points,ratings){
    if($("#car").is(':checked')){
        for(var l=0;l<3;l++){
                //console.log(points[l].results);
                var h=points[l].results.find(function (d) {
                    //console.log(d);
                        return d.car;
                        }
                );
                if (h.length>0){
                    ratings[l]++;
                }
                else {
                    ratings[l]--;
                }
        }
    }
}
