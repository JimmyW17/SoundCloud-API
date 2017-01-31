//============================================================================
//SoundClouds API
//============================================================================
// --allow-file-access-from-files
document.addEventListener("DOMContentLoaded",function(){

//===========================================================================
//SoundCloud API ID
//===========================================================================
 	SC.initialize({
 		client_id:"fd4e76fc67798bfa742089ed619084a6"
 	});

//===========================================================================
//Calling Tracks for a spesific artist on SoundCloud.
//===========================================================================

 	// SC.get("/tracks/", {
 	// 	q:"Chance The Rapper"
 	// }).then(function(response){
 	// 	this.tracks = response; 
 	// 	// console.log(response)

 	// 	// repsonse.map( function(element){
 	// 	// 	return element.id;
 	// 	// });
 	
 	// });

 // Global array that will keep track of the song IDs... we'll
 // preload these songs
 	tracks = ["90243754","90243752","90243761","90243759"];
 // Initialize our music player.. we want to add each of these songs to it
  	soundCloud = new MusicPlayer(tracks);

//===========================================================================
// getStreams will retrieve all SoundCloud players for an array of Track Ids
//===========================================================================
// we moved this into the Constructor as this.loadPlayers
	// function getStreams( array ) {
	// 	if( array.length > 0 ) {
	// 		SC.stream("/tracks/" + array[0] ).then(function(player){
	// 			soundCloud.players.push(player);
	// 			getStreams( array.slice(1) );
	// 		});
	// 	}
	// }
	// getStreams(tracks);
	// 


// ///sc.stream represents and audio tag but for soundclouds api
// var p1 = new SC.stream("/tracks/" + "90243754").then(function(player){     
//  		console.log(player);
//  		window.player = player;			//store local player in global player   
//  		soundCloud.player.push(player); 
//  		player.play()
 		 
 		
// });
// var p2 = new SC.stream("/tracks/" + "90243752").then(function(player){     
//  		console.log(player);
//  		window.player = player;			//store local player in global player   
//  		soundCloud.player.push(player);  
 		
// });
// var p3 = new SC.stream("/tracks/" + "90243761").then(function(player){     
//  		console.log(player);
//  		window.player = player;			//store local player in global player   
//  		soundCound.loudplayer.push(player);  
 		
// });
// var p4 = new SC.stream("/tracks/" + "90243759").then(function(player){     
//  		console.log(player);
//  		window.player = player;			//store local player in global player   
//  		soundCloud.player.push(player);  
 		
// });

// //===========================================================================
// // Music Constructor
// //===========================================================================
	
function MusicPlayer( songIds ) {
	var that = this;
	this.players = []; //[p1,p2,p3,p4];
	this.currentTrack = 0;
	
// //===========================================================================
// // Play Constructor 
// //===========================================================================
	
	this.play = function(){
		console.log("this:", this, "that:", that);
 		console.log(this.tracks)
 		if (that.players[that.currentTrack].pause());{
			that.players[that.currentTrack].play();
		}
	}
// //===========================================================================
// // Load Players  
// //===========================================================================
	this.loadPlayers = function( array ) {
		console.log( "loadingPlayers mon!", array, array.length );
		if( array.length > 0 ) {
			// entering stream...
			SC.stream("/tracks/" + array[0] ).then(function(player){
				that.players.push(player);
				that.loadPlayers( array.slice(1) );
			});
		} else {
			that.players[that.currentTrack].play();
		}
	}
// //===========================================================================
// // Pause Method 
// //===========================================================================

	this.pause = function(){
		if (!this.players[this.currentTrack].play());{
			this.players[this.currentTrack].pause();
		}
		console.log(this.pause)
		
	}
// //===========================================================================
// // Next Method 
// //===========================================================================
	
	// this.next = function(){
	// 	// pause song
	// 	// advance currentSong by 1
	// 	this.currentTrack += 1;
	// 	//play new current song
	// 	this.tracks[this.currentTrack].next();
		
// 		this.currentTrack = (this.tracks.length + this.currentTrack +1 ) 
// 		// % this.track.length;
// 	}
// }


// 	// this.back = function(){
// 	// 	this.currentSong = (this.songs.length + this.currentSong - 1 ) % this.songs.length;
// 	// 	this.play();
// 	// }
	// before we exit constructor, let's load our tracks
	this.loadPlayers(songIds);

};


// SoundCloud.tracks.push(S1,S2,S3,S4)
// ///"data index"//! words to pop up
// //data-duration///

// //============================================================================
// //Giving the buttons the "click" function
// //============================================================================	
	

	document.getElementById("Play").addEventListener("click", 
			soundCloud.play);
	
	document.getElementById("Pause").addEventListener("click",
			function(){soundCloud.pause();});
	

	document.getElementById("Next").addEventListener("click", 
	 		function(){soundCloud.next();});
	 

	document.getElementById("Back").addEventListener("click",
 			function(){soundCloud.back();});
	 
});



	







 	// this.paused = function(){
 	// 	if (!"/tracks/".play){
 	// 		"/tracks/".paused();
 	// 	}
 	// }

 	// this.next = function(){
 	// 	this.currentTrack += 1;
 	
 	// }



//create anotehr jukebox function and button functions but they are different because they
//apply to soundcloud




	// function play ( "/tracks/").then(function(player){
 			
   
 //    		player.play();
 //    		player.on("finish",function(){
 //   			currentTrack ++;
  