

var count1 = 0;
var rotation = '0deg';
var text2changed = 0;
var cheatcode_cache = "";
r = document.querySelector(':root');

// have to remove all jquery... sad
// variables for plain javascript now

// id's
var overlay1 = document.getElementById("overlay1");
var bg1 = document.getElementById('bg1').classList;
var outerwrapper = document.getElementById('outerwrapper');
var text2 = document.getElementById('text2');
var skilltext = document.getElementById('skilltext').classList;
var educationtext = document.getElementById('educationtext').classList;
var achievementtext = document.getElementById('achievementtext').classList;

// class's
var fas = document.getElementsByClassName('fas')[0].classList;
var logo = document.getElementsByClassName('logo')[0].classList;
var navbar = document.getElementsByClassName('navbar')[0].classList;
var myname = document.getElementsByClassName('myname')[0].classList;
var pfpwrapper = document.getElementsByClassName('pfpwrapper')[0].classList;
var codeboxwrapper = document.getElementsByClassName('codeboxwrapper')[0].classList
var backgroundchangerholder = document.getElementsByClassName('backgroundchangerholder')[0].classList;
var rb = document.getElementsByClassName('rb')[0].classList;
var rb2w = document.getElementsByClassName('rb2w')[0].classList;
var content = document.getElementsByClassName('content')[0].classList;
var newscontent = document.getElementsByClassName('newscontent')[0].classList;


function switcher() {

    count1 += 1;
    if (count1 % 2 == 1) {

        logo.add('filtered');
        fas.add('fa-moon');
        fas.remove('fa-sun');
        
        overlay1.style.opacity = 'var(--lightModeOpacity)';




    } else {

        logo.remove('filtered');
        fas.add('fa-sun');
        fas.remove('fa-moon');
        
        overlay1.style.opacity = 'var(--darkModeOpacity)';


    }

    rs = getComputedStyle(r);
    if (rs.getPropertyValue('--background-color') == '#fdf6e3') {
        r.style.setProperty('--background-color', '#002b36');
    } else {
        r.style.setProperty('--background-color', '#fdf6e3');
    }
    if (rs.getPropertyValue('--color') == '#002b36') {
        r.style.setProperty('--color', '#fdf6e3');
    } else {
        r.style.setProperty('--color', '#002b36');
    }
    if (rs.getPropertyValue('--white') == 'rgba(255,255,255,0.75)') {
        r.style.setProperty('--white', 'rgb(25,25,25)');
    } else {
        r.style.setProperty('--white', 'rgba(255,255,255,0.75)');
    }
    if (rs.getPropertyValue('--black') == 'rgb(25,25,25)') {
        r.style.setProperty('--black', 'rgba(255,255,255,.75)');
    } else {
        r.style.setProperty('--black', 'rgb(25,25,25)');
    }

}


// Initial Website Transitions

navbar.remove('hidden');
overlay1.classList.remove('hidden');
bg1.remove('hidden');
myname.remove('hidden');
myname.add('lol');

function mynameshadowTimer() {

    myname.add('lol2');
}

function mynameshadowTimer2() {
    myname.add('lol3');
    window.setTimeout(function () {
        pfpwrapper.add('up');
    }, 2000);
    window.setTimeout(section1moveleft, 3500);

}

function section1moveleft() {

    pfpwrapper.add('left');
    codeboxwrapper.add('left');
    outerwrapper.style.overflowY = 'scroll';
}
window.setTimeout(mynameshadowTimer, 500);
window.setTimeout(mynameshadowTimer2, 1000);

window.setTimeout(function () {

    backgroundchangerholder.remove('hidden');
}, 7000);


overlay1.style.opacity = 'var(--lightModeOpacity)';
rb.add('rotate');
rb2w.add('rotate');


const date = new Date().toUTCString();



function addBreak(obj) {
    var br = document.createElement('br');
    const child = document.createElement('div');
    child.innerHTML = `<br></br>`;    
    obj.appendChild(child);
    // console.log(obj);
}

function textAdder(obj, message) {

    obj.insertAdjacentText('beforeend', message);
    addBreak(obj);
    

}


var section2shown = 0;

outerwrapper.addEventListener("scroll", function () {scrollShower(outerwrapper) });

function scrollShower(obj) {
    // console.log(outerwrapper.scrollTop, 3* outerwrapper.offsetWidth);

    if (outerwrapper.scrollTop > outerwrapper.offsetWidth - 200 && !section2shown) {
        content.remove('reveal');
        skilltext.remove('hidden');
        section2shown = 1;
    }

    if (outerwrapper.scrollTop > 3 * outerwrapper.offsetWidth - 400) {
        newscontent.remove('reveal');
    }
}



var prev = 0;

var infos = [skilltext, educationtext, achievementtext];






function infoPanel(curr) {
    if (prev == curr) {
        return;
    }

    console.log(prev, curr);


    infos[prev].add('hidden');
    infos[curr].remove('hidden');

    prev = curr;

}

var ogbackgroundChanged = 0;

function backgroundChanger(color) {
    // console.log("hi");
    if (!ogbackgroundChanged) {
        ogbackgroundChanged = 1;
        console.log('removing');
        document.getElementById('overlay1').remove();
        document.getElementById('bg1').remove();

    }

    document.body.style.backgroundColor = color;
}

function textSizeChanger(size) {

    r.style.setProperty('--font-size', size);

}

var input = document.getElementById('Update');

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button3").click();
    }
});


var ul = document.getElementById("list");

var Updates = {};
var UpdateIndex = 0;


// function storeList() {
//     window.localStorage.setItem("Updates", JSON.stringify(Updates));
// }


function getListFromLocalStorage() {
    var UpdateStored = window.localStorage.getItem("Updates")


    if (!!UpdateStored) {
        Updates = JSON.parse(UpdateStored);
        // console.log(Updates);
    } else {


        Updates = {};
        window.localStorage.setItem("Updates", Updates);
        return;
    }

    for (const [key, value] of Object.entries(Updates)) {
        // console.log(key, value);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        ul.appendChild(li);

    }




}

getListFromLocalStorage();

function addToList() {

    var listnum = document.querySelectorAll("li"),
        ll = listnum.length;

    if (ll > 23) {
        alert("Max number of updates reached");
        return;
    }
    var li = document.createElement("li");

    var data = document.getElementById('Update');

    Updates[UpdateIndex] = data.value;
    window.localStorage.setItem("Updates", JSON.stringify(Updates));
    UpdateIndex++;

    li.appendChild(document.createTextNode(data.value));
    data.value = "";
    ul.appendChild(li);

}

function resetList() {
    // console.log('rester')
    var ul = document.createElement("ul");
    var oldList = document.getElementById("list");
    Updates = {};
    window.localStorage.setItem("Updates", JSON.stringify(Updates));
    oldList.innerHTML = '';
    oldList = ul;
    UpdateIndex = 0;
}