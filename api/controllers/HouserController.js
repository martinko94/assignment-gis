'use strict';

module.exports = {
	'schools': function(req, res){
		var point = req.param('point');
		var distance = req.param('distance');
		var query = QueryService.schools(point,distance);
		console.log(query);
		sails.pgConnect(function(err, client, done){
			client.query(query, function(err, result){
				done();
				if(err){
					sails.log.error(err);
					return res.serverError('Server Error');
				}
					console.log(result.rows);
					return res.send(result.rows);
			});
		});
	},
	'colleges': function(req, res){
		var point = req.param('point');
		var distance = req.param('distance');
		var query = QueryService.colleges(point,distance);
		console.log(query);
		sails.pgConnect(function(err, client, done){
			client.query(query, function(err, result){
				done();
				if(err){
					sails.log.error(err);
					return res.serverError('Server Error');
				}
					console.log(result.rows);
					return res.send(result.rows);
			});
		});
	},
	'kindergartens': function(req, res){
		var point = req.param('point');
		var distance = req.param('distance');
		var query = QueryService.kindergartens(point,distance);
		console.log(query);
		sails.pgConnect(function(err, client, done){
			client.query(query, function(err, result){
				done();
				if(err){
					sails.log.error(err);
					return res.serverError('Server Error');
				}
					console.log(result.rows);
					return res.send(result.rows);
			});
		});
	},
	'playgrounds': function(req, res){
		var point = req.param('point');
		var distance = req.param('distance');
		var query = QueryService.playgrounds(point,distance);
		console.log(query);
		sails.pgConnect(function(err, client, done){
			client.query(query, function(err, result){
				done();
				if(err){
					sails.log.error(err);
					return res.serverError('Server Error');
				}
					console.log(result.rows);
					return res.send(result.rows);
			});
		});
	},
	'area_parks': function(req, res){
		var point = req.param('point');
		var distance = req.param('distance');
		var query = QueryService.area_parks(point,distance);
		console.log(query);
		sails.pgConnect(function(err, client, done){
			client.query(query, function(err, result){
				done();
				if(err){
					sails.log.error(err);
					return res.serverError('Server Error');
				}
					console.log(result.rows);
					return res.send(result.rows);
			});
		});
	},
	'sports': function(req, res){
		var point = req.param('point');
		var distance = req.param('distance');
		var query = QueryService.sports(point,distance);
		console.log(query);
		sails.pgConnect(function(err, client, done){
			client.query(query, function(err, result){
				done();
				if(err){
					sails.log.error(err);
					return res.serverError('Server Error');
				}
					console.log(result.rows);
					return res.send(result.rows);
			});
		});
	},
	'cultures': function(req, res){
		var point = req.param('point');
		var distance = req.param('distance');
		var query = QueryService.cultures(point,distance);
		console.log(query);
		sails.pgConnect(function(err, client, done){
			client.query(query, function(err, result){
				done();
				if(err){
					sails.log.error(err);
					return res.serverError('Server Error');
				}
					console.log(result.rows);
					return res.send(result.rows);
			});
		});
	},
	'nightlife': function(req, res){
		var point = req.param('point');
		var distance = req.param('distance');
		var query = QueryService.nightlife(point,distance);
		console.log(query);
		sails.pgConnect(function(err, client, done){
			client.query(query, function(err, result){
				done();
				if(err){
					sails.log.error(err);
					return res.serverError('Server Error');
				}
					console.log(result.rows);
					return res.send(result.rows);
			});
		});
	},
	'lekaren': function(req, res){
		var point = req.param('point');
		var distance = req.param('distance');
		var query = QueryService.lekaren(point,distance);
		console.log(query);
		sails.pgConnect(function(err, client, done){
			client.query(query, function(err, result){
				done();
				if(err){
					sails.log.error(err);
					return res.serverError('Server Error');
				}
					console.log(result.rows);
					return res.send(result.rows);
			});
		});
	},
	'bus': function(req, res){
		var point = req.param('point');
		var distance = req.param('distance');
		var query = QueryService.bus(point,distance);
		console.log(query);
		sails.pgConnect(function(err, client, done){
			client.query(query, function(err, result){
				done();
				if(err){
					sails.log.error(err);
					return res.serverError('Server Error');
				}
					console.log(result.rows);
					return res.send(result.rows);
			});
		});
	},
	'hospital': function(req, res){
		var point = req.param('point');
		var distance = req.param('distance');
		var query = QueryService.hospital(point,distance);
		console.log(query);
		sails.pgConnect(function(err, client, done){
			client.query(query, function(err, result){
				done();
				if(err){
					sails.log.error(err);
					return res.serverError('Server Error');
				}
					console.log(result.rows);
					return res.send(result.rows);
			});
		});
	},
	'car': function(req, res){
		var point = req.param('point');
		var distance = req.param('distance');
		var query = QueryService.car(point,distance);
		console.log(query);
		sails.pgConnect(function(err, client, done){
			client.query(query, function(err, result){
				done();
				if(err){
					sails.log.error(err);
					return res.serverError('Server Error');
				}
					console.log(result.rows);
					return res.send(result.rows);
			});
		});
	}



};
