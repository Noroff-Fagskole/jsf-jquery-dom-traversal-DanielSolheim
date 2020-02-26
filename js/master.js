

//1
$('#question1').next().addClass('answer');

//2
$('.question2').prev().addClass('answer');

//3
$('.question3').children().addClass('answer');

//4
$('.question4').children().addClass('answer');

//5
$('.question5').find('span').addClass('answer');

//6
$('.question6').find('p').addClass('answer');


//7
$('.question7').prev().contents().addClass('answer');


//8
$('.question8').siblings().addClass('answer');

//9
$('.question9').prev().addClass('answer');

//10
$('.question10').siblings().last().addClass('answer');


//11
$('.question11').closest('div').addClass('answer');


//12
$('.question12').parent().next('li').addClass('answer');
