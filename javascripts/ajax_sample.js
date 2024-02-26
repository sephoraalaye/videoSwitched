let number = 0;
let data = []; // Add variable to store data retrieved from ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  // Write a process to retrieve data from ajax.json
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
          data = JSON.parse(request.responseText);
          console.log(data);
          resolve();
        } else {
          reject("Error loading data");
        }
      }
    }
    request.open("GET", "ajax.json");
    request.send();
  });
}

function changeVideo() {
  // Describe the process when the button is clicked
      // Call getData process only if data is not retrieved from ajax.json
      button.addEventListener('click', e => {
        if(data.length > 0){
          titleArea.innerHTML = data[0].title;
          contentArea.innerHTML = data[0].content;
          videoArea.setAttribute("src", data[0].url);
          data.push(data.shift()); // Rotate data array
        }
      });
}

getData().then(() => {
  changeVideo();
}).catch(error => {
  console.error(error);
});

// function sayHello() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Hello!');
//       resolve();
//     }, 1000);
//   });
// }

// function sayGoodBye() {
//   console.log('GoodBye!');
// }







// $(function() {
//   const button = $("#btn");
//   const videoArea = $("#video");
//   const titleArea = $("#title");
//   const contentArea = $("#content");
//   let number = 0;

//   function getData() {
//     return $.ajax('ajax.json',{  //--3
//       type: 'GET',
//     })
//   };

//   function changeVideo() {
//     button.click(function(){
//       getData().then(function(data){ //--4
//         videoArea.html(data[number].url);
//         titleArea.html(data[number].title);
//         contentArea.html(data[number].content);
//         number == 2 ? number = 0 : number++
//       })
//     });
//   };

//   changeVideo();
// })

// function positiveNumber(num){
//   const d = new $.Deferred;
//   setTimeout(function(){
//     if(num > 0){
//       d.resolve();
//     } else {
//       d.reject('Please enter a positive number!');
//     }
//   }, 1000);
//   return d.promise();
// }

// function sayGood(){
//   console.log('Good!');
// }

// positiveNumber(1)
// .then(sayGood, function(e){
//   console.log(e);
// })


























// let number = 0; //--1
// const titleArea = document.getElementById("title"); //--2
// const contentArea = document.getElementById("content"); //--2
// const videoArea = document.getElementById("video"); //--2
// const button = document.getElementById('btn'); //--3







// function getData() {
//     const request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//       if (request.readyState == 4) {
//         if(request.status == 200) {
//           console.log(request.response);
//           document.getElementById("title").innerHTML = request.response[0].title; //--Fix
//           contentArea.innerHTML = request.response[number].content; //--5
//           videoArea.setAttribute("src", request.response[number].url); //--6
//           number == 2 ? number = 0 : number++; //--7
//         }
//       }
//     }
//     request.open("GET", "ajax.json"); // --1
//     request.responseType = "json"; // --2
//     request.send(null);
//   }
  
//   window.onload = getData;