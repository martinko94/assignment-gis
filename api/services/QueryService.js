'use strict';
module.exports = {
	'schools': function(point,distance){
		
			return `
				with skoly as (	select name, ST_AsGeoJSON(ST_Transform(way,4326)) as geojson 
									from planet_osm_point
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity = 'school') and name!=''
								union all
								select name, ST_AsGeoJSON(ST_Transform(ST_Centroid(way),4326)) as geojson 
									from planet_osm_polygon
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity = 'school') and name!=''
					)
				select * from skoly
				`;//ST_Centroid!! ST_Transform(way,4326)
	},
	'colleges': function(point,distance){
			return `
				with skoly as (	select name, ST_AsGeoJSON(ST_Transform(way,4326)) as geojson 
									from planet_osm_point
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity = 'college') and name!=''
								union all
								select name, ST_AsGeoJSON(ST_Transform(ST_Centroid(way),4326)) as geojson 
									from planet_osm_polygon
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity = 'college') and name!=''
					)
				select * from skoly
				`;//ST_Centroid!! ST_Transform(way,4326)
	},
	'kindergartens': function(point,distance){
			return `
				with skoly as (	select name, ST_AsGeoJSON(ST_Transform(way,4326)) as geojson 
									from planet_osm_point
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity = 'kindergarten') and name!=''
								union all
								select name, ST_AsGeoJSON(ST_Transform(ST_Centroid(way),4326)) as geojson 
									from planet_osm_polygon
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity = 'kindergarten') and name!=''
					)
				select * from skoly
				`;//ST_Centroid!! ST_Transform(way,4326)
	},
	'playgrounds': function(point,distance){
			return `
				with skoly as (	select name, ST_AsGeoJSON(ST_Transform(way,4326)) as geojson 
									from planet_osm_point
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (leisure = 'playground')
								union all
								select name, ST_AsGeoJSON(ST_Transform(ST_Centroid(way),4326)) as geojson 
									from planet_osm_polygon
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (leisure = 'playground')
					)
				select * from skoly
				`;//ST_Centroid!! ST_Transform(way,4326)
	},
	'area_parks': function(point,distance){
			return `
				select sum(st_area(way)) from planet_osm_polygon where st_dwithin(
						ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
						ST_Transform(way,4326)::geography,${distance}) and leisure = 'park'--(landuse = 'forest' or landuse = 'grass' or landuse = 'greenfield' or landuse='meadow' or landuse='village_green')
			`;

	},
	'sports': function(point,distance){
			return `
				select leisure,sport,ST_AsGeoJSON(ST_Transform(ST_Centroid(way),4326)) as geojson from planet_osm_polygon where st_dwithin(
						ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
						ST_Transform(way,4326)::geography,${distance}) and sport!=''
				union all
				select leisure,sport,ST_AsGeoJSON(ST_Transform(way,4326)) as geojson from planet_osm_point where st_dwithin(
						ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
						ST_Transform(way,4326)::geography,${distance}) and sport!=''
				`;

	},
	'cultures': function(point,distance){
		
			return `
				with cultures as (	select name, amenity, ST_AsGeoJSON(ST_Transform(way,4326)) as geojson 
									from planet_osm_point
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity='arts_centre' or amenity='cinema' or amenity='community_centre' or amenity='social_centre' or amenity='theatre' or amenity='library')
								union all
								select name, amenity, ST_AsGeoJSON(ST_Transform(ST_Centroid(way),4326)) as geojson 
									from planet_osm_polygon
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity='arts_centre' or amenity='cinema' or amenity='community_centre' or amenity='social_centre' or amenity='theatre' or amenity='library')
					)
				select * from cultures
				`;//ST_Centroid!! ST_Transform(way,4326)
	},
	'nightlife': function(point,distance){
		
			return `
				with nightlife as (	select name, amenity, ST_AsGeoJSON(ST_Transform(way,4326)) as geojson 
									from planet_osm_point
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity='pub' or amenity='bar' or amenity='nightclub')
								union all
								select name, amenity, ST_AsGeoJSON(ST_Transform(ST_Centroid(way),4326)) as geojson 
									from planet_osm_polygon
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity='pub' or amenity='bar' or amenity='nightclub')
					)
				select * from nightlife
				`;//ST_Centroid!! ST_Transform(way,4326)
	},
	'lekaren': function(point,distance){
		
			return `
				with liekaren as (	select name, amenity, ST_AsGeoJSON(ST_Transform(way,4326)) as geojson,st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography) as distance
									from planet_osm_point
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity='pharmacy')
								union all
								select name, amenity, ST_AsGeoJSON(ST_Transform(ST_Centroid(way),4326)) as geojson,st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography) as distance
									from planet_osm_polygon
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity='pharmacy')
					)
				select * from liekaren order by distance asc limit 1
				`;
	},
	'bus': function(point,distance){
		
			return `
				with busstop as (	select name, ST_AsGeoJSON(ST_Transform(way,4326)) as geojson,st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography) as distance
									from planet_osm_point
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (public_transport='platform')
					)
				select * from busstop order by distance asc limit 1
				`;
	},
	'hospital': function(point,distance){
		
			return `
				with nemocnica as (	select name, amenity, ST_AsGeoJSON(ST_Transform(way,4326)) as geojson,st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography) as distance
									from planet_osm_point
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity='clinic' or amenity='hospital')
								union all
								select name, amenity, ST_AsGeoJSON(ST_Transform(ST_Centroid(way),4326)) as geojson,st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography) as distance
									from planet_osm_polygon
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity='clinic' or amenity='hospital')
					)
				select * from nemocnica order by distance asc limit 1
				`;
	},
	'car': function(point,distance){
		return `
				with parking as (	select amenity, ST_AsGeoJSON(ST_Transform(way,4326)) as geojson,st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography) as distance
									from planet_osm_point
									where st_distance(
									ST_GeographyFromText('SRID=4326;POINT(${point[0]} ${point[1]})'),
									ST_Transform(way,4326)::geography)<${distance}
									and (amenity='parking')
					)
				select * from parking order by distance limit 1
				`;
	
	}

	//velkost parkoviska, najblizsi obchod
};
