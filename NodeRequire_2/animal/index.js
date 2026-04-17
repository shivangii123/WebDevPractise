
const dog = require('./dog') ;
const cat = require('./cat');

// //when we didn't write Anything->by defalut empty object export hua.. 
// // i.e. ->> module.exports = {} ;

// module.exports = "shivaa";  // "string" is printed as O/P

// //Whenever u reqre any folder, "index.js" file inside that folder is respnsble for the export of it,
// //so its compulsory to have "index.js" file to export something..,else ERROR in exporting

module.exports = {cat, dog} ;