let containerNews = document.getElementById("news-container");

 async function initNews(){
   let newsarticles = document.getElementById("news-articles");
    let darcticles= await fetch('./News/new.json');
    let data =await darcticles.json();
    for(i=0; i<data.length; i++){
      newsarticles.innerHTML+=`
          <div>
           <div style="padding-bottom:32px;">
              <img src="${data[i].image}" class="card-img-top"  >
              <div class="article-data">
                <div class="icons-data" style="padding-top:10px; padding-bottom:10px;">
                   <span><i class="fa-regular fa-calendar" style="color:#1F2B6C; "></i> ${data[i].publishdate}</span>
                   <span style="margin-left:24px;"> <i class="fa-regular fa-user" style="color:#159eec "></i> By Autor</span>
                   <span style="margin-left:24px;"> <i  class="fa-regular fa-eye" style="color:#526ae9"></i> 68</span>
                   <span style="margin-left:24px;"> <i class="fa-regular fa-heart" style="color:#e2315c"></i> 86</span>
                </div>
                
                <h2>${data[i].acticleName}</h2>
                <p>${data[i].sammary}</p>
              </div>
              <button style=" background-color:#BFD2F8; border-radius:50px; padding:13px 26px; border:none"> Read More     <i class="fa-solid fa-arrow-right"></i> </i></button>
             
           </div>
          </div>
      `
    }
 }

 function renderNews(){
    fetch('./News/news.html')
    .then(res => res.text())
    .then((html)=>{
        root.innerHTML=html;
        let script = document.createElement("script");
        script.src="./News/news.js";
    script.onload=()=>{
        initNews();
    }
    document.body.appendChild(script);
    
    });

 }
    
 

