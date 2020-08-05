    	// Initialize Firebase
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
       
         c = "name"+':'+ $(this).find("input[name=name]").val(),
         a = "gmail"+':'+ $(this).find("input[name=gmail]").val(),
         b =  "key" +':'+ "2020"
        // num = {a,b};
        // new QRCode(document.getElementById('output'), 'your content');
        // console.log(num)
        // 设置参数方式
        var qrcode = new QRCode('output', {
          text: 'your content',
          width: 256,
          height: 256,
          colorDark : '#000000',
          colorLight : '#ffffff',
          correctLevel : QRCode.CorrectLevel.H
        });
        
        // 使用 API
        qrcode.clear();
        a = qrcode.makeCode('{'+a+','+b+'}');
        console.log(document.getElementById('output').innerHTML)

        // qrcode.clear();
        // qrcode.makeCode(elText);

        // qrcode({})
        
        // alert(qrc);
        
        

        
        Email.send({
            SecureToken : "e81d87bd-7f40-4211-a863-657ece2e97dc",
            To : gmail,
            From : "a0933252747@gmail.com",
            Subject : "This is the subject",
            Body : document.getElementById('output').innerHTML
        }).then(
          message => alert(message),
          document.getElementById('output')=""
        );

    }
    else{
        alert("Gmail no");
    }
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

})
// db.ref('users/').on('value', function(snapshot) {
//     //alert(Object.keys(snapshot.val()))
//     display_users(snapshot.val());
// });  
