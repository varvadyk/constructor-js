function Dog(name){
	this.myName=name;
	this.voice =function(){
		console.log('hey,my name '  + this.myName);

	}
}
 var dog1 = new Dog('Liilka');
var dog2 = new Dog('Biilka');

dog1.voice();
dog2.voice();

// var a ={
// 	name:'it-kamasutra'
// }
// a.name= 'it-kamasutra.com';
// a.num ='hey hey';