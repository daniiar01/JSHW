



if (10<1){
  console.log(true);
}else  {
  console.log(false);
}

// let age = prompt('Укажите ваш возраст')
// if (age>0 && age<=13 ){
//   alert('Посоветуйте ваш любимый мультфильм');
// } else if (age>=14 && age<=17){
//   alert('Посоветуйте приключенчиский фильм.');
// } else if (age>=18) {
//   alert('Посоветуйте серьёзный фильм');
// }
//  else  {  
//    alert('Ошибка!');
// }

// Сделать последовательное упрощение к булевым велечинам.
// (2 < 3) && (3 > 4) || true 
// true && false || true 
// true

// !true && (!true || 100 !=  5 * 5) 
// false && (false || true)
// false

// ('123' == 123) || ((10 <= 10) && (' ' === false))
// true || true && true
// true

// let i = confirm( "Луна спутник Сатурна?")
// if (i= 'да' )  {
//   n=0}
// else  {
//  console.log(n=1); 
// }


let n = 0
for(let i=0; i<1; i++)
{
	let i = prompt('Солнце это звезда? ответьте да или нет')
	if(i == 'да'){
		n++
	}
	i = prompt('Марс это самая далекая планета от Земли? ответьте да или нет')
	if(i == 'нет'){
		n++
	}
	i = prompt('Млечный путь меньше Солнечной системы ? ответьте да или нет')
	if(i == 'нет'){
		n++
	}
	i = prompt('У Земли две Луны? ответьте да или нет')
	if(i == 'нет'){
		n++
	}
	i = prompt('Гагарин это первый человек в космосе? ответьте да или нет')
	if(i == 'да'){
		n++
	}
}
alert('Сумма правильных ответов ' + n );

  

  


let num = prompt('Введите цифру от 0 до 9 ');
switch(num){
	case '0':
		alert('Ноль')
		break
	case '1':
		alert('Один')
		break
	case '2':
		alert('Два')
		break
	case '3':
		alert('Три')
		break
	case '4':
		alert('Четыре')
		break
	case '5':
	alert('Пять')
		break
	case '6':
		alert('Шесть')
		break
	case '7':
		alert('Семь')
		break
	case '8':
		alert('Восемь')
		break
	case '9':
		alert('Девять')
		break
	default:
alert('Ошибка!')
}
