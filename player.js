var MacPlayer = {
    'GetUrl': function(s, n) {
        return this.Link.replace('{sid}', s).replace('{sid}', s).replace('{nid}', n).replace('{nid}', n)
    },
    'Go': function(s, n) {
        location.href = this.GetUrl(s, n)
    },
    'Show': function() {
        $('#buffer').attr('src', this.Prestrain);
        setTimeout(function() {
            MacPlayer.AdsEnd()
        }, this.Second * 1000);
        $("#playleft").get(0).innerHTML = this.Html + '';
        var a = document.createElement('script');
        a.type = 'text/javascript';
        a.async = true;
        a.charset = 'utf-8';
        a.src = '';
        var b = document.getElementsByTagName('script')[0];
        b.parentNode.insertBefore(a, b)
    },
    'AdsStart': function() {
        if ($("#buffer").attr('src') != this.Buffer) {
            $("#buffer").attr('src', this.Buffer)
        }
        $("#buffer").show()
    },
    'AdsEnd': function() {
        $('#buffer').hide()
    },
    'Install': function() {
        this.Status = false;
        $('#install').show()
    },
    'Play': function() {
        document.write('<style>.MacPlayer{background: #000000;font-size:14px;color:#F6F6F6;margin:0px;padding:0px;position:relative;overflow:hidden;width:100%;height:100%;min-heigh:300px;}.MacPlayer table{width:100%;height:100%;}.MacPlayer #playleft{position:inherit;!important;width:100%;height:100%;}</style><div class="MacPlayer">' + '<iframe id="buffer" src="" frameBorder="0" scrolling="no" width="100%" height="100%" style="position:absolute;z-index:99998;"></iframe><iframe id="install" src="" frameBorder="0" scrolling="no" width="100%" height="100%" style="position:absolute;z-index:99998;display:none;"></iframe>' + '<table border="0" cellpadding="0" cellspacing="0"><tr><td id="playleft" valign="top" style="">&nbsp;</td></table></div>');
        this.Height = $('.MacPlayer').get(0).offsetHeight;
        this.Width = $('.MacPlayer').get(0).offsetWidth;
        document.write('<scr' + 'ipt src="' + this.Path + this.PlayFrom + '.js"></scr' + 'ipt>')
    },
    'Down': function() {},
    'Init': function() {
        this.Status = true;
        this.Parse = '';
        if (player_data.encrypt == '1') {
            player_data.url = unescape(player_data.url);
            player_data.url_next = unescape(player_data.url_next)
        } else if (player_data.encrypt == '2') {
            player_data.url = unescape(base64decode(player_data.url));
            player_data.url_next = unescape(base64decode(player_data.url_next))
        }
        this.Prestrain = MacPlayerConfig.prestrain;
        this.Buffer = MacPlayerConfig.buffer;
        this.Second = MacPlayerConfig.second;
        this.Flag = player_data.flag;
        this.Trysee = player_data.trysee;
        this.Points = player_data.points;
        this.Link = decodeURIComponent(player_data.link);
        this.PlayFrom = player_data.from;
        this.PlayNote = player_data.note;
        this.PlayServer = player_data.server == 'no' ? '' : player_data.server;
        this.PlayUrl = player_data.url;
        this.PlayUrlNext = player_data.url_next;
        this.PlayLinkNext = player_data.link_next;
        this.PlayLinkPre = player_data.link_pre;
        if (MacPlayerConfig.server_list[this.PlayServer] != undefined) {
            this.PlayServer = MacPlayerConfig.server_list[this.PlayServer].des
        }
        if (MacPlayerConfig.player_list[this.PlayFrom] != undefined) {
            if (MacPlayerConfig.player_list[this.PlayFrom].ps == "1") {
                this.Parse = MacPlayerConfig.player_list[this.PlayFrom].parse == '' ? MacPlayerConfig.parse : MacPlayerConfig.player_list[this.PlayFrom].parse;
                this.PlayFrom = 'parse'
            }
        }
        this.Path = maccms.path + '/static/player/';
        if (this.Flag == "down") {
            MacPlayer.Down()
        } else {
            MacPlayer.Play()
        }
    }
};

MacPlayer.Init();