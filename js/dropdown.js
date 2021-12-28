let dropdown_contents = document.getElementById("dropdown-contents")
let share = document.getElementById("share")

document.addEventListener('click', (e) => {
    if(e.target.closest('#share') && dropdown_contents.classList.contains('hide')){
        dropdown_contents.classList.remove('hide')
    } else if(!e.target.closest('#dropdown-contents') && !dropdown_contents.classList.contains('hide')) {
        dropdown_contents.classList.add('hide')
    }
})