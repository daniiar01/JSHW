//(str,number, boolean, undefined, null,bigInt,symbol)
// {} - [] ссылочный тип данных
// 
// let person = {
//     name: 'Daniiar',
//     sayHello:function () {
//         console.log(`Привет мир,меня звать ${this.name}`);
//     }

// }  
// person.sayHello()

// // spreed 
// let person2 = {...person}
// person2.name = 'ogogo'

// console.log(person)
// console.log(person2)

// let age = 25.3
// console.log(+age.toFixed());
// 
// // math
// let num = 25.7
// // floor() - округляет в меньшую сторону
// console.log(Math.floor(num));
// // ceil () - Округляет в большую сторону 
// console.log(Math.ceil(num));
// // Round() - округляет в ближнему числу
// console.log(Math.ceil (num));
// //random - генерирует от нуля до единицы
// // console.log (Math.round(Math.random()* 10))
// console.log(Math.max(1,2,3,4,5,67,85))
// // // console.log(Math.min(-10,1,2,3,4,5,67,85))
// // let num = 10
// // console.log(typeof num.toString());
// // let name = 'Ivan'
// // console.log(name.toUpperCase())
// // console.log(name.toLowerCase())
// // // console.log(name.includes('v'))
// // // console.log(name.toLowerCase().includes('I'.toLowerCase()))
// // console.log(5>10);
// // console.log(5<10);
// // console.log(5>=10);
// // console.log(5<=10);



// // //Логические операторы  && - оператор И,  || - оператор ИЛИ , ! - оператор НЕ
// // console.log(5>10 && 10>3);
// // console.log(5>10 || 10>3); 
// // console.log(!1)

// console.log(5>4)
// console.log('ананас'>'яблоко')
// console.log("2" > "12")
// console.log(undefined == null)
// console.log(undefined === null)
// console.log(null == "\n0\n")
// console.log(null === +"\n0\n")



// let age=prompt()



// function checkAge() {
//     age > 18 ? alert('Развлекайся') : alert('Родители разрешили?')
    
// }
// checkAge()



// const myAge = prompt('Сколько тебе лет?');
// function checkAge(age) {
//     return age > 18 || confirm('Родители разрешили?');
// }
// checkAge(parseInt(myAge));



//   let arr = [10];
//   for (let i = 0; i < 10; i++) {
//     arr[i] = Math.random() * 100;
//     console.log(Math.round(arr[i]));
//   }







// console.log(Math.round(Math.random()* 100));

// console.log(6.34.toFixed(1));

// console.log(Math.round(6.34*10) / 10);  
 
//  console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
 
//  console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

// const arr = [ 1,2,3,4,5]
//  console.log(arr.toString)
 
//  console.log(+true);
// //  console.log(+false);
// let age = 7
// function checkAge() {
//   age > 18 && console.log (true)
//   age > 18 || console.log (false)
// }
// checkAge()



//Условные конструкции
 
// if (5 !== 5) {
//   console.log('Верно');
// // } else {
// //   console.log('Не верно');
// } else if (10>3) {
//   console.log('10>3');
// }
//  if (5>3) {
//    console.log('да');
//  }
//  // тернарный оператор 
//  5>3 ?'Yes' : 'No'
//  5>3 && 'Yes'
//  5>3 && console.log('True')

//  //Switch case
//  let name = 'dan'
//  switch(name) {
//    case name == "dan" :
//    return console.log (`Привет ${name}`)
//    case name !== 'Гость':
//      return console.log (`Привет Гость`)
//      default :
//      console.log('Не верно');
// //  }
//   let name = prompt('Введите ваше имя...')
//   switch (name) { 
//     case 'dan':
//       console.log('Привет Админ');
//       break
//       case 'Гость' :
//         console.log('Привет Гость');
//         break
//      case 'Ivan' :
//        console.log ('Привет Иван')
//        break
  
//     default:
//       console.log('Привет');
//   }








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