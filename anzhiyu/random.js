var posts=["2024/08/23/Astute_Graphics/","2024/09/19/Arnold/","2024/01/10/Expressionstrip/","2024/04/20/GoFullPage/","2024/05/17/ImageAssistant/","2024/04/20/Ltjc/","2024/05/11/MACC4D/","2024/05/09/MACae/","2024/05/10/MACai/","2024/02/01/MotionSecrets/","2024/05/12/MACps/","2024/02/01/Riot/","2024/04/22/Siyuanfont/","2024/04/10/PCsystem/","2024/09/19/Vray/","2024/09/09/WIN3dsmax/","2024/09/18/WINPR/","2024/09/06/WINlr/","2024/09/06/WINae/","2024/04/11/alibabafont/","2024/09/04/WINpS/","2024/09/20/corona/","2024/06/20/c4dplug-in/","2024/07/01/etsearch/","2024/09/20/free-font/","2024/01/01/hello-world/","2024/08/20/loops/","2024/04/10/hmengfont/","2024/01/29/idm/","2024/06/16/muzliplugin/","2024/06/08/pictureking/","2024/01/20/motion/","2024/06/07/psVersion/","2024/06/07/psgreenversion/","2024/01/01/statement/","2024/09/06/tuba/","2024/04/20/wacom/","2024/08/14/winai/","2024/09/03/winC4D/","2024/01/19/octanehelp/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"butterfly主题开发","link":"https://butterfly.js.org/","avatar":"https://cdn.jsdelivr.net/gh/adminks666/bufferfly.cn/images/avatar.jpg","descr":"开发者致敬"},{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、簡單且強大的網誌框架"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://cdn.jsdelivr.net/gh/tzy13755126023/BLOG_SOURCE/screenshot_f/akilar.top.jpg","descr":"期待您的光临！"},{"name":"Heo","link":"https://blog.zhheo.com/","avatar":"https://p.zhheo.com/2022d8aaa85e003815b7274b4d135adf1b9f283510.png!cover_siteshot","descr":"爱折腾的设计师"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://blog.zhheo.com/img/avatar.png","descr":"前端开发工程师，Butterfly魔改专家"},{"name":"爱吃肉的猫","link":"https://meuicat.com/","avatar":"https://bu.dusays.com/2024/04/25/662953b6d9923.jpg","descr":"有肉有猫有生活."},{"name":"Ethan.Tzy","link":"https://fe32.top/","avatar":"https://cdn.jsdelivr.net/gh/tzy13755126023/BLOG_SOURCE/theme_f/avater.jpg","descr":"学习与交流的乐园，希望能和你成为好朋友。"},{"name":"小冰博客","link":"https://zfe.space/","avatar":"https://zfe.space/images/headimage.png","descr":"做个有梦想的人！"},{"name":"小康博客","link":"https://www.antmoe.com/","avatar":"https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg","descr":"一个收藏回忆与分享技术的地方！"},{"name":"Lete乐特","link":"https://www.lete114.top/","avatar":"https://www.lete114.top/img/avatar.png","descr":"人生只有一次，大胆的生活！！"},{"name":"HCLonely","link":"https://blog.hclonely.com/","avatar":"https://cdn.jsdelivr.net/gh/HCLonely/blog.hclonely.com@latest/img/avatar.jpg","descr":"一个懒人的博客"},{"name":"CC的数字花园","link":"https://cyrus19.cc/","avatar":"https://cyrus19.cc/wp-content/uploads/2024/07/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240727095231.jpg","descr":"睡不着吗？"},{"name":"Naive Koala 🐨","link":"https://www.xalaok.top/","avatar":"https://cdn.xalaok.top/koala.png","descr":"像考拉一样无忧😉"},{"name":"SCOTT Studio","link":"https://blog.scott-studio.cn/","avatar":"https://blog.scott-studio.cn/uploads/2024/08/blog-logo.webp","descr":"不知名前端攻城狮，分享编程经验和技术干货"},{"name":"大海看看","link":"https://www.dhkk.cn/","avatar":"https://p.zhheo.com/RrXFVq25490381678864854235.jpg!cover_mini","descr":"记录生活留住美好时刻 ，分享个人学习笔记"},{"name":"SCOTT Studio","link":"https://blog.scott-studio.cn/","avatar":"https://blog.scott-studio.cn/uploads/2024/08/blog-logo.webp","descr":"不知名前端攻城狮，分享编程经验和技术干货"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://cdn.jsdelivr.net/gh/tzy13755126023/BLOG_SOURCE/screenshot_f/akilar.top.jpg","descr":"期待您的光临！"},{"name":"枫叶","link":"https://blog.aqcoder.cn","avatar":"https://blog.aqcoder.cn/img/avatar.png","descr":"分享知识，认识世界"},{"name":"枫叶","link":"https://blog.aqcoder.cn","avatar":"https://blog.aqcoder.cn/img/avatar.png","descr":"分享知识，认识世界"},{"name":"枫叶","link":"https://blog.aqcoder.cn","avatar":"https://blog.aqcoder.cn/img/avatar.png","descr":"分享知识，认识世界"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
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