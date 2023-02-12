jwplayer("container").setup({

		    controls: true,
  
  displaytitle: true,
  displaydescription: true,
  abouttext: "Buy Me a Coffee",
  aboutlink: "   ",


		    skin: {
		    	name: 'Netflix',
		    },

		     
		    captions: {
		        color: '#FFF',
		         fontSize: 14,
		         backgroundOpacity: 0,
		         edgeStyle: 'raised' 
		    },

		  playlist: [
        ,
        //Begin Movies Truyen Ky Ly Tieu Long Tap 1
       {        
		    title: "   ",
		    description: "   ",
		    image: "   ",
		    sources: [{
		    file: "https://ddl.az-animex.com/api/raw/?path=/Series/K/Kawaii%20dake%20ja%20Nai%20Shikimori-san%20BD/%5BAz-Animex%5D%20Kawaii%20dake%20ja%20Nai%20Shikimori-san%20-%2001%20%5BBD%5D%5BZ-A%5D.mp4",
		      label: 'HD',
		      'type': 'mp4',
		      primary: 'html5',

		    },
],
		    
		 
		  }//end of movies
      ]
		});
jwplayer("container").setCaptions({
  "back": true,
  "backgroundOpacity": "32",
  "edgeStyle": "dropshadow",
  "fontSize": 14,
  "fontOpacity": 100,
  "fontScale": 0.05,
  "windowOpacity": 0,
  "color": "#ffff00"
});