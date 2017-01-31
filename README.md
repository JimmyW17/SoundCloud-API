# SoundCloud-API
Creating a MusicPlayer using SoundClouds API.

Before this project, I created a musicplayer using preloaded MP3's I choose and hard coded them into an array. 
This time I had to use SoundClouds API, using their stream functions to pull songs by ID and then hardcoding them into an array as well. 
By the end I will most likely impliment a search Bar that can pull a songs or artists ID automatically. 

I ran into a few problems with SoundClouds SC.Stream that cause me to search many hours for a solution in my code and constructors which I though was why the songs couldnt be streamed and the functions to break.  
In reality the songs ID's were being lost in translation in the SoundCloud SC.Stream.
The then function cause the ID's to loose themselves when constucting my functions with "this.". 

Changing "this." to "that." it allowed the ID's to find themselves again and be called upond at the same time as the functions. 
///This will all be shown in the first uplaod. 
