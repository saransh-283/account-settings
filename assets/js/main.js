const body = document.body
const toggle = document.getElementById('sidebar-open')
const sidebar = document.getElementById('sidebar')
const main = document.getElementById('content-main')

var bodySize = body.getBoundingClientRect()

var open = false

if (bodySize.width < 768) {
    function toggleSide() {
        if (open) {
            toggle.style.transform = 'rotate(0)'
            sidebar.style.transform = "translate(300px)"
            main.style.filter = 'brightness(1)'
        } else {
            toggle.style.transform = 'rotate(90deg)'
            sidebar.style.transform = "translate(0)"
            main.style.filter = 'brightness(0.8)'
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

document.body.onresize = () => {
    bodySize = body.getBoundingClientRect()

    if (bodySize.width < 768) {
        function toggleSide() {
            if (open) {
                toggle.style.transform = 'rotate(0)'
                sidebar.style.transform = "translate(300px)"
                main.style.filter = 'brightness(1)'
            } else {
                toggle.style.transform = 'rotate(90deg)'
                sidebar.style.transform = "translate(0)"
                main.style.filter = 'brightness(0.8)'
            }
            open = !open
        }
    }
}

Array.from(document.getElementsByClassName('side-item')).map(elem => elem.addEventListener('click', toggleFunc))