var posts=["2024/06/28/刷题1/","2024/06/21/自建MetingJS-API并添加cookie/","2024/07/07/刷题2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };