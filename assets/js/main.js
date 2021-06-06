const body=document.body
const toggle=document.getElementById('sidebar-open')
const sidebar=document.getElementById('sidebar')

var open = false

function toggleSide() {
	if (open) {
		toggle.style.transform='rotate(0)'
	}
	else{
		toggle.style.transform='rotate(90deg)'
	}
	
	open=!open
}