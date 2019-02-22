// ===============================================================================
// DATA
// Below data will hold all of the friends.
// ===============================================================================
//this is the only friends that is persistent data
var friendsArray = [
  {
    friendName: "Sterling",
    friendImg: "http://www4.pictures.zimbio.com/mp/kHoyq4whJW6l.jpg",
    scores: [
    	4,
		5,
		5,
		5,
		2,
		5,
		5,
		5,
		1,
		4
	]
  },
  {
    friendName: "Cyril",
    friendImg: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-archer-chris-parnell.jpg",
    scores: [
    5,
		1,
		2,
		1,
		5,
		5,
		1,
		1,
		4,
		5
	]
  },
  {
  	friendName: "Lana",
    friendImg: "https://vignette.wikia.nocookie.net/to-hollywood-and-beyond/images/d/d6/Lana_Kane_archer.jpg/revision/latest?cb=20170102021823",
    scores: [
    2,
		4,
		3,
		3,
		3,
		5,
		3,
		3,
		1,
		3
	]
	},
	{
  	friendName: "Pam",
    friendImg: "https://m.media-amazon.com/images/M/MV5BMjM4MTU2ODUwMF5BMl5BanBnXkFtZTgwMDQxNTIzMzE@._V1_.jpg",
    scores: [
    1,
		5,
		1,
		1,
		5,
		2,
		5,
		1,
		3,
		5
	]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;