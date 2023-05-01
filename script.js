console.log(`Sup Globe Peeps?`);

// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
const oneAJSON = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 1a
jokeJS1 = JSON.parse(oneAJSON);

// 1b
p1.innerText = jokeJS1.setup;

// 1c
p2.innerText = jokeJS1.punchline;



// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

// 2a
axios.get('https://www.boredapi.com/api/activity/')

// 2b
    .then((result) => {
        activityJS2 = result.data.activity;
        console.log(activityJS2);
        
        // 2c
        typeJS2 = result.data.type;
        console.log(typeJS2);
        p3.innerText = typeJS2;
        p4.innerText = activityJS2;
        console.log('Q2: Success');
    })
 
 // 2d
       .catch((err) => {
           console.log(err);
           console.log('Q2: Error');
    });



// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

// 3a
async function activityFunc(){

// 3d
    try {
        
        // 3b
        const activityJS3 = await axios.get('https://www.boredapi.com/api/activity/');
        // console.log(activityJS3);
        
        // 3c
        p5.innerText = activityJS3.data.activity;
        p6.innerText = activityJS3.data.type;
        console.log('Q3: Success');
    }
    catch(err) {
        console.log(err);
        console.log('Q3: Error');
    }
}

activityFunc();


// https://api.tvmaze.com/api/shows/:id/episodebynumber?season=:season&number=:number
// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);


async function tvMazeFunc(){
    try {
        let theShow = await axios.get('https://api.tvmaze.com/shows/38963');
        // console.log(theShow);
        let theEpisode = await axios.get('https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8')
        // console.log(theEpisode);
        theShow = theShow.data.name;
        let theSeason = theEpisode.data.season;
        let theName = theEpisode.data.name;
        theEpisode = theEpisode.data.number;
        p7.innerText += `${theShow}\nSeason: ${theSeason}, Episode: ${theEpisode}\n${theName}`;
        console.log('Q4: Success');
    } catch (err) {
        console.log(err);
        console.log('Q4: Error');
    }
}

tvMazeFunc();


// 5

async function pikaPic(){
    try {
        let pikachu = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
        console.log(pikachu.data.sprites.front_default);
        pic = pikachu.data.sprites.front_default;
        const img = document.createElement('img');
        img.src = pic;
        document.body.append(img)
        console.log('Q5: Success');
    } catch (err) {
        console.log(err);
        console.log('Q5: Error');
    }
}

pikaPic();


