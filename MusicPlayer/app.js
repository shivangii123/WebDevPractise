

let playBtn = document.getElementById('play-btn');
let prevBtn  = document.getElementById('prev-btn');
let frwdBtn = document.getElementById('fwd-btn');
let songlist = document.getElementById('song-list');
let progress = document.getElementById('progress');


let songsArr =[

    { name : 'song1' , id : 1  } ,
    { name : 'song2' , id : 2  } ,
    { name : 'song3' , id : 3  } ,
    { name : 'song4' , id : 4  } ,
    { name : 'song5' , id : 5  } ,
    { name : 'song6' , id : 6  }
]

let audio = new Audio('./assets/song1.mp3');

// show the song list in UI
for(let song of songsArr){

    let li = document.createElement('li');
    li.innerText = song.name ;
    li.setAttribute('id', song.id );
    li.classList.add('song-item');
    songlist.append(li);
}


// play utton icon changes to play/pause
playBtn.addEventListener('click', ()=>{
    audio.paused ? audio.play() : audio.pause() ;

    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play');
        playBtn.children[0].classList.add('fa-pause');
    }
    else{
        playBtn.children[0].classList.remove('fa-pause');
        playBtn.children[0].classList.add('fa-play');
    }
})


// Cuurent time ke Acc. range ar changes 
audio.addEventListener('timeupdate', ()=>{
    let currProgress = (audio.currentTime *100) /audio.duration ;
    progress.value = currProgress ;

})

// drag karne se aage move ho progress bar

progress.addEventListener('change', ()=>{
    let updatedTime = (audio.duration * progress.value)/100;
    audio.currentTime = updatedTime ;
})


//click song and it should play..
let currSongId =1;
const totalSongId = Object.keys(songsArr).length;
songlist.addEventListener('click', function(e){
    let songId = e.target.id ;
    currSongId = parseInt(songId.replace('string', '')) // song3-->"3"convrt to intger(3)

    audio.src = `./assets/song${songId}.mp3` ;
    audio.currentTime = 0 ;
    audio.play() ;

    playBtn.children[0].classList.add('fa-pause') ;
    playBtn.children[0].classList.remove('fa-play');

})

// Frwd/ Prev Button (loop-> last ke baad first again...)

frwdBtn.addEventListener('click', function(e){
    currSongId ++  ;

    if(currSongId >totalSongId) {
        currSongId = 1;
    }

    audio.src = `./assets/song${currSongId}.mp3` ;
    audio.currentTime = 0;
    audio.play();

})


prevBtn.addEventListener('click', function(){
    currSongId --;
    if(currSongId <1){
        currSongId = totalSongId ; // last song will play
    }

    audio.src = `./assets/song${currSongId}.mp3` ;
    audio.currentTime = 0;
    audio.play();
})
