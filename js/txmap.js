function welcometxmap() {
    //请求数据
    ipLoacation = window.saveToLocal.get('ipLocation');
    if (ipLoacation) {
        // 使用 ipLocation
    } else {
        // 数据已过期或不存在
        var script = document.createElement('script');
        var url = `https://apis.map.qq.com/ws/location/v1/ip?key=${txkey}&output=jsonp`;
        script.src = url;
        window.QQmap = function (data) {
            ipLoacation = data;
            // 将数据保存到 localStorage，过期时间设置为 1 天
            window.saveToLocal.set('ipLocation', ipLoacation, 1);
            document.body.removeChild(script);
            delete window.QQmap;
        };
        document.body.appendChild(script);
    }
    showWelcome();
}
function getDistance(e1, n1, e2, n2) {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
        e *= PI / 180
        n *= PI / 180
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }

    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
}

function showWelcome() {

    let dist = getDistance(longitude, Latitude, ipLoacation.result.location.lng, ipLoacation.result.location.lat);
    let pos = ipLoacation.result.ad_info.nation;
    let ip;
    let posdesc;
    //根据国家、省份、城市信息自定义欢迎语
    switch (ipLoacation.result.ad_info.nation) {
        case "日本":
            posdesc = "よろしく，一起去看樱花吗";
            break;
        case "美国":
            posdesc = "Let us live in peace!";
            break;
        case "英国":
            posdesc = "想同你一起夜乘伦敦眼";
            break;
        case "俄罗斯":
            posdesc = "干了这瓶伏特加！";
            break;
        case "法国":
            posdesc = "C'est La Vie";
            break;
        case "德国":
            posdesc = "Die Zeit verging im Fluge.";
            break;
        case "澳大利亚":
            posdesc = "一起去大堡礁吧！";
            break;
        case "加拿大":
            posdesc = "拾起一片枫叶赠予你";
            break;
        case "中国":
            pos = ipLoacation.result.ad_info.province + " " + ipLoacation.result.ad_info.city + " " + ipLoacation.result.ad_info.district;
            ip = ipLoacation.result.ip;
            switch (ipLoacation.result.ad_info.province) {
                case "北京市":
                    posdesc = "北——京——欢迎你~~~";
                    break;
                case "重庆市":
                    posdesc = "勒是雾都~~~";
                    break;
                case "上海市":
                    posdesc = "众所周知，中国只有两个城市";
                    break;
                case "天津市":
                    posdesc = "讲段相声吧";
                    break;
                case "河北省":
                    posdesc = "山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山";
                    break;
                case "山西省":
                    posdesc = "展开坐具长三尺，已占山河五百余";
                    break;
                case "内蒙古自治区":
                    posdesc = "天苍苍，野茫茫，风吹草低见牛羊";
                    break;
                case "辽宁省":
                    posdesc = "我想吃烤鸡架！";
                    break;
                case "吉林省":
                    posdesc = "状元阁就是东北烧烤之王";
                    break;
                case "黑龙江省":
                    posdesc = "很喜欢哈尔滨大剧院";
                    break;

                case "江苏省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "南京市":
                            posdesc = "这是我挺想去的城市啦";
                            break;
                        case "苏州市":
                            posdesc = "上有天堂，下有苏杭";
                            break;
                        default:
                            posdesc = "散装是必须要散装的";
                            break;
                    }
                    break;
                case "浙江省":
                    posdesc = "东风渐绿西湖柳，雁已还人未南归";
                    break;
                case "河南省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "郑州市":
                            posdesc = "豫州之域，天地之中";
                            break;
                        case "南阳市":
                            posdesc = "臣本布衣，躬耕于南阳此南阳非彼南阳！";
                            break;
                        case "驻马店市":
                            posdesc = "峰峰有奇石，石石挟仙气嵖岈山的花很美哦！";
                            break;
                        case "开封市":
                            posdesc = "刚正不阿包青天";
                            break;
                        case "洛阳市":
                            posdesc = "洛阳牡丹甲天下";
                            break;
                        default:
                            posdesc = "可否带我品尝河南烩面啦？";
                            break;
                    }
                    break;
                case "安徽省":
                    posdesc = "蚌埠住了，芜湖起飞";
                    break;
                case "福建省":
                    posdesc = "井邑白云间，岩城远带山";
                    break;
                case "江西省":
                    posdesc = "落霞与孤鹜齐飞，秋水共长天一色";
                    break;
                case "山东省":
                    posdesc = "遥望齐州九点烟，一泓海水杯中泻";
                    break;
                case "湖北省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "黄冈市":
                            posdesc = "红安将军县！辈出将才！";
                            break;
                        default:
                            posdesc = "来碗热干面~";
                            break;
                    }
                    break;
                case "湖南省":
                    posdesc = "74751，长沙斯塔克";
                    break;
                case "广东省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "广州市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "白云区":
                                    posdesc = "好巧！博主也在白云区生活喔~";
                                    break;
                                default:
                                    posdesc = "看小蛮腰，喝早茶了嘛~ ";
                                    break;
                            }
                            break;
                        case "深圳市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "坪山区":
                                    posdesc = "好巧！博主也在坪山区生活喔~";
                                    break;
                                default:
                                    posdesc = "今天你996了嘛~";
                                    break;

                            }
                            break;
                        case "湛江市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "雷州市":
                                    posdesc = "好巧！博主也是雷州人";
                                    break;
                                default:
                                    posdesc = "海鲜盛宴，自然风光~";
                                    break;
                            }
                            break;
                        case "韶关市":  
                            switch (ipLoacation.result.ad_info.district) {
                                case "浈江区":
                                    posdesc = "古韵韶城·风采浈江~";
                                    break;
                                default:
                                    posdesc = "韶关之行,赏丹霞之美";
                                    break;
                            }
                            break;
                        case "珠海市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "香洲区":
                                    posdesc = "拱北口岸美食街~";
                                    break;
                                default:
                                    posdesc = "逛浪漫之城,寻海岛风情~";
                                    break;
                            }
                            break;
                        case "佛山市":   
                            switch (ipLoacation.result.ad_info.district) {
                                case "禅城区":
                                    posdesc = "游览南风古灶，感受陶艺魅力~";
                                    break;
                                default:
                                    posdesc = "探索岭南古韵,品味佛山风情~";
                                    break;
                            }
                            break; 
                        case "江门市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "新会区":
                                    posdesc = "古井烧鹅吃起来~";
                                    break;
                                default:
                                    posdesc = "世界文化遗产开平碉楼欢迎您~";
                                    break;
                            }
                            break;
                        case "茂名市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "电白区":
                                    posdesc = "中国第一滩欢迎您~";
                                    break;
                                default:
                                    posdesc = "洗太故里,南方油城~";
                                    break;
                            }
                            break;
                        case "肇庆市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "高要区":
                                    posdesc = "品味百年古镇的风情~";
                                    break;
                                default:
                                    posdesc = "国家历史文化名城欢迎您~";
                                    break;
                            }
                            break;
                        case "惠州市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "惠城区":
                                    posdesc = "惠州西湖欢迎您~";
                                    break;
                                default:
                                    posdesc = "打卡恐龙公园~";
                                    break;
                            }
                            break;
                        case "梅州市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "梅江区":
                                    posdesc = "好巧！博主也在坪山区生活喔~";
                                    break;
                                default:
                                    posdesc = "挡不住的“柚”惑~";
                                    break;
                            }
                            break;
                        case "汕头市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "坪山区":
                                    posdesc = "好巧！博主也在坪山区生活喔~";
                                    break;
                                default:
                                    posdesc = "今天你996了嘛~";
                                    break;
                            }
                            break;
                        case "河源市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "坪山区":
                                    posdesc = "好巧！博主也在坪山区生活喔~";
                                    break;
                                default:
                                    posdesc = "今天你996了嘛~";
                                    break;
                            }
                            break;
                        case "阳江市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "坪山区":
                                    posdesc = "好巧！博主也在坪山区生活喔~";
                                    break;
                                default:
                                    posdesc = "今天你996了嘛~";
                                    break;
                            }
                            break;
                        case "清远市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "坪山区":
                                    posdesc = "好巧！博主也在坪山区生活喔~";
                                    break;
                                default:
                                    posdesc = "今天你996了嘛~";
                                    break;
                            }
                            break;
                        case "东莞市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "坪山区":
                                    posdesc = "好巧！博主也在坪山区生活喔~";
                                    break;
                                default:
                                    posdesc = "今天你996了嘛~";
                                    break;
                            }
                            break;
                        case "中山市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "坪山区":
                                    posdesc = "好巧！博主也在坪山区生活喔~";
                                    break;
                                default:
                                    posdesc = "今天你996了嘛~";
                                    break;
                            }
                            break;
                        case "潮州市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "坪山区":
                                    posdesc = "好巧！博主也在坪山区生活喔~";
                                    break;
                                default:
                                    posdesc = "今天你996了嘛~";
                                    break;
                            }
                            break;
                        case "揭阳市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "坪山区":
                                    posdesc = "好巧！博主也在坪山区生活喔~";
                                    break;
                                default:
                                    posdesc = "今天你996了嘛~";
                                    break;
                            }
                            break;
                        case "云浮市":
                            switch (ipLoacation.result.ad_info.district) {
                                case "坪山区":
                                    posdesc = "好巧！博主也在坪山区生活喔~";
                                    break;
                                default:
                                    posdesc = "今天你996了嘛~";
                                    break;
                            }
                            break;                                                                   
                    }
                    break;
                case "广西壮族自治区":
                    posdesc = "桂林山水甲天下";
                    break;
                case "海南省":
                    posdesc = "朝观日出逐白浪，夕看云起收霞光";
                    break;
                case "四川省":
                    posdesc = "康康川妹子";
                    break;
                case "贵州省":
                    posdesc = "茅台，学生，再塞200";
                    break;
                case "云南省":
                    posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天";
                    break;
                case "西藏自治区":
                    posdesc = "躺在茫茫草原上，仰望蓝天";
                    break;
                case "陕西省":
                    posdesc = "来份臊子面加馍";
                    break;
                case "甘肃省":
                    posdesc = "羌笛何须怨杨柳，春风不度玉门关";
                    break;
                case "青海省":
                    posdesc = "牛肉干和老酸奶都好好吃";
                    break;
                case "宁夏回族自治区":
                    posdesc = "大漠孤烟直，长河落日圆";
                    break;
                case "新疆维吾尔自治区":
                    posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风";
                    break;
                case "台湾省":
                    posdesc = "我在这头，大陆在那头";
                    break;
                case "香港特别行政区":
                    posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉";
                    break;
                case "澳门特别行政区":
                    posdesc = "性感荷官，在线发牌";
                    break;
                default:
                    posdesc = "带我去你的城市逛逛吧！";
                    break;
            }
            break;
        default:
            posdesc = "带我去你的国家逛逛吧";
            break;
    }

    //根据本地时间切换欢迎语
    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span class='welcome-time'>🌤️ 早上好，一日之计在于晨</span>";
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span class='welcome-time'>☀️ 中午好，记得午休喔~</span>";
    else if (date.getHours() >= 13 && date.getHours() < 17) timeChange = "<span class='welcome-time'>🕞 下午好，饮茶先啦！</span>";
    else if (date.getHours() >= 17 && date.getHours() < 19) timeChange = "<span class='welcome-time'>🚶‍♂️ 即将下班，记得按时吃饭~</span>";
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span class='welcome-time'>🌙 晚上好，夜生活嗨起来！</span>";
    else timeChange = "<span class='welcome-time'>夜深了，早点休息，少熬夜</span>";

    try {
        //自定义文本和需要放的位置
        document.getElementById("welcome-info").innerHTML =
            `<span>热烈欢迎来自~</span><br><span><span style="color: var(--icat-card-welcome);font-weight: bold;">${pos}</span> 的喵友</span><br><span class="welcome-message">${posdesc}</span><br>您当前位置距博主约 <b><span style="color: var(--icat-card-welcome);font-weight: bold;">${dist}</span></b> 公里！<br><span>您的IP地址为：${ip}</span><br>${timeChange}`;
    } catch (err) {
        // console.log("Pjax无法获取#welcome-info元素🙄🙄🙄")
    }
}
