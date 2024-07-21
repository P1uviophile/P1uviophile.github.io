var posts=["2024/07/17/JWT-Token防止token被盗用的刷新方案/","2024/07/14/刷题3/","2024/07/16/布隆过滤器和前缀树实现违禁词过滤的性能对比/","2024/06/28/刷题1/","2024/06/21/自建MetingJS-API并添加cookie/","2024/07/07/刷题2/","2024/07/21/刷题4/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };