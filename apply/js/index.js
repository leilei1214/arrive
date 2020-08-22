 
//  import QRCode from './qrcode'
 // Initialize Firebase
// var QRCode = require('qrcode');
var firebaseConfig = {
    apiKey: "AIzaSyBAhMf__8N07Mw2WtN25W5-1QgsH8KKC8M",
    authDomain: "li-case-218e2.firebaseapp.com",
    databaseURL: "https://li-case-218e2.firebaseio.com",
    projectId: "li-case-218e2",
    storageBucket: "li-case-218e2.appspot.com",
    messagingSenderId: "760156108033",
    appId: "1:760156108033:web:d4af1845c48b5c421d1700",
    measurementId: "G-PVZK45DC29"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database(); 


// emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
 
//validate ok or not

$("#apply").submit(function(event){
 
    gmail = $(this).find("input[name=gmail]").val();
    var today = new Date();
    var current = today.getFullYear()+'年'+(today.getMonth()+1)+'月'+today.getDate()+'日'
    // body = $(this).find("input[name=name]").val()
    // console.log(current);
    if (gmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/)!= -1){
        // alert("true");
        event.preventDefault();
       
         data={ "name": $(this).find("input[name=name]").val(),
         "gmail": $(this).find("input[name=gmail]").val(),
           "key" : "2020"}

           function display_post(data_val){
            keys = Object.keys(data_val);
                  for (var i = keys.length - 1; i >= 0; i--) {
                      console.log(keys[i]);
                    if(gmail == keys[i] ){
                        alert("已註冊");
                    }else{
                        var QRId = gmail;
                        console.log(QRId);
                        new QRCode("apply", {
                            text:QRId,
                            width: 200,
                            height: 200,
                            colorDark : "#000000",
                            colorLight : "#ffffff",
                            correctLevel : QRCode.CorrectLevel.H
                        });
                        var canvas = document.getElementById('apply').querySelector('canvas');
                        var dataURL = canvas.toDataURL();
                        console.log(dataURL);
                        // Email.send({
                        //     SecureToken : "e81d87bd-7f40-4211-a863-657ece2e97dc",
                        //     To : gmail,
                        //     From : "a0933252747@gmail.com",
                        //     Subject : "This is the subject",
                        //     Body :'<img src="'+dataURL+'">' 
                        // }).then(
                        //     message => alert(message),
                        // );
                        // window.location.href='./index.html';
                    }
                    
                  }
    
        }
        db.ref('users/').on('value',function(snapshot){
            display_post(snapshot.val());
        });
        



    // }
    // else{
    //     alert("Gmail no");
    // }
    // "name":$(this).find("input[name=name]").val(),
    //     "gmail":$(this).find("input[name=gmail]").val(),
    //     "phone":$(this).find("input[name=phone]").val(),
    //     "fb":$(this).find("input[name=fb]").val(),
    //     "Line":$(this).find("input[name=Line]").val(),
        //     "data":current

    // };
    // console.log(body);
    // db.ref('users/' + body["gmail"]).set({
    //     "name":$(this).find("input[name=name]").val(),
    //     "gmail":$(this).find("input[name=gmail]").val(),
    //     "phone":$(this).find("input[name=phone]").val(),
    //     "fb":$(this).find("input[name=fb]").val(),
    //     "Line":$(this).find("input[name=Line]").val()
    // })
    // .then(function () {alert("成功創建使用者！");})
    // .catch(function () {alert("伺服器發生錯誤，請稍後再試。");});
    }
})
// db.ref('users/').on('value', function(snapshot) {
//     //alert(Object.keys(snapshot.val()))
//     display_users(snapshot.val());
// });  
