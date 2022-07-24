var arr = [8, 7, -1, 5, -3, 4, 6, -6, 9, 4, 3, 2, -4, -5, -7, 1, -6];
//ex1 :Tổng các số dương trong mảng.
function ex1(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
}

ex1(arr);
//ex 2 :  Đếm có bao nhiêu số dương trong mảng.
function ex2(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum++;
    }
  }
  console.log(sum);
}

ex2(arr);
//ex 3 : Tìm số nhỏ nhất trong mảng
function ex3(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);
}

ex3(arr);
//ex4 : Tìm số dương nhỏ nhất trong mảng.
function ex4(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min && arr[i] >= 0) {
      min = arr[i];
    }
  }
  console.log(min);
}

ex4(arr);


//ex5 : Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function ex5(arr) {
  var sochan = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sochan = arr[i];
    }else{
        sochan = -1 
    }
  }

  console.log(sochan);
}

ex5(arr);
//ex6 : Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
function ex6(arr) {
  var i = arr[4];
    arr[4] = arr[9]
    arr[9] = i

 

  console.log(arr);
}

ex6(arr);
//ex7 :Sắp xếp mảng theo thứ tự tăng dần
function ex7(arr) {
    for(var i = arr.length-1 ; i > 0 ; i--){
        for(var k = 0 ; k < i ; k++){
           if(arr[k] > arr[k + 1]){
            var temp = arr[k]
            arr[k] = arr[k+1]
            arr[k+1] = temp
           }
        }
    }
  
    console.log(arr);
}
ex7([8, 7, -1, 5, -3, 4, 6, -6, 9, 4, 3, 2, -4, -5, -7, 1, -6]);
//ex8 : Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1
function ex8(arr){
    var SNT = 0
    
    for(var i = 0 ; i < arr.length; i++){
      if(arr[i] % 2 === 1 && arr[i] > 0){
        SNT = arr[i]
        break
      }else{
        SNT = -1
      }
    }
    console.log(SNT)
  }
ex8(arr)
//ex9 : Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
function ex9 (arr1){
var demsonguyen = 0
for(var i =0 ; i < arr1.length ; i++){
  if(Number.isInteger(arr1[i])){
    demsonguyen++
  }
}
console.log(demsonguyen)
}
ex9([9,4,5,7.5,6,6.3,-2,-4,-9,8.1,-7])










//ex10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.

function ex10(arr){

  var soduong = 0
  var soam  = 0
  for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] > 0){
       
      soduong++
      
    }
    if(arr[i] < 0){
      soam++
    }
  }
  if(soduong > soam){
    console.log('số dương' +' > '+'số âm')
  }else{
    console.log('số âm' +'>'+'số dương')
  }
  
  

}
ex10(arr)
