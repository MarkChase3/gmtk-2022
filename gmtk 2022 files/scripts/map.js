let screen1 = [
	Array.from({length: 11}, (v,i) => Array.from({length: 20}, (v2, j) => ( i == 2 || j === 2 ? 'san' : 'gra'))),
	[
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['wat','wat','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['wat','wat','NOT','NOT','NOT','tre','tre','tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','en1','tre','NOT','NOT'],
		['wat','wat','NOT','en1','NOT','NOT','NOT','NOT','NOT','NOT','en1','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT'],
		['wat','wat','NOT','tre','NOT','NOT','NOT','tre','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre'],
		['wat','wat','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','tre','tre','tre','tre'],
		['wat','wat','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre'],
		['wat','wat','NOT','NOT','NOT','tre','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre'],
	]
];
let screen2 = [
	Array.from({length: 11}, (v,i) => Array.from({length: 20}, (v2, j) => 'san')),
	[
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','pa1','pa2','NOT','iro','cac','NOT'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','pa3','NOT','NOT','NOT','NOT','NOT'],
		['NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','en1','NOT','NOT','NOT'],
		['NOT','NOT','NOT','en1','iro','NOT','NOT','iro','NOT','NOT','en1','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT'],
		['cac','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','iro','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac'],
		['cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','cac'],
		['cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','cac','cac'],
		['cac','cac','NOT','NOT','NOT','cac','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','cac','cac'],
		['cac','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','cac','cac','cac'],
	]
];
let screen3 = [
	Array.from({length: 11}, (v,i) => Array.from({length: 20}, (v2, j) => 'san')),
	[
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
		['NOT','NOT','NOT','NOT','NOT','cac','cac','cac','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['NOT','NOT','NOT','NOT','NOT','pa1','pa2','pa2','pa6','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['NOT','NOT','NOT','NOT','NOT','pa3','NOT','NOT','pa9','NOT','NOT','NOT','NOT','NOT','NOT','NOT','en1','NOT','NOT','NOT'],
		['NOT','NOT','NOT','en1','NOT','pa3','NOT','NOT','pa9','NOT','en1','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['cac','NOT','NOT','NOT','NOT','pa3','iro','NOT','pa9','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac'],
		['cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','iro','NOT','NOT','NOT','NOT','NOT','NOT','cac'],
		['cac','iro','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','cac'],
		['cac','cac','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','cac'],
		['cac','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','cac','cac','cac'],
	]
];
let screen4 = [
	Array.from({length: 11}, (v,i) => Array.from({length: 20}, (v2, j) => ( i == 2 || j === 17 ? 'san' : 'gra'))),
	[
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['NOT','NOT','NOT','NOT','NOT','tre','pa2','pa2','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','en1','tre','wat','wat'],
		['NOT','en1','NOT','tre','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','wat','wat'],
		['tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','wat','wat'],
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','wat','wat'],
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','wat','wat'],
	]
];
let screen5 = [
	Array.from({length: 11}, (v,i) => Array.from({length: 20}, (v2, j) => ( j === 2 ? 'san' : 'gra'))),
	[
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre','tre'],
		['wat','wat','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','tre','tre'],
		['wat','wat','NOT','tre','NOT','NOT','tre','NOT','en1','tre','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','NOT','tre'],
		['wat','wat','NOT','NOT','en1','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','tre','NOT','NOT','NOT','NOT'],
		['wat','wat','NOT','NOT','NOT','NOT','tre','NOT','NOT','tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['wat','wat','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT'],
		['wat','wat','NOT','NOT','tre','NOT','tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','en1','tre'],
		['wat','wat','NOT','NOT','NOT','NOT','tre','tre','NOT','tre','NOT','NOT','NOT','NOT','NOT','tre','NOT','tre','tre','tre'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre'],
	]
];
let screen6 = [
	Array.from({length: 11}, () => Array.from({length: 20}, () => 'gra')),
	[
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre','tre'],
		['tre','tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre'],
		['tre','NOT','NOT','NOT','tre','NOT','tre','NOT','tre','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','en1','tre'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','en1','NOT','NOT','NOT','NOT','NOT','NOT'],
		['NOT','NOT','tre','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT'],
		['NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','tre'],
		['tre','NOT','tre','tre','NOT','NOT','tre','en1','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','en1','NOT','tre'],
		['tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre'],
		['tre','tre','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','tre','tre'],
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre'],
	]
];
let screen7 = [
	Array.from({length: 11}, () => Array.from({length: 20}, () => 'gra')),
	[
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre'],
		['tre','tre','tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','tre','tre','NOT','NOT','NOT','NOT','NOT','tre','tre'],
		['tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','tre','pa1','pa2','NOT','tre','NOT','tre'],
		['NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','en1','pa3','NOT','NOT','NOT','NOT','NOT'],
		['NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','tre','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT'],
		['NOT','NOT','tre','en1','NOT','NOT','NOT','NOT','NOT','tre','en1','NOT','tre','NOT','tre','NOT','NOT','NOT','NOT','NOT'],
		['tre','NOT','NOT','tre','tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre'],
		['tre','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','tre','NOT','tre','NOT','NOT','NOT','tre','tre'],
		['tre','tre','NOT','tre','NOT','NOT','NOT','NOT','tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','tre','NOT','NOT','tre'],
		['tre','tre','NOT','NOT','tre','tre','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre'],
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre'],
	]
];
let screen8 = [
Array.from({length: 11}, (v,i) => Array.from({length: 20}, (v2, j) => ( j === 17 ? 'san' : 'gra'))),
	[
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','wat','wat'],
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['tre','tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','tre','pa1','pa2','NOT','NOT','wat','wat'],
		['NOT','tre','tre','NOT','tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','en1','pa3','NOT','NOT','NOT','wat','wat'],
		['NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['NOT','tre','NOT','en1','NOT','NOT','NOT','NOT','NOT','tre','en1','NOT','tre','NOT','tre','NOT','NOT','NOT','wat','wat'],
		['tre','NOT','NOT','tre','tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','wat','wat'],
		['tre','tre','tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','tre','NOT','tre','NOT','NOT','NOT','wat','wat'],
		['tre','tre','tre','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['tre','tre','tre','tre','NOT','tre','NOT','tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','tre','NOT','NOT','wat','wat'],
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','wat','wat'],
	]
];
let screen9 = [
	Array.from({length: 11}, () => Array.from({length: 20}, () => 'san')),
	[
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','cac','cac','cac'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT','cac','cac'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','iro','NOT','NOT','NOT','cac','cac','cac'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','en1','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','en1','NOT','NOT','NOT'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','iro','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','cac','cac'],
		['wat','wat','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','cac'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','cac','cac','cac'],
	]
];
let screen10 = [
	Array.from({length: 11}, () => Array.from({length: 20}, () => 'san')),
	[
		['cac','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','cac','NOT','NOT','cac','cac','cac','cac'],
		['cac','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT','en1','cac'],
		['cac','en1','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT','iro','NOT','NOT','NOT','NOT','NOT','NOT','cac'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','en1','NOT','NOT','NOT','cac','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['NOT','NOT','cac','NOT','NOT','NOT','cac','NOT','iro','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['cac','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','cac'],
		['cac','cac','NOT','iro','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT','cac'],
		['cac','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','cac'],
		['cac','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','cac'],
		['cac','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','cac','cac','cac'],
	]
];
let screen11 = [
	Array.from({length: 11}, () => Array.from({length: 20}, () => 'gra')),
	[
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre'],
		['tre','tre','tre','tre','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','tre','tre'],
		['tre','tre','tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','tre','pa1','pa2','NOT','tre','NOT','tre'],
		['NOT','tre','tre','NOT','tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','en1','pa3','NOT','NOT','NOT','NOT','NOT'],
		['NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','tre','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT'],
		['NOT','tre','NOT','en1','NOT','NOT','NOT','NOT','NOT','tre','en1','NOT','tre','NOT','tre','NOT','NOT','NOT','NOT','NOT'],
		['tre','NOT','NOT','tre','tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','tre'],
		['tre','tre','tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','tre','NOT','tre','NOT','NOT','NOT','NOT','tre'],
		['tre','tre','tre','tre','NOT','NOT','NOT','NOT','tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre'],
		['tre','tre','tre','NOT','NOT','NOT','NOT','tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre'],
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre'],
	]
];
let screen12 = [
	Array.from({length: 11}, (v,i) => Array.from({length: 20}, (v2, j) => ( j === 17 ? 'san' : 'gra'))),
	[
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','wat','wat'],
		['tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['tre','tre','NOT','NOT','tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','wat','wat'],
		['NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','en1','NOT','wat','wat'],
		['NOT','en1','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['tre','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['tre','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','wat','wat'],
		['tre','NOT','NOT','tre','NOT','NOT','NOT','NOT','tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','NOT','wat','wat'],
	]
];
let screen14 = [
	Array.from({length: 11}, (v,i) => Array.from({length: 20}, (v2, j) => ( i === 8 ? 'san' : 'gra'))),
	[
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre'],
		['tre','tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre'],
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','tre','NOT','NOT'],
		['tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre'],
		['tre','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre'],
		['san','san','san','san','san','san','san','san','san','san','san','san','san','san','san','san','san','san','san','san'],
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
	]
];
let screen13 = [
	Array.from({length: 11}, (v,i) => Array.from({length: 20}, (v2, j) => 'san')),
	[
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','cac','cac','cac'],
		['wat','wat','NOT','NOT','iro','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','iro','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac'],
		['wat','wat','NOT','NOT','NOT','NOT','pa1','pa2','pa6','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT'],
		['bo1','bo2','NOT','iro','NOT','NOT','cac','cac','pa9','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['wat','wat','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['wat','wat','NOT','NOT','NOT','cac','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','cac'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','cac','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['wat','wat','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
	]
];
let screen15 = [
	Array.from({length: 11}, (v,i) => Array.from({length: 20}, (v2, j) => ( i === 8 ? 'san' : 'gra'))),
	[
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','tre','tre'],
		['tre','tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre'],
		['tre','tre','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','pa1','pa2','NOT','NOT','NOT','tre'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','pa3','NOT','NOT','NOT','NOT','NOT'],
		['NOT','NOT','NOT','NOT','NOT','pa1','pa2','pa2','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','en1','tre','NOT','NOT'],
		['NOT','NOT','NOT','NOT','NOT','pa3','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT'],
		['tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','tre','tre','NOT','NOT'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT'],
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
	]
];
let screen16 = [
	Array.from({length: 11}, (v, i) => Array.from({length: 20}, (v2, j) => (j === 17 || i === 8 ? 'san' : 'gra'))),
	[
		['tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','tre','NOT','wat','wat'],
		['tre','tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','wat','wat'],
		['tre','tre','tre','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','NOT','tre','NOT','NOT','tre','NOT','wat','wat'],
		['NOT','tre','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','tre','NOT','NOT','wat','wat'],
		['NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','NOT','NOT','tre','NOT','en1','NOT','wat','wat'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['tre','NOT','NOT','tre','NOT','NOT','pa1','pa2','NOT','tre','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['NOT','NOT','NOT','tre','NOT','NOT','pa3','NOT','NOT','NOT','NOT','NOT','NOT','NOT','tre','NOT','tre','NOT','wat','wat'],
		['NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','NOT','wat','wat'],
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
		['wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat','wat'],
	]
];
let screensMap = [
	[screen1, screen2, screen3, screen4],
	[screen5, screen6, screen7, screen8],
	[screen9, screen10, screen11, screen12],
	[screen13, screen14, screen15, screen16],
]
let map = screen16, xScreens = 0, yScreens = 3;
function createMap(x,y){
	map = screensMap[y][x];
	enemies = []
	hearts = [];
	carcasses = [];
	map[1].forEach( (line, y) => {
		line.forEach( (tile, x) => {
			if(tile === 'en1'){
				enemies.push(createEnemie(x * 16, y * 16, 1, 4, 1, loadImage('images/tileset.png'), [[52, 35, 16, 16]]))
			}
		})
	})
}
createMap(xScreens, yScreens);
