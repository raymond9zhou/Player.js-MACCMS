# Player.js-MACCMS
修复MACCMS播放页遭劫持的Player.js文件及ALL.php文件
笔者博客文章地址：[点我](https://blog.ray8.cc/archives/maccms-redirect-to-spam-site-solution.html)
# 文件位置
player.js的位置为网站根目录/static/js/player.js<br/>
all.php的位置为/application/common/controller/all.php<br/>
all.php请手动搜索player_js比对后再替换，一般为第二个搜索结果的那一行。
# 笔者的碎碎念
2019年五月下旬，苹果CMS建站用户陆续出现播放页被劫持至棋牌网站的现象。本文将从笔者自身的分析方式出发，剖析CMS作者有意留下的JS漏洞位置和活加载外部JS的全部过程。多事之秋，以华为为代表的一批我国创新型企业不惧外部施压，用铁打的技术和超脱常人的眼界证明了中华儿女的不屈于人，从保险柜里拿出的自主研发备份芯片与操作系统展现了中华民族的铮铮铁骨。我作为一名流淌着中华血液的开发者为此感到深深的自豪，反观苹果CMS开发者，明知自己CMS的用户基础水平不足，却有意在源码中留下漏洞，不顾源码口碑和未来发展，强制劫持用户的访问，将罪恶之手伸向本国同胞。其心态之扭曲，实为汉语言文化圈开发者的最大耻辱。Shame On You！
