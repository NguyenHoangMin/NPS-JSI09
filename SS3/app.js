//ex1
var arr1 = [-3, 8, 7 ,6, 5, -4, 3, 2, 1];
for (let i = 0; i < arr1.length; i++) {
      for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] > arr1[j]) {
          let temp = arr1[i]; // 1
          arr1[i] = arr1[j]; // -2 
          arr1[j] = temp; // 1
        }
      }
    }

console.log(arr1);

//ex2

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
//ex4 Write a javascript program to display the reading status
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead ',
        readingStatus: true,
        price: '500vnd'
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson ',
        readingStatus: true,
        price: '500vnd'
    },
    {
        title: 'Truyện Kiều ',
        author: 'Nguyễn Du',
        readingStatus: false,
        price: '500vnd'
    }
];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' bởi ' + library[i].author;
    var book2 = "'" + library[i].title + "'" + ' bởi ' + library[i].author + library[i].price;
    if (library[i].readingStatus) {
      console.log("đã đọc " + book2);
    } else
    {
     console.log("chưa đọc " + book);
    }
   }
//ex3

let arr = [];
function Add() {
    value = document.getElementById("text").value
    arr.push(value)
    alert("đã thêm thành công")
}
function Display() {
    document.getElementById("show").innerHTML = ""
    for (i of arr){
        document.getElementById("show").innerHTML +=  `<p>${i}</p><br>`
        
    }
}
