var iput = prompt('Your word','');
iput = ' '+iput+' ';
var defaultcount = parseInt(prompt('How long',''));
var defaultvalue = '=';
console.log(defaultcount);
defaultcount -= iput.length;
var output = '';
for (var i=0;i<(defaultcount / 2);i++) {
	output += defaultvalue;
}
output += iput;
for (var i=0;i<(defaultcount / 2);i++) {
	output += defaultvalue;
}
console.log(output)
