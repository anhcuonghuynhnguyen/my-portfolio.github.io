
// Open nav bar and overlay
var openNavSide = document.getElementById('open-nav-side');
var overlay = document.getElementById('overlay');

function showNavSide() {
    if (openNavSide.checked) {
        document.getElementById('nav-side-items').style.right = '0';
        document.getElementById('overlay').style.display = 'block';
    }
    else {
        document.getElementById('nav-side-items').style.right = '-100%';
        document.getElementById('overlay').style.display = 'none';
    }
};

function turnOffNavSide() {
    openNavSide.checked = false;
    showNavSide();
};

openNavSide.addEventListener('change', showNavSide);
overlay.addEventListener('click', turnOffNavSide);

// Open section when which's checked

var openAbout = document.getElementById('about-but');
var openResume = document.getElementById('resume-but');
var openProject = document.getElementById('project-but');
var openLearn = document.getElementById('learn-but');
var navAbout = document.getElementsByClassName('nav-about');
var navResume = document.getElementsByClassName('nav-resume');
var navProject = document.getElementsByClassName('nav-project');
var navLearn = document.getElementsByClassName('nav-learn');

    // Open About
    function showAbout() {
        for (var i = 0; i < navAbout.length; i++){
            navAbout[i].style.color = 'blue';
            navResume[i].style.color = 'black';
            navProject[i].style.color = 'black';
            navLearn[i].style.color = 'black';
        }
        if (openAbout.checked) {
            document.getElementById('about').style.display = 'flex';
            document.getElementById('resume').style.display = 'none';
            document.getElementById('projects').style.display = 'none';
            document.getElementById('learn').style.display = 'none';
        }
    };

    // Open Resume
    function showResume() {
        for (var i = 0; i < navResume.length; i++){
            navAbout[i].style.color = 'black';
            navResume[i].style.color = 'blue';
            navProject[i].style.color = 'black';
            navLearn[i].style.color = 'black';
        }
        if (openResume.checked) {
            document.getElementById('about').style.display = 'none';
            document.getElementById('resume').style.display = 'flex';
            document.getElementById('projects').style.display = 'none';
            document.getElementById('learn').style.display = 'none' ;
        }
    };

    // Open Project
    function showProject() {
        for (var i = 0; i < navProject.length; i++){
            navAbout[i].style.color = 'black';
            navResume[i].style.color = 'black';
            navProject[i].style.color = 'blue';
            navLearn[i].style.color = 'black';
        }
        if (openProject.checked) {   
            document.getElementById('about').style.display = 'none';
            document.getElementById('resume').style.display = 'none';
            document.getElementById('projects').style.display = 'flex';
            document.getElementById('learn').style.display = 'none' ;
        }
    };

    // Open Learn
    function showLearn() {
        for (var i = 0; i < navLearn.length; i++){
            navAbout[i].style.color = 'black';
            navResume[i].style.color = 'black';
            navProject[i].style.color = 'black';
            navLearn[i].style.color = 'blue';
        }
        if (openLearn.checked) {  
            document.getElementById('about').style.display = 'none';
            document.getElementById('resume').style.display = 'none';
            document.getElementById('projects').style.display = 'none';
            document.getElementById('learn').style.display = 'flex';
        }
    };

    openAbout.addEventListener('change', showAbout);
    openResume.addEventListener('change', showResume);
    openProject.addEventListener('change', showProject);
    openLearn.addEventListener('change', showLearn);

    // Turn off nav side

    for (var i = 0; i < navAbout.length; i++) {
        navAbout[i].addEventListener('click', turnOffNavSide)
        navResume[i].addEventListener('click', turnOffNavSide)
        navProject[i].addEventListener('click', turnOffNavSide)
        navLearn[i].addEventListener('click', turnOffNavSide)
    }