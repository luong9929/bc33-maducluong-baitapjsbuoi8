
// function nhapmang() {
//   var num =  document.getElementById('txtNhapSo').value.split(",")
//   var ketqua = document.getElementById('ketqua')
//   ketqua.innerHTML = num
//   return num
 
// }
var arr = [],arr1 = [];
function array(){
  var num = document.getElementById('txtNhapSo').value*1
  arr.push(num)
  document.getElementById('ketqua').innerHTML = arr
}
function array1(){
  var num1 = document.getElementById('txtNhapSo1').value*1
  arr1.push(num1)
  document.getElementById('ketqua1').innerHTML = arr1
}


//ex1 :Tổng các số dương trong mảng.
function ex1() {
 var sum  = 0 ;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i]
    
    }
  }
 document.getElementById('kqbt1').innerHTML ='tổng các số dương : ' +  sum
}

//ex 2 :  Đếm có bao nhiêu số dương trong mảng.
function ex2() {
  var dem = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      dem++;
    }
  }
  document.getElementById('kqbt2').innerHTML ='số dương : ' + dem
}

//ex 3 : Tìm số nhỏ nhất trong mảng
function ex3() {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  document.getElementById('kqbt3').innerHTML ='số nhỏ nhất : '+ min
}
//ex4 : Tìm số dương nhỏ nhất trong mảng.
function ex4() {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min && arr[i] >= 0) {
      min = arr[i];
    }
  }
  document.getElementById('kqbt4').innerHTML ='số dương nhỏ nhất : '+ min
}
//ex5 : Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function ex5() {
  var sochan = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sochan = arr[i];
    } 
  }

  document.getElementById('kqbt5').innerHTML ='số chẵn cuối cùng : '+ sochan
}
//ex6 : Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
function ex6() {
 
  var iso1 = document.getElementById('iso1').value 
  var iso2 = document.getElementById('iso2').value
  var i = arr[iso1];
  arr[iso1] = arr[iso2];
  arr[iso2] = i;

 document.getElementById('kqbt6').innerHTML ='mảng sau khi thay đổi : '+ arr
}


//ex7 :Sắp xếp mảng theo thứ tự tăng dần
function ex7() {
 
  for(var i = arr.length-1; i >= 0 ; i--){
    for(var k = 0 ; k < i ; k++){
      if (arr[k] > arr[k + 1]) {
        var temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
    }
  }
    
  }
document.getElementById('kqbt7').innerHTML ='mảng sau khi sắp xếp : ' + arr
  
}
// ex7([8, 7, -1, 5, -3, 4, 6, -6, 9, 4, 3, 2, -4, -5, -7, 1, -6]);
//ex8 : Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1
function ex8() {
  var SNT = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > 0) {
      SNT = arr[i];
      break;
    } 
  }
  document.getElementById('kqbt8').innerHTML = SNT
}

//ex9 : Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
function ex9() {
  var demsonguyen = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (Number.isInteger(arr1[i])) {
      demsonguyen++;
    }
  }
  document.getElementById('kqbt9').innerHTML = 'số nguyên : ' + demsonguyen
}
// ex9([9, 4, 5, 7.5, 6, 6.3, -2, -4, -9, 8.1, -7]);

//ex10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.

function ex10() {
  var soduong = 0;
  var soam = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      soduong++;
    }
    if (arr[i] < 0) {
      soam++;
    }
  }
  if (soduong > soam) {
    document.getElementById('kqbt10').innerHTML="số dương" + " > " + "số âm";
  } else if (soam > soduong) {
    document.getElementById('kqbt10').innerHTML="số âm" + " > " + "số dương";
  }else{
    document.getElementById('kqbt10').innerHTML="số âm" + " = " + "số dương";
  }
}
