// // Bài toán : Lọc và in ra các số chẵn trong mảng => [2,4,6,8,10];
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //// C1: 
// // let arrChan = []
// // for (let key in arr) {
// //   if (arr[key] % 2 == 0) {
// //     // console.log(arr[key]);
// //     arrChan.push(arr[key]);

// //   }
// // }
// // console.log(arrChan);

// ///// C2: filter => luôn là 1 mảng mới 
// // console.log(arr.filter(item => item % 2 == 0));

// // /// In ra các phần tử nhỏ hơn 4
// // console.log(
// //   arr.filter(item => item < 4)
// // );



// /*
// Đề bài luyện tập buổi 2: 
// 1.xóa phần tử trùng lặp trong mảng
// 2. In ra 1 mảng mới: có thứ tự mảng sx tăng dần (không dùng sort())

// */

// ///sắp sếp tăng dần
// // let arr = [1, 3, -2, 100, 0, 4, 6, 8, 3.5, 4];
// // let xoaTrungLap = [...new Set(arr)]
// // console.log("xoaTrungLap: ", xoaTrungLap);
// // // for (let i = 0; i < arr.length; i++) {
// // //   for (let j = i + 1; j < arr.length; j++) {
// //     if (arr[i] > arr[j]) {
// //       let temp = arr[i]; // 1
// //       arr[i] = arr[j]; // -2 
// //       arr[j] = temp; // 1
// //     }
// //   }
// // }

// // console.log(arr);



// let users = [
//     {id:11, name : "Adam", age : 23, group:'editor'},
//     {id:47, name : "Jon", age : 28, group:'admin'},
//     {id:85, name : "William", age : 34, group:'editor'},
//     {id:97, name : "Oliver", age : 28, group:'admin'},
    
// ]
// // // let res = users.filter(it => it.name.includes("oli"));
// // // console.log("res: ", res);

// // let res = users.filter(it => new RegExp('ada','m').test(it.name));
// // console.log("res: ", res);
// //in ra 2 đối tượng cùng group
// console.log(
//     users.filter(item => item.group == "admin"  )
// );
// console.log(
//     users.filter(item => item.group == "editor"  )
// );
//// cú pháp khai báo oop trong js
//khai báo lớp Người
class Nguoi {
    breathe(){
        alert("đang hít thở")
    }

    look(){
        alert("nhin")
    }
    speak(){
        alert("em là người")
    }
}

let DucAnh = new Nguoi()
DucAnh.breathe();
DucAnh.look();
DucAnh.speak();

class Array1{
    map(){

    }
    filter(){

    }

    find(){
        
    }
}



