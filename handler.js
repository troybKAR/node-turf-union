'use strict';
var turf = require('@turf/turf');

module.exports.polyunion = (event, context, callback) => {
  // TODO error checking/validation. 
  var eventPolys = event.polys
  if (typeof eventPolys !== 'undefined' && eventPolys !== null){
    // Accepts ARRAY of polygons
    var eventPolys = event.polys
    
    //mdn article on .apply() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
    var union = turf.union.apply(this,eventPolys)
    const response = {
      statusCode: 200,
      headers: {},
      body: JSON.stringify({
        message: 'Unioned Polygons in POST',
        count: eventPolys.length,
        polygons: union,
      }),
      isBase64Encoded: false
    };
  callback(null, response);
  } else {
    const response = {
      statusCode: 200,
      headers: {},
      body: JSON.stringify({
        message: 'Event did not contain a polys object in the Post',      
      }),
      isBase64Encoded: false
      
    };
  callback(null, response);
  }
};