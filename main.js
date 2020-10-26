window.onload = function(){
    var wrongel = document.getElementById("wrongel");
    var start = document.getElementById("start");
    var oceaan = document.getElementById("oceaan");
    var doos = document.getElementById('doos');
    var doos2 = document.getElementById('doos2');
    var doos3 = document.getElementById("doos3");
    var uier = document.getElementById('uier');
    var particles = document.querySelector('[spe-particles]');  
    var bucket = document.getElementById("bucket");
    var camera = document.getElementById("camera");
    var eventcylinder = document.getElementById("eventcylinder");
    var eventkaas = document.getElementById("eventkaas");
    var melk = document.getElementById("melk");
    var scene = document.getElementById("scene");
    //kaaspers
    var persknop = document.getElementById("persknop");
    var kaaspers = document.getElementById("kaaspers");
    var scharnier = document.getElementById("scharnier");
    var kaastobbe = document.getElementById("kaastobbe");
    var kaasvat = document.getElementById("kaasvat");
    var kaasstremsel = document.getElementById("kaasstremsel");
    var persbank = document.getElementById("persbank");
    var stremselfles = document.getElementById("stremselfles");
    //pekelbad
    var pers2 = document.getElementById("kaaspers2");
    var pekelknop = document.getElementById("pekelknop");
    var checkpoints = document.getElementById("checkpoints");
    var melkgieten = document.getElementById("melkgieten");
    var watergieten = document.getElementById("watergieten");
    var stremselgieten = document.getElementById("stremselgieten");
    var melkgeluid = document.getElementById("melkgeluid");
    var kaas = document.getElementById("kaas");  
    var waterbucket = document.getElementById("waterbucket");  
    var droogrek = document.getElementById("droogrek2");
    var indicator = document.getElementById("indicator");
    var indicator2 = document.getElementById("indicator2");
    var indicator3 = document.getElementById("indicator3");
    var indicator4 = document.getElementById("indicator4");
    //var achtergrondMuziek = new Audio('https://cdn.glitch.com/4fd551fa-89ce-413d-a377-8ad0230dda08%2FFarm_Music.mp3?1545836967011');
    //achtergrondMuziek.play();
        function IndicatorAan() {
     setTimeout(function(){
       indicator2.setAttribute('visible','true');
     }, 12000);
   }
    
      function MelkAan() {
     setTimeout(function(){
       doos2.setAttribute('spe-particles','enabled: false');
     }, 5000);
         setTimeout(function(){
       doos2.setAttribute('spe-particles','enabled: true');
     }, 2000);
  }
    
    function stremselAan(){
      setTimeout(function(){
       doos2.setAttribute('spe-particles','enabled: false');      
     }, 4000);
         setTimeout(function(){
       doos2.setAttribute('spe-particles','enabled: true');
       doos2.setAttribute('spe-particles','radius: 0.2');
     }, 2000);
  }
    
    function waterAan(){
      setTimeout(function(){
       doos3.setAttribute('spe-particles','enabled: false');      
     }, 5000);
         setTimeout(function(){
       doos3.setAttribute('spe-particles','enabled: true');
       doos3.setAttribute('spe-particles','radius: 0.2');
     }, 2000);
  }
      
    var i = 0;  
    var box = document.getElementById("box");
    console.log(box);
    var scene1 = document.getElementById('scene1');
    console.log(scene1);
    
    //scene aanpassen zodat teleport platformen tevoorschijn komen
    box.onclick = function()
    {
      scene1.setAttribute('visible', 'false');
      scene1.setAttribute('position',{x:-2,y:0,z:-10});
      checkpoints.setAttribute('visible','true');
      //farm muziek aanzetten
     player.loadVideoById({'videoId': 'Q0XTtyntHV8',
                 'startSeconds': 1,
                 'suggestedQuality': 'large'});
    }
    
    if(i==0){
      //bucket oppakken
    bucket.onclick = function(){ 
      camera.appendChild(bucket);
      bucket.setAttribute('position', {x: -0.5, y:-0.2,z:-1.5});
      bucket.setAttribute('rotation', {x: -10, y:0, z:0});
      eventcylinder.setAttribute('visible','true');
      i = 1;
      console.log(i);
    // };  
      if(i==1){ 
        //bucket plaatsen onder de koe
        eventcylinder.onclick = function()
      {
      scene.appendChild(bucket);
      bucket.setAttribute('position', {x: 0.2, y:0.4,z:-1.1});
      eventcylinder.setAttribute('visible','false');
      melk.setAttribute('visible', 'true');
      i=2;  
      console.log(i);
    //};
    if(i==2){
      //koe melken
    uier.onmousedown = function()
    {
      eventcylinder.setAttribute('position',{y:20});
      var uitzetten = particles.components['spe-particles'].particleGroup.emitters[0].enable();
      melk.setAttribute('visible','true');
      melk.emit("melkPositie");
      melk.emit("melkRadius");
      melk.emit("resumePositie");
      melk.emit("resumeRadius");
      melkgeluid.components.sound.playSound();
      i = 3;
      console.log(i);
    };
    // stoppen met melken
    uier.onmouseup = function()
    {
      var aanzetten = particles.components['spe-particles'].particleGroup.emitters[0].disable();
      console.log(aanzetten);
      melk.setAttribute('visible','true');
      melk.emit("pauzePositie");
      melk.emit("pauzeRadius");
      melkgeluid.components.sound.stopSound();
      melkgieten.setAttribute("visible", "true");
      i = 3;
    // };
    // };
    if(i==3){   
      //melk in de tobbe gieten
      melkgieten.onclick = function()
      {
        scene.appendChild(bucket);
        bucket.setAttribute('position',{x: 2.5,y: 1.75,z: 1.5});
        bucket.emit("bucketRotatie");
        bucket.classList.remove("pickableItem");
        //Dit is om de melk te laten te gieten uit de bucket
        // doos2.setAttribute('spe-particles','enabled: true');
        //Dit is om de melk stroom te laten stoppen
        //doos2.setAttribute('spe-particles','enabled: false');
        // doos2.setAttribute('spe-particles','enabled: false');
        stremselgieten.setAttribute("visible", "true");      
        melkgieten.setAttribute("visible", "false");
        melkgieten.setAttribute("position", {y:20});      
      // };  
        MelkAan(); 
        //stremselfles oppakken
      stremselfles.onclick = function()
      {       
        camera.appendChild(stremselfles);
        stremselfles.setAttribute('position', {x: -0.5, y:-0.2,z:-1.5});
        i = 4;
        stremselfles.classList.remove("pickableItem");
        //stremsel in de tobbe gieten
        stremselgieten.onclick = function(){
          stremselgieten.setAttribute("position", {y:20})
          scene.appendChild(stremselfles);
          stremselfles.setAttribute('position',{x: 3, y: 1.8,z: 1.2});
          stremselfles.emit("flesRotatie");
          // doos2.setAttribute('spe-particles','enabled: true');
          stremselgieten.setAttribute("visible", "false");
          watergieten.setAttribute("visible", "true");
          stremselAan();
          //waterbucket oppakken
        waterbucket.onclick = function(){
          camera.appendChild(waterbucket);
          waterbucket.setAttribute('position', {x: -0.5, y:-0.2,z:-1.5}); 
          waterbucket.classList.remove("pickableItem");
          // water in de tobbe gieten
          watergieten.onclick = function(){
            watergieten.setAttribute("position", {y:20});
            scene.appendChild(waterbucket);
            waterbucket.setAttribute('position',{x: 2.5, y: 1.75,z: 1.5});
            watergieten.setAttribute("visible", "false");
            waterbucket.emit("wbucketRotatie");  
            waterAan();
            indicator.setAttribute('visible','true');
        };         
      };        
      }; 
    //};
    if(i == 4){
      //wrongelvork laten draaien
      start.onclick = function(){
        wrongel.emit("down");
        wrongel.emit("wrongela");
        wrongel.emit("up");
        oceaan.emit("melk");
        oceaan.emit("stil");
        start.classList.remove("pickableItem");
        indicator.setAttribute('visible','false');
        IndicatorAan();
        i = 5;
    // };
      if(i == 5){ 
        //kaasvat oppakken
        kaasvat.onclick = function()
    {
      camera.appendChild(kaasvat);
      kaasvat.setAttribute('position', {x: -0.5, y: -0.2, z: -1.5});
          //wrongel verzamelen in kaasvat
          kaastobbe.onclick = function()
          {
            kaasvat.appendChild(kaasstremsel);
            kaasstremsel.setAttribute('visible','true');
            kaastobbe.classList.remove("pickableItem");
            indicator2.setAttribute('visible','false');
            indicator3.setAttribute('visible','true');
            i = 6;
          // };
      if(i == 6){
        //kaasvat op persbank zetten
        persbank.onclick = function(){
          scene.appendChild(kaasvat);
          kaasvat.setAttribute('position',{x:6,y:1.2,z:6.5});
          kaasstremsel.setAttribute('visible','true');
          persbank.classList.remove("pickableItem");
          indicator3.setAttribute('visible','false');
          i = 7;        
    // };
          if(i == 7){    
            //kaas persen
            persknop.onclick = function(){ 
              kaasstremsel.setAttribute('visible','true');
              kaaspers.emit("persen");
              scharnier.emit("scharnier");
              kaasstremsel.emit("persstremsel");
              persknop.classList.remove("pickableItem");
              indicator4.setAttribute('visible','true');
            i = 8;
      // };
              if(i == 8){
                //kaasvat in pekelbad plaatsen
                pers2.onclick = function(){
                  indicator4.setAttribute('visible','false');
                  scene.appendChild(kaasvat);
                  kaasvat.setAttribute('position',{x:2.5,y:0.9,z:13.5});
                  kaasstremsel.setAttribute('visible','true');
                  kaasstremsel.setAttribute('position',{y:0.4});
                  pers2.classList.remove("pickableItem");
                  i = 9;
       // };
                  if(i == 9){
                    kaasstremsel.setAttribute('visible','true');
                    //kaasvat in pekelbad
                    pekelknop.onclick = function(){                  
                      pers2.emit("pekelen");
                      kaasvat.emit("pekelen");
                      kaasstremsel.setAttribute('visible','true');
                      kaasstremsel.setAttribute('position',{y:0.4});
                    // kaasstremsel.emit("pekelen");                  
                    i = 10;    
                // };
                      if(i == 10){
                        //kaasvat legen op droogrek
                        eventkaas.onclick = function(){
                          kaas.setAttribute('visible','true');
                          eventkaas.setAttribute("visible", "false");
                          eventkaas.classList.remove("pickableItem");
                          kaasvat.classList.remove("pickableItem");
                          // kaasvat verplaatsen naar de blauwe kast
                          scene.appendChild(kaasvat);
                          kaasvat.emit("kast");
                          // eindlied afspelen
                          player.loadVideoById({videoId: 'Px1AeGqamus',                           
                            startSeconds: 11.5,                                              
                            suggestedQuality: 'large'});
                        };                      
                       };
                    };    
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  };
  
  //YouTube Iframe API
    var tag = document.createElement('script');
  
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'Px1AeGqamus',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }
  
    function onPlayerReady(event) {
      // event.target.playVideo();
    }
  
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
         // setTimeout(stopVideo, 6900);
          done = true;
      }
      function stopVideo() {
          player.stopVideo();
        }
    }
  