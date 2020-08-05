// const math = require("mathjs");

// const math = require("mathjs");

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

$(document).ready(function(){
    math=localStorage.getItem("math");
    localStorage.removeItem('math');

    console.log(math);
    function display_post(data_val){
        keys = Object.keys(data_val);
        posts = '';
        for (var i = keys.length - 1; i >= 0; i--) {
            // console.log(data_val[keys[i]]["name"]);
            posts +='<ul>';
            posts +='<li> '+data_val[keys[i]]['name']+'</li>';
            posts +='<li> '+data_val[keys[i]]['time']+'</li>';
            posts +='<li> '+data_val[keys[i]]['num']+'</li>';
            posts +='</ul>';
    
        }
        $('.container').html(posts)

    }
    db.ref('math/'+math+'/').on('value',function(snapshot){
        display_post(snapshot.val());
    });

});
// function math(math){
//     localStorage.setItem("math",math);
//     document.location.href="./math.html";
    // console.log(math);
    // function display_post(data_val){
    //     keys = Object.keys(data_val);
    //     posts = '';
    //     for (var i = keys.length - 1; i >= 0; i--) {
    //         console.log(data_val[keys[i]]["name"]);
    
    //     }
    // }   


            //   posts += 'UserID:<br>';
            //   posts += 'Author: '+data_val[keys[i]]['author']+'<br>';
            //   posts += 'Title: '+data_val[keys[i]]['title']+'<br>';
            //   posts += 'Body: '+data_val[keys[i]]['body']+'<br>';
            //   posts += 'Star: '+data_val[keys[i]]['starCount']+'<br>';
            //   posts += '----------------------<br>';
            //   posts += '----------------------<br>';
        //   }
        //   $('#page').html(posts)
        //   console.log(posts);

    
    // db.ref('math/'+math+'/').on('value',function(snapshot){
    //     display_post(snapshot.val());
    // });
    //     event.preventDefault();

// }


