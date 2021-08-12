$(document).ready(function() {
  const height = parseFloat(prompt("How tall are you...No lying!"));

//   if (height <= 5.2) {
//     $('#short').show();
//     $('#default').hide(); 
//   } else if (height >= 6.1) {
//     $('#tall').show();
//     $('#default').hide(); 
//   } else {
//     $('#average').show();
//     $('#default').hide(); 
//   }
// });

if (height <= 5.2) {
  $('#initiallyHidden').show();
  $('#initiallyVisible').hide(); 
} else if (height >= 6.1) {
  $('#tall').show();
  $('#default').hide(); 
} else {
  $('#average').show();
  $('#default').hide(); 
}
});


// Height Limits= Short: 5'2" or under   Average: 5'3"- 6'  Tall: 6'1"- above