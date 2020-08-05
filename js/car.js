
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
function query(){
    db.ref('/table/'+'local').on('value',function(snapshot){
        a = snapshot.val();
        keys = Object.keys(snapshot.val());
        // console.log(a[keys[1]]);
        let content='';
        for(var i=1;i<=keys.length-1;i++){

            if( i % 3 == 1){
                content+=`<div class="area">`
                content +=`<ul><li><a id="${i}">${a[keys[i]]}</a></li>`
            }
            else if(i % 3 == 0){
                content +=`<li><a id="${i}">${a[keys[i]]}</a></li>`
                content +=`</ul></div>`
            }else{
                content +=`<li><a id="${i}">${a[keys[i]]}</a></li>`
            }
            
        }
        $('.area_c').html(content);
    })
}