var posts=["2024/06/21/自建MetingJS-API并添加cookie/","2024/06/22/Github repo + Vercel + Picgo 搭建图床/","2024/06/20/Hello Blog!/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };