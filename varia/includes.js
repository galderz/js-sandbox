var _ = require('underscore');

var expected = "Hostname/IP doesn't match certificate's altnames";
var actual = "Error: Hostname/IP doesn't match certificate's altnames: \"Host: localhost. is not cert's CN: CA\"";

console.log(actual.includes(expected));
console.log(_.contains(actual, expected));
