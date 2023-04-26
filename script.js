// let logo = document.getElementById("logo");

// let animateLogo = () => {
//   let str = "MyPortfolio";
//   let i = 0;
//   let backspace = false;
//   let interval = setInterval(() => {
//     if (i < str.length) {
//       if (i >= 2) { // start appending from the third character to exclude the "My"
//         logo.innerHTML += str[i];
//       }
//       i++;
//       if (i === str.length - 1) {
//         backspace = true;
//       }
//     } else {
//       clearInterval(interval);
//       if (backspace) {
//         setTimeout(() => {
//           interval = setInterval(() => {
//             if (logo.innerHTML.length > 2) {
//               logo.innerHTML = logo.innerHTML.slice(0, -1);
//             } else {
//               clearInterval(interval);
//               animateLogo();
//             }
//           }, 100);
//         }, 500);
//       } else {
//         animateLogo();
//       }
//     }
//   }, 100);
// }
// animateLogo();


let menuBar = document.querySelector(".menu-bar");
let menuList = document.querySelector(".nav-list ul");

menuBar.onclick = () => {
  menuBar.classList.toggle('menu-on');
  menuList.classList.toggle('menu-on');
}

let name = document.getElementById("name");

let animateGreetings = () => {
  let str1 = "I am Cheeeps";
  let str2 = "I am a Web Developer";
  let backspace = false;
  let i = 0;

  let backspaceExe = () =>{
    return name.innertHTML = name.innerHTML.slice(0, -1);
  }

  interval = setInterval(() => {
    if (str1.length > i) {
      name.innerHTML += str1[i];
      i++;
      if (i === str1.length - 1) {
        backspace = true;
      }
    } else {
      clearInterval(interval);
      if (backspace) {
        setTimeout(() => {
          interval = setInterval(() => {
            if (name.innerHTML.length > 0) {
            name.innerHTML = name.innerHTML.slice(0, -1);
            backspace = false;
            } else {
              if (name.innerHTML.length === 0) {
                i = 0;
                clearInterval(interval);
                interval = setInterval(() => {
                  if (str2.length > i) {
                    name.innerHTML += str2[i];
                    i++;
                    if (i === str2.length) {
                    backspace = true;
                    }
                  } else {
                    clearInterval(interval);
                    if (backspace) {
                      setTimeout(() => {
                        interval = setInterval(() => {
                          if (name.innerHTML.length > 0) {
                          name.innerHTML = name.innerHTML.slice(0, -1);
                          backspace = false;
                          } else {
                            if (name.innerHTML.length === 0) {
                              i = 0;
                              clearInterval(interval);
                              animateGreetings();
                            }
                          }
                        }, 50)
                      }, 1000)
                    }
                  }
                }, 70)
              }
            }
          }, 70)
        }, 150)
      }
    }
  }, 150)

  
}
animateGreetings();

const observerL = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElementsL = document.querySelectorAll('.hidden-l');
hiddenElementsL.forEach((el) => observerL.observe(el));

const observerR = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show-r');
    } else {
      entry.target.classList.remove('show-r');
    }
  });
});

const hiddenElementsR = document.querySelectorAll('.hidden-r');
hiddenElementsR.forEach((el) => observerR.observe(el));





// var Stars = function (args) {
//   if (args === undefined) args = {};
//   var _scope = this;

//   this.stars = [];
//   this.vel = args.vel || 1;
//   this.radius = args.radius || 1;
//   this.alpha = 0.5;
//   this.starsCounter = args.stars || 300;
//   var center = {
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2
//   };
//   var canvas, context;
//   this.init = function () {
//     canvas = document.createElement("canvas");
//     document.body.appendChild(canvas);
//     context = canvas.getContext("2d");
//     context.lineCap = "round";
//     this.start();
//     this.resize();
//     //
//     window.addEventListener("resize", this.resize.bind(this));
//   };

//   this.start = function () {
//     this.stars = [];
//     for (var i = 0; i < this.starsCounter; i++) {
//       setTimeout(function () {
//         _scope.stars.push(new Star());
//       }, i * 30);
//     }
//   };

//   this.resize = function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     center.x = canvas.width / 2;
//     center.y = canvas.height / 2;
//   };

//   this.animate = function () {
//     window.requestAnimationFrame(this.animate.bind(this));
//     this.render();
//   };
//   this.render = function () {
//     context.fillStyle = "rgba(0,0,0, 0.8)";
//     context.fillRect(0, 0, canvas.width, canvas.height);
//     context.strokeStyle = "white";
//     for (var i = 0; i < this.stars.length; i++) this.stars[i].update();
//   };

//   var Star = function () {
//     this.x = center.x;
//     this.y = center.y;
//     this.init = function () {
//       this.radius = Math.random() * _scope.radius;
//       this.x = center.x;
//       this.y = center.y;
//       this.lineWidth = 0;
//       this.vel = {
//         x: Math.random() * 10 - 5,
//         y: Math.random() * 10 - 5
//       };
//     };
//     this.update = function () {
//       this.vel.x *= 1.05;
//       this.vel.y *= 1.05;
//       this.lineWidth += 0.035;
//       this.x0 = this.x;
//       this.y0 = this.y;
//       this.x += this.vel.x;
//       this.y += this.vel.y;
//       this.draw();
//       if (this.isDead()) this.init();
//     };
//     this.draw = function () {
//       context.beginPath();
//       context.moveTo(this.x0, this.y0);
//       context.lineTo(this.x, this.y);
//       context.lineWidth = this.lineWidth;
//       context.stroke();
//     };
//     this.isDead = function () {
//       return (
//         this.x < 0 ||
//         this.x > canvas.width ||
//         this.y < 0 ||
//         this.y > canvas.height
//       );
//     };
//     this.init();
//     return this;
//   };
//   this.init();
//   this.animate();
//   return this;
// };

// var _stars = new Stars();




