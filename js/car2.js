var firebaseConfig = {
    apiKey: "AIzaSyCRg4Bl-FDA1k48u1fymYT-VDJV3Hl7reM",
    authDomain: "test-373e5.firebaseapp.com",
    databaseURL: "https://test-373e5.firebaseio.com",
    projectId: "test-373e5",
    storageBucket: "test-373e5.appspot.com",
    messagingSenderId: "154083517850",
    appId: "1:154083517850:web:af50c245a6ba6aa8480623",
    measurementId: "G-89M41XVPEY"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();
query();
var key = "";
function query(){
    //ref,數據庫中的特定位置
    db.ref('/table/'+'local').on('value',function(snapshot){
        a = snapshot.val();
        keys = Object.keys(snapshot.val());
        // console.log(a[keys[0]]);
        let content='';
        for(var i=1;i<=keys.length-1;i++){

            if( i % 3 == 1){
                content+=`<div class="area">`
                content +=`<ul><li><a id="${i}" onclick="update('.Change',${i})">${a[keys[i]]}</a></li>`
            }
            else if(i % 3 == 0){
                content +=`<li><a id="${i}" onclick="update('.Change',${i})">${a[keys[i]]}</a></li>`
                content +=`</ul></div>`
            }else{
                content +=`<li><a id="${i}" onclick="update('.Change',${i})">${a[keys[i]]}</a></li>`
            }
            
        }
        $('.area_c').html(content);
    })
}
function update(seat,upkey){
    $(seat).show();
    key = upkey;
    
}
function YES(){
        var Change_date = $('#Change_text').val()
        // console.log(Change_date);
        if(Change_date == ""){
            alert("請輸入內容");
        }else{
            $("input[type=text]").val("");
            $('.Change').hide();
            writeNewPost(key,Change_date);
            query();
            
        }

}
function writeNewPost(key,Change_text){
    var updates = {};
    console.log(key);
    updates['/table/local/'+key] = Change_text;
    return db.ref().update(updates);
}
