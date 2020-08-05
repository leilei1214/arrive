// Your web app's Firebase configuration
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

function query(user,email){
    db.ref('/user/login').once('value',function(snapshot){
        dataIn = snapshot.val();
        keys = Object.keys(snapshot.val());
        if(email == dataIn['email'] && user == dataIn['username']){
            window.localStorage.setItem("user",user);
            window.location.href="./car.html";
        }
        else{
            alert("使用者名稱或Email錯誤");
        }

    });
}
function test(){
    if(localStorage.getItem("user")==null){
        console.log(localStorage.getItem("user"));
        console.log("123");
        window.location.href="./login.html";
    }else{
        window.location.href="./car.html";
    }
}
