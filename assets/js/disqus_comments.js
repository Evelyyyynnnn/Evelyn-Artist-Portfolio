(function() {
  var disqus_config;

  disqus_config = function() {
    this.page.url = 'https://jekyll-typing-artist.vercel.app/assets/js/disqus_comments.js';
    this.page.identifier = 'https://jekyll-typing-artist.vercel.app/assets/js/disqus_comments.js';
    return false;
  };

  (function() {
    var d, s;
    d = document;
    s = d.createElement('script');
    s.src = 'https://typing-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    return false;
  });

}).call(this);
