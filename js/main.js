
let random = "";
let chars = document.getElementById("demo1");


function getData(){
    let user ={
        chars:[ `<h2 class="fs-3 fw-bold mt-3">“Be yourself everyone else is already taken.” <br><span class=" mt-4 d-block">― Oscar Wilde</span"> </h2>`,`<h2 class="fs-3 fw-bold mt-3">“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> 
        <span class=" mt-4 d-block">― Albert Einstein</span> </h2>`,`<h2 class="fs-3 fw-bold mt-3">“So many books, so little time.” <br>
        <span class=" mt-4 d-block">― Frank Zappa</span></h2>` , `<h2 class="fs-3 fw-bold mt-3">
        “A room without books is like a body without a soul.” <br>
        <span class=" mt-4 d-block">― Marcus Tullius Cicero</span></h2>`,
         `<h2 class="fs-3 fw-bold mt-3">“You only live once, but if you do it right, once is enough.”<br>
         <span class=" mt-4 d-block">― Mae West</h2></span>`,
         `<h2 class="fs-3 fw-bold mt-3"> “Don’t walk in front of me… I may not follow
         Don’t walk behind me… I may not lead
         Walk beside me… just be my friend”<span class=" mt-4 d-block">― Albert Camus</span> </h2>`,
         `<h2 class="fs-3 fw-bold mt-3"> “If you tell the truth, you don't have to remember anything.”<span class=" mt-4 d-block">― Mark Twain</span></h2>`,
         `<h2 class="fs-3 fw-bold mt-3"> “A friend is someone who knows all about you and still loves you.”<span class=" mt-4 d-block">― Elbert Hubbard</span></h2>` ],
        random:"",
    }
    for(i=0; i<user.chars.length ; i++){
    random = user.chars[Math.floor(Math.random()* user.chars.length)];
    chars.innerHTML= random;
}
}


//==================================================#another solution =========================================




// let chars = document.getElementById("demo1");
// let pae = [`<h2 class="fs-3 fw-bold mt-3">“Be yourself everyone else is already taken.” <br><span class=" mt-4 d-block">― Oscar Wilde</span"> </h2>`,`<h2 class="fs-3 fw-bold mt-3">“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> 
// <span class=" mt-4 d-block">― Albert Einstein</span> </h2>`,`<h2 class="fs-3 fw-bold mt-3">“So many books, so little time.” <br>
// <span class=" mt-4 d-block">― Frank Zappa</span></h2>` , `<h2 class="fs-3 fw-bold mt-3">
// “A room without books is like a body without a soul.” <br>
// <span class=" mt-4 d-block">― Marcus Tullius Cicero</span></h2>`,
//  `<h2 class="fs-3 fw-bold mt-3">“You only live once, but if you do it right, once is enough.”<br>
//  <span class=" mt-4 d-block">― Mae West</h2></span>`,
//  `<h2 class="fs-3 fw-bold mt-3"> “Don’t walk in front of me… I may not follow
//  Don’t walk behind me… I may not lead
//  Walk beside me… just be my friend”<span class=" mt-4 d-block">― Albert Camus</span> </h2>`,
//  `<h2 class="fs-3 fw-bold mt-3"> “If you tell the truth, you don't have to remember anything.”<span class=" mt-4 d-block">― Mark Twain</span></h2>`,
//  `<h2 class="fs-3 fw-bold mt-3"> “A friend is someone who knows all about you and still loves you.”<span class=" mt-4 d-block">― Elbert Hubbard</span></h2>`];
// let random = "";

// function getData(){
//        random = pae[Math.floor(Math.random()*pae.length)];
//        chars.innerHTML = random;
   
// }





















