var posts=["2024/06/21/自建MetingJS-API并添加cookie/","2024/06/28/刷题1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };