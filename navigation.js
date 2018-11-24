
// Get the button, and when the user clicks on it, execute myFunctionB
document.getElementById("myBtn").onclick = function() {myFunctionB()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunctionB() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//for burger and X button animation
function myFunction(x) {
                x.classList.toggle("change");
                };
//for simulation of opening nav content



// function collapseSection(element) {
//     var sectionHeight = element.scrollHeight;
//     var elementTransition = 
//         element.style.transition;
//         element.style.transition = '';
//         requestAnimationFrame(function() {
//             element.style.height = sectionHeight + 'px';
//             element.style.transition = elementTransition;
//         requestAnimationFrame(function() {
//             element.style.height = 0 + 'px';
//         });
//         });
//     element.setAttribute('data-collapsed', 'true');    
// }

// function expandSection(element) {
//     var sectionHeight = element.scrollHeight;
//     element.style.height = sectionHeight + 'px';
//     element.addEventListener('transitionend', function(e) {
//         element.removeEventListener('transitionend', arguments.callee);
//         element.style.height = null;
//     });

// element.setAttribute('data-collapsed', 'false');    
// }

// document.querySelector('#toggle-button').addEventListener('click', function() {
//      document.querySelector('.section.collapsible').classList.toggle('collapsed');
    
// });