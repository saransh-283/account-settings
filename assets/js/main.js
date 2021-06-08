const body = document.body
const toggle = document.getElementById('sidebar-open')
const sidebar = document.getElementById('sidebar')
const main = document.getElementById('content-main')
const activeFont = document.getElementById('active-font')

var bodySize = body.getBoundingClientRect()

var open = false
var fonts = false
var icon = false
var currentFont

if (bodySize.width < 768) {
    function toggleSide() {
        if (open) {
            document.getElementById('sidebar-open').classList.remove('open')
            sidebar.style.transform = "translate(300px)"
        } else {
            document.getElementById('sidebar-open').classList.add('open')
            sidebar.style.transform = "translate(0)"
        }
        open = !open
    }
}

function toggleFunc(event) {
    Array.from(document.getElementsByTagName('section')).map(elem => elem.style.display = 'none')
    document.getElementsByClassName('active')[0].classList.remove('active')
    event.target.classList.add('active')
    document.getElementById(event.target.getAttribute('data-toggle')).style.display = 'block'
}

Array.from(document.getElementsByTagName('section')).map(elem => elem.style.display = 'none')
document.getElementById('details').style.display='block'
//document.getElementById(document.getElementsByClassName('active')[0].getAttribute('data-toggle')).style.display = 'block'

document.body.onresize = () => {
    bodySize = body.getBoundingClientRect()

    if (bodySize.width < 768) {
        function toggleSide() {
            if (open) {
                document.getElementById('sidebar-open').classList.remove('open')
                sidebar.style.transform = "translate(300px)"
            } else {
                document.getElementById('sidebar-open').classList.add('open')
                sidebar.style.transform = "translate(0)"
            }
            open = !open
        }
    }
}

function fontsDisplay() {
    document.getElementById('font-list').style.display = 'block'
}

function fontsDisplay() {
    if (fonts) {
        document.getElementById('font-list').style.display = 'none'
    } else {
        document.getElementById('font-list').style.display = 'block'
    }
    fonts = !fonts
}

function chooseFont(event) {
    document.getElementById('font-list').style.display = 'none'
    fonts = false
    currentFont = event.target.innerHTML
    activeFont.style.fontFamily = currentFont
    activeFont.innerHTML = currentFont
    body.style.fontFamily = currentFont
}

function navAnim() {
    if (icon) {
        document.getElementById('sidebar-open').classList.remove('open')
    } else {
        document.getElementById('sidebar-open').classList.add('open')
    }
    icon = !icon
}

Array.from(document.getElementsByClassName('font')).map(elem => elem.addEventListener('click', chooseFont))

Array.from(document.getElementsByClassName('side-item')).map(elem => elem.addEventListener('click', toggleFunc))

Array.from(document.getElementsByClassName('font')).map(elem => elem.style.fontFamily = `${elem.getAttribute('data-font')}`)