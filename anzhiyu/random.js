var posts=["/post/hello-world.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"冥想音乐","hundredSuffix":"","link":"https://www.linn.pro/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"冥想 - 听雨声,钢琴","siteshot":"/img/1J90dO25190481618973271553.jpg"},{"name":"isky问答库","link":"https://www.isky.ltd/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"专注分享知识经验","siteshot":"/img/1J90dO25190481618973271553.jpg"},{"name":"TinKoK","link":"https://www.tinkok.com","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"在这里能找你想要的答案！","siteshot":"/img/1J90dO25190481618973271553.jpg"},{"name":"励志生活网","link":"https://www.mtvss.com","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"励志生活网_从这里开始","siteshot":"/img/1J90dO25190481618973271553.jpg"},{"name":"求医么","link":"https://www.qiuyime.net/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"需就医，我帮你","siteshot":"/img/1J90dO25190481618973271553.jpg"},{"name":"Sandy'Blog","hundredSuffix":"","link":"https://blog.e9china.net/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"疯言疯语十载"},{"name":"回到未来博客","hundredSuffix":"","link":"http://www.esky.me/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"回到未来博客"},{"name":"小风的天空","hundredSuffix":"","link":"https://www.xinai.de/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"小风的天空"},{"name":"某知名博客","hundredSuffix":"","link":"http://www.zhuzhirui.com/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"某知名博客"},{"name":"麦麦同学","hundredSuffix":"","link":"http://www.mmtx.net/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"麦麦同学"},{"name":"张宴的博客","hundredSuffix":"","link":"http://www.zyan.cc/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"Web系统架构与研发"},{"name":"老实孩子","hundredSuffix":"","link":"http://blog.youngbar.com/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"老实孩子"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 2) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };