// Basic Level

//Question #1

let arr = [5, 10, 15];
console.log(arr[2]);

//Question #2

let obj = { name: "Maimoona", degree: "MBBS" };
console.log(obj.degree);

//or

console.log(obj["degree"]);

//Question #3

let arr1 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr1.length; i++) { console.log(arr1[i]) };

//or

arr1.map(function (arrayNum) { console.log(arrayNum) });

//or

arr1.forEach(function (num) { console.log(num) });

//Question #4

let obj1 = { name: "Maimoona", degree: "MBBS", age: 25 };

for (const objProperty in obj1) {
    console.log(`${objProperty}: ${obj1[objProperty]}`);
}

//Intermediate Level

//Stusents Names and Hobbies Data

//Question #1

let students = [
    {
        name: "Amna",
        hobbies: ["eating", "cooking"]
    },
    {
        name: "Daniyal",
        hobbies: ["arts", "shopping"]
    },
    {
        name: "Fahad",
        hobbies: ["coding", "cooking"]
    },
    {
        name: "Hajra",
        hobbies: ["sleep", "reading"]
    }
];

students.forEach(function (hobby) { console.log(`${hobby.name} of ${hobby.hobbies}`) });

//or

for (let hobby = 0; hobby < students.length; hobby++) { console.log(`Hobbies of ${students[hobby].name} \n  ${[hobby + 1]} ${students[hobby].hobbies}`) };

//Question no#2

let students = [
    {
      name: "Amna",
      gender: "f",
      dob: new Date("02-04-1990"),
      address: {
        ilaqa: "Gulistan-e-Johar",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 47114
      },
      phoneNo: "0331-2324243",
      admissionTestScore: 56,
      hasInternet: true,
      hasComputer: false,
      hasJob: true,
      hasSchoolBefore: false
    },
    {
      name: "Hadia",
      gender: "f",
      dob: new Date("05-15-1984"),
      address: {
        ilaqa: "Lyari",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 75660
      },
      phoneNo: "0345-3452953",
      admissionTestScore: 48,
      hasInternet: false,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: true
    },
    {
      name: "Ahmed",
      gender: "m",
      dob: new Date("06-27-2002"),
      address: {
        ilaqa: "University Road",
        city: "Quetta",
        country: "Pakistan",
        postalCode: 82215
      },
      phoneNo: "0333-0124325",
      admissionTestScore: 33,
      hasInternet: true,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: false
    },
    {
      name: "Fariha",
      gender: "f",
      dob: new Date("09-13-1998"),
      address: {
        ilaqa: "University Road",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 82215
      },
      phoneNo: "0331-9432532",
      admissionTestScore: 33,
      hasInternet: true,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: false
    },
    {
      name: "Abdullah",
      gender: "m",
      dob: new Date("01-24-1972"),
      address: {
        ilaqa: "Bazar Colony",
        city: "Lahore",
        country: "Pakistan",
        postalCode: 32212
      },
      phoneNo: "0345-9912121",
      admissionTestScore: 33,
      hasInternet: false,
      hasComputer: false,
      hasJob: true,
      hasSchoolBefore: true
    }
  ];
  
  //task 1
  
  for(let i = 0 ; i<students.length;i++){
     console.log( students[i].name);
     console.log( students[i].gender);
      console.log(students[i].address["city"]);
      console.log(students[i].admissionTestScore);
  };
  
  
  //task 2
  
  for(let f = 0 ; f<students.length;f++){
      if(students[f].gender == "f"){
          console.log( (students[f].name ));
      }
  }
  
  //task 3
   
  for(let m = 0 ; m<students.length;m++){
      if(students[m].gender == "m"){
          console.log( (students[m].name ));
      }
  } 
  
  //task 4
  
  for(let num = 0 ; num < students.length ; num++){
     if(students[num]. admissionTestScore >= 50){
         console.log("name of student who pass test " + students[num].name) 
     }
  }
  
  //task 5
  
  for(let eligible = 0 ; eligible < students.length ; eligible++){
      if(students[eligible].hasInternet == true && students[eligible].address.city == "Karachi" ){
          console.log("Students who are eligible " + students[eligible].name);
      }
  }
  
  //task 6
   
  for(let adres = 0 ; adres < students.length ; adres++){
    console.log("name of student with adress " + students[adres].name + " address");
    console.log("name of student with adress " + students[adres].address.ilaqa +  ' in ' + students[adres].address.city + ' ,' + students[adres].address.country); 
  } 
  
  //task 7
  
  for(let u = 0 ; u < students.length ; u++){
     if(students[u]. phoneNo == "0331-2324243" || students[u].phoneNo == "0333-0124325" || students[u].phoneNo == "0331-9432532" ){
         console.log("name of student who have ufone number " + students[u].name) 
     }
  }
  
  //task 8
  
  for(let grpb =  0 ; grpb < students.length ; grpb++){
     if(students[grpb].hasJob == true){
         console.log("name of student who have job are in Group B " + students[grpb].name) 
     }
     else{
      console.log("name of student who have job are in Group A " + students[grpb].name) 
     }
  }
  
  //task 9

  let currentYear = new Date().getFullYear();
  
  for(let age = 0 ; age < students.length ; age++){
      console.log(students[age].name + " age is " + (currentYear - students[age].dob.getFullYear()) + " years" );
  }
  
  //task 10
  
let a = [30,36,18,22,48];
console.log(`Longest video ${Math.max.apply(null,ageOfStudent)}`); 



//videos Data Task

let videos = [
    {
        title: "Photoshop tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3
    },
    {
        title: "Episode # 01 - The Best Comedy Show",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    {
        title: "Adobe In Design tutorial",
        lengthInMinutes: 3,
        category: "Education",
        uploadDate: new Date("08-21-2020"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4000,
        rating: 3.3
    },
    {
        title: "Episode # 01 - The Kapil Sharma Show",
        lengthInMinutes: 1,
        category: "Entertainment",
        uploadDate: new Date("08-21-2020"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.1
    },
    {
        title: "How to use IF ELSE STATEMENT - tutorial by Tech Karo",
        lengthInMinutes: 10,
        category: "Education",
        uploadDate: new Date("02-20-2020"),
        tags: "if/else statement, switch, javascript",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 5
    },
    {
        title: "React tutorial",
        lengthInMinutes: 2,
        category: "Education",
        uploadDate: new Date("08-21-2020"),
        tags: "React,React-Native",
        features: ["Live", "360°", "HDR"],
        viewCount: 3700,
        rating: 5.9
    },
    {
        title: "Episode # 01 - erturul ghazi",
        lengthInMinutes: 2.5,
        category: "Entertainment",
        uploadDate: new Date("09-11-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145912,
        rating: 2.5
    },
    {
        title: "Programming with Mosh",
        lengthInMinutes: 0.5,
        category: "Education",
        uploadDate: new Date("08-21-2020"),
        tags: "javascript, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 1.8
    },
    {
        title: "Saas tutorial",
        lengthInMinutes: 90,
        category: "Education",
        uploadDate: new Date("07-22-2020"),
        tags: "CSS,SAAS,Web design",
        features: ["Live", "360°", "HDR"],
        viewCount: 4100,
        rating: 2.2
    },
    {
        title: "Episode # 01 - CRIME PATROL",
        lengthInMinutes: 39,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 12314,
        rating: 5.5
    },
    {
        title: "Yahoo Baba",
        lengthInMinutes: 60,
        category: "Education",
        uploadDate: new Date("01-10-2020"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 8001,
        rating: 1.3
    },
    {
        title: "Learning with me",
        lengthInMinutes: 2,
        category: "Education",
        uploadDate: new Date("08-21-2020"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 7241,
        rating: 4
    },
];

// //Task 2

for (let d = 0; d < videos.length; d++) {
    console.log(`Title: ${videos[d].title}`);
    console.log(`Length: ${videos[d].lengthInMinutes}`)
    console.log(`Category: ${videos[d].category}`)
    console.log(`View: ${videos[d].Views}`)
    console.log(`Upload: ${videos[d].uploadDate}`)
    console.log(`Rating: ${videos[d].rating}`);
}

//or 

videos.forEach(function (d) {
    console.log(`Title: ${d.title}`);
    console.log(`Length: ${d.lengthInMinutes}`)
    console.log(`Category: ${d.category}`)
    console.log(`View: ${d.Views}`)
    console.log(`Upload: ${d.uploadDate}`)
    console.log(`Rating: ${d.rating}`);
})

// //Task 3

for(let mint=0;mint<videos.length;mint++){
    if(videos[mint].lengthInMinutes < 3){
        console.log(`short title ${videos[mint].title}`);
    }
}

// //Task 4

for(let m=0;m<videos.length;m++){
    if(videos[m].lengthInMinutes > 20){
        console.log(`long title ${videos[m].title}`);
    }
}

// //Task 5

for(let meduim=0;meduim<videos.length;meduim++){
        if(videos[meduim].lengthInMinutes > 3 && videos[meduim].lengthInMinutes < 20){
            console.log(`meduim mint title ${videos[meduim].title}`);
        }
}

//Task 6

let lengthInMint = [70,19,6,3,1,10,2,2.5,0.5,90,39,60,2];
console.log(`Longest video ${Math.max.apply(null,lengthInMint)}`); 


// //Task 7

for (let edu = 0; edu < videos.length; edu++) {
    if (videos[edu].category === 'Education') {
        console.log(videos[edu].title);
    }
}

//or 

videos.forEach(edu => {
    if (edu.category === 'Education') {
        console.log(edu.title);
    }
}
);

// //Task 8


for (let t = 0; t < videos.length; t++) {
    if (videos[t].tags === "javascript, loops, web development") {
        console.log(videos[t].title);
    }
}

videos.forEach(js => {
    if (js.tags == 'javascript') {
        console.log(js.title);
    }
})

// // Task 9


videos.forEach(function(video){video.features.forEach(function(feature){
    // console.log(feature)
    if(feature=="HD"){
        console.log(video.title);
    }})});



//Task 10

for (let t = 0; t < videos.length; t++) {
    if (videos[t].uploadDate.getDate() == "21") {
        console.log(`title which videos upload today ${videos[t].title}`);
    }
}

//Task 11
new Date().getDay();

//Task 12

for (let month = 0; month < videos.length; month++) {
    if (videos[month].uploadDate.getMonth()+1 == "08") {
        console.log(`title which videos upload this month ${videos[month].title}`);
    }
}

//Task 13

for (let y = 0; y < videos.length; y++) {
    if (videos[y].uploadDate.getFullYear() == "2020") {
        console.log(`title which videos upload this year ${videos[y].title}`);
    }
}

//Task 14

videos.sort(function(a, b) {
    return parseFloat(a.viewCount) - parseFloat(b.viewCount);
}).forEach(video=>{console.log(video.title)});;

//Task 15

videos.sort(function(c, d) {
    return  parseFloat(c.rating) - parseFloat(d.rating); 
 }).forEach(video=>{console.log(video.title)});

// Advance level 

// Question no1

let receipe = {
    title:"Cake",
    serving :5,
    ingridients : ["flour","sugar","eggs","butter"]
}

console.log(receipe.title);
console.log(receipe.serving);
receipe.ingridients.forEach((ingrident)=>{
    console.log(ingrident);
})


//Question no#2

let books = [
    {title:"The Hobbit",author:"J.R.R. Tolkien",alreadyRead:true},
    {title:"The Lord of the Rings",author:"J.R.R. Tolkien",alreadyRead:false},
    {title:"The Great Gatsby",author:"F. Scott Fitzgerald",alreadyRead:false }, 
];


//Task 1

for(let b = 0 ; b< books.length; b++){
    console.log(`${books[b].title} by ${books[b].author}`);}
 
//Task 2    

for(let read = 0 ; read < books.length; read++){
    if(books[read].alreadyRead== true){console.log(`You already read ${books[read].title} by ${books[read].author}`)}
    else{console.log(`You still need to read ${books[read].title} by ${books[read].author}`)}}; 