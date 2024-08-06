var posts=["2024/07/07/刷题2/","2024/06/28/刷题1/","2024/07/14/刷题3/","2024/07/21/刷题4/","2024/08/04/刷题6/","2024/07/28/刷题5/","2024/07/16/布隆过滤器和前缀树实现违禁词过滤的性能对比/","2024/06/21/自建MetingJS-API并添加cookie/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };