(function(){
var app = angular.module('store', ['store-products']);

app.controller('StoreController', function(){
	this.products = gems;
});

var gems = [
{
	name: 'Dodecahedron',
	price: 2.00,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis lacus quis tortor gravida malesuada et quis nunc. Sed eu commodo risus. Vestibulum non lacus fringilla, mattis risus at, pharetra urna.',
	images: [
		{
			full: '/images/pentagonal.jpg',
			thumb: '/images/pentagonal-thumb.jpg'
		},
		{
			full: '/images/zircon.jpg',
			thumb: '/images/zircon-thumb.jpg'
		}

	],
	reviews:[
		{
			stars: 5,
			body: "I love this product!",
			author: "joe@thomas.com"
		},
		{
			stars: 1,
			body: "This product sucks!",
			author: "tim@hater.com"
		},

	]
},
{
	name: 'Pentagonal Gem',
	price: 5.95,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis lacus quis tortor gravida malesuada et quis nunc. Sed eu commodo risus. Vestibulum non lacus fringilla, mattis risus at, pharetra urna.',
	images: [
		{
			full: '/images/pentagonal.jpg',
			thumb: '/images/pentagonal-thumb.jpg'
		},
		{
			full: '/images/zircon.jpg',
			thumb: '/images/zircon-thumb.jpg'
		}

	],
	reviews:[
		{
			stars: 5,
			body: "I love this product!",
			author: "joe@thomas.com"
		},
		{
			stars: 1,
			body: "This product sucks!",
			author: "tim@hater.com"
		},

	]
}

]


app.controller("ReviewController", function(){
	this.review = {};

	this.addReview = function(product){
		product.reviews.push(this.review);
		this.review = {};
	};
});

})();
