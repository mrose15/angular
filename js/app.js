(function(){
var app = angular.module('store', []);

app.controller('StoreController', function(){
	this.products = gems;
});

var gems = [

{
	name: 'Dodecahedron',
	price: 2.95,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis lacus quis tortor gravida malesuada et quis nunc. Sed eu commodo risus. Vestibulum non lacus fringilla, mattis risus at, pharetra urna.',
	canPurchase: false,
	soldOut: true
},
{
	name: 'Pentagonal Gem',
	price: 5.95,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis lacus quis tortor gravida malesuada et quis nunc. Sed eu commodo risus. Vestibulum non lacus fringilla, mattis risus at, pharetra urna.',
	canPurchase: false,
	soldOut: true
}

]

})();