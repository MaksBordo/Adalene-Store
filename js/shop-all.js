const filterBtns = document.querySelectorAll('.filter__btn');
const filterContent = document.querySelectorAll('.filter__content');
let filterExpanded = [false, false, false, false];
for (let i = 0; i < filterBtns.length; i++){
    filterBtns[i].addEventListener('click', expandFilter.bind( null, i));
}
function expandFilter(index) {
    if (!filterExpanded[index]) {
        filterContent[index].style.height = "40px";
        filterContent[index].style.visibility = "visible";
        filterExpanded[index] = true;
    } else {
        filterContent[index].style.height = "0px";
        filterContent[index].style.visibility = "hidden";
        filterExpanded[index] = false;
    }
}