/*
** Bài tập 1
** Đầu vào : 
    + Khai báo lương 1 ngày daySalary
    + Khai báo số ngày làm worksDay
** Xử lý :
    + Lương 1 ngày * số ngày làm  salary
** Đầu ra :
    + show kết quả salary
*/

var daySalary = 300000;
var worksDay = 30;
var salary = daySalary * worksDay;
console.log("Tiền lương nhân viên: " + salary);


/*
** Bài tập 2
** Đầu vào : 
    + Khai báo 5 giá trị
** Xử lý :
    + Tính tổng 5 giá trị sumnary
    + Tính trung bình 5 giá trị average
** Đầu ra :
    + show kết quả average
*/

var num1 = 10
var num2 = 20
var num3 = 30
var num4 = 40
var num5 = 50
var sumnary = num1 + num2 + num3 + num4 + num5
var average = sumnary / 5
console.log("Giá trị trung bình của 5 số: " + average);


/*
** Bài tập 3
** Đầu vào : 
    + Khai báo hằng số tỷ giá usd  rate
    + Khai báo số tiền usd cần quy đổi  usdValue
** Xử lý :
    + Tính giá trị vnd sau quy đổi vndValue
** Đầu ra :
    + show kết quả vndValue
*/

const rate = 23500;
var usdValue = 2;
var vndValue = rate * usdValue;
console.log("2$ với tỷ giá: " + rate + " thì quy đổi được: " + vndValue + "vnd");

/*
** Bài tập 4
** Đầu vào : 
    + Khai báo chiều dài, chiểu rộng  length width
** Xử lý :
    + Tính diện tích  length * width  area
    + Tính chu vi (length + width)*2 perimeter 
** Đầu ra :
    + show kết quả area, perimeter
*/

var length = 10;
var width = 7;
var area = length * width;
var perimeter = (length + width) * 2;
console.log("Chu vi hình chữ nhật: " + perimeter);
console.log("Diện tích hình chữ nhật: " + area);

/*
** Bài tập 5
** Đầu vào : 
    + Khai báo 1 số có 2 chữ số  number
** Xử lý :
    + Tách số thứ 1 firstNum
    + Tính số thứ 2 secondNum
** Đầu ra : 
    + show kết quả  sumNum 
*/

var number = 68;
var firstNum = Math.floor(number / 10);
var secondNum = number % 10;
var sumNum = firstNum + secondNum;
console.log("Tổng của 2 số là: " + sumNum);