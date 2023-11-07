 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function() {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/favicon.png");
         document.title = '╭(°A°`)╮ 侬，回来咯，别迷路了~';
         clearTimeout(titleTime);
     } else {
         $('[rel="icon"]').attr('href', "/img/favicon.png");
         document.title = '(ฅ>ω<*ฅ) 侬到家了真好~';
         titleTime = setTimeout(function() {
             document.title = OriginTitle;
         }, 2000);
     }
 });