// =================================================================================================
// ======================================= *** HEADER *** ==========================================
// =================================================================================================

header();
function header() {
const heaader = document.querySelector('header');
heaader.innerHTML = `
        <div class="logo">
            <a href="../html/homePage.html">Sports</a>
        </div>
        <div class="nav">
            <a href="../html/homePage.html">Home</a>
            <a href="../html/sportsPage.html">Sports</a>
            <a href="https://teachablemachine.withgoogle.com/models/garZP96M_/">teachable machine</a>
        </div>
        <div class="sign-in">
            <a href="../html/signInPage.html">Sign in</a>
        </div>
`;
}

// =================================================================================================
// ======================================= *** SPORTS PAGE *** =====================================
// =================================================================================================

sportsPage();
function sportsPage() {
    
const sports = [
    {
        name: 'Alpine Skiing',
        logo: 'https://olympics.com/images/static/sports/pictograms/v2/alp.svg',
        img: 'https://images.pexels.com/photos/11191010/pexels-photo-11191010.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        name: 'American Football',
        logo: 'https://olympics.com/images/static/sports/pictograms/v2/rug.svg',
        img: 'https://images.pexels.com/photos/5184705/pexels-photo-5184705.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        name: 'Archery',
        logo: 'https://olympics.com/images/static/sports/pictograms/v2/arc.svg',
        img: 'https://images.pexels.com/photos/6540720/pexels-photo-6540720.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        name: 'Artistic Gymnastics',
        logo: 'https://olympics.com/images/static/sports/pictograms/v2/gar.svg',
        img: 'https://images.pexels.com/photos/40190/pommel-horse-gymnastics-male-device-40190.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        name: 'Badminton',
        logo: 'https://olympics.com/images/static/sports/pictograms/v2/bdm.svg',
        img: 'https://images.pexels.com/photos/8713604/pexels-photo-8713604.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        name: 'Baseball',
        logo: 'https://olympics.com/images/static/sports/pictograms/v2/bsb.svg',
        img: 'https://images.pexels.com/photos/5184705/pexels-photo-5184705.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        name: 'Basketball',
        logo: 'https://olympics.com/images/static/sports/pictograms/v2/bkb.svg',
        img: 'https://images.pexels.com/photos/267761/pexels-photo-267761.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        name: 'Beach Volleyball',
        logo: 'https://olympics.com/images/static/sports/pictograms/v2/vbv.svg',
        img: 'https://images.pexels.com/photos/1320761/pexels-photo-1320761.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        name: 'Golf',
        logo: 'https://olympics.com/images/static/sports/pictograms/v2/glf.svg',
        img: 'https://images.pexels.com/photos/1325661/pexels-photo-1325661.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        name: 'Boxing',
        logo: 'https://olympics.com/images/static/sports/pictograms/v2/box.svg',
        img: 'https://images.pexels.com/photos/8810062/pexels-photo-8810062.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
];

const sportsPage = document.querySelector('#sports-page ul');
const despalySports = (sportsArray) => {
    const result = sportsArray.map((sport) => {
        return `
            <li class="sport" sport-logo="${sport.logo}" sport-name="${sport.name}" sport-img="${sport.img}">
                <img src="${sport.logo}" alt="${sport.name} image">
                <h2>${sport.name}</h2>
            </li>
        `;
    });
    return sportsPage.innerHTML = result.join('');
};
sportsPage ? despalySports(sports) : null;


}

// =================================================================================================
// ======================================= *** SIGN IN PAGE *** ====================================
// =================================================================================================

signInPage();
function signInPage() {
    const inputUserFirstName = document.querySelector('#input-first-name');
    const inputUserLastName = document.querySelector('#input-last-name');
    const inputPassword = document.querySelector('#input-password');
    const inputEmail = document.querySelector('#input-email');
    const inputSubmit = document.querySelector('.form-page #input-submit');

    const firstNameErrorMsg = document.querySelector('.first-name-container span');
    const lastNameErrorMsg = document.querySelector('.last-name-container span');
    const emailErrorMsg = document.querySelector('.email-container span');
    const passwordErrorMsg = document.querySelector('.password-container span');


    inputSubmit ? inputSubmit.addEventListener('click', (e) => {
        e.preventDefault();

        if (!inputUserFirstName.value) {
            inputUserFirstName.classList.add('error');
            inputUserFirstName.classList.add('error-animation');
            inputUserFirstName.addEventListener('animationend', () => {
                inputUserFirstName.classList.remove('error-animation');
            });
            firstNameErrorMsg.classList.add('error');
            firstNameErrorMsg.innerHTML = 'Please enter your first name';
        } else if (inputUserFirstName.value.length < 3) {
            inputUserFirstName.classList.add('error');
            inputUserFirstName.classList.add('error-animation');
            inputUserFirstName.addEventListener('animationend', () => {
                inputUserFirstName.classList.remove('error-animation');
            });
            firstNameErrorMsg.innerHTML = 'First name must be at least 3 characters';
            firstNameErrorMsg.classList.add('error');
        } else if (inputUserFirstName.value.length >= 3) {
            inputUserFirstName.classList.remove('error');
            inputUserFirstName.classList.remove('error-animation');
            firstNameErrorMsg.innerHTML = '';
            firstNameErrorMsg.classList.remove('error');
        }
        // =================================================================
        if (!inputUserLastName.value) {
            inputUserLastName.classList.add('error');
            inputUserLastName.classList.add('error-animation');
            inputUserLastName.addEventListener('animationend', () => {
                inputUserLastName.classList.remove('error-animation');
            });
            lastNameErrorMsg.innerHTML = 'please enter your last name';
            lastNameErrorMsg.classList.add('error');
        } else if (inputUserLastName.value.length < 3) {
            inputUserLastName.classList.add('error');
            inputUserLastName.classList.add('error-animation');
            inputUserLastName.addEventListener('animationend', () => {
                inputUserLastName.classList.remove('error-animation');
            });
            lastNameErrorMsg.innerHTML = 'Last name must be at least 3 characters';
            lastNameErrorMsg.classList.add('error');
        } else if (inputUserLastName.value.length >= 3) {
            inputUserLastName.classList.remove('error');
            inputUserLastName.classList.remove('error-animation');
            lastNameErrorMsg.innerHTML = '';
            lastNameErrorMsg.classList.remove('error');
        }
        // =================================================================
        if (!inputPassword.value) {
            inputPassword.classList.add('error');
            inputPassword.classList.add('error-animation');
            inputPassword.addEventListener('animationend', () => {
            inputPassword.classList.remove('error-animation');
            });
            passwordErrorMsg.innerHTML = 'please enter your password';
            passwordErrorMsg.classList.add('error');
        } else if (inputPassword.value.length < 8) {
            inputPassword.classList.add('error');
            inputPassword.classList.add('error-animation');
            inputPassword.addEventListener('animationend', () => {
            inputPassword.classList.remove('error-animation');
            });
            passwordErrorMsg.innerHTML = 'password must be at least 8 characters';
            passwordErrorMsg.classList.add('error');
        } else if (inputPassword.value.length >= 8) {
            inputPassword.classList.remove('error');
            inputPassword.classList.remove('error-animation');
            passwordErrorMsg.innerHTML = '';
            passwordErrorMsg.classList.remove('error');
        }
        // =================================================================
        if (!inputEmail.value) {
            inputEmail.classList.add('error');
            inputEmail.classList.add('error-animation');
            inputEmail.addEventListener('animationend', () => {
            inputEmail.classList.remove('error-animation');
            });
            emailErrorMsg.innerHTML = 'please enter your email';
            emailErrorMsg.classList.add('error');
        } else if (inputEmail.value.length < 6) {
            inputEmail.classList.add('error');
            inputEmail.classList.add('error-animation');
            inputEmail.addEventListener('animationend', () => {
            inputEmail.classList.remove('error-animation');
            });
            emailErrorMsg.innerHTML = 'email must be at least 6 characters';
            emailErrorMsg.classList.add('error');
        } else if (inputEmail.value.length >= 6) {
            inputEmail.classList.remove('error');
            inputEmail.classList.remove('error-animation');
            emailErrorMsg.innerHTML = '';
            emailErrorMsg.classList.remove('error');

        }
        // =================================================================
        if (inputUserFirstName.value.length >= 3 && inputUserLastName.value.length >= 3 && inputPassword.value.length >= 8 && inputEmail.value.length >= 6) {
            location.href = '../html/signInSuccessPage.html';
        }
    }) : null;
}

// =================================================================================================
// ======================================= ***  SPORT PAGE *** =====================================
// =================================================================================================

sportPage();
function sportPage() {
    const sportsItem = document.querySelectorAll('#sports-page ul .sport');

let sportName, sportLogo, sportImg;

sportsItem ? sportsItem.forEach((sportItem) => {
    sportItem.addEventListener('click', () => {
        sportName = sportItem.attributes[2].value;
        sportLogo = sportItem.attributes[1].value;
        sportImg = sportItem.attributes[3].value;

        localStorage.setItem('sportName', sportName);
        localStorage.setItem('sportLogo', sportLogo);
        localStorage.setItem('sportImg', sportImg);
        
        location.href = '../html/sportPage.html';
    })
}) : null;

if (document.querySelector('.sport-page .heading img')) {
    document.querySelector('.sport-page .heading img').src = localStorage.getItem('sportLogo');
    document.querySelector('title').innerHTML = `${localStorage.getItem('sportName')} sport`;
}
if (document.querySelector('.sport-page .heading h1')) document.querySelector('.sport-page .heading h1').innerHTML = localStorage.getItem('sportName');
if (document.querySelector('.sport-page .content img')) document.querySelector('.sport-page .content img').src = localStorage.getItem('sportImg');

}

// =================================================================================================
// ======================================= ***  HOME PAGE *** ======================================
// =================================================================================================

homePage();
function homePage() {
    const sportTypeHelper = document.querySelector('.sport-type');
    const sportTypeHelperText = document.querySelector('.sport-type p');
    const imgs = document.querySelectorAll('.imgs img');

    imgs ? imgs.forEach((img) => {
        img.addEventListener('mousemove', (e) => {
            sportTypeHelper.style.top = (e.pageY + 20) + 'px';
            sportTypeHelper.style.left = (e.pageX + 20) + 'px';

            sportTypeHelper.classList.add('active');
            sportTypeHelperText.innerHTML = `${img.attributes[1].value}`;
        })
        document.querySelector('.imgs .img8').addEventListener('mousemove', (e) => {
            sportTypeHelper.style.top = (e.pageY + 20) + 'px';
            sportTypeHelper.style.left = (e.pageX - 170) + 'px';
        })
        document.querySelector('.imgs .img9').addEventListener('mousemove', (e) => {
            sportTypeHelper.style.top = (e.pageY + 20) + 'px';
            sportTypeHelper.style.left = (e.pageX - 100) + 'px';
        })
        document.querySelector('.imgs').addEventListener('mouseleave', () => sportTypeHelper.classList.remove('active'))
    }) : null;
}

// =================================================================================================
// ======================================= *** GSAP ANIMATION *** ==================================
// =================================================================================================

const tl = gsap.timeline();

tl.from('.loading-page .first-letter', {
    xPercent: -150,
    duration: 2,
    ease: 'power3.inOut',
    rotation: 30,
});

tl.from('.loading-page .second-letter', {
    xPercent: 150,
    duration: 2,
    ease: 'power3.inOut',
    rotation: -30,
}, "-=1.5");

tl.from('.loading-page .third-letter', {
    xPercent: -150,
    duration: 2,
    ease: 'power3.inOut',
    rotation: 30,
}, "-=1.5");

tl.from('.loading-page .fourth-letter', {
    xPercent: 150,
    duration: 2,
    ease: 'power3.inOut',
    rotation: 30,
}, "-=1.5");

tl.from('.loading-page .loader-bg', {
    yPercent: 250,
    duration: 2,
    ease: 'power3.inOut',
}, "-=1.5");

tl.fromTo('.loading-page .loader-bg .loader', {
    width: '0%',
    duration: 2,
    ease: 'power3.inOut',
},{
    width: '20%',
    duration: 2,
    ease: 'power3.inOut',
}, '-=1.5');

tl.fromTo('.loading-page .loader-bg .loader', {
    width: '20%',
    duration: 2,
    ease: 'power3.inOut',
},{
    width: '80%',
    duration: 2,
    ease: 'power3.inOut',
});

tl.fromTo('.loading-page .loader-bg .loader', {
    width: '80%',
    duration: 4,
    ease: 'power3.inOut',
},{
    width: '100%',
    duration: 4,
    ease: 'power3.inOut',
});

tl.to('.loading-page .first-letter', {
    xPercent: -150,
    duration: 2,
    ease: 'power3.inOut',
    rotation: 30,
});

tl.to('.loading-page .second-letter', {
    xPercent: 150,
    duration: 2,
    ease: 'power3.inOut',
    rotation: -30,
}, "-=1.5");

tl.to('.loading-page .third-letter', {
    xPercent: -150,
    duration: 2,
    ease: 'power3.inOut',
    rotation: 30,
}, "-=1.5");

tl.to('.loading-page .fourth-letter', {
    xPercent: 150,
    duration: 2,
    ease: 'power3.inOut',
    rotation: 30,
}, "-=1.5");

tl.to('.loading-page .loader-bg', {
    yPercent: 250,
    duration: 2,
    ease: 'power3.inOut',
}, "-=1.5");

tl.from('.loading-page .fifth-letter', {
    width: 0,
    height: 0,
    duration: 2,
    ease: 'power3.inOut',
}, "+=1.5");

tl.to('.loading-page', { display: 'none' }, "+=1.5");

// =================================================================================================
// =================================================================================================
// =================================================================================================

gsap.set('header', {
    yPercent: -100,
    duration: 2,
    ease: 'power3.inOut',
}, "+=1.5");

// =================================================================================================
// =================================================================================================
// =================================================================================================

tl.from('.hero-page .h1-overlay h1', {
    yPercent: 100,
    duration: 1,
    ease: 'power3.inOut',
});

tl.from('.hero-page .p-overlay p', {
    yPercent: 100,
    duration: 1,
    ease: 'power3.inOut',
});

tl.from('.hero-page .imgs img', {
    yPercent: 110,
    duration: 1,
    ease: 'power3.inOut',
    stagger: {
    from: "center",
    amount: 0.5
  }
});

// =================================================================================================
// =================================================================================================
// =================================================================================================

tl.to('header', {
    yPercent: 0,
    duration: 2,
    ease: 'power3.inOut',
});

// =================================================================================================
// =================================================================================================
// =================================================================================================

tl.from('.sports-section .h1-overlay h1', {
    scrollTrigger: {
        trigger: ".sports-section .h1-overlay",
        start: "bottom bottom",
        end: "center top",
        scrub: true,
      },
    yPercent: 100,
    duration: 1,
    ease: 'power3.inOut',
});

// tl.fromTo('.sports-section ul li', {
//     scrollTrigger: {
//         trigger: ".sports-section .ul",
//         start: "top top",
//         end: "center top",
//         scrub: true,
//         markers: true
//       },
//     xPercent: 200,
//     duration: 1,
//     ease: 'power3.inOut',
// }, {
//     scrollTrigger: {
//         trigger: ".sports-section .ul",
//         start: "top top",
//         end: "center top",
//         scrub: true,
//         markers: true
//       },
//     xPercent: 0,
//     duration: 1,
//     ease: 'power3.inOut',
// });