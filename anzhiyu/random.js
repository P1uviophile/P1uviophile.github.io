var posts=["2024/06/28/刷题1/","2024/07/14/刷题3/","2024/07/07/刷题2/","2024/06/21/自建MetingJS-API并添加cookie/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };