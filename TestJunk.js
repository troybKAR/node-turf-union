'use strict';
var turf = require('@turf/turf');
var util = require('util');
var object = {
	"polys": [
		{
			"name": "Poly1",
			"type": "Feature",
			"properties": {},
			"geometry": {
				"type": "Polygon",
				"coordinates": [
					[
						[
							-112.074279,
							40.52215
						],
						[
							-112.074279,
							40.853293
						],
						[
							-111.610107,
							40.853293
						],
						[
							-111.610107,
							40.52215
						],
						[
							-112.074279,
							40.52215
						]
					]
				]
			}
		},
		{
			"name": "Poly2",
			"type": "Feature",
			"properties": {},
			"geometry": {
				"type": "Polygon",
				"coordinates": [
					[
						[
							-112.074279,
							40.52215
						],
						[
							-112.074279,
							40.85329
						],
						[
							-111.610104,
							40.85329
						],
						[
							-111.610104,
							40.52215
						],
						[
							-112.074279,
							40.52215
						]
					]
				]
			}
		},
		{
			"name": "Poly3",
			"type": "Feature",
			"properties": {},
			"geometry": {
				"type": "Polygon",
				"coordinates": [
					[
						[
							-112.074289,
							40.52215
						],
						[
							-112.074289,
							40.85329
						],
						[
							-111.610104,
							40.85329
						],
						[
							-111.610104,
							40.52215
						],
						[
							-112.074289,
							40.52215
						]
					]
				]
			}
		}
	]
}
  // var poly1 = turf.polygon([event.Poly1_coordinates], {"fill": "#0f0"});
  // var poly2 = turf.polygon([event.Poly2_coordinates], {"fill": "#00f"});
 
  // TODO Accept ARRAY of polygons.
//   var eventPolys = _.pluck(object,'poly?')

// for (var poly in object)  {
//     // for (var attr in poly) {
//         console.log(poly);
//     // }
// }
var polys = object.polys
console.log(polys.length);
// for (var i =0;i < polys.length; i++){
//     console.log(polys[i])
//     console.log(polys[i].geometry.coordinates)
// }
// var union = turf.union(polys[0],polys[1])
// console.log(union.geometry.coordinates)
var unionedPolys = turf.union.apply( this, polys);
console.log(util.inspect(unionedPolys,false,null))
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Unioned Polygons in POST',
//       input: union,
//     }),
//   };

//   callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });


/*
POST:
{
  "poly1": {
    "name": "Poly1",
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            -112.074279,
            40.52215
          ],
          [
            -112.074279,
            40.853293
          ],
          [
            -111.610107,
            40.853293
          ],
          [
            -111.610107,
            40.52215
          ],
          [
            -112.074279,
            40.52215
          ]
        ]
      ]
    }
  },
  "poly2": {
    "name": "Poly2",
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            -112.074279,
            40.52215
          ],
          [
            -112.074279,
            40.85329
          ],
          [
            -111.610104,
            40.85329
          ],
          [
            -111.610104,
            40.52215
          ],
          [
            -112.074279,
            40.52215
          ]
        ]
      ]
    }
  }
}
*/