(function () {
    var p = P(N.ui),
        tG, uQ, cNQ = /\#\<.*?\>/g,
        aIh = [{
            t: 'a',
            r: 6,
            c: 10,
            w: 30,
            h: 30
        }, {
            t: 'b',
            r: 3,
            c: 5,
            w: 60,
            h: 60,
            cw: 61
        }],
        cNF = document.cloneElement('div', 'zprv'),
        cMT = document.cloneElement('img', 'zprv');
    var LH = function () {
            var ba = [];
            for(var i = 0, l = aIh.length, bM; i < l; i++) {
                bM = aIh[i];
                ba.push('.zibox .zitm.' + bM.t + '{width:' + (bM.cw || bM.w) + 'px;height:' + (bM.ch || bM.h) + 'px;line-height:' + (bM.ch || bM.h) + 'px;}');
                for(var j = 0; j < bM.r; j++) for(var k = 0; k < bM.c; ba.push('.zibox .' + bM.t + (j * bM.c + k) + '{background-position:-' + (k * bM.w) + 'px -' + (j * bM.h) + 'px;}'), k++);
            }
            return ba.join('');
        };
    p.fp('.zibox{position:relative;zoom:1;} .zibox .zitm{float:left;margin:-1px 0 0 -1px;overflow:hidden;text-indent:200px;border:1px solid #e5e5e1;cursor:pointer;background-repeat:no-repeat;zoom:1;} .zibox .zitm:hover,.zibox .js-zhvr-110{position:relative;border-color:#000;}' + LH() + ' .zibox .zprv{position:absolute;top:0;left:0;background:#fff no-repeat center center;border:1px solid #888;} .zibox div.zprv{width:60px;height:60px;}');
    p.Ez = C();
    tG = p.Ez.at(P(N.ut).dI, true);
    tG.bR = function () {
        this.aS();
        this.M = document.cloneElement('div', 'zitm');
        E.cR(this.M, 'js-zhvr-110');
        V.Q(this.M, 'click', this.AA.K(this));
        V.Q(this.M, 'mouseout', this.nG.K(this));
        V.Q(this.M, 'mouseover', this.rG.K(this));
    };
    tG.aU = function (H) {
        H = H || O;
        this.cLG = H.page || 0;
        this.bnm = !!H.pauto;
        this.cLN = H.purl || '';
        this.dk = H.xI || 0;
        this.akY = (aIh[H.type] || aIh[0]);
        this.Vs = this.bnm ? cMT : cNF;
        E.bl(this.M, this.bzK());
        this.Q('onclick', H.onclick || F);
    };
    tG.aN = function () {
        E.bL(this.M, this.bzK());
        p.Ez.aZ.aN.call(this);
    };
    tG.ao = function (kf) {
        this.M.title = kf || '';
        this.M.innerText = kf || '';
    };
    tG.bzK = function () {
        return this.akY.t + ' ' + this.akY.t + this.dk;
    };
    tG.bBB = function () {
        return this.cLN.replace(cNQ, this.cLG * this.akY.r * this.akY.c + this.dk);
    };
    tG.AA = function () {
        this.nG();
        this.R('onclick', this.bBB());
    };
    tG.rG = function () {
        var aK = this.Vs.style,
            fM = this.bBB(),
            en = (this.dk % this.akY.c) > Math.floor(this.akY.c / 2);
        aK.left = en ? '0' : 'auto';
        aK.right = en ? 'auto' : '0';
        this.M.parentNode.appendChild(this.Vs);
        this.bnm ? this.Vs.src = fM : aK.backgroundImage = 'url(' + fM + ')';
    };
    tG.nG = function () {
        if(this.bnm) this.Vs.src = N.rc.r + 'empty.png';
        E.cX(this.Vs);
    };
    p.Mn = C();
    uQ = p.Mn.at(p.Tg, true);
    p.Mn.K = function (bv, H) {
        V.Q(bv, 'click', function (L) {
            V.bU(L);
            this.bm(H);
        }.K(this));
    };
    uQ.bR = function (bv, H) {
        H = H || {};
        H.onshow = this.bBn.K(this);
        this.aS(bv, H);
        this.dU = {
            onclick: this.mN.K(this)
        };
    };
    uQ.bc = function (H) {
        H = H || O;
        this.Q('onselect', H.onselect || F);
        if(!!H.top || !!H.left) this.cz.sN(H.left, H.top);
        p.Mn.aZ.bc.call(this, H);
    };
    uQ.aag = function (Wa, by, ju) {
        ju ? E.bl(Wa, by) : E.bL(Wa, by);
    };
    uQ.mN = function (qS) {
        this.aj();
        this.R('onselect', qS);
    };
    uQ.bBn = F;
})();
(function () {
    var p = P(N.ui),
        abn, aP = 'ui-' + U.ar(),
        Yl = N.rc.r + 'portrait/face/',
        apS = 'js-zdsab-307',
        apv = 'js-page-',
        aiL = 60,
        bkR = ['微笑', '开怀笑', '哭泣', '失望', '困了', '好好笑', '啵', '电到了', '汗', '流口水了', '真困啊', '我吐', '眨眼', '？？？', '嘘', '砸死你', '不说', '坏', '色迷迷', '教训', '可爱', 'YEAH', '崩溃', '惊讶', '鄙视', '开心', '仰慕你', '晕', '挖鼻孔', '撒娇', '鼓掌', '害羞', '老大', '欠揍', '吐舌笑脸', '飞吻', '工作忙', '大哭', '偷偷笑', '送花给你', '来，亲一个', '拍桌子', '拜拜', '得意的笑', '生气', '怕怕', '尴尬', '难过', '叹气', '我是女生', '玫瑰', '好爱你', '心碎了', '亲亲', 'NO', 'YES', '握个手', '到点了', '音乐', '我是男生', '带血的刀', '炸弹', '有了', '好晚了', '吸血蝙蝠', '便便', '干一杯', '抽烟', '打电话', '家', '车子', '礼物', '金钱', '太阳', '下雨', '猪猪', '小猫', '小狗', '骨头', '喝水', '汉堡', '包子', '西瓜', '约会', 'CALL我'];
    p.fp('#<uispace>{width:310px;padding:5px;background:#e5e5e1;border:1px solid #888;} #<uispace> .zibox{height:190px;} #<uispace> .zibox.js-page-0 .zitm{background-image:url(' + Yl + 'face-0.png);} #<uispace> .zibox.js-page-1 .zitm{background-image:url(' + Yl + 'face-1.png);} #<uispace> .zpgr{line-height:20px;padding:3px;font-size:12px;text-align:right;} #<uispace> .zpgr .ztag{color:#000;cursor:pointer;} #<uispace> .zpgr .zsep{margin:0 3px;} #<uispace> .zpgr .js-zdsab-307{color:#777;cursor:default;}', aP);
    p.aXI = C();
    abn = p.aXI.at(p.Mn, true);
    abn.bR = function (bv, H) {
        this.aS(bv, H);
        this.dU.purl = Yl + 'preview/face#<index>.gif';
    };
    abn.ap = function () {
        return aP;
    };
    abn.bd = function () {
        return '<div class="zibox ztag clearfix"></div> <div class="zpgr"> <span class="ztag">上一页</span> <span class="zsep">|</span> <span class="ztag">下一页</span> </div>';
    };
    abn.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.MY = A[0];
        this.boo = A[1];
        this.bmG = A[2];
        V.Q(this.boo, 'click', this.aio.K(this, 0));
        V.Q(this.bmG, 'click', this.aio.K(this, 1));
    };
    abn.aio = function (gi) {
        if(this.dU.page == gi) return;
        this.aag(this.boo, apS, gi == 0);
        this.aag(this.bmG, apS, gi == 1);
        E.dA(this.MY, apv + (this.dU.page || 0), apv + gi);
        this.dU.page = gi;
        this.aJ = p.Ez.ah(this.aJ);
        this.dU.pF = gi * aiL;
        this.dU.pd = this.dU.pF + aiL;
        this.aJ = p.Ez.as(bkR, this.MY, this.dU);
    };
    abn.bBn = function () {
        this.aio(0);
    };
})();
(function () {
    var p = P(N.ui),
        im, aP = 'ui-' + U.ar();
    p.fp('#<uispace>{font-size:12px;text-align:left;} #<uispace> .zbrd{border-width:1px;border-style:solid;} #<uispace> .zbgp{background:url(' + N.rc.r + 'icon.png) no-repeat;} #<uispace> .zcnt{height:100px;overflow:hidden;} #<uispace> .zcnt iframe,#<uispace> .zcnt textarea{width:100%;height:100%;border:0;} #<uispace> .zcnt textarea{overflow:auto;} #<uispace> .zhnd{cursor:pointer;} #<uispace> .zbtn{position:relative;height:30px;line-height:30px;zoom:1;text-align:right;} #<uispace> .zbok{_margin-top:4px;} #<uispace> .zfce{position:absolute;left:0;top:5px;width:20px;height:20px;cursor:pointer;background-position:0 1px;} #<uispace> .zvcd{position:absolute;top:0;right:80px;} #<uispace> .zvcd *{vertical-align:middle;} #<uispace> .zvcd img{width:40px;height:24px;margin:0 3px;cursor:pointer;} #<uispace> .zvcd span{text-decoration:underline;cursor:pointer;} #<uispace> .zvcd input{width:35px;padding:2px 0;} #<uispace> .zmsg{line-height:20px;} #<uispace> .zmsg .zicn{width:25px;height:20px;background-position:5px -58px;} #<uispace> .zprt{left:0;top:30px;}', aP);
    p.gy = C();
    im = p.gy.at(p.JY, true);
    im.bR = function (bv, H) {
        this.bw = H.eopt || {};
        this.bw.onfocus = this.aGc.K(this);
        this.jP = {
            'class': 'zprt',
            hackhover: true,
            onselect: this.aob.K(this)
        };
        this.aS(bv, H);
    };
    im.bc = function (H) {
        H = H || {};
        this.auu();
        this.akh = H.vurl;
        if(!!this.akh) {
            H.eopt = H.eopt || {};
            H.eopt.onfocus = this.aGc.K(this);
        }
        this.gz.bc(H.eopt);
        this.bdm.style.display = !H.nocancel ? '' : 'none';
        this.alM.style.display = !H.noface && !B.IQ ? '' : 'none';
        this.jP.parent = H.body || this.alM.parentNode;
        if(this.jP.parent == document.documentElement) this.jP.parent = document.body;
        H.onerror = H.onerror || this.CY.K(this);
        p.gy.aZ.bc.call(this, H);
        this.dee = H.noCountHtmlLength || false;
    };
    im.aN = function (aLF) {
        if(!aLF) this.aAl(this.bdm);
        if(this.agk()) this.auu();
        p.gy.aZ.aN.apply(this, arguments);
    };
    im.aAl = function (bE) {
        p.gy.aZ.aAl(bE || this.bdm);
    };
    im.ew = function (ju) {
        this.chm.disabled = !!ju;
    };
    im.aIE = function (ae) {
        if(!ae) return;
        this.aaM = ae + (ae.indexOf('?') < 0 ? '?' : '&');
        this.LM[0].parentNode.style.display = 'block';
        this.CK();
    };
    im.auu = function () {
        this.aaM = N.rc.r + 'empty.png';
        this.LM[0].parentNode.style.display = 'none';
        this.CK();
    };
    im.CK = function () {
        this.LM[0].value = '';
        this.LM[1].src = this.aaM + (this.aaM.indexOf('?') < 0 ? '' : U.ar());
    };
    im.CY = function (cG) {
        this.ew(false);
        this.Yq.innerText = cG || '';
        this.Yq.parentNode.style.display = 'block';
        if(!!this.acs) return;
        this.acs = window.setTimeout(this.bcT.K(this), 3000);
    };
    im.bcT = function () {
        this.acs = window.clearTimeout(this.acs);
        this.Yq.parentNode.style.display = 'none';
    };
    im.ap = function () {
        return aP;
    };
    im.bd = function () {
        var aVO = N.tm.fc04 || '',
            azu = N.tm.fc01 || '',
            azm = N.tm.bdc0 || '',
            qA = (N.tm.zbtn || '') + ' ' + (N.tm.fc05 || '') + ' ' + (N.tm.bdc2 || '') + ' ' + (N.tm.bgc2 || '');
        return '<div class="zcnt ztag zbrd ' + azm + '"></div> <div class="zbtn"> <span class="zfce zbgp ztag space">&nbsp;</span> <input class="zbok zhnd ztag ' + qA + '" type="button" value="发表"/> <span class="zbcc zhnd ztag ' + azu + '">取消</span> <div class="zvcd ztag" style="display:none;"> <label>验证码：</label><input class="zbrd xtag ' + azm + '" type="text" maxlength="4"/><img class="xtag" title="点击刷新验证码"/><span class="xtag ' + azu + '">换一张</span> </div> </div> <div class="zmsg ' + aVO + '" style="display:none;"><span class="zicn zbgp iblock">&nbsp;</span><span class="ztag"></span></div>';
    };
    im.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.alM = A[1];
        this.chm = A[2];
        this.bdm = A[3];
        this.Yq = A[5];
        this.LM = E.aM(A[4], 'xtag');
        V.Q(A[1], 'click', this.cBF.K(this));
        V.Q(A[2], 'click', this.bJ.K(this));
        V.Q(A[3], 'click', this.eD.K(this));
        var gY = this.CK.K(this);
        V.Q(this.LM[1], 'click', gY);
        V.Q(this.LM.pop(), 'click', gY);
        this.gz = new(P(N.ut).DC)(A[0], this.bw);
    };
    im.hi = function (dfi) {
        var _content = !!this.gz && this.gz.hi() || '';
        if(!_content || !dfi) {
            return _content;
        } else {
            var A = document.cloneElement('div');
            A.innerHTML = _content;
            _content = A.innerText;
            return _content;
        }
    };
    im.rg = function () {
        if(this.agk() && this.LM[0].value.length != 4) {
            this.LM[0].focus();
            return '请输入正确的验证码！';
        }
        if(!!this.dee) {
            var _content = this.hi();
            if(!this.Vo && !_content) {
                this.gC();
                return '请输入内容！';
            }
            _content = this.hi(this.dee);
            if(!!this.po && _content.length > this.po) {
                this.gC();
                return '输入内容超过长度[' + this.po + '个字符]限制！';
            }
            return null;
        } else {
            return p.gy.aZ.rg.call(this);
        }
    };
    im.agk = function () {
        return this.LM[0].parentNode.style.display != 'none';
    };
    im.aGc = function () {
        if(!this.akh || this.agk()) return;
        this.aIE(this.akh);
    };
    im.cLk = function (bE) {
        return bE == this.jP.parent;
    };
    im.cBF = function (L) {
        V.bU(L);
        if(!p.aXI) return;
        if(this.jP.parent != this.alM.parentNode) {
            var om = this.cLk.K(this);
            this.jP.top = E.oQ(this.alM, om) + 30;
            this.jP.left = E.mI(this.alM, om);
        }
        p.aXI.bm(this.jP);
    };
    im.aob = function (qS) {
        this.gz.GM('InsertImage', qS);
    };
    im.bCq = function () {
        this.R('onok', {
            content: this.hi(),
            code: this.LM[0].value
        });
    };
})();
(function () {
    var p = P(N.ui),
        lJ, aP = 'ui-' + U.ar();
    p.fp('#<uispace>-bnd{position:relative;cursor:text;zoom:1;} #<uispace>-bnd:hover,#<uispace>-bnd.js-zhvr-999{background-color:#ffffae;} #<uispace>{visibility:visible;position:absolute;top:0;left:0;width:99%;} #<uispace> textarea{height:150px;} #<uispace> .ztxt{width:100%;border-width:1px;border-style:solid;} #<uispace> .zbtn{margin:5px 0;text-align:left;} #<uispace> .zbtnok{font-weight:bold;}', aP);
    p.lP = C();
    lJ = p.lP.at(p.JY, true);
    p.lP.K = function (bv, H) {
        bv = E.aq(bv);
        if(!bv) return;
        p.aYV();
        E.cR(bv, 'js-zhvr-999');
        E.bl(bv, aP + '-bnd');
        H = H || O;
        var Kx = 'js-zedt-999',
            ax = bv.id = bv.id || ('bnd-' + U.ar(4));
        H.onbeforedestroy = E.bL.K(E, ax, Kx);
        V.Q(bv, 'click', function () {
            E.bl(ax, Kx);
            var aHz = p.lP.as(H.parent || ax, H);
            try {
                aHz.gC();
            } catch(e) {}
        });
    };
    lJ.bR = function (bv, H) {
        var qA = N.tm.bdc0 || '';
        this.adf = document.cloneElement('input', 'ztxt ' + qA);
        this.tc = document.cloneElement('textarea', 'ztxt ' + qA);
        this.aS(bv, H);
    };
    lJ.bc = function (H) {
        H = H || O;
        this.jT.value = H.okText || '确定';
        this.jF = H.multiple ? this.tc : this.adf;
        var zc = H.maxlength || 0;
        if(zc > 0) this.jF.maxLength = zc;
        this.M.insertAdjacentElement('afterBegin', this.jF);
        p.lP.aZ.bc.call(this, H);
    };
    lJ.gC = function () {
        try {
            this.jF.focus();
        } catch(e) {}
        var _content = this.hi();
        if(!_content) return;
        var aW = _content.length;
        if(this.jF.setSelectionRange) {
            this.jF.setSelectionRange(aW, aW);
        } else if(this.jF.createTextRange) {
            var eo = this.jF.createTextRange();
            eo.collapse(true);
            eo.moveEnd('character', aW);
            eo.moveStart('character', aW);
            eo.select();
        }
    };
    lJ.dV = function (_content) {
        _content = _content || '';
        this.jF.value = this.azT ? U.gn(_content) : _content;
    };
    lJ.hi = function () {
        var _content = this.jF.value || '';
        return this.azT ? U.ad(_content) : _content;
    };
    lJ.aN = function () {
        p.lP.aZ.aN.call(this);
        E.cX(this.jF);
    };
    lJ.ap = function () {
        return aP;
    };
    lJ.bd = function () {
        var qA = (N.tm.zbtn || '') + ' ' + (N.tm.fc05 || '') + ' ' + (N.tm.bdc2 || '') + ' ' + (N.tm.bgc2 || '');
        return '<div class="zbtn"><input class="zbtn zbtnok ' + qA + '" type="button" value="确定"/><input class="zbtn zbtncc ' + qA + '" type="button" value="取消"/></div>';
    };
    lJ.bT = function () {
        V.Q(this.M, 'click', V.bU.K(V));
        var A = this.M.getElementsByTagName('input');
        this.jT = A[0];
        V.Q(A[0], 'click', this.bJ.K(this));
        V.Q(A[1], 'click', this.eD.K(this));
    };
})();
(function () {
    var p = P('nb.w'),
        dgX, dfC, aP = 'ui-' + U.ar();
    P(N.ui).fp('#<uispace>{display:none;margin-right:6px;} #<uispace> .miniBlogSetInfo{width:16px;height:16px;} #<uispace> .chkMiniBlogSetInfo{float:left;position:relative;width:16px;height:16px;cursor:pointer;} #<uispace> .chkMiniBlogSetInfo em{position:absolute;top:0;left:0;z-index:3;width:100%;height:100%;overflow:hidden;text-indent:-2000px;background:url("/newpage/images/setting/synminiblog/synicon8.png") -40px -21px no-repeat;} #<uispace> .chkMiniBlogSetInfo b{display:none;position:absolute;bottom:-1px;right:-2px;z-index:5;clear:both;width:8px;height:8px;overflow:hidden;cursor:pointer;background:url("/newpage/images/setting/synminiblog/synicon8.png") 0 -42px no-repeat;} #<uispace> .js-checked em{background-position:-40px 0;} #<uispace> .js-checked b{display:block;} ', aP);
    p.dgm = C();
    dgX = p.dgm.at(P(N.fw).eQ);
    dgX.bR = function (H) {
        H = H || O;
        this.aS(H);
    };
    dgX.dfP = function (aDQ) {
        this.aD('miniblogsynchtype', aDQ);
    };
    dgX.dgR = function () {
        return this.bu("miniblogsynchtype") || '';
    };
    dgX.cvO = function (fY) {
        this.aD('blogrank', fY);
    };
    dgX.aUv = function () {
        return this.bu("blogrank") || 0;
    };
    p.dfI = C();
    dfC = p.dfI.at(P(N.ui).eB, true);
    p.dfI.Wt = function (fY) {
        if(!p.dfI.FE) p.dfI.FE = new p.dgm();
        if(fY != undefined) {
            p.dfI.FE.cvO(fY);
        }
    };
    p.dfI.byQ = function (bP) {
        if(!p.dfI.FE) p.dfI.FE = new p.dgm();
        var aDQ = p.dfI.FE.dgR() || '';
        if(!aDQ || aDQ == 'unconnect') {
            return 'unconnect';
        }
        var fY = p.dfI.FE.aUv();
        if(fY > 0) return 'nopublic';
        var dgj = aDQ.split(';');
        for(var i = 0; i < dgj.length; i++) {
            if(dgj[i] == '1' && bP == 'blog') {
                return 'checked';
            } else if(dgj[i] == '2' && bP == 'photo') {
                return 'checked';
            } else if(dgj[i] == '3' && bP == 'mood') {
                return 'checked';
            } else if(dgj[i] == '4' && bP == 'comment') {
                return 'checked';
            } else {}
        }
        return '';
    };
    dfC.bR = function (bv, H) {
        this.aS(bv, H);
        this.G = new p.dgm();
        if(!document.lbody) document.lbody = E.aq('blog-163-com-layer') || document.body;
        this.dfD();
    };
    dfC.dfD = function () {
        J.bi(location.dwr, 'TQQSiteBean', 'getSynchType', this.dha.K(this));
    };
    dfC.dha = function (aDQ) {
        aDQ = aDQ || '';
        this.G.dfP(aDQ);
        var pP = p.dfI.byQ(this.bj);
        if(pP == 'unconnect') {
            this.M.style.display = 'none';
        } else {
            this.M.style.display = 'block';
            if(pP == 'checked') {
                E.bl(this.Hn, 'js-checked');
            } else {
                E.bL(this.Hn, 'js-checked');
            }
        }
    };
    dfC.gW = function (H) {};
    dfC.bc = function (H) {
        H = H || O;
        p.dfI.aZ.bc.call(this);
        this.bj = H.type || '';
        this.gW(H);
    };
    dfC.ap = function () {
        return aP;
    };
    dfC.bd = function () {
        var fY = p.hm.FE.aUv();
        if(fY <= 0) return '<div class="miniBlogSetInfo ztag" title="勾选后可同步至腾讯微博"><span class="chkMiniBlogSetInfo ztag"><em>腾讯微博</em><b></b></span></div>';
        else return '<div class="miniBlogSetInfo ztag" title="博客权限为“允许任何人访问”，才可同步至微博"><span class="chkMiniBlogSetInfo ztag"><em>腾讯微博</em><b></b></span></div>';
    };
    dfC.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.Rs = A[0];
        this.Hn = A[1];
        V.Q(this.Hn, 'click', this.aWL.K(this));
    };
    dfC.aWL = function () {
        if(E.aV(this.Hn, 'js-checked')) {
            E.bL(this.Hn, 'js-checked');
        } else {
            E.bl(this.Hn, 'js-checked');
        }
        var fY = p.hm.FE.aUv();
        if(fY > 0) {
            E.bL(this.Hn, 'js-checked');
            return false;
        }
        if(!!this.aiD) {
            return;
        }
        this.aiD = true;
        var pP = '';
        if(E.aV(this.Hn, 'js-checked')) {
            if(this.bj == 'blog') {
                pP = '1';
            } else if(this.bj == 'photo') {
                pP = '2';
            } else if(this.bj == 'mood') {
                pP = '3';
            } else if(this.bj == 'comment') {
                pP = '4';
            }
        }
        var aDQ = this.G.dgR();
        var dgj;
        if(!!aDQ && aDQ != 'none') {
            dgj = aDQ.split(';');
        } else {
            dgj = [];
        }
        for(var i = 0; i < dgj.length; i++) {
            if(dgj[i] == '1' && this.bj == 'blog') {
                dgj.splice(i, 1);
            } else if(dgj[i] == '2' && this.bj == 'photo') {
                dgj.splice(i, 1);
            } else if(dgj[i] == '3' && this.bj == 'mood') {
                dgj.splice(i, 1);
            } else if(dgj[i] == '4' && this.bj == 'comment') {
                dgj.splice(i, 1);
            } else if(!dgj[i]) {
                dgj.splice(i, 1);
            }
        }
        if(!!pP) {
            dgj.push(pP);
        }
        if(dgj.length > 0) {
            aDQ = dgj.join(';');
        } else {
            aDQ = 'none';
        }
        this.G.dfP(aDQ);
        J.bi(location.dwr, 'TQQSiteBean', 'updateSynchType', aDQ, F);
    };
})();
(function () {
    var p = P('nb.w'),
        dgS, dgf, aP = 'ui-' + U.ar();
    P(N.ui).fp('#<uispace>{display:none;margin-right:6px;} #<uispace> .miniBlogSetInfo{width:16px;height:16px;} #<uispace> .chkMiniBlogSetInfo{float:left;position:relative;width:16px;height:16px;cursor:pointer;} #<uispace> .chkMiniBlogSetInfo em{position:absolute;top:0;left:0;z-index:3;width:100%;height:100%;overflow:hidden;text-indent:-2000px;background:url("/newpage/images/setting/synminiblog/synicon8.png") -20px -20px no-repeat;} #<uispace> .chkMiniBlogSetInfo b{display:none;position:absolute;bottom:-1px;right:-2px;z-index:5;clear:both;width:8px;height:8px;overflow:hidden;cursor:pointer;background:url("/newpage/images/setting/synminiblog/synicon8.png") 0 -42px no-repeat;} #<uispace> .js-checked em{background-position:-20px 0;} #<uispace> .js-checked b{display:block;} ', aP);
    p.dfT = C();
    dgS = p.dfT.at(P(N.fw).eQ);
    dgS.bR = function (H) {
        H = H || O;
        this.aS(H);
    };
    dgS.dfP = function (aDQ) {
        this.aD('miniblogsynchtype', aDQ);
    };
    dgS.dgR = function () {
        return this.bu("miniblogsynchtype") || '';
    };
    dgS.cvO = function (fY) {
        this.aD('blogrank', fY);
    };
    dgS.aUv = function () {
        return this.bu("blogrank") || 0;
    };
    p.dfQ = C();
    dgf = p.dfQ.at(P(N.ui).eB, true);
    p.dfQ.Wt = function (fY) {
        if(!p.dfQ.FE) p.dfQ.FE = new p.dfT();
        if(fY != undefined) {
            p.dfQ.FE.cvO(fY);
        }
    };
    p.dfQ.byQ = function (bP) {
        if(!p.dfQ.FE) p.dfQ.FE = new p.dfT();
        var aDQ = p.dfQ.FE.dgR() || '';
        if(!aDQ || aDQ == 'unconnect') {
            return 'unconnect';
        }
        var fY = p.dfQ.FE.aUv();
        if(fY > 0) return 'nopublic';
        var dgj = aDQ.split(';');
        for(var i = 0; i < dgj.length; i++) {
            if(dgj[i] == '1' && bP == 'blog') {
                return 'checked';
            } else if(dgj[i] == '2' && bP == 'photo') {
                return 'checked';
            } else if(dgj[i] == '3' && bP == 'mood') {
                return 'checked';
            } else if(dgj[i] == '4' && bP == 'comment') {
                return 'checked';
            } else {}
        }
        return '';
    };
    dgf.bR = function (bv, H) {
        this.aS(bv, H);
        this.G = new p.dfT();
        if(!document.lbody) document.lbody = E.aq('blog-163-com-layer') || document.body;
        this.dfD();
    };
    dgf.dfD = function () {
        J.bi(location.dwr, 'SinaSiteBean', 'getSynchType', this.dha.K(this));
    };
    dgf.dha = function (aDQ) {
        aDQ = aDQ || '';
        this.G.dfP(aDQ);
        var pP = p.dfQ.byQ(this.bj);
        if(pP == 'unconnect') {
            this.M.style.display = 'none';
        } else {
            this.M.style.display = 'block';
            if(pP == 'checked') {
                E.bl(this.Hn, 'js-checked');
            } else {
                E.bL(this.Hn, 'js-checked');
            }
        }
    };
    dgf.gW = function (H) {};
    dgf.bc = function (H) {
        H = H || O;
        p.dfQ.aZ.bc.call(this);
        this.bj = H.type || '';
        this.gW(H);
    };
    dgf.ap = function () {
        return aP;
    };
    dgf.bd = function () {
        var fY = p.hm.FE.aUv();
        if(fY <= 0) return '<div class="miniBlogSetInfo ztag" title="勾选后可同步至新浪微博"><span class="chkMiniBlogSetInfo ztag"><em>新浪微博</em><b></b></span></div>';
        else return '<div class="miniBlogSetInfo ztag" title="博客权限为“允许任何人访问”，才可同步至微博"><span class="chkMiniBlogSetInfo ztag"><em>新浪微博</em><b></b></span></div>';
    };
    dgf.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.Rs = A[0];
        this.Hn = A[1];
        V.Q(this.Hn, 'click', this.aWL.K(this));
    };
    dgf.aWL = function () {
        if(E.aV(this.Hn, 'js-checked')) {
            E.bL(this.Hn, 'js-checked');
        } else {
            E.bl(this.Hn, 'js-checked');
        }
        var fY = p.hm.FE.aUv();
        if(fY > 0) {
            E.bL(this.Hn, 'js-checked');
            return false;
        }
        if(!!this.aiD) {
            return;
        }
        this.aiD = true;
        var pP = '';
        if(E.aV(this.Hn, 'js-checked')) {
            if(this.bj == 'blog') {
                pP = '1';
            } else if(this.bj == 'photo') {
                pP = '2';
            } else if(this.bj == 'mood') {
                pP = '3';
            } else if(this.bj == 'comment') {
                pP = '4';
            }
        }
        var aDQ = this.G.dgR();
        var dgj;
        if(!!aDQ && aDQ != 'none') {
            dgj = aDQ.split(';');
        } else {
            dgj = [];
        }
        for(var i = 0; i < dgj.length; i++) {
            if(dgj[i] == '1' && this.bj == 'blog') {
                dgj.splice(i, 1);
            } else if(dgj[i] == '2' && this.bj == 'photo') {
                dgj.splice(i, 1);
            } else if(dgj[i] == '3' && this.bj == 'mood') {
                dgj.splice(i, 1);
            } else if(dgj[i] == '4' && this.bj == 'comment') {
                dgj.splice(i, 1);
            } else if(!dgj[i]) {
                dgj.splice(i, 1);
            }
        }
        if(!!pP) {
            dgj.push(pP);
        }
        if(dgj.length > 0) {
            aDQ = dgj.join(';');
        } else {
            aDQ = 'none';
        }
        this.G.dfP(aDQ);
        J.bi(location.dwr, 'SinaSiteBean', 'updateSynchType', aDQ, F);
    };
})();
(function () {
    var p = P(N.ui),
        Ev, oa, aP = 'ui-' + U.ar();
    var Df = 180;
    p.fp('#<uispace>{position:relative;float:left;text-align:left;cursor:pointer;} #<uispace>,#<uispace> .iblock{height:18px;line-height:18px;} #<uispace> .ztxt{margin-left:5px;} #<uispace> .zdwn{width:18px;text-align:center;} #<uispace> .zlst{visibility:hidden;position:absolute;top:18px;left:-1px;width:100%;max-height:' + Df + 'px;overflow:auto;overflow-x:hidden;} #<uispace> .zlst .zitm{padding:0 5px;height:18px;line-height:18px;cursor:pointer;} #<uispace>{font-size:12px;} #<uispace>,#<uispace> .zlst{border:1px solid #7f9db9;} #<uispace> .zlst .zitm{background-color:#fff;} #<uispace> .zlst .zitm:hover,#<uispace> .slst .item.js-zhvr-910{color:#fff;background-color:#002080;}', aP);
    p.RM = C();
    Ev = p.RM.at(P(N.ut).dI, true);
    Ev.bR = function () {
        this.aS();
        this.M = document.cloneElement('div', 'zitm thide');
        E.cR(this.M, 'js-zhvr-910');
        V.Q(this.M, 'click', this.AA.K(this));
    };
    Ev.aU = function (H) {
        H = H || O;
        this.Q('onclick', H.onclick || F);
    };
    Ev.ao = function (T) {
        this.I = T || O;
        if(!!this.I.hideThisOption) {
            this.M.style.display = 'none';
        } else {
            this.M.style.display = 'block';
        }
        var ai = this.I.t || this.I.v || ' ';
        this.M.title = ai;
        this.M.innerText = ai;
    };
    Ev.cF = function () {
        return this.I;
    };
    Ev.AA = function (L) {
        this.R('onclick', this.I);
    };
    p.Ei = C();
    oa = p.Ei.at(p.eB, true);
    oa.bR = function (bv, H) {
        this.dG = {
            onclick: this.Cs.K(this)
        };
        this.aS(bv, H);
    };
    oa.bc = function (H) {
        H = H || O;
        p.Ei.aZ.bc.call(this, H);
        this.Q('onchange', H.onchange || F);
        this.acY(H.items);
        this.gO(H.index);
        this.cQU = H.hideListIfListShowed || false;
    };
    oa.aN = function () {
        p.Ei.aZ.aN.call(this);
        this.aJ = p.RM.ah(this.aJ);
    };
    oa.acY = function (cJ) {
        p.RM.ah(this.aJ);
        this.aJ = p.RM.as(cJ, this.iX, this.dG);
    };
    oa.gO = function (aY) {
        if(!this.aJ) return;
        var bM = this.aJ[aY || 0];
        if(!bM) return;
        this.Cs(bM.cF());
    };
    oa.ap = function () {
        return aP;
    };
    oa.bd = function () {
        return '<div class="ztxt iblock">&nbsp;</div><div class="zdwn iblock">&#8711;</div><div class="zlst"></div>';
    };
    oa.bT = function () {
        var A = E.aM(this.M);
        this.sT = A[0];
        this.iX = A[2];
        E.abt(this.iX, Df);
        var gY = this.anT.K(this);
        V.Q(A[0], 'click', gY);
        V.Q(A[1], 'click', gY);
        V.Q(document, 'click', this.QK.K(this));
    };
    oa.anT = function (L) {
        V.bU(L);
        if(!E.aV(this.M, 'js-showlist')) {
            if(B.fa) this.iX.style.width = (this.M.clientWidth - 1) + 'px';
            this.iX.style.visibility = 'visible';
            E.bl(this.M, 'js-showlist');
        } else {
            if(this.cQU) this.QK();
        }
    };
    oa.QK = function () {
        this.iX.style.visibility = 'hidden';
        E.bL(this.M, 'js-showlist');
    };
    oa.Cs = function (T) {
        if(!T) return;
        this.sT.innerText = T.t || T.v || ' ';
        this.R('onchange', T.v || T.t || '');
        this.QK();
    };
})();
(function () {
    var p = P('nb.w'),
        eh, sB, aP = 'ui-' + U.ar();
    P(N.ui).fp('#<uispace>{margin-right:6px;} #<uispace> .miniBlogSetInfo{width:16px;height:16px;} #<uispace> .chkMiniBlogSetInfo{float:left;position:relative;width:16px;height:16px;cursor:pointer;} #<uispace> .chkMiniBlogSetInfo em{position:absolute;top:0;left:0;z-index:3;width:100%;height:100%;overflow:hidden;text-indent:-2000px;background:url("/newpage/images/setting/synminiblog/synicon8.png") 0 -20px no-repeat;} #<uispace> .chkMiniBlogSetInfo b{display:none;position:absolute;bottom:-1px;right:-2px;z-index:5;clear:both;width:8px;height:8px;overflow:hidden;cursor:pointer;background:url("/newpage/images/setting/synminiblog/synicon8.png") 0 -42px no-repeat;} #<uispace> .js-checked em{background-position:0 0;} #<uispace> .js-checked b{display:block;} ', aP);
    p.aKy = C();
    eh = p.aKy.at(P(N.fw).eQ);
    eh.bR = function (H) {
        H = H || O;
        this.aS(H);
    };
    eh.amh = function (jc) {
        this.aD('miniblogconnect', jc);
    };
    eh.aSr = function () {
        return this.bu("miniblogconnect") || '';
    };
    eh.aID = function (kY) {
        this.aD('miniblogsyncset', kY);
    };
    eh.aVH = function () {
        return this.bu("miniblogsyncset") || '000';
    };
    eh.cvO = function (fY) {
        this.aD('blogrank', fY);
    };
    eh.aUv = function () {
        return this.bu("blogrank") || 0;
    };
    p.hm = C();
    sB = p.hm.at(P(N.ui).eB, true);
    p.hm.Wt = function (jc, kY, fY) {
        if(!p.hm.FE) p.hm.FE = new p.aKy();
        if(jc != undefined) {
            p.hm.FE.amh(jc);
        }
        if(kY != undefined) {
            p.hm.FE.aID(kY);
        }
        if(fY != undefined) {
            p.hm.FE.cvO(fY);
        }
    };
    p.hm.byQ = function (bP) {
        if(!p.hm.FE) p.hm.FE = new p.aKy();
        var jc = p.hm.FE.aSr(),
            kY = p.hm.FE.aVH(),
            fY = p.hm.FE.aUv();
        if(p.hm.deC()) return false;
        if(fY > 0) return false;
        if(bP == 'blog') {
            return kY.substring(0, 1) == '1';
        } else if(bP == 'mood') {
            return kY.substring(1, 2) == '1';
        } else if(bP == 'comment') {
            return kY.substring(2) == '1';
        }
        return false;
    };
    p.hm.cYF = function (aw) {
        p.hm.FE.amh(aw);
    };
    p.hm.deC = function () {
        var vh = new Date(Date.parse(Date.servTime));
        return(vh.getTime() >= 1331317800000 && vh.getTime() <= 1331328600000);
    };
    p.hm.dei = function () {
        return '今日2点-5点因微博维护，该功能暂不能使用； 给大家带来的不便，我们深表歉意。';
    };
    sB.bR = function (bv, H) {
        this.aS(bv, H);
        this.ea();
        this.G = new p.aKy();
        if(!document.lbody) document.lbody = E.aq('blog-163-com-layer') || document.body;
    };
    sB.gW = function (H) {
        var bxt = p.hm.byQ(this.bj);
        if(false && B.fa) {
            V.ik(this.Hn, 'click');
            this.Rs.innerHTML = '';
            var pP;
            if(bxt) {
                pP = 'checked="true"';
            } else {
                if(p.hm.deC()) pP = 'disabled';
                else pP = '';
            }
            this.Rs.innerHTML = '<span title="点击同步到网易微博" class="chkMiniBlogSetInfo ztag"><em>网易微博</em><b></b></span>';
            var A = E.bz(this.Rs, 'ztag');
            this.Hn = A[0];
            V.Q(this.Hn, 'click', this.aWL.K(this));
        } else {
            if(bxt) {
                E.bl(this.Hn, 'js-checked');
            } else {
                E.bL(this.Hn, 'js-checked');
            }
        }
    };
    sB.bc = function (H) {
        H = H || O;
        p.hm.aZ.bc.call(this);
        this.bj = H.type || '';
        this.gW(H);
    };
    sB.ap = function () {
        return aP;
    };
    sB.ea = function () {
        var cy = P('nb.w.MiniBlogSetInfo.g');
        cy.unCheckSynSelect = this.bUT.K(this);
    };
    sB.bUT = function () {
        E.bL(this.Hn, 'js-checked');
        this.aWL();
    };
    sB.bd = function () {
        if(p.hm.deC()) return '<div class="miniBlogSetInfo ztag" title="' + p.hm.dei() + '"><span class="chkMiniBlogSetInfo ztag"><em>网易微博</em><b></b></span></div>';
        var fY = p.hm.FE.aUv();
        if(fY <= 0) return '<div class="miniBlogSetInfo ztag" title="勾选后可同步至网易微博"><span class="chkMiniBlogSetInfo ztag"><em>网易微博</em><b></b></span></div>';
        else return '<div class="miniBlogSetInfo ztag" title="博客权限为“允许任何人访问”，才可同步至微博"><span class="chkMiniBlogSetInfo ztag"><em>网易微博</em><b></b></span></div>';
    };
    sB.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.Rs = A[0];
        this.Hn = A[1];
        V.Q(this.Hn, 'click', this.aWL.K(this));
    };
    sB.aWL = function () {
        if(E.aV(this.Hn, 'js-checked')) {
            E.bL(this.Hn, 'js-checked');
        } else {
            E.bl(this.Hn, 'js-checked');
        }
        var fY = p.hm.FE.aUv();
        if(fY > 0) {
            E.bL(this.Hn, 'js-checked');
            return false;
        }
        if(!!this.aiD) {
            return;
        }
        this.aiD = true;
        var jc = this.G.aSr(),
            kY = this.G.aVH();
        if(window.hasActivate && (jc == '-1' || jc == '')) {
            jc = '0';
            this.G.amh(jc);
        }
        if(E.aV(this.Hn, 'js-checked')) {
            this.cwL(jc, kY, this.bj);
        } else {
            this.cwN(jc, kY, this.bj);
        }
    };
    sB.cwL = function (jc, kY, bP) {
        if(jc == '') {
            J.bi(location.dwr, 'MiniBlogConnectBean', 'getMiniBlogConnectStatus', false, this.cgv.K(this, jc, kY, bP));
        } else if(jc == '-1' && bP != 'comment') {
            var jW = 'http://t.163.com/service/isTinyBlogUser?email=' + U.ad(nb.c.bC.email);
            var dL = {
                type: 'text',
                method: 'GET',
                onload: this.aPp.K(this, jc, kY, bP)
            };
            J.tj(jW, dL);
        } else {
            this.aLu(jc, kY, bP);
        }
    };
    sB.aLu = function (jc, kY, bP) {
        var JV = kY.substring(0, 1);
        var Jl = kY.substring(1, 2);
        var UZ = kY.substring(2);
        var aek = '-1';
        if(bP == 'blog') {
            JV = '1';
        } else if(bP == 'mood') {
            Jl = '1';
        } else if(bP == 'photo') {
            aek = '1';
        } else if(bP == 'comment') {
            UZ = '1';
        }
        if(bP == 'comment') {
            J.bi(location.dwr, 'MiniBlogConnectBean', 'setMiniBlogComment', false, '1', this.bIO.K(this, JV + Jl + UZ));
        } else {
            if(jc == '0' || jc == '1') {
                J.bi(location.dwr, 'MiniBlogConnectBean', 'updateBlogConnectInfoSet', '1', JV, Jl, aek, this.axC.K(this, '1', JV + Jl + UZ, bP));
            } else if(jc == '-1') {
                this.aiD = false;
                if((new Date()).getTime() > 1293761700000) {
                    nb.l.UE.bm();
                }
            }
        }
    };
    sB.axC = function (jc, kY, bP, aw) {
        this.aiD = false;
        if(aw) {
            this.G.amh(jc);
            this.G.aID(kY);
        }
    };
    sB.bIO = function (kY, aw) {
        this.aiD = false;
        this.G.aID(kY);
        this.bZz();
    };
    sB.bZz = function () {
        var A = E.bz(document.body, 'chkMiniBlogSetInfo') || [];
        var bWK = (this.G.aVH().substring(2) == 1);
        for(var i = 0; i < A.length; i++) {
            if(!!A[i] && A[i].type == 'checkbox') {
                if(bWK) {
                    A[i].checked = true;
                } else {
                    A[i].checked = false;
                }
            }
        }
    };
    sB.cgv = function (jc, kY, bP, aw) {
        jc = aw;
        this.G.amh(jc);
        if(jc != '') {
            this.aLu(jc, kY, bP);
        } else {
            this.aiD = false;
        }
    };
    sB.aPp = function (jc, kY, bP, aw) {
        if(!!aw && aw.indexOf('ResultCode=1') >= 0) {
            J.bi(location.dwr, 'MiniBlogConnectBean', 'refreshBlogConnectInfo', '1', '1', '1', '1', this.axC.K(this, '1', '110', bP));
        } else {
            this.aLu(jc, kY, bP);
        }
    };
    sB.cwN = function (jc, kY, bP) {
        var JV = kY.substring(0, 1);
        var Jl = kY.substring(1, 2);
        var UZ = kY.substring(2);
        var aek = '-1';
        if(bP == 'blog') {
            JV = '0';
        } else if(bP == 'mood') {
            Jl = '0';
        } else if(bP == 'photo') {
            aek = '0';
        } else if(bP == 'comment') {
            UZ = '0';
        }
        if(bP == 'comment') {
            J.bi(location.dwr, 'MiniBlogConnectBean', 'setMiniBlogComment', false, '0', this.bIO.K(this, JV + Jl + UZ));
        } else {
            if(jc == '1') {
                J.bi(location.dwr, 'MiniBlogConnectBean', 'updateBlogConnectInfoSet', '1', JV, Jl, aek, this.bAE.K(this, '1', JV + Jl + UZ, bP));
            } else {
                J.bi(location.dwr, 'MiniBlogConnectBean', 'updateBlogConnectInfoSet', '-1', JV, Jl, aek, this.bAE.K(this, '1', JV + Jl + UZ, bP));
            }
        }
    };
    sB.bAE = function (jc, kY, bP, aw) {
        this.aiD = false;
        if(aw) {
            this.G.aID(kY);
        }
    };
    sB.csP = function () {
        return E.aV(this.Hn, 'js-checked');
    };
    p.hm.akS = function (bP) {
        var pP = p.hm.byQ(bP);
        if(bP == 'comment' && pP) {}
        return pP;
    };
    sB.aXQ = function (dfh) {
        var jc = this.G.aSr();
        if(!window.hasActivate && jc == '-1' && (E.aV(this.Hn, 'js-checked') || !!dfh)) {
            nb.l.UE.bm();
            return '-1';
        }
        return(E.aV(this.Hn, 'js-checked')) ? '0' : '1';
    };
    p.hm.byv = function (bFq, bLm, axJ) {
        if(bLm == '0' || bLm == '1' || nb.c.hP) {
            var jW = 'http://t.163.com/service/getScreenName?email=' + U.ad(nb.c.bC.email);
            var dL = {
                type: 'text',
                method: 'GET',
                onload: bFq,
                sync: axJ
            };
            J.tj(jW, dL);
        } else {
            bFq('');
        }
    };
    p.hm.bvP = function (T) {
        if(!T) {
            return '';
        }
        return jt('#' + T, 'ResultCode');
    };
    var jt = function (bD, aR) {
            if(!U.fH(bD, 'String')) return bD;
            bD = U.aQ(bD);
            bD = bD.substr(bD.indexOf('#') + 1);
            if(!bD) return '';
            bD = bD.split('&');
            for(var i = 0, l = bD.length, d; i < l; i++) {
                d = bD[i].indexOf('=');
                if(bD[i].substring(0, d) === aR) {
                    return bD[i].substr(d + 1) || '';
                }
            }
            return '';
        };
    window.hasActivate = false;
    window.closeTiny = function () {
        if(!window.hasActivate && !!P('nb.w.MiniBlogSetInfo.g').unCheckSynSelect) {
            P('nb.w.MiniBlogSetInfo.g').unCheckSynSelect();
        }
        nb.l.UE.aj();
    };
    window.tinyConnect = function () {
        window.hasActivate = true;
        J.bi(location.dwr, 'MiniBlogConnectBean', 'refreshBlogConnectInfo', '1', '1', '1', '1', function () {});
    };
})();
(function () {
    var p = P('nb.l'),
        aUs;
    p.abQ = C();
    aUs = p.abQ.at(p.bO, true);
    aUs.bR = function (bv, H) {
        H = H || {};
        H.title = H.title || '信息提示';
        H.nocover = true;
        H.nocenter = true;
        this.ddc = H.postAddInfo;
        this.ddo = H.postAddInfo.postAdContent;
        this.aS(bv, H);
        this.ddH = H.onclose || F;
        this.dbM = 50;
        this.ddE = 2;
        this.dcg = this.M.parentNode.parentNode.parentNode;
        this.dcE = -300;
        this.dcg.style.bottom = this.dcE + 'px';
        window.setTimeout(this.dbL.K(this), 1500);
        window.setTimeout(this.ddS.K(this), 30000);
    };
    aUs.dbL = function () {
        if(this.dbM > 4) {
            this.dbM *= 0.9;
        }
        if(this.dcE + this.dbM >= this.ddE) {
            this.dcg.style.bottom = this.ddE + 'px';
        } else {
            this.dcE += this.dbM;
            this.dcg.style.bottom = this.dcE + 'px';
            window.setTimeout(this.dbL.K(this), 50);
        }
    };
    aUs.ddS = function () {
        if(this.dbM > 4) {
            this.dbM /= 0.9;
        }
        if(this.dcE <= -300) {
            this.dcg.style.bottom = '-300px';
        } else {
            this.dcE -= this.dbM;
            this.dcg.style.bottom = this.dcE + 'px';
            window.setTimeout(this.ddS.K(this), 50);
        }
    };
    aUs.bc = function (H) {
        this.M.style.top = 100 + 'px';
        this.M.style.left = 200 + 'px';
        H = H || O;
        if(!!H.title) this.cz.iV(H.title);
        this.Q('onok', H.onok || F);
        E.bl(this.M, H.style);
        new Image().src = 'http://blog.163.com/newpage/images/analyse.png?act=bkAD01_20111031_01&postadopen&t=' + new Date().getTime();
    };
    aUs.ap = function () {
        return 'postadlayer';
    };
    aUs.bd = function () {
        var dz = '<div class="m-postadlayer" style="">' + '<embed style="width:290px;height:260px;" wmode="transparent" src="${postAdInfo.postAdSetting.flashUrl}?${postAdInfo.postAdSetting.modifyTime}" wmode="window"' + ' type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" allowfullscreen="true">' + '</embed>' + '<a class="adlink" href="${postAdInfo.postAdSetting.linkUrl}" target="_blank"></a>' + '<div class="ztag close"></div>' + '<div class="cnt" style="left:19px;width:260px;">' + '<div class="sep" style="width:255px;">' + '<a style="margin-right:4px;margin-top:2px;display:block;width:60px;overflow:hidden;" class="pleft" href="http://www.lofter.com/reg?act=qbtanchuang_20120217_01&from=tanchuang_20120217" target="_blank"><img src="http://b2.bst.126.net/newpage/images/lofterinadwindow.png"/></a>' + '<ul class="pleft" style="margin-top:-3px;overflow:hidden;width:190px;text-overflow: ellipsis;">' + '<li><a style="letter-spacing:-0.5px;" href="http://www.lofter.com/reg?act=qbtanchuang_20120217_01&from=tanchuang_20120217" target="_blank"><b>网易LOFTER, 精致的轻博客社区</b></a></li>' + '<li><a href="${posts.special[1].url}" target="_blank">${posts.special[1].title.replace("：","&nbsp;&nbsp;")}</a></li>' + '<li><a href="${posts.special[2].url}" target="_blank">${posts.special[2].title.replace("：","&nbsp;&nbsp;")}</a></li>' + '</ul>' + '</div>' + '<ul class="clearfix down">' + '<li><a href="${posts.blog[1].url}" target="_blank">${posts.blog[1].title}</a></li>' + '<li><a href="${posts.blog[2].url}" target="_blank">${posts.blog[2].title}</a></li>' + '<li><a href="${posts.blog[3].url}" target="_blank">${posts.blog[3].title}</a></li>' + '<li><a href="${posts.blog[4].url}" target="_blank">${posts.blog[4].title}</a></li>' + '<li><a href="${posts.blog[5].url}" target="_blank">${posts.blog[5].title}</a></li>' + '</ul>' + '</div>' + '</div>';
        var dbW = E.of(dz);
        return E.aI(dbW, {
            postAdInfo: this.ddc,
            posts: this.ddo
        });
    };
    aUs.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.gg = A[0];
        V.Q(this.gg, 'click', this.bJ.K(this));
    };
    aUs.bJ = function () {
        this.axY();
    };
    aUs.axY = function () {
        this.ddH();
        var gA = new Image();
        gA.onload = this.TO.K(this);
        gA.onerror = this.TO.K(this);
        gA.src = 'http://blog.163.com/newpage/images/analyse.png?postadclose&t=' + new Date().getTime();
    };
    aUs.TO = function () {
        this.aj();
        this.R('onok');
    };
})();
(function () {
    var p = P('nb.w'),
        im;
    p.gy = C();
    im = p.gy.at(P(N.ui).eB, true);
    im.bR = function (bv, H) {
        this.bcg = 'grp-' + U.ar();
        this.aS(bv, H);
    };
    im.gW = function (H) {
        this.bki = H.hasMiniBlog && nb.c.dn;
        if(this.bki) {
            E.bL(this.aaC, 'phide');
            this.axl = H.miniBlogType || 'comment';
            if(!this.deK) {
                this.deK = nb.w.dfQ.as(this.dgI, {
                    'type': this.axl
                });
            } else {
                this.deK.bc({
                    'type': this.axl
                });
            }
            if(!this.Rs) {
                this.Rs = nb.w.hm.as(this.dey, {
                    'type': this.axl
                });
            } else {
                this.Rs.bc({
                    'type': this.axl
                });
            }
            if(!this.dfj) {
                this.dfj = nb.w.dfI.as(this.deL, {
                    'type': this.axl
                });
            } else {
                this.dfj.bc({
                    'type': this.axl
                });
            }
        } else {
            E.bl(this.aaC, 'phide');
        }
    };
    im.aU = function (bv, H) {
        p.gy.aZ.aU.call(this, bv, H);
    };
    im.bc = function (H) {
        H = H || O;
        this.Q('onok', H.onok);
        this.Q('oncc', H.oncc);
        H.lhint ? this.hn(H.lhint) : this.vH();
        this.YV = H.fixed;
        var uT = {
            fixed: true,
            cfixed: true,
            group: this.bcg,
            onok: this.bJ.K(this),
            oncc: this.eD.K(this),
            eopt: {}
        };
        if(!!H.vurl) uT.vurl = H.vurl;
        if(H.body) {
            uT.body = H.body;
        }
        if(H.content) {
            uT.content = H.content;
        }
        if(H.nofocus) uT.eopt.nofocus = H.nofocus;
        if(H.maxlength) {
            this.uN = H.maxlength;
            uT.maxlength = H.maxlength;
            uT.noCountHtmlLength = true;
        }
        this.bI = P(N.ui).gy.as(this.abA, uT);
        p.gy.aZ.bc.call(this, H);
        this.gW(H);
    };
    im.ap = function () {
        return 'nbw-sdt';
    };
    im.bd = function () {
        return '<div class="hnt thide ztag">&nbsp;</div> <div class="pr"> <div class="edt ztag"></div> <div class="miniBlogArea phide ztag"> <div class="miniblog sinaminiblog ztag"></div> <div class="miniblog qqminiblog ztag"></div> <div class="miniblog wyminiblog ztag "></div> </div> </div>';
    };
    im.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.wQ = A[0];
        this.abA = A[1];
        this.aaC = A[2];
        this.dgI = A[3];
        this.deL = A[4];
        this.dey = A[5];
    };
    im.dV = function (_content) {
        this.bI.dV(_content);
    };
    im.ny = function () {
        this.bI.ew(false);
    };
    im.ay = function () {
        this.dV('');
        this.bI.ew(false);
    };
    im.BI = function () {
        this.bI.ew(false);
    };
    im.ew = function (tag) {
        this.bI.ew(tag);
    };
    im.bJ = function (_content) {
        if(!U.aQ(U.gn(_content.content))) {
            this.bI.CY('请输入内容！');
            return;
        }
        this.R('onok', _content.content, _content.code);
        this.YV || this.constructor.ah(this);
    };
    im.eD = function () {
        this.constructor.ah(this);
        this.R('oncc');
    };
    im.hn = function (bbR) {
        this.wQ.innerHTML = bbR;
        this.wQ.style.display = '';
    };
    im.vH = function () {
        this.wQ.innerHTML = '';
        this.wQ.style.display = 'none';
    };
    im.aN = function (aLF) {
        this.bI.dV('');
        if(!aLF) this.bI.aAl();
        p.gy.aZ.aN.apply(this, arguments);
    };
})();
(function () {
    var p = P('nb.l'),
        vY, aJq = {
            3: '188',
            6: 'game'
        },
        bj = ['', '163.com', '126.com', 'popo.163.com', '188.com', 'vip.163.com', 'yeah.net', 'vip.126.com', 'qq.com', 'yahoo.com', 'sina.com'],
        Vx = {
            '163.com': {
                t: '0',
                p: ''
            },
            'popo.163.com': {
                t: '1',
                p: '.popo'
            },
            '126.com': {
                t: '2',
                p: '@126'
            },
            '188.com': {
                t: '3',
                p: '@188'
            },
            'vip.163.com': {
                t: '4',
                p: '.vip'
            },
            'yeah.net': {
                t: '5',
                p: '@yeah'
            },
            'vip.126.com': {
                t: '7',
                p: '@vip.126.com'
            },
            'qq.com': {
                t: '100',
                p: ''
            },
            'yahoo.com': {
                t: '100',
                p: ''
            },
            'sina.com': {
                t: '100',
                p: ''
            },
            'out_com': {
                t: '100',
                p: ''
            }
        };
    var aFA = function (bP) {
            return bP != '2' && bP != '3' && bP != '5';
        };
    var cPp = function (bP) {
            bP = parseInt(bP) || 0;
            bP = bP == 1 ? 2 : (bP == 2 ? 1 : bP);
            return bj[bP + 1] || bj[0];
        };
    var cfH = function () {
            var ey = U.rA('NEBLOG_LOGIN');
            if(!ey) return null;
            ey = ey.split('|');
            if(ey.length < 3 || ey[1] == 'null' || ey[2] == 'null') return null;
            return [ey[1], ey[2]];
        };
    var alE = function () {
            return U.rA('NETEASE_LOGIN_USERNAME') || '';
        };
    var bTw = function (bP, dj) {
            U.zj('NETEASE_LOGIN_USERNAME', dj, 'blog.163.com', 100, '/');
        };
    p.cO = C();
    vY = p.cO.at(p.bO, true);
    vY.bR = function (bv, H) {
        H = H || {};
        H.title = '登录网易通行证';
        H.onshow = this.cHb.K(this);
        this.azH = {
            r: /#<.*?>/gi
        };
        this.dU = {
            forlogin: true,
            onenter: this.abH.K(this),
            onchange: this.PJ.K(this)
        };
        this.aS(bv, H);
    };
    vY.bc = function (H) {
        this.aE.reset();
        this.aE[this.ab + '-1'].alg = false;
        this.hn('请输入登录信息');
        H = H || O;
        this.bRW = H.xparam || null;
        var ey = cfH();
        if(!!ey) {
            this.hn('请登录');
            this.zL = ey[1];
            this.xB.cvn(ey[0]);
            this.aE[this.ab + '-1'].alg = true;
            this.aE[this.ab + '-0'].value = ey[1];
        }
        if(U.fH(H.target, 'function')) {
            this.Q('ontarget', H.target);
        } else {
            this.Q('ontarget', F);
            this.bMM = H.target || '';
        }
        this.Q('onregist', H.onregist || this.ceL.K(this));
        p.cO.aZ.bc.call(this, H);
    };
    vY.ap = function () {
        return 'nbw-wlg';
    };
    vY.bd = function () {
        this.ab = 'id-' + U.ar(4);
        return '<form class="box" action="https://reg.163.com/logins.jsp" method="post"> <table class="table"> <tr><td class="col0">&nbsp;</td><td class="col1 ztag fc02">请输入登录信息</td></tr> <tr><td class="col0 fc00">帐　号：</td><td class="nbwinzindex col1 ztag"></td></tr> <tr><td class="col0 fc00">密　码：</td><td class="col1 pwd"><input id="' + this.ab + '-0" name="password" class="zwd ztxt" type="password" tabindex="11"/></td></tr> <tr><td class="col0">&nbsp;</td><td class="col1"> <a class="lnk m2a fc04" href="http://reg.163.com/RecoverPassword.shtml">忘记密码？</a> <div class="savelogin"> <div class="autologinarea ztag"><input type="checkbox" id="' + this.ab + '-1" tabindex="12"/><label class="fc01" for="' + this.ab + '-1">自动登录</label></div> <div class="login-tiparea autologin-tiparea ztag" style="display:none"> <div class="login-tiparea-top"></div> <p class="fc01">为了您的信息安全，请不要在网吧或公用电脑上使用此功能！</p> </div> </div> </td></tr> <input name="type" type="hidden" value="1"/> <input name="url" type="hidden" value=""/> <input name="product" type="hidden" value="blog"/> <input name="savelogin" type="hidden" value="0"/> <input name="username" type="hidden" value=""/> <tr class=""><td class="col0">&nbsp;</td><td class="col1 lgi"><a class="lnk m2a fc04 rgi ztag" href="http://reg.163.com/reg/reg.jsp?product=blog&url=http://blog.163.com/ntesRegBlank.html&loginurl=http://blog.163.com/">注册网易通行证--&gt;</a><input class="wbtn wbtnok" type="button" name="' + this.ab + '-a" value="登  录" tabindex="13"/></td></tr> <tr class=""><td class="col0">&nbsp;</td><td class="col1 lgi"><div class="loginmsn"><span class="pleft">使用MSN帐号登录博客</span><div class="ifmlgi"><iframe width="55" scrolling="no" height="24" frameborder="0" src="http://blog.163.com/pub/services/msnconnectnew.html" allowtransparency="yes"></iframe></div></div></td></tr> </table> </form>';
    };
    vY.bT = function () {
        this.aE = this.M.getElementsByTagName('form')[0];
        var A = E.bz(this.M, 'ztag');
        this.agP = A[0];
        this.bXy = A[1];
        this.bos = A[2];
        this.boS = A[3];
        this.bEY = A[4];
        this.xB = P(N.ui).SY.as(this.bXy, this.dU);
        V.Q(this.bEY, 'click', this.cze.K(this));
        V.Q(this.aE, 'keypress', this.Qa.K(this));
        V.Q(this.aE[this.ab + '-a'], 'click', this.yo.K(this));
        V.Q(this.bos, 'mouseover', this.cCq.K(this));
        V.Q(this.bos, 'mouseout', this.cAY.K(this));
    };
    vY.cCq = function (L) {
        V.bU(L);
        this.boS.style.display = '';
    };
    vY.cAY = function (L) {
        V.bU(L);
        this.boS.style.display = 'none';
    };
    vY.hn = function (cG, GV) {
        !GV ? E.bL(this.agP, 'fc03') : E.bl(this.agP, 'fc03');
        this.agP.innerText = cG || '请输入登录信息';
    };
    vY.cze = function () {
        var By = this.R('onregist');
        this.bEY.href = 'http://reg.163.com/reg/reg.jsp' + (!By ? '' : ('?' + By));
    };
    vY.ceL = function () {
        return 'product=blog&url=http://blog.163.com/ntesRegBlank.html&loginurl=http://blog.163.com/';
    };
    vY.cHb = function () {
        this.xB.gC();
        var A = this.aE[this.ab + '-1'];
        A.checked = !!A.alg;
    };
    vY.abH = function () {
        var A = this.aE[this.ab + '-0'];
        this.hn(!A.value ? '请输入密码' : '请登录');
        A.select();
    };
    vY.PJ = function (ai) {
        var D;
        var ge = alE();
        var aY = ai.indexOf('@');
        if(aY >= 0) {
            var bUN = ai.substring(0, aY);
            var aKD = ai.substring(aY + 1);
            if(aKD.indexOf('@') >= 0) {
                return;
            } else {
                if(!!aKD) {
                    var byi = [''];
                    for(var i = 0; i < bj.length; i++) {
                        if(bj[i].indexOf(aKD) == 0) {
                            byi.push(bj[i]);
                        }
                    }
                    D = byi.join(',' + bUN + '@').split(',');
                } else {
                    D = bj.join(',' + ai).split(',');
                }
            }
        } else {
            D = bj.join(',' + ai + '@').split(',');
        }
        if(ge.indexOf(ai) == 0) D[0] = ge;
        if(!D[0] || D[0] == D[1]) D.shift();
        D.splice(0, 0, {
            value: '请选择或继续输入...',
            noaction: true
        });
        var An = 0;
        if(!!aKD) {
            An = 1;
        }
        this.xB.aze(D, An);
    };
    vY.Qa = function (L) {
        if(!L || L.keyCode != 13) return;
        var bE = V.aq(L);
        if(bE.name != this.ab + '-a') this.yo();
    };
    vY.yo = function () {
        if(this.aE[this.ab + '-a'].disabled) return;
        var dj = this.xB.ED(),
            nD = this.aE[this.ab + '-0'].value;
        dj = dj.split('@');
        var dZ = Vx[dj[dj.length - 1]] || Vx['out_com'];
        dj = dj.join('@');
        if(!dZ || dj.indexOf('@') < 0) {
            this.hn('请输入正确的用户名', true);
            this.xB.rV();
            return;
        }
        if(U.XH(nD)) {
            this.hn('请输入密码');
            this.aE[this.ab + '-0'].focus();
            return;
        }
        this.aE[this.ab + '-a'].disabled = true;
        yY = U.abG(this.azH, this.bMM || this.R('ontarget', dj) || location.href);
        yY = encodeURIComponent(yY);
        if(this.aE[this.ab + '-1'].checked) this.aE.savelogin.value = 1;
        this.aE.username.value = dj;
        this.aE.url.value = "http://blog.163.com/loginGate.do?target=" + yY + "&blogActivation=true";
        this.aE.submit();
    };
    vY.ajO = function (bP, dj, nD, zd) {
        this.aE[this.ab + '-a'].disabled = false;
        if(!zd || !zd.type) {
            this.hn((!zd ? '暂时无法验证，请稍后再试' : (zd.type == 0 ? zd.errorMsg : '未注册用户')) || '用户名或密码不正确，请重新输入', true);
            this.aE[this.ab + '-0'].select();
            return;
        }
        if(zd.type == 1) bTw(bP, dj);
        var beo = zd.username || dj;
        this.azH['#<user>'] = dj;
        this.azH['#<root>'] = nb.x.bQ(beo);
        yY = U.abG(this.azH, this.bMM || this.R('ontarget', dj) || location.href);
        yY = encodeURIComponent(yY);
        beo = encodeURIComponent(beo);
        dj = encodeURIComponent(dj);
        nD = encodeURIComponent(nD);
        var ae = zd.type == -1 ? "http://blog.163.com/passportIn.do?internal=true&in_username=" + dj + "&in_password=" + nD + "&type=" + bP + "&entry=" + (aJq[bP] || 'urs') + "&target=" + yY : "http://blog.163.com/loginGate.do?username=" + dj + "&target=" + yY;
        nb.x.ay(ae, this.bRW);
    };
})();
(function () {
    var p = P('nb.l'),
        Wr;
    p.hR = C();
    Wr = p.hR.at(p.bO, true);
    Wr.bR = function (bv, H) {
        H = H || {};
        H.title = H.title || '提示信息';
        this.aS(bv, H);
    };
    Wr.bc = function (H) {
        if(H.onok) {
            this.Q('onok', H.onok);
        }
        if(H.oncc) {
            E.bL(this.Mz, 'phide');
            this.Q('oncc', H.oncc);
        }
        this.cP.innerHTML = H.cnt || '';
        if(!!this.cz) this.cz.iV(H.title);
    };
    Wr.ap = function () {
        return 'nbw-msg';
    };
    Wr.bd = function () {
        return '<div class="cnt fs1 ztag"></div> <div class="nbwinbtnbar nbw-act"> <input type="button" class="nbwinbtn wbtn wbtnok ztag" value="确定"> <input type="button" class="nbwinbtn wbtn wbtncc ztag" value="取消"> </div>';
    };
    Wr.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.cP = A[0];
        this.abf = A[1];
        this.Mz = A[2];
        E.bl(this.Mz, 'phide');
        V.Q(this.abf, 'click', this.bJ.K(this));
        V.Q(this.Mz, 'click', this.eD.K(this));
    };
    Wr.bJ = function () {
        this.aj();
        this.R('onok');
    };
    Wr.eD = function () {
        this.aj();
        this.R('oncc');
    };
})();
(function () {
    var p = P('nb.l'),
        Mj;
    p.aup = C();
    Mj = p.aup.at(P('nb.l').bO, true);
    Mj.bR = function (bv, H) {
        H = H || {};
        this.aS(bv, H);
    };
    Mj.bc = function (H) {
        this.Q('onaddreport', H.onaddreport);
        this.cz.iV('举报', false);
        this.cH.innerText = nb.c.bC.nickName;
        this.cH.href = nb.x.bQ();
        this.aHf.innerText = H.type || '日志';
        this.bK.href = H.url || location.href;
        this.bK.innerText = H.title;
    };
    Mj.ap = function () {
        return 'nbw-3r';
    };
    Mj.bd = function () {
        var kP = [];
        kP.push('<div class="cnt"> <p class="fc01">谢谢您对我们工作的支持，网易博客愿和您一起打造健康和谐的博客空间，我们将严格保密您的个人信息。</p> <p class="fc00 fs1">您将举报<a target="_blank" class="fc04 ztag m2a"></a>的<span class="ztag"></span><a target="_blank" class="fc04 ztag ul"></a>，请选择原因：</p>');
        if(!nb.c.dn) {
            kP.push('<div class="bdwb bdc0">');
            kP.push('<p class="fs1"><label class="fc00">昵称：</label><input class="ntxt btag" type="text" value="" /></p>');
            kP.push('<p class="fs1"><label class="fc00">邮箱：</label><input class="ntxt btag" type="text" value="" /><span class="fc03">*</span></p>');
            kP.push('</div>');
        }
        kP.push('<p><input class="xtag" type="radio" id="1_sex" name="class"><label class="fc00" for="1_sex">含色情暴力内容</label></p>');
        kP.push('<p><input class="xtag" type="radio" id="2_poc" name="class"><label class="fc00" for="2_poc">含政治反动内容</label></p>');
        kP.push('<p><input class="xtag" type="radio" id="3_rgt" name="class"><label class="fc00" for="3_rgt">含侵权内容</label></p>');
        kP.push('<p><input class="xtag" type="radio" id="4_bad" name="class"><label class="fc00" for="4_bad">其他不良内容</label></p>');
        kP.push('<div class="hd"><textarea class="ntxt txae xtag"></textarea></div>');
        kP.push('<div class="nbw-act"><input class="ztag sep wbtn wbtnok" type="button" value="确定"/><input class="ztag sep wbtn wbtncc" type="button" value="取消"/></div>');
        kP.push('</div>');
        return kP.join('');
    };
    Mj.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.cH = A[0];
        this.aHf = A[1];
        this.bK = A[2];
        V.Q(A[3], 'click', this.bJ.K(this));
        V.Q(A[4], 'click', this.eD.K(this));
        this.tD = E.bz(this.M, 'xtag');
        this.aTd = this.tD[this.tD.length - 1];
        for(var i = 0; i < this.tD.length - 1; i++) {
            V.Q(this.tD[i], 'click', this.mN.K(this));
        }
        if(!nb.c.dn) {
            A = E.bz(this.M, 'btag');
            this.rR = A[0];
            this.xs = A[1];
        }
    };
    Mj.mN = function (L) {
        var bE = V.aq(L),
            aY = parseInt(bE.id);
        if(aY == 4) {
            E.bL(this.aTd.parentNode, 'hd');
        } else {
            E.bl(this.aTd.parentNode, 'hd');
        }
    };
    Mj.bJ = function () {
        var bbf = -1;
        for(var i = 0; i < this.tD.length - 1; i++) {
            if(this.tD[i].checked) {
                bbf = parseInt(this.tD[i].id);
            }
        }
        if(bbf == -1) {
            alert('请选择原因！');
            return;
        }
        if(!nb.c.dn) {
            if(!this.bbm(this.xs.value)) {
                alert('请输入正确的邮件地址');
                return;
            }
        }
        this.aj();
        this.R('onaddreport', bbf, this.aTd.value, this.xs && this.xs.value, this.rR && this.rR.value);
    };
    Mj.bbm = function (jK) {
        if(U.aQ(jK) == '') return false;
        var aYH = /([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        return aYH.test(jK);
    };
    Mj.eD = function () {
        this.aj();
        return;
    };
})();
(function () {
    var p = P('nb.l'),
        MJ;
    p.bje = C();
    MJ = p.bje.at(P('nb.l').bO, true);
    MJ.bR = function (bv, H) {
        H = H || {};
        this.aS(bv, H);
    };
    MJ.ap = function () {
        return 'nbw-3r';
    };
    MJ.bd = function () {
        var kP = [];
        kP.push('<div class="cnt"> <p class="fc01">谢谢您对我们工作的支持，网易博客愿和您一起打造健康和谐的博客空间，我们将严格保密您的个人信息。</p> <p class="fc00 fs1">您将举报<a target="_blank" class="fc04 ztag m2a"></a>的<span class="ztag"></span>，请选择举报原因：</p>');
        if(!nb.c.dn) {
            kP.push('<div class="bdwb bdc0">');
            kP.push('<p class="fs1"><label class="fc00">昵称：</label><input class="ntxt btag" type="text" value="" /></p>');
            kP.push('<p class="fs1"><label class="fc00">邮箱：</label><input class="ntxt btag" type="text" value="" /><span class="fc03">*</span></p>');
            kP.push('</div>');
        }
        kP.push('<p><input class="xtag" type="radio" id="type_1_" name="class" value="0"><label class="fc00" for="type_1_">骚扰、谩骂</label></p>');
        kP.push('<p><input class="xtag" type="radio" id="type_2_" name="class" value="1"><label class="fc00" for="type_2_">商业推广信息</label></p>');
        kP.push('<p><input class="xtag" type="radio" id="type_3_" name="class" value="2"><label class="fc00" for="type_3_">中奖、诈骗信息</label></p>');
        kP.push('<p><input class="xtag" type="radio" id="type_4_" name="class" value="3"><label class="fc00" for="type_4_">其他</label></p>');
        kP.push('<div class="nbwinbtnbar nbw-act"><input class="nbwinbtn ztag sep wbtn wbtnok" type="button" value="确定"/><input class="nbwinbtn ztag sep wbtn wbtncc" type="button" value="取消"/></div>');
        kP.push('</div>');
        return kP.join('');
    };
    MJ.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.cH = A[0];
        this.bj = A[1];
        V.Q(A[2], 'click', this.bJ.K(this));
        V.Q(A[3], 'click', this.eD.K(this));
        this.tD = E.bz(this.M, 'xtag');
        if(!nb.c.dn) {
            A = E.bz(this.M, 'btag');
            this.rR = A[0];
            this.xs = A[1];
        }
    };
    MJ.bc = function (H) {
        H = H || {};
        H.data = H.data || {};
        p.bje.aZ.bc.call(this, H);
        this.Q('onaddreport', H.onaddreport);
        this.cH.innerHTML = U.ad(H.user.nickName);
        if(!H.user.userName) {
            this.cH.removeAttribute('href');
            E.bL(this.cH, 'fc04 m2a');
        } else {
            this.cH.href = nb.x.bQ(H.user.userName);
            E.bl(this.cH, 'fc04 m2a');
        }
        this.bj.innerHTML = H.type;
        for(var i = 0; i < this.tD.length; i++) {
            this.tD[i].checked = false;
        }
    };
    MJ.bJ = function () {
        var pk = -1;
        for(var i = 0, len = this.tD.length; i < len; i++) {
            if(this.tD[i].checked) {
                pk = this.tD[i].value;
                break;
            }
        }
        if(pk == -1) {
            alert('请选择原因！');
            return;
        }
        if(!nb.c.dn) {
            if(!this.bbm(this.xs.value)) {
                alert('请输入正确的邮件地址');
                return;
            }
        }
        this.aj();
        this.R('onaddreport', parseInt(pk), this.xs && this.xs.value, this.rR && this.rR.value);
    };
    MJ.bbm = function (jK) {
        if(U.aQ(jK) == '') return false;
        var aYH = /([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        return aYH.test(jK);
    };
    MJ.eD = function () {
        this.aj();
    };
})();
(function () {
    var p = P('nb.w'),
        uf, xm, hg = E.cI(E.aO('<div class="nbw-cmt bdwb bds2 bdc0 clearfix"> <div class="nbw-fce nbw-f50 pleft"> <a target="_blank" hidefocus="true"><img class="cwd atag" /></a> </div> <div class="thde"> <div class="tt"><span class="pright fc07 atag">&nbsp;</span><div class="tx atag">&nbsp;</div></div> <div class="cnt pre atag"></div> <div class="op fc03 nbw-act atag"></div> <div class="reps atag"></div> <div class="cover"></div> </div> </div>')),
        fy = E.cI(E.aO('<div class="nbw-cmt bdwt bds2 bdc0 clearfix"> <div class="nbw-fce nbw-f40 pleft"> <a target="_blank" hidefocus="true" ><img class="cwd atag" /></a> </div> <div class="thde"> <div class="tt"><span class="pright fc07 atag">&nbsp;</span><div class="tx atag">&nbsp;</div></div> <div class="cnt pre atag"></div> <div class="op fc03 nbw-act atag"></div> </div> </div>'));
    p.xA = C();
    uf = p.xA.at(P(N.fw).Dd, true);
    uf.bR = function () {
        this.aS(hg);
        this.oc();
        if(!!this.cx && !!this.cx.parentNode) {
            V.Q(this.cx.parentNode, 'click', this.xo.K(this));
        }
    };
    uf.oc = function () {
        var A = E.bz(this.M, 'atag');
        this.cx = A[0];
        this.es = A[1];
        this.bK = A[2];
        this.cP = A[3];
        this.cL = A[4];
        this.hT = A[5];
    };
    uf.fJ = function (dR) {
        this.cL.style.display = dR ? '' : 'none';
    };
    uf.oS = function (dR) {
        this.hT.style.display = dR ? '' : 'none';
    };
    uf.ao = function (T) {
        p.xA.aZ.ao.call(this, T);
        this.eE();
    };
    uf.aN = function () {
        this.oS(false);
        this.fJ(false);
        this.hT.innerHTML = '';
        this.cL.innerHTML = '';
        this.cP.innerHTML = '';
        if(!!this.cx && !!this.cx.parentNode) {
            this.cx.parentNode.removeAttribute('href');
        }
        p.xA.aZ.aN.call(this);
    };
    uf.eE = F;
    uf.xo = F;
    p.Jn = C();
    xm = p.Jn.at(P(N.fw).Dd, true);
    xm.bR = function () {
        this.aS(fy);
        this.oc();
        if(!!this.cx && !!this.cx.parentNode) {
            V.Q(this.cx.parentNode, 'click', this.xo.K(this));
        }
    };
    xm.oc = function () {
        var A = E.bz(this.M, 'atag');
        this.cx = A[0];
        this.es = A[1];
        this.bK = A[2];
        this.cP = A[3];
        this.cL = A[4];
    };
    xm.fJ = function (dR) {
        this.cL.style.display = dR ? '' : 'none';
    };
    xm.eE = F;
    xm.ao = function (T) {
        p.Jn.aZ.ao.call(this, T);
        this.eE();
    };
    xm.aN = function () {
        this.fJ(false);
        this.cL.innerHTML = '';
        if(!!this.cx && !!this.cx.parentNode) {
            this.cx.parentNode.removeAttribute('href');
        }
        p.xA.aZ.aN.call(this);
    };
    xm.xo = F;
})();
(function () {
    var z = -3,
        p = P('nb.p.m' + z),
        MA, vV, ek, aGf, NZ, Xf, fj, mL, tN, Xu, aba, hg = E.cI(E.aO('<div class="mail btag"> <label class="iblock col0 fc00">博友信箱：</label> <input class="ztag ntxt" type="text"/> <select class="ztag"> <option value="@163.com">@163.com</option> <option value="@126.com">@126.com</option> <option value="@188.com">@188.com</option> <option value="@vip.163.com">@vip.163.com</option> </select> <span class="m2a ztag fc04">删除</span></div>'));
    p.bns = C();
    vV = p.bns.at(nb.l.bO, true);
    vV.bR = function (bv, H) {
        H = H || {};
        H.title = '评论这张';
        this.aS(bv, H);
    };
    vV.ap = function () {
        return 'nbw-blogimgcmt';
    };
    vV.bc = function (H) {
        p.bns.aZ.bc.call(this, H);
        this.auu();
        this.akh = nb.c.dn ? location.vcd : nb.x.aVV(H.parentId);
        this.Q('onimagecomment', H.onimagecomment);
        this.bGV = H.imageUrl;
        this.ix.src = this.bGV;
        if(!nb.c.dn) {
            E.bL(this.cNO, 'phide');
        }
        this.po = H.maxlength;
    };
    vV.bd = function () {
        var aVO = N.tm.fc04 || '',
            azu = N.tm.fc01 || '',
            azm = N.tm.bdc0 || '',
            qA = (N.tm.zbtn || '') + ' ' + (N.tm.fc05 || '') + ' ' + (N.tm.bdc2 || '') + ' ' + (N.tm.bgc2 || '');
        return '<div class="content"> <div><img class="img ztag" /></div> <div class="ztag phide"><span class="m2a ztag">点击登录</span><span class="sep">|</span><span>昵称：</span><input type="text" class="bdwa bds0 bdc0 ztag" maxlength="18"><div class="phide msgtip pright"></div></div> <div><textarea class="textarea ztag"></textarea></div> </div> <div class="ztag phide vyanz"> <label>验证码：</label><input class="zbrd xtag ' + azm + '" type="text" maxlength="4"/><img class="m2a xtag" title="点击刷新验证码"/><span class="m2a xtag ' + azu + '">换一张</span></div> <div class="nbwinbtnbar nbw-act"> <span class="fmsg ztag phide"></span> <input class="nbwinbtn ztag wbtn wbtnok" type="button" value="确定"/> <input class="nbwinbtn ztag wbtn wbtncc" type="button" value="取消"/> </div>';
    };
    vV.bT = function () {
        var bE = E.bz(this.M, 'ztag');
        this.ix = bE[0];
        this.cNO = bE[1];
        this.RQ = bE[2];
        this.Fo = bE[3];
        this.cP = bE[4];
        this.azP = bE[5];
        this.Yq = bE[6];
        this.aQO = bE[7];
        this.bjN = bE[8];
        var A = E.bz(this.azP, 'xtag');
        this.aAk = A[0];
        this.bIn = A[1];
        this.bXU = A[2];
        if(!nb.c.dn) {
            V.Q(this.cP, 'focus', this.aGc.K(this));
        }
        var gY = this.CK.K(this);
        V.Q(this.bIn, 'click', gY);
        V.Q(this.bXU, 'click', gY);
        V.Q(this.RQ, 'click', this.yo.K(this));
        V.Q(this.aQO, 'click', this.tP.K(this));
        V.Q(this.bjN, 'click', this.be.K(this));
    };
    vV.yo = function () {
        nb.l.cO.bm();
        V.bU(L);
    };
    vV.aGc = function () {
        if(!this.akh || this.agk()) return;
        this.aIE(this.akh);
    };
    vV.agk = function () {
        return !E.aV(this.azP, 'phide');
    };
    vV.aIE = function (ae) {
        if(!ae) return;
        this.aaM = ae + (ae.indexOf('?') < 0 ? '?' : '&');
        E.bL(this.azP, 'phide');
        this.CK();
    };
    vV.auu = function () {
        this.aaM = N.rc.r + 'empty.png';
        E.bl(this.azP, 'phide');
        this.CK();
    };
    vV.CK = function () {
        this.aAk.value = '';
        this.bIn.src = this.aaM + (this.aaM.indexOf('?') < 0 ? '' : U.ar());
    };
    vV.tP = function (L) {
        this.uN = 500;
        var cG = this.rg();
        if(!!cG) {
            this.bST(cG);
            return;
        }
        this.aj();
        new Image().src = 'http://blog.163.com/newpage/images/analyse.png?blogimagecomment&t=' + new Date().getTime();
        this.R('onimagecomment', {
            content: this.aop(),
            nick: this.Fo.value,
            code: this.aAk.value
        });
    };
    vV.bST = function (cG) {
        this.Yq.innerText = cG || '';
        E.bL(this.Yq, 'phide');
        if(!!this.acs) return;
        this.acs = window.setTimeout(this.bcT.K(this), 3000);
    };
    vV.bcT = function () {
        this.acs = window.clearTimeout(this.acs);
        E.bl(this.Yq, 'phide');
    };
    vV.aop = function () {
        var _content = '<img src="' + this.bGV + '"/><div>' + this.cP.value + '</div>';
        return _content;
    };
    vV.rg = function () {
        if(!nb.c.dn) {
            if(this.agk() && this.aAk.value.length != 4) {
                this.aAk.focus();
                return '验证码错误';
            }
            this.Fo.value = U.aQ(this.Fo.value);
            if(!this.Fo.value) {
                this.Fo.focus();
                return '请输入昵称';
            }
        }
        var _content = this.cP.value;
        if(!U.aQ(U.gn(_content))) {
            this.cP.focus();
            return '请输入内容';
        }
        if(_content.length > this.po) {
            return '超过长度限制';
        }
        return null;
    };
    vV.be = function (L) {
        this.aj();
    };
    p.Fd = C();
    mL = p.Fd.at(nb.l.bO, true);
    mL.bR = function (bv, H) {
        this.aS(bv, H);
    };
    mL.ap = function () {
        return 'nbw-1a';
    };
    mL.bc = function (H) {
        p.Fd.aZ.bc.call(this, H);
        this.Q('ondeleteblog', H.ondeleteblog);
        this.MI = H.blogId;
    };
    mL.bd = function () {
        return '<div class="content"><div>你要将日志移除到回收站吗？</div><label class="iblock"><input style="position:relative;top:2px;*top:1px;" class="ztag" type="checkbox"><span>彻底删除</span></label></div> <div class="nbwinbtnbar nbw-act"> <input class="nbwinbtn ztag wbtn wbtnok" type="button" value="确定"/> <input class="nbwinbtn ztag wbtn wbtncc" type="button" value="取消"/> </div>';
    };
    mL.bT = function () {
        var bE = E.bz(this.M, 'ztag');
        this.VT = bE[0];
        V.Q(bE[1], 'click', this.AW.K(this));
        V.Q(bE[2], 'click', this.be.K(this));
    };
    mL.AW = function (L) {
        V.bU(L);
        var ys = !this.VT.checked;
        this.aj();
        this.VT.checked = false;
        this.R('ondeleteblog', ys);
    };
    mL.be = function (L) {
        this.aj();
    };
    p.bfN = C();
    MA = p.bfN.at((P('nb.l').bO), true);
    MA.bR = function (bv, H) {
        H = H || {};
        H.title = '单日志页面显示设置';
        this.aS(bv, H);
    };
    MA.bc = function (H) {
        this.aPq = H.type;
        this.Q('onchangelayout', H.onchangelayout);
        if(nb.c.hP) {
            this.Q('onsavelayout', H.onsavelayout);
        }
        if(!this.aB) {
            this.aB = new(P(N.ut).eH)(this.PD, {
                selected: 'js-current',
                nobubble: true,
                index: H.type || 0,
                onchange: this.hC.K(this)
            })
        } else {
            this.aB.gO(H.type || 0)
        }
    };
    MA.hC = function (mo, FT) {
        this.bj = mo;
        this.R('onchangelayout', this.bj);
    };
    MA.ap = function () {
        return 'nbw-3a';
    };
    MA.bd = function () {
        return '<div class="clearfix"> <a href="#" hidefocus="true" class="fc00 stl noul pleft nbw-fce nbw-f60 ztag"> <div class="bgs cwd bcs bcs-0" />&nbsp;</div> <div class="cwd thide">侧边互动</div> <div class="tip tip-0"> <div class="atc iblock bcs bcs-3">&nbsp;</div> <div class="cc">侧边显示头像和更多日志信息<br/>让新读者更快认识您<br/>让您的最新作品得到更多关注</div> </div> <div class="slt iblock icn0 icn0-515">&nbsp;</div> </a> <a href="#" hidefocus="true" class="fc00 stl noul pleft nbw-fce nbw-f60 ztag"> <div class="bgs cwd bcs bcs-1" />&nbsp;</div> <div class="cwd thide">固定居中</div> <div class="tip tip-1"> <div class="atc iblock bcs bcs-3">&nbsp;</div> <div class="cc">延续网易博客传统风格<br/>760像素显示宽度<br/>满足固定的图文排版展示</div> </div> <div class="slt iblock icn0 icn0-515">&nbsp;</div> </a> <a href="#" hidefocus="true" class="fc00 stl noul pleft nbw-fce nbw-f60 ztag"> <div class="bgs cwd bcs bcs-2" />&nbsp;</div> <div class="cwd thide">自适应</div> <div class="tip tip-2"> <div class="atc iblock bcs bcs-3">&nbsp;</div> <div class="cc">宽敞的日志图文显示宽度<br/>适合摄影爱好者使用<br/></div> </div> <div class="slt iblock icn0 icn0-515">&nbsp;</div> </a> </div> <div class="act"><input type="button" class="btag wbtn wbtnok" value="确定"/><input type="button" class="btag wbtn wbtncc" value="取消"/></div>';
    };
    MA.bT = function () {
        this.PD = E.bz(this.M, 'ztag');
        var A = E.bz(this.M, 'btag');
        V.Q(A[0], 'click', this.tP.K(this));
        V.Q(A[1], 'click', this.be.K(this));
    };
    MA.tP = function (L) {
        this.aj();
        if(this.aPq != this.bj && nb.c.hP) {
            this.R('onsavelayout', this.bj);
        }
    };
    MA.be = function (L) {
        this.aj();
        if(this.aPq != this.bj) this.R('onchangelayout', this.aPq);
    };
    p.Na = C();
    ek = p.Na.at((P('nb.l').bO), true);
    ek.bR = function (bv, H) {
        H = H || {};
        this.I = H.data;
        this.aS(bv, H);
    };
    ek.ap = function () {
        return 'nbw-3b';
    };
    ek.bc = function (H) {
        this.Q('onrecommend', H.onrecommend);
    };
    ek.bd = function () {
        return '<div class="rb"> <div class="fs1">向我的博友推荐日志：</div> <a class="fc04" href="' + nb.x.bQ() + this.I.blogUrl + '">' + U.da(this.I.blogTitle, 50) + '</a> <div class="rbc"><span class="fs1">推荐语：</span>&nbsp;&nbsp;<span><input class="ztag ntxt fc01" checked type="checkbox">同时出现在日志评论</span></div> <textarea class="ztag bdc0" rows="4"></textarea> <div class="fc01">您可以在博客收藏页面来查看推荐过的日志</div> <div class="nbwinbtnbar nbw-act"> <input class="nbwinbtn sep ztag wbtn wbtnok" type="button" value="确定"/> <input class="nbwinbtn sep ztag wbtn wbtncc" type="button" value="取消"/> </div> </div>';
    };
    ek.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.lD = A[0];
        this.cP = A[1];
        V.Q(A[2], 'click', this.tP.K(this));
        V.Q(A[3], 'click', this.be.K(this));
        if(!nb.c.qu) {
            this.lD.parentNode.style.display = 'none';
        }
    };
    ek.tP = function (L) {
        if(this.cP.value.length > 1000) {
            alert('推荐语不能超过1000个字符！');
            return;
        }
        this.R('onrecommend', this.cP.value, this.lD.checked);
        this.aj();
    };
    ek.be = function (L) {
        this.aj();
    };
    p.cpm = C();
    Xu = p.cpm.at((P('nb.l').bO), true);
    Xu.bR = function (bv, H) {
        H = H || {};
        this.MI = H.blogId;
        this.aS(bv, H);
    };
    Xu.ap = function () {
        return 'nbw-3f';
    };
    Xu.bc = function (H) {
        H = H || {};
        this.Q('onsendemailshare', H.onsend || F);
        if(this.aIf == false) this.agM.value = '请输入接受者的有效邮箱地址，多个地址请用分号分割';
        this.aCn.value = '网易博文分享：' + H.blogTitle + ' - 来自 ' + nb.c.bC.nickName;
    };
    Xu.bd = function () {
        return '<div style="width:560px;text-align:center;font:normal 12px/22px arial;color:#333;"> <div style="margin:0 0 8px;">收&nbsp;&nbsp;件&nbsp;&nbsp;人：<input type="text" class="ztag" value="" style="width:480px;padding:2px;border:1px solid #7f9db9;color:#7b7b7b;" /></div> <div style="margin:0 0 8px;">标　　题：<input type="text" class="ztag" value="" style="width:480px;padding:2px;border:1px solid #7f9db9;" /></div> <div style="margin:0 0 8px;text-align:left;"><span style="color:#7b7b7b;margin-left:8px;">可输入邮件附言，不超过1000个字</span></div> <div style="margin:0 0 8px;"><textarea class="ztag" style="width:540px;height:120px;padding:2px;line-height:1.5;border:1px solid #7f9db9;"></textarea></div> <div style="margin:20px 0 0;"><span style="float:left;width:22px;height:20px;overflow:hidden;margin:0 5px 0 0;"><a href="http://fm.163.com/" target="_blank"><img src="http://b.bst.126.net/newpage/images/blog/logo-fm.png" style="border:0;"/></a></span><span style="float:left;line-height:20px;color:#7b7b7b;"><a href="http://fm.163.com/" target="_blank" style="text-decoration:none;color:#7b7b7b;">下载闪电邮，分享博客精彩</a></span><span style="float:right;margin:2px 0 0;"><button type="button" class="ztag" style="cursor:pointer;height:25px;line-height:22px;width:50px;">发送</button><button type="button" class="ztag" style="margin:0 10px;cursor:pointer;height:25px;line-height:22px;width:50px;">取消</button></span><br style="clear:both" /></div> </div>';
    };
    Xu.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.agM = A[0];
        this.aCn = A[1];
        this.fs = A[2];
        this.um = A[3];
        this.VH = A[4];
        this.aIf = false;
        V.Q(this.um, 'click', this.tP.K(this));
        V.Q(this.VH, 'click', this.be.K(this));
        V.Q(this.agM, 'click', function () {
            if(this.aIf == false) {
                this.agM.value = '';
                this.agM.style.color = "#333333";
                this.aIf = true;
            }
        }.K(this));
    };
    Xu.tP = function (L) {
        if(!this.aIf || this.agM.value == '') {
            alert("请输入接受者邮箱地址");
            return false;
        }
        if(this.fs.value.length > 1000) {
            alert("附言请不要超过1000个字!");
            return false;
        }
        var replaced = this.agM.value.replace(new RegExp("；", "gm"), ";");
        var splits = replaced.split(";");
        var emails = [];
        var pattern = /^([a-zA-Z0-9_(-).])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]+)+)$/;
        for(var i = 0; i < splits.length; i++) {
            if(splits[i] != "") {
                if(!pattern.test(splits[i])) {
                    alert("邮件地址不合法 : " + splits[i]);
                    return false;
                } else {
                    emails.push(splits[i]);
                }
            }
        }
        this.R('onsendemailshare', this.MI, this.aCn.value, this.fs.value, emails);
    };
    Xu.be = function (L) {
        this.aj();
    };
    p.aAC = C();
    aGf = p.aAC.at(P(N.ut).dI, true);
    aGf.bR = function () {
        this.aS(hg);
        this.ir();
    };
    aGf.ir = function () {
        var A = E.bz(this.M, 'ztag');
        this.vv = A[0];
        this.cNw = A[1];
        this.xu = A[2];
        V.Q(this.xu, 'click', this.constructor.ah.K(this.constructor, this));
    };
    aGf.aN = function () {
        p.aAC.aZ.aN.call(this);
        this.vv.value = '';
        this.cNw.selectedIndex = 0;
    };
    p.buv = C();
    NZ = p.buv.at((P('nb.l').bO), true);
    NZ.bR = function (bv, H) {
        H = H || {};
        H.title = '分享给博友';
        this.aS(bv, H);
    };
    NZ.ap = function () {
        return 'nbw-3c';
    };
    NZ.bc = function (H) {
        this.I = H.data;
        this.bBk = H.elimit;
        this.Q('oncite', H.oncite);
        var A = E.bz(this.apI, 'btag');
        for(var i = 0; i < A.length; i++) {
            E.cT(A[i]);
        }
        this.alu.innerText = this.bBk;
        p.aAC.as('true', this.apI);
    };
    NZ.bd = function () {
        return '<div class="cite"> <div class="mails ztag"> </div> <div class="hip"><span class="tp fc01">你今天还可以发<span class="ztag"></span>封邮件</span><span class="m2a ztag fc04">继续添加</span></div> <div class="clearfix"> <div class="pleft col0 fc00">邮件标题：</div> <div><input class="inc ztag ntxt" maxlength="100" value="你的博友' + nb.c.aH.nickName + '推荐精彩日志给你" type="text" /></div> </div> <div class="clearfix fc00"> <div class="pleft col0">正&nbsp;&nbsp;&nbsp;&nbsp;文：</div> <div class="col1"><textarea class="inc bdc0 ztag" rows="4">我最近看到的一篇日志，蛮精彩的，你也看看吧。</textarea></div> </div> <div class="nbwinbtnbar nbw-act"> <input class="nbwinbtn sep ztag wbtn wbtnok" type="button" value="确定"/> <input class="nbwinbtn sep ztag wbtn wbtncc" type="button" value="取消"/> </div> </div>';
    };
    NZ.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.apI = A[0];
        this.alu = A[1];
        this.lX = A[2];
        this.bK = A[3];
        this.cP = A[4];
        V.Q(A[2], 'click', this.jQ.K(this));
        V.Q(A[5], 'click', this.tP.K(this));
        V.Q(A[6], 'click', this.be.K(this));
    };
    NZ.jQ = function () {
        var A = E.bz(this.apI, 'btag');
        if(A.length < this.bBk) p.aAC.as('true', this.apI);
    };
    NZ.tP = function (L) {
        if(!this.bK.value) {
            alert('请输入邮件标题！');
            return;
        }
        if(!this.cP.value) {
            alert('请输入邮件正文！');
            return;
        }
        var ba = [],
            A = E.bz(this.apI, 'btag'),
            azq;
        if(!!A) {
            for(var i = 0; i < A.length; i++) {
                azq = E.bz(A[i], 'ztag');
                if(azq[0].value) {
                    ba.push(azq[0].value + azq[1].value);
                }
            }
        }
        if(ba.length <= 0) {
            alert('请输入博友邮件！');
            return;
        }
        if(ba.length > 0) {
            this.aj();
            this.R('oncite', ba.join(','), this.bK.value, this.cP.value);
        }
    };
    NZ.be = function (L) {
        this.aj();
    };
    p.buJ = C();
    Xf = p.buJ.at(P('nb.l').bO, true);
    Xf.bR = function (bv, H) {
        H = H || {};
        this.aS(bv, H);
    };
    Xf.bc = function (H) {
        this.Q('onok', H.onok);
        this.LY.innerText = H.blogTitle;
        this.xs.innerText = H.emails;
    };
    Xf.ap = function () {
        return 'nbw-3s';
    };
    Xf.bd = function () {
        return '<div class="main"> <p>日志"<span class="ztag"></span>"已成功发送给:</p> <p class="ztag"></p> <div class="nbwinbtnbar nbw-act ztag"> <input class="nbwinbtn sep wbtn wbtnok" type="button" value="分享给更多博友"/> <input class="nbwinbtn sep wbtn wbtncc" type="button" value="取消"/> </div> </div>';
    };
    Xf.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.LY = A[0];
        this.xs = A[1];
        this.cL = A[2];
        A = E.aM(this.cL);
        V.Q(A[0], 'click', this.tP.K(this));
        V.Q(A[1], 'click', this.be.K(this));
    };
    Xf.tP = function (L) {
        this.aj();
        this.R('onok');
    };
    Xf.be = function (L) {
        this.aj();
    };
    p.hA = C();
    fj = p.hA.at(P('nb.l').bO, true);
    fj.bR = function (bv, H) {
        H = H || {};
        this.aS(bv, H);
    };
    fj.bc = function (H) {
        this.aE.reset();
        this.cz.iV(H.title, false);
        this.ym.innerHTML = H.contentdesc;
        p.hA.aZ.bc.call(this, H);
        this.Q('onok', H.onok);
    };
    fj.ap = function () {
        return 'nbw-cfm';
    };
    fj.bd = function () {
        this.ab = 'id-' + U.ar(4);
        return '<form class="box" onsubmit="return false;"> <div class="cancelfollow crtabm clearfix thide_mulline"> <div class="contentdesc fs1"></div> <div class="nbwinbtnbar btns3"><input  type="button" value="确&nbsp;定" class="nbwinbtn btn4 wbtn wbtnok"/><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><input  type="button" value="取&nbsp;消" class="nbwinbtn btn4 wbtn wbtncc"/></div> </div> </form>';
    };
    fj.bT = function () {
        this.aE = this.M.getElementsByTagName('form')[0];
        this.ym = E.bz(this.M, 'contentdesc')[0];
        var A = E.bz(this.M, 'btn4');
        V.Q(A[0], 'click', this.bJ.K(this));
        V.Q(A[1], 'click', this.be.K(this));
    };
    fj.bJ = function () {
        this.aj();
        this.R('onok');
    };
    fj.be = function () {
        this.aj();
    };
    p.Aq = C();
    tN = p.Aq.at(P('nb.l').bO, true);
    tN.bR = function (bv, H) {
        H = H || {};
        this.aS(bv, H);
    };
    tN.bc = function (H) {
        this.aE.reset();
        p.Aq.aZ.bc.call(this, H);
        this.Q('onok', H.onok);
    };
    tN.ap = function () {
        return 'nbw-flw';
    };
    tN.bd = function () {
        this.ab = 'id-' + U.ar(4);
        return '<form class="box" onsubmit="return false;"> <div class="crtabm clearfix""> <div class="contentdesc"><span class="fs0">不好意思，博主谢绝任何人加为博友。</span><br/><br/><span class="fs0">你关注他，就可以在博客中心里接收他的动态。</span></div> <div class="nbwinbtnbar btns3"><input  type="button" value="关注他" class="nbwinbtn btn4 wbtn wbtnok btnok"/><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><input  type="button" value="取&nbsp;消" class="nbwinbtn btn4 wbtn wbtncc"/></div> </div> </form>';
    };
    tN.bT = function () {
        this.aE = this.M.getElementsByTagName('form')[0];
        var A = E.bz(this.M, 'btn4');
        this.jT = A[0];
        this.kB = A[1];
        V.Q(A[0], 'click', this.bJ.K(this));
        V.Q(A[1], 'click', this.be.K(this));
    };
    tN.bJ = function () {
        this.aj();
        this.R('onok');
    };
    tN.be = function () {
        this.aj();
    };
    p.aFV = C();
    aba = p.aFV.at(P('nb.l').cO, true);
    aba.bR = function (bv, H) {
        H = H || {};
        H.nocenter = true;
        H.nocover = true;
        H.nohack = true;
        H.nomove = true;
        this.cln = H.engine;
        this.aS(bv, H);
    };
    aba.bd = function () {
        this.ab = 'id-' + U.ar(4);
        return '<form  action="https://reg.163.com/logins.jsp" method="post"> <div class="tt blg-2"><span title="关闭" class="iblock blg-2 blg-2-0 pnt xtag">&nbsp;</span></div> <div class="cnt"> <p>欢迎通过<span class="fc03">' + this.cln.name + '搜索</span>来到<span class="fc04">' + nb.c.bC.nickName + '</span>的博客！</p> <p>注册登录后，你也可以拥有自己的个人博客，还可以和博友更好的交流。 </p> <p class="fc03 thx fw1">网易博客欢迎你的加入</p> <p class="fc02 ztag">请输入网易通行证用户名和密码登录</p> <div class="clearfix"><div class="pleft">用户名：</div><div class="pleft ztag wipt name"></div><div class="pleft wipt">&nbsp;&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;码：<input class="bdc0" name="password" id="' + this.ab + '-0" type="password" /></div></div> <p class="phide"><input type="checkbox" id="' + this.ab + '-1" ></p> <input name="type" type="hidden" value="1"/> <input name="url" type="hidden" value=""/> <input name="product" type="hidden" value="blog"/> <input name="savelogin" type="hidden" value="0"/> <input name="username" type="hidden" value=""/> <p class="nbw-act"> <input class="sep wbtn wbtnok" type="button" name="' + this.ab + '-a" value="登录"/> <a nofocus="true" class="noul"  href="http://reg.163.com/reg/reg.jsp?product=blog&url=http://blog.163.com/ntesRegBlank.html&loginurl=http://blog.163.com/"><input class="sep wbtn wbtncc" type="button" value="注册"/></a> </p> </div> </form>';
    };
    aba.bT = function () {
        var A = E.bz(this.M, 'xtag');
        V.Q(A[0], 'click', this.mu.K(this));
        p.aFV.aZ.bT.call(this);
    };
    aba.bc = function (H) {
        p.aFV.aZ.bc.call(this, H);
    };
    aba.ap = function () {
        return 'nbwinascard nbw-3e';
    };
    aba.mu = function () {
        this.aj();
    };
    p.aIX = C();
    Ny = p.aIX.at(nb.l.bO, true);
    P(N.ui).fp('.grouprecommendwin{width:355px;text-align:left;} .grouprecommendwin .box{position:relative;max-height:200px;_height:200px;overflow-x:hidden;overflow-y:auto;} .grouprecommendwin ul{overflow:hidden;margin:0;padding:0 0 8px 0;list-style:none;background-color:#FFF;} .grouprecommendwin .selected{background:#ECECEC} .grouprecommendwin li{overflow:hidden;margin:0;padding:0;height:28px;line-height:28px} .grouprecommendwin .groupitem{position:relative;zoom:1;padding-left:0;cursor:pointer;} .grouprecommendwin .groupicon{width:25px;height:20px;line-height:20px;padding:2px 0 2px 5px;} .grouprecommendwin .groupicon img{width:20px;height:20px;padding:0;margin:0;border:none;} .grouprecommendwin .groupname{width:150px;height:28px;line-height:28px;color:#5872a7;} ');
    Ny.bR = function (bv, H) {
        H = H || {};
        H.title = '推送到小组';
        this.MI = H.blogId;
        this.Wc = H.groups;
        this.csb = H.blogAuthorId;
        this.aS(bv, H);
    };
    Ny.ap = function () {
        return 'grouprecommendwin';
    };
    Ny.bT = function () {
        var A = E.bz(this.M, 'btn4');
        V.Q(A[0], 'click', this.bJ.K(this));
        V.Q(A[1], 'click', this.be.K(this));
        A = E.bz(this.M, 'ztag');
        for(var i = 0; i < A.length; i++) {
            V.Q(A[i], 'click', this.mN.K(this, A[i]));
        }
    };
    Ny.mN = function (bPm, L) {
        V.bU(L);
        var akp = E.bz(this.M, 'selected');
        if(!!akp) {
            E.bL(akp[0], 'selected');
        }
        E.bl(bPm, 'selected');
    };
    var cPj = E.of(' <div class="box"> <ul> {list groups as x} <li class="groupitem ztag" id="__group_recommend_${x.groupId}"><span class="pleft groupicon"><img src="${x.thumbSmall}" /></span><span class="groupname">${x.name|escape}<span></li> {/list} </ul> </div> <div class="nbwinbtnbar btns"> <input type="button" value="确&nbsp;定" class="nbwinbtn btn4 wbtn wbtnok"/> <input type="button" value="取&nbsp;消" class="nbwinbtn btn4 wbtn wbtnok"/> </div>');
    Ny.bd = function () {
        return E.aI(cPj, {
            groups: this.Wc
        });
    };
    Ny.bJ = function () {
        var akp = E.bz(this.M, 'selected');
        if(!akp || akp.length <= 0) {
            E.bN('请选择一个小组', true, false, 'fail');
            return;
        }
        var groupId = akp[0].id.replace('__group_recommend_', '');
        E.bN('保存中', false, true, 'loading');
        J.bi(location.dwr, 'GroupBean', 'recommend', groupId, this.MI, this.csb, this.cFN.K(this));
    };
    Ny.cFN = function (fi) {
        E.kz(true);
        if(fi > 0) {
            E.bN('更新成功', true);
            this.qC();
            return;
        } else {
            if(fi == -3) {
                nb.l.zn.bm({
                    message: "该作品已经被投稿到该小组"
                });
            } else if(fi == -4) {
                nb.l.zn.bm({
                    message: "创建者和管理员，每天只能推送5篇到该小组"
                });
            } else if(fi == -5) {
                nb.l.zn.bm({
                    message: "投稿者每天只能推送2篇到该小组"
                });
            } else {
                E.bN('更新失败,请重试', true, false, 'fail');
            }
        }
    };
    Ny.be = function () {
        this.qC();
    };
    Ny.bc = function (H) {
        p.aIX.aZ.bc.call(this, H);
    };
    Ny.bm = function () {
        p.aIX.aZ.bm.call(this);
    };
})();
(function () {
    var z = -3,
        p = P('nb.p.m' + z),
        fK, wE, FY, FD, eu, el, dr;
    var jt = function (ae, aR) {
            if(!U.fH(ae, 'String')) return ae;
            ae = U.aQ(ae);
            ae = ae.substr(ae.indexOf('?') + 1);
            if(!ae) return '';
            ae = ae.split('&');
            for(var i = 0, l = ae.length, d; i < l; i++) {
                d = ae[i].indexOf('=');
                if(ae[i].substring(0, d) === aR) {
                    return ae[i].substr(d + 1) || '';
                }
            }
            return '';
        };
    var xL = function (bM) {
            return bM && (bM.spam > 0 || bM.id == -9 || bM.id == -5 || bM.type == 'KeyWordRuntimeException' || bM.type == 'CaptchaException' || bM.valid == 16);
        };
    var BW = function (bM) {
            var kQ = xL(bM);
            if(kQ) {
                if(bM.spam > 0) {
                    E.bN('你在短时间内发布了过多的评论，评论受限！', true, false, 'fail');
                    return kQ;
                }
                if(bM.id == -5) {
                    E.bN('由于对方权限设置，不允许添加评论', true, false, 'fail');
                    return kQ;
                }
                if(bM.id == -9) {
                    E.bN('你发表的评论内容包含敏感关键字，不允许发布！', true, false, 'fail');
                    return kQ;
                }
                if(bM.valid == 16) {
                    E.bN('你发表的评论内容包含敏感关键字，在系统审查之后才能显示！', true, false, 'fail');
                    return kQ;
                }
                switch(bM.type) {
                case 'KeyWordRuntimeException':
                    {
                        E.bN('你发表的评论内容包含敏感关键字，不允许发布！', true, false, 'fail');
                        break;
                    }
                case 'CaptchaException':
                    {
                        E.bN('验证码不正确！', true, false, 'fail');
                        break;
                    }
                }
            }
            return kQ;
        };
    var cbD = function () {
            var bgj = ["百度", "Google", "Google", "有道"],
                zJ = ["baidu.com", "google.cn.hk", "google.com.hk", "youdao.com"],
                bbF = /^http\:\/\/((\w)+\.)*(baidu\.com|google\.cn\.hk|google\.com\.hk|youdao\.com)\/.*$/,
                abD = document.referrer,
                aw = null;
            if(abD != null && abD != "") {
                if(abD.indexOf('reg.youdao.com') != -1) {
                    return null;
                }
                var adv = abD.match(bbF);
                if(adv != null) {
                    var ae = adv[adv.length - 1];
                    for(var i = zJ.length - 1; i >= 0; i--) {
                        if(ae == zJ[i]) {
                            aw = {
                                name: bgj[i],
                                value: zJ[i].split('.')[0]
                            };
                            break;
                        }
                    }
                }
            }
            return aw;
        };
    var bLi = function () {
            var bgj = ["百度", "Google", "Google", "有道", "搜搜", "搜狗"],
                zJ = ["baidu.com", "google.cn.hk", "google.com.hk", "youdao.com", "soso.com", "sogou.com"],
                bbF = /^http\:\/\/((\w)+\.)*(baidu\.com|google\.cn\.hk|google\.com\.hk|youdao\.com|soso\.com|sogou\.com)\/.*$/,
                abD = document.referrer,
                aw = null;
            if(abD != null && abD != "") {
                var adv = abD.match(bbF);
                if(adv != null) {
                    var ae = adv[adv.length - 1];
                    for(var i = zJ.length - 1; i >= 0; i--) {
                        if(ae == zJ[i]) {
                            aw = {
                                name: bgj[i],
                                value: zJ[i].split('.')[0]
                            };
                            break;
                        }
                    }
                }
            }
            return aw;
        };
    p.abW = C();
    fK = p.abW.at(P(N.fw).nq);
    fK.crt = function (H) {
        this.ciX(H, this.cij.K(this));
    };
    fK.ciX = function (H, bS) {
        J.bi(location.dwr, 'VisitBeanNew', 'getBlogReaders', H.id, nb.c.bC.userId, bS);
    };
    fK.cij = function (D) {
        this.R('onblogreaderload', D);
    };
    fK.dcy = function (H) {
        this.dcM(H, this.dco.K(this));
    };
    fK.dcM = function (H, bS) {
        var vL = "http://ud.blog.163.com/";
        if(nb.c.bC.sRank >= 0) vL = "http://api.blog.163.com/";
        J.bi(vL + nb.c.bC.userName + "/dwr", 'UserBeanNew', 'showMiniBlog', nb.c.bC.userId, bS);
    };
    fK.dco = function (T) {
        this.R('onshowminiblog', T);
    };
    fK.crJ = function (H) {
        this.cgj(H, this.chp.K(this));
    };
    fK.cgj = function (H, bS) {
        J.bi(location.dwr, 'BlogBeanNew', 'getRecentBlogs', nb.c.bC.userId, 6, 0, true, true, false, bS);
    };
    fK.chp = function (D) {
        this.R('onnewblogload', D);
    };
    fK.cnb = function (H) {
        this.cOx(H, this.cQd.K(this));
    };
    fK.cOx = function (H, bS) {
        var vL = "http://ud.blog.163.com/";
        if(nb.c.bC.sRank >= 0) vL = "http://api.blog.163.com/";
        J.bi(vL + nb.c.bC.userName + "/dwr", 'BlogBeanNew', 'getRelatedArticles', H.id, H.permalink, nb.c.bC.userId, H.modifyTime, false, false, bS);
    };
    fK.cQd = function (D) {
        this.R('onrelateblogload', D);
    };
    fK.cqM = function (H) {
        this.cfI(H, this.cfW.K(this));
    };
    fK.cfI = function (H, bS) {
        J.afU('rb');
        J.bi(location.dwr, 'BlogBeanNew', 'getHistoryBlogsInSameDay', H.publishTime, 5, nb.c.cyz, false, bS);
    };
    fK.cfW = function (D) {
        this.R('onhistoryblogload', D);
    };
    fK.cmR = function (H) {
        this.cPk(H, this.cOA.K(this));
    };
    fK.cPk = function (H, bS) {
        var vL = "http://ud.blog.163.com/";
        if(nb.c.bC.sRank >= 0) vL = "http://api.blog.163.com/";
        J.bi(vL + nb.c.bC.userName + "/dwr", 'BlogBeanNew', 'getRecentRecommendBlogs', nb.c.bC.userId, false, bS);
    };
    fK.cOA = function (D) {
        this.R('onrecommendblogload', D);
    };
    fK.dfU = function (H) {
        J.bi(location.dwr, 'BlogBeanNew', 'getSelfRecomBlogs', this.dgM.K(this));
    };
    fK.dgM = function (D) {
        this.R('onselfrecomblogload', D);
    };
    fK.byr = function (H) {
        this.cPm(H, this.cPx.K(this, H));
    };
    fK.cPm = function (H, bS) {
        J.bi(location.dwr, 'BlogBeanNew', 'getPersonalRecommendBlogs', nb.c.bC.userId, false, bS);
    };
    fK.cPx = function (H, D) {
        if((!D) || (D.length == 0 && !this.bRX)) {
            this.bRX = true;
            setTimeout(this.byr.K(this), 500);
        }
        this.R('onpersonalrecommendblogload', D);
    };
    fK.cms = function () {
        J.yQ('http://blog.163.com/pub/newIndex/recomBlogsInBlogPage.js', this.cOt.K(this));
    };
    fK.cOt = function () {
        this.R('onrecommendreadload');
    };
    fK.aJv = function (ax) {
        J.bi(location.dwr, 'BlogBeanNew', 'getBlogRecommendInfo', ax, this.R.K(this, 'onrecommendinfoload'));
    };
    fK.crG = function (H) {
        J.bi(location.dwr, 'MultiUserBean', 'getMultiUserBlogListByPublisherId', H.multiUserId, H.publisherId, 0, 7, true, true, this.R.K(this, 'onmultiuserblogsload', H.blogId));
    };
    fK.Nm = function (bP) {
        J.bi(location.dwr, 'BlogBeanNew', 'addBlogShareAuditLog', bP);
    };
    fK.cqQ = function (ax, bP) {
        J.bi(location.dwr, 'BlogBeanNew', 'applySpamBlog', ax, bP, this.cuT.K(this, bP));
    };
    fK.cuT = function (bP, ai) {
        this.R('onapplyspamblog', bP, ai);
    };
    fK.det = function (ax, fB) {
        J.bi(location.dwr, 'BlogBeanNew', 'applyUnShield', ax, fB, false, this.deT.K(this));
    };
    fK.deT = function (ai) {
        this.R('onapplyunshield', ai);
    };
    fK.aZR = function (fP) {
        this.bdh({
            id: fP
        }, this.bch.K(this, fP));
    };
    fK.bdh = function (H, bS) {
        J.bi(location.dwr, 'BlogBeanNew', 'existBlogRecommend', H.id, bS);
    };
    fK.dhb = function (fP, cS) {
        J.bi(location.dwr, 'BlogBeanNew', 'addAnonymousBlogRecommend', fP, cS, false, this.deF.K(this));
    };
    fK.bch = function (fP, ai) {
        this.R('onexistrecommend', ai);
    };
    fK.deF = function (ai) {
        this.R('onaddAnonymousBlogRecommend', ai);
    };
    fK.azW = function (ax, _content, dR) {
        this.aMa({
            id: ax,
            content: _content,
            tag: dR
        }, this.KC.K(this, ax, dR));
    };
    fK.aMa = function (H, bS) {
        var aT = {
            valid: H.tag ? 1 : 0,
            blogId: H.id,
            blogUserId: nb.c.bC.userId,
            blogTitle: '',
            content: H.content,
            publisherNickname: nb.c.aH.nickName,
            publisherEmail: '',
            mainComId: -1,
            replyComId: -1,
            replyToUserId: '',
            replyToUserName: '',
            replyToUserNick: ''
        };
        J.bi(location.dwr, 'BlogBeanNew', 'addBlogRecommend', aT, '', false, bS);
    };
    fK.KC = function (ax, dR, ai) {
        if(dR && ai && ai.recommend && ai.comment && !xL(ai.comment) && (ai.comment.valid == 1)) {
            this.aDX(ax, 'id', ai.comment);
            this.R('onrecommend', ai.recommend, true);
            return;
        }
        this.R('onrecommend', ai.recommend, false);
    };
    fK.cqJ = function () {
        this.chG(this.chN.K(this));
    };
    fK.chG = function (bS) {
        J.bi(location.dwr, 'SubscriptionBeanNew', 'getEmailLimit', bS);
    };
    fK.chN = function (ai) {
        this.R('onemaillimit', ai);
    };
    fK.bxI = function (ax) {
        J.bi(location.dwr, 'BlogBeanNew', 'getTrackbacks', ax, this.R.K(this, 'ontrackbackload'));
    };
    fK.coG = function (gq, Uj, aF, _content) {
        var bRp = {
            type: 'blog',
            emailTitle: aF,
            url: window.location.href,
            content: E.bz(document.body, 'bct')[0].innerHTML,
            title: '<span style="font-family: \'微软雅黑\',\'黑体\',Arial,Helvetica,Sans-Serif;">' + gq.blogTitle + '</span>',
            contentHead: _content
        };
        this.cUU({
            emails: Uj,
            msgMap: bRp
        }, this.azJ.K(this, aF, Uj));
    };
    fK.cUU = function (H, bS) {
        J.bi(location.dwr, 'SubscriptionBeanNew', 'ShareByEmail', H.emails, H.msgMap, bS, this.cBK.K(this));
    };
    fK.cBK = function (ex) {
        if(ex.type == 'KeyWordRuntimeException') {
            E.bN('发送给博友失败，该日志内容包含敏感关键字！', true, false, 'fail');
        } else {
            E.bN('发送给博友失败！', true, false, 'fail');
        }
    };
    fK.azJ = function (aF, Uj, ai) {
        if(ai) {
            this.R('oncite', aF, Uj);
        }
    };
    fK.jO = function (bM, bB, cU, zs) {
        if(!xL(bM)) {
            p.abW.aZ.jO.call(this, bM, bB, cU, zs);
        }
    };
    fK.Da = function (bB, cC, bM) {
        if(!bB || !cC || !bM) return;
        if(!xL(bM)) {
            var D = this.dc(bB),
                eV = this.bH(bB)[cC],
                aY = U.bX(D, eV);
            eV.subComments.push(bM);
            D.splice(aY, 1);
            D.unshift(eV);
        }
    };
    fK.EL = function (H, bS) {
        var bM = H.item,
            aA = bM.obj.id == bM.itm.id,
            aT = {
                blogId: H.ckey,
                blogUserId: nb.c.bC.userId,
                blogTitle: bM.obj.blogTitle,
                content: bM.ipt.content ? bM.ipt.content : bM.ipt,
                publisherNickname: bM.ipt.nick ? bM.ipt.nick : U.gn(nb.c.aH.nickName),
                publisherEmail: '',
                mainComId: bM.obj.id,
                replyComId: aA ? bM.obj.id : bM.itm.id,
                replyToUserId: aA ? bM.obj.publisherId : bM.itm.publisherId,
                replyToUserName: aA ? bM.obj.publisherName : bM.itm.publisherName,
                replyToUserNick: aA ? bM.obj.publisherNickname : bM.itm.publisherNickname
            };
        if(nb.c.dn) {
            aT.synchMiniBlog = nb.w.hm.akS('comment');
        }
        if(!bM.itm.publishRole || bM.itm.publishRole == nb.c.aH.userId) {
            J.bi(location.dwr, 'BlogBeanNew', 'addBlogComment', aT, bM.ipt.code ? bM.ipt.code : '', false, bS, bS);
        } else {
            J.bi(location.dwr, 'BlogBeanNew', 'addMUBBlogComment', aT, bM.ipt.code ? bM.ipt.code : '', false, bS, bS);
        }
    };
    fK.dW = function (H, bS) {
        J.bi(location.dwr, 'BlogBeanNew', 'getComments', H.ckey, H.limit, H.offset, bS);
    };
    fK.DU = function (H, bS) {
        var bM = H.item,
            aT = {
                blogId: H.ckey,
                blogUserId: nb.c.bC.userId,
                blogTitle: '',
                content: bM.ipt.content ? bM.ipt.content : bM.ipt,
                publisherNickname: bM.ipt.nick ? bM.ipt.nick : U.gn(nb.c.aH.nickName),
                publisherEmail: '',
                mainComId: -1,
                replyComId: -1,
                replyToUserId: nb.c.bC.userId,
                replyToUserName: nb.c.bC.userName,
                replyToUserNick: U.gn(nb.c.bC.nickName)
            };
        if(nb.c.dn) {
            aT.synchMiniBlog = nb.w.hm.akS('comment');
        }
        var baA = bM.itm.groupInfo;
        if(baA.groupId > 0) {
            aT.moveFrom = 'group,' + baA.groupId + ',' + U.ad(baA.name);
        }
        if(!bM.itm.publishRole || bM.itm.publishRole == nb.c.aH.userId) {
            J.bi(location.dwr, 'BlogBeanNew', 'addBlogComment', aT, bM.ipt.code ? bM.ipt.code : '', false, bS, bS);
        } else {
            J.bi(location.dwr, 'BlogBeanNew', 'addMUBBlogComment', aT, bM.ipt.code ? bM.ipt.code : '', false, bS, bS);
        }
    };
    fK.la = function (followOrCancel, nF) {
        if(!this.zo) {
            this.zo = true;
            J.bi(location.dwr, 'UserFollowBeanNew', 'followUser', nb.c.bC.userId, nF, false, this.PM.K(this, followOrCancel));
        }
    };
    fK.PM = function (followOrCancel, av) {
        this.zo = false;
        this.R('onfollowset', followOrCancel, av);
    };
    fK.CG = function (followOrCancel) {
        J.bi(location.dwr, 'UserFollowBeanNew', 'cancelFollowUser', nb.c.bC.userId, this.R.K(this, 'onfollowset', followOrCancel));
    };
    fK.DI = function () {
        J.bi(location.dwr, 'UserBeanNew', 'removeFriend', nb.c.aH.userId + '', false, this.R.K(this, 'delfriend'));
    };
    fK.bcq = function (ax) {
        J.bi(location.dwr, 'ReportBean', 'alreadyReportBlog', ax, this.R.K(this, 'onalreadyreportblog'));
    };
    fK.PG = function (ax, hh, If, jK, Kc) {
        if(nb.c.dn) {
            J.bi(location.dwr, 'ReportBean', 'reportBlog', ax, hh, If, false, this.R.K(this, 'onaddreport'));
        } else {
            J.bi(location.dwr, 'ReportBean', 'reportBlogAnonymous', ax, jK, Kc, hh, If, false, this.R.K(this, 'onaddreport'));
        }
    };
    fK.Nv = function (T) {
        if(nb.c.dn) {
            J.bi(location.dwr, 'ReportBean', 'alreadyReportCommentIdEncode', T.id, 20, T.publisherId, this.Og.K(this, T));
        } else {
            this.Og(T, false);
        }
    };
    fK.Og = function (T, xj) {
        this.R('onalreadyreport', T, xj);
    };
    fK.cpx = function (T, pk, jK, Kc) {
        T = T || {};
        T.commentType = 20;
        if(nb.c.dn) {
            J.bi(location.dwr, 'ReportBean', 'reportCommentIdEncode', T.id, T.commentType, T.publisherId, pk, T.content || '', false, this.bqG.K(this));
        } else {
            J.bi(location.dwr, 'ReportBean', 'reportCommentAnonymous', jK || '', Kc || '', T.id, T.commentType, T.publisherId, pk, T.content || '', false, this.bqG.K(this));
        }
    };
    fK.bqG = function (fi) {
        if(!!fi) {
            E.bN('举报评论成功！', true, false, 'success');
        } else {
            E.bN('举报评论失败,请稍候再试...', true, false, 'fail');
        }
    };
    fK.cst = function (bPc, bS) {
        J.bi(location.dwr, 'BlogBeanNew', 'getAttachmentsDownloadCount', bPc, false, bS);
    };
    fK.bcD = function (gL) {
        this.aQe(gL, this.aQg.K(this, gL));
    };
    fK.aQe = function (gL, bS) {
        J.bi(location.dwr, 'VoteBeanNew', 'addVoteDetailForNoLogin', gL, false, bS);
    };
    fK.aQg = function (gL, ai) {
        this.R('onaddvoteamy', gL, ai);
    };
    fK.bcS = function (gL) {
        this.aQW(gL, this.xz.K(this, gL));
    };
    fK.aQW = function (gL, bS) {
        J.bi(location.dwr, 'VoteBeanNew', 'addVoteDetail', gL, false, bS);
    };
    fK.xz = function (gL, ai) {
        this.R('onaddvote', gL, ai);
    };
    fK.aZP = function (qk, fP) {
        this.bbM(qk, fP, this.baa.K(this));
    };
    fK.bbM = function (qk, fP, bS) {
        J.bi(location.dwr, 'VoteBeanNew', 'deleteVoteForBlog', qk, nb.c.bC.userId, fP, bS);
    };
    fK.baa = function (ai) {
        this.R('ondeletevote', ai);
    };
    fK.aIi = function (H) {
        this.anU(H, this.aoc.K(this));
    };
    fK.anU = function (H, bS) {
        J.bi(location.dwr, 'VoteBeanNew', 'getRecentVoteDetail', H.id, bS);
    };
    fK.aoc = function (D) {
        if(D && D.length > 0) {
            this.aD('newvote', D);
        }
        this.R('onvoteload', D);
    };
    fK.aBX = function (H) {
        this.akn(H, this.akz.K(this));
    };
    fK.akn = function (H, bS) {
        J.bi(location.dwr, 'VoteBeanNew', 'getFriendVoteDetail', H.id, nb.c.aH.userId, bS);
    };
    fK.akz = function (D) {
        this.R('onvoteload', D);
    };
    fK.Ga = function (bVj, axJ) {
        nb.w.hm.byv(this.OF.K(this, axJ), bVj, axJ);
    };
    fK.OF = function (axJ, T) {
        var hK = nb.w.hm.bvP(T);
        this.R('ongetmbscreenname', hK, axJ);
    };
    p.Qp = C();
    wE = p.Qp.at(nb.w.xA, true);
    wE.bR = function () {
        this.aS();
    };
    wE.aU = function (H) {
        H = H || O;
        this.Q('oncommentreport', H.oncommentreport);
        p.Qp.aZ.aU.call(this, H);
        this.agw = H.recomBlogHome || false;
        this.fJ(nb.c.qu || nb.c.aH.isMultiUserMember ? true : false);
    };
    wE.eE = function () {
        var A;
        var eS = '<span class="m2a">回复</span>';
        if(!!this.agw) {
            eS += '<span style="display:none;" class="reportArea"><span class="fc07 sep">|</span><span class="m2a btnReport">举报</span></span>';
        }
        var aY = 0;
        if(!!this.I.moveFrom) {
            if(this.I.moveFrom.toLowerCase() == 'mini_blog') {
                eS = '<span class="pright"><span class="fc05">来自</span><a class="m2a fc03" href="http://t.163.com">网易微博</a></span>' + eS;
                aY = 1;
            } else if(this.I.moveFrom.toLowerCase() == 'tqq') {
                eS = '<span class="pright"><span class="fc05">来自</span><a class="m2a fc03" href="http://t.qq.com">腾讯微博</a></span>' + eS;
                aY = 1;
            } else if(this.I.moveFrom.indexOf('group') == 0) {
                eS = '<span class="pright"><span class="fc05">来自</span>' + this.aHN(this.I.moveFrom) + '</span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'wap') {
                eS = '<span class="pright fc07">来自<a target="_blank" class="noul pnt fc03" href="http://blog.163.com/services/wapblog.html?frompersonalbloghome">网易手机博客</a></span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'iphone') {
                eS = '<span class="pright fc07">来自iPhone客户端</span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'android') {
                eS = '<span class="pright fc07">来自Android客户端</span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'mobile') {
                eS = '<span class="pright fc07">来自<a target="_blank" class="noul pnt fc03" href="http://blog.163.com/services/emsblog.html?frompersonalbloghome">网易短信写博</a></span>' + eS;
                aY = 1;
            }
        }
        this.cL.innerHTML = eS;
        A = E.aM(this.cL);
        V.Q(A[0 + aY], 'click', this.ig.K(this));
        if(!!this.agw) {
            A = E.bz(this.cL, 'reportArea') || [];
            this.amQ = A[0];
            A = E.bz(this.cL, 'btnReport') || [];
            this.aXn = A[0];
            V.Q(this.aXn, 'click', this.aTA.K(this));
            V.Q(this.M, 'mouseover', this.aSx.K(this));
            V.Q(this.M, 'mouseout', this.aTK.K(this));
        }
    };
    wE.aHN = function (bRG) {
        var bel = bRG.split(',');
        if('group' == bel[0]) return '<a class="m2a fc03" target="_blank" href="http://blog.163.com/g/' + bel[1] + '/">' + bel[2] + '</a>';
        else return '';
    };
    wE.aSx = function (L) {
        this.amQ.style.display = '';
    };
    wE.aTK = function (L) {
        this.amQ.style.display = 'none';
    };
    wE.aTA = function (L) {
        V.bU(L);
        if(!this.I.publisherId || this.I.publisherId <= 0) {
            this.I.publisherId = -1;
        }
        if(nb.c.dn && nb.c.aH.userId == this.I.publisherId) {
            E.bN('不能举报自己的评论！', true, false, 'fail');
            return;
        }
        this.R('oncommentreport', this.I);
    };
    wE.ao = function (T) {
        p.Qp.aZ.ao.call(this, T);
        var fM;
        if(!!this.I.publisherName) {
            if(this.I.valid == -2) {
                this.cx.src = location.f60;
            } else {
                var Rq = '';
                if(this.I.publisherName == nb.c.aH.userName) {
                    Rq = '&r=' + nb.c.aH.imageUpdateTime;
                } else if(this.I.publisherName == nb.c.bC.userName) {
                    Rq = '&r=' + nb.c.bC.imageUpdateTime;
                }
                this.cx.src = nb.x.LU(this.I.publisherName) + Rq;
            }
            fM = nb.x.bQ(this.I.publisherName);
            this.cx.parentNode.href = fM;
            this.bK.innerHTML = '<a title="' + U.ad(this.I.publisherNickname) + '" class="fc03 noul" target="_blank" href="' + fM + '"><span class="m2a">' + U.ad(this.I.publisherNickname) + '</span></a>';
            if(this.I.publisherName == nb.c.bC.userName) {
                this.bK.childNodes[0].insertAdjacentHTML('afterBegin', '<span title="博主" class="iblock icn0 icn0-49">&nbsp;</span>');
            }
        } else {
            this.cx.src = location.f60;
            if(!!this.I.ipName) {
                this.cx.title = this.I.ipName;
                this.bK.innerHTML = '<span title="' + this.I.ipName + '" class="fc07">' + U.ad(this.I.publisherNickname) + '</span>';
            } else {
                this.bK.innerHTML = '<span class="fc07">' + U.ad(this.I.publisherNickname) + '</span>';
            }
        }
        this.es.innerText = nb.x.jx(this.I.publishTime);
        this.cP.innerHTML = this.I.content;
        if(!!T.subComments && T.subComments.length > 0) {
            this.uF(this.I);
            this.oS(true);
        } else {
            this.oS(false);
        }
    };
    wE.xo = function (L) {
        if(!this.I.publisherName) {
            V.bU(L);
        }
    };
    wE.uF = function (T) {
        var H = {
            recomBlogHome: this.agw,
            oncommentreplyreport: this.aTe.K(this),
            onadd: this.oJ.K(this, 1),
            ondelete: this.oJ.K(this, 2),
            oedit: {
                'class': 'edt-cmt',
                nofocus: true,
                fixed: true,
                maxlength: 1000,
                iclass: nb.w.gy,
                group: 'commentreply',
                body: document.sbody,
                hasMiniBlog: true,
                miniBlogType: 'comment'
            }
        };
        if(!nb.c.bC.isMultiUserBlog) {
            H.oedit.hasMiniBlog = true;
        } else {
            H.oedit.hasMiniBlog = false;
        }
        if(!nb.c.dn) {
            H.oedit.iclass = nb.w.ov;
            H.oedit.parentId = this.I.blogId + '_float';
        }
        this.gM = p.aco.as(T.subComments, this.hT, H);
    };
    wE.aTe = function (T) {
        this.R('oncommentreport', T);
    };
    wE.Hv = function (dR) {
        if(!!this.gM) {
            for(var l = this.gM.length; l--;) {
                if(!!this.gM[l].bI) {
                    this.gM[l].bI.ew(dR);
                }
            }
        }
        p.Qp.aZ.Hv.call(this, dR);
    };
    wE.ig = function () {
        if(!this.dH) {
            this.dH = document.cloneElement('div', 'commentcntwrap');
        }
        this.cP.insertAdjacentElement('afterEnd', this.dH);
        this.bw.parent = this.dH;
        this.bw.onbeforedestroy = this.kZ.K(this);
        this.bw.lhint = '<div class="fc07">回复&nbsp;<span class="fc07">' + U.ad(this.I.publisherNickname) + '</span></div>';
        this.fJ(false);
        p.Qp.aZ.ig.call(this);
        if(!!nb.c.bC.isMultiUserBlog && !!nb.c.aH.isOnwer) {
            var uu = [{
                userId: nb.c.aH.userId,
                userName: nb.c.aH.userName,
                nickName: U.gn(nb.c.aH.nickName)
            }, {
                userId: nb.c.bC.userId,
                userName: nb.c.bC.userName,
                nickName: U.gn(nb.c.bC.nickName)
            }];
            if(!this.AC) {
                this.AC = document.cloneElement('div', 'cmtMultiUserRole fc03');
            }
            this.dH.insertAdjacentElement('beforeEnd', this.AC);
            var cJ = [];
            for(var i = 0; i < 2; i++) {
                var bM = {
                    t: uu[i].nickName,
                    v: uu[i].userId
                };
                cJ.push(bM);
            }
            var Ab = {
                'class': 'selectRole',
                hideListIfListShowed: true,
                items: cJ,
                'onchange': this.adm.K(this, cJ)
            };
            if(!this.uO) {
                Ab.items[0].hideThisOption = true;
                this.uO = P(N.ui).Ei.as(this.AC, Ab);
            } else {
                this.uO.bc(Ab);
            }
        }
    };
    wE.adm = function (cJ, wk) {
        if(!!this.I) this.I.publishRole = wk;
        if(!this.uO || !cJ || cJ.length < 2) return;
        for(var i = 0; i < 2; i++) {
            if(this.I.publishRole == cJ[i].v) {
                cJ[i].hideThisOption = true;
            } else {
                cJ[i].hideThisOption = false;
            }
        }
        this.uO.acY(cJ);
    };
    wE.kZ = function () {
        this.dH = E.cX(this.dH);
        this.fJ(true);
    };
    wE.aN = function () {
        this.vT();
        p.Qp.aZ.aN.call(this);
    };
    wE.vT = function () {
        this.gM = p.aco.ah(this.gM);
    };
    p.aco = C();
    FY = p.aco.at(nb.w.Jn, true);
    FY.bR = function () {
        this.aS();
    };
    FY.aU = function (H) {
        p.aco.aZ.aU.call(this, H);
        H = H || O;
        this.Q('oncommentreplyreport', H.oncommentreplyreport);
        this.agw = H.recomBlogHome || false;
        if(!nb.c.bC.isMultiUserBlog) {
            this.bw.hasMiniBlog = true;
        } else {
            this.bw.hasMiniBlog = false;
        }
        this.bw.miniBlogType = 'comment';
        this.fJ(nb.c.qu || nb.c.aH.isMultiUserMember ? true : false);
    };
    FY.eE = function () {
        var A;
        var eS = '<span class="m2a">回复</span>';
        if(!!this.agw) {
            eS += '<span style="display:none;" class="reportReplyArea"><span class="fc07 sep">|</span><span class="m2a btnReport">举报</span></span>';
        }
        var aY = 0;
        if(!!this.I.moveFrom) {
            if(this.I.moveFrom.toLowerCase() == 'mini_blog') {
                eS = '<span class="pright"><span class="fc05">来自</span><a class="m2a fc03" href="http://t.163.com">网易微博</a></span>' + eS;
                aY = 1;
            } else if(this.I.moveFrom.toLowerCase() == 'tqq') {
                eS = '<span class="pright"><span class="fc05">来自</span><a class="m2a fc03" href="http://t.qq.com">腾讯微博</a></span>' + eS;
                aY = 1;
            } else if(this.I.moveFrom.indexOf('group') == 0) {
                eS = '<span class="pright"><span class="fc05">来自</span>' + this.aHN(this.I.moveFrom) + '</span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'wap') {
                eS = '<span class="pright fc07">来自<a target="_blank" class="noul pnt fc03" href="http://blog.163.com/services/wapblog.html?frompersonalbloghome">网易手机博客</a></span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'iphone') {
                eS = '<span class="pright fc07">来自iPhone客户端</span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'android') {
                eS = '<span class="pright fc07">来自Android客户端</span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'mobile') {
                eS = '<span class="pright fc07">来自<a target="_blank" class="noul pnt fc03" href="http://blog.163.com/services/emsblog.html?frompersonalbloghome">网易短信写博</a></span>' + eS;
                aY = 1;
            }
        }
        this.cL.innerHTML = eS;
        A = E.aM(this.cL);
        V.Q(A[0 + aY], 'click', this.jQ.K(this));
        if(!!this.agw) {
            A = E.bz(this.cL, 'reportReplyArea') || [];
            this.amQ = A[0];
            A = E.bz(this.cL, 'btnReport') || [];
            this.aXn = A[0];
            V.Q(this.aXn, 'click', this.aTe.K(this));
            V.Q(this.M, 'mouseover', this.aSx.K(this));
            V.Q(this.M, 'mouseout', this.aTK.K(this));
        }
    };
    FY.aSx = function (L) {
        this.amQ.style.display = '';
    };
    FY.aTK = function (L) {
        this.amQ.style.display = 'none';
    };
    FY.aTe = function (L) {
        V.bU(L);
        if(!this.I.publisherId || this.I.publisherId <= 0) {
            this.I.publisherId = -1;
        }
        if(nb.c.dn && nb.c.aH.userId == this.I.publisherId) {
            E.bN('不能举报自己的评论！', true, false, 'fail');
            return;
        }
        this.R('oncommentreplyreport', this.I);
    };
    FY.jQ = function () {
        this.bw.onbeforedestroy = this.kZ.K(this);
        if(!this.dH) {
            this.dH = document.cloneElement('div', 'commentcntwrap');
        }
        this.cP.insertAdjacentElement('afterEnd', this.dH);
        this.bw.parent = this.dH;
        this.bw.lhint = '<div class="fc07">回复&nbsp;<span class="fc07">' + U.ad(this.I.publisherNickname) + '</span></div>';
        this.fJ(false);
        p.aco.aZ.jQ.call(this);
        if(!!nb.c.bC.isMultiUserBlog && !!nb.c.aH.isOnwer) {
            var uu = [{
                userId: nb.c.aH.userId,
                userName: nb.c.aH.userName,
                nickName: U.gn(nb.c.aH.nickName)
            }, {
                userId: nb.c.bC.userId,
                userName: nb.c.bC.userName,
                nickName: U.gn(nb.c.bC.nickName)
            }];
            if(!this.AC) {
                this.AC = document.cloneElement('div', 'cmtMultiUserRole fc03');
            }
            this.dH.insertAdjacentElement('beforeEnd', this.AC);
            var cJ = [];
            for(var i = 0; i < 2; i++) {
                var bM = {
                    t: uu[i].nickName,
                    v: uu[i].userId
                };
                cJ.push(bM);
            }
            var Ab = {
                'class': 'selectRole',
                hideListIfListShowed: true,
                items: cJ,
                'onchange': this.adm.K(this, cJ)
            };
            if(!this.uO) {
                Ab.items[0].hideThisOption = true;
                this.uO = P(N.ui).Ei.as(this.AC, Ab);
            } else {
                this.uO.bc(Ab);
            }
        }
    };
    FY.adm = function (cJ, wk) {
        if(!!this.I) this.I.publishRole = wk;
        if(!this.uO || !cJ || cJ.length < 2) return;
        for(var i = 0; i < 2; i++) {
            if(this.I.publishRole == cJ[i].v) {
                cJ[i].hideThisOption = true;
            } else {
                cJ[i].hideThisOption = false;
            }
        }
        this.uO.acY(cJ);
    };
    FY.kZ = function () {
        this.dH = E.cX(this.dH);
        this.fJ(true);
    };
    FY.ao = function (T) {
        p.aco.aZ.ao.call(this, T);
        var aF = '',
            fM = '';
        this.es.innerText = nb.x.jx(this.I.publishTime);
        if(!!this.I.publisherName) {
            if(this.I.valid == -2) {
                this.cx.src = location.f60;
            } else {
                this.cx.src = nb.x.LU(this.I.publisherName);
            }
            fM = nb.x.bQ(this.I.publisherName);
            this.cx.parentNode.href = fM;
            aF = '<a class="fc03 noul" title="' + U.ad(this.I.publisherNickname) + '" target="_blank" href="' + fM + '">';
            if(this.I.publisherName == nb.c.bC.userName) {
                aF += '<span title="博主" class="iblock icn0 icn0-49">&nbsp;</span>';
            }
            aF += '<span class="m2a">' + U.ad(this.I.publisherNickname) + '</span></a>';
        } else {
            this.cx.src = location.f60;
            if(!!this.I.ipName) {
                this.cx.title = this.I.ipName;
                aF = '<span title="' + this.I.ipName + '" class="fc07">' + U.ad(this.I.publisherNickname) + '</span>';
            } else {
                aF = '<span class="fc07">' + U.ad(this.I.publisherNickname) + '</span>';
            }
        }
        if(!!this.I.mainComId > 0) {
            fM = nb.x.bQ(this.I.replyToUserName);
            if(!!this.I.replyToUserName) {
                aF += '<span class="fc07">&nbsp;回复&nbsp;</span><a class="fc03 noul" title="' + U.ad(this.I.replyToUserNick) + '" target="_blank" href="' + fM + '">';
                if(this.I.replyToUserName == nb.c.bC.userName) {
                    aF += '<span title="博主" class="iblock icn0 icn0-49">&nbsp;</span>';
                }
                aF += '<span class="m2a">' + U.ad(this.I.replyToUserNick) + '</span></a>';
            } else {
                if(!!this.I.ipName) {
                    aF += '<span class="fc07">&nbsp;回复&nbsp;</span><span title="' + this.I.ipName + '" class="fc07">' + U.ad(this.I.replyToUserNick) + '</a>';
                } else {
                    aF += '<span class="fc07">&nbsp;回复&nbsp;</span><span class="fc07">' + U.ad(this.I.replyToUserNick) + '</a>';
                }
            }
        }
        this.bK.innerHTML = aF;
        this.cP.innerHTML = this.I.content;
    };
    FY.xo = function (L) {
        if(!this.I.publisherName) {
            V.bU(L);
        }
    };
    p.azU = C();
    FD = p.azU.at(P(N.ut).lq);
    FD.bR = function (ak, H) {
        if(!ak) return;
        this.aS();
        this.I = H.d;
        this.Q('onclose', H.onclose);
        this.G = new p.abW({
            oncite: this.cut.K(this),
            onemaillimit: this.cdv.K(this),
            ontrackbackload: this.cfu.K(this)
        });
        this.M = this.dw();
        this.G.bxI(this.I.id);
        ak.appendChild(this.M);
    };
    FD.dw = function () {
        var bF = document.cloneElement('div'),
            bzm = "http://blog.163.com/share.do?bid=" + this.I.id + "&r=1&host=" + nb.c.aH.userName + "&uid=" + nb.c.bC.userId,
            A;
        bF.innerHTML = E.aI('m-3-txt-2');
        A = E.bz(bF, 'ztag');
        this.bEn = A[1];
        V.Q(A[0], 'click', this.cUI.K(this));
        return bF;
    };
    FD.cWM = function (L) {
        nb.l.cO.bm();
        V.bU(L);
    };
    FD.cfu = function (D) {
        if(!!D && D.length > 0) {
            this.bEn.innerHTML = E.aI('m-3-jst-5', {
                d: D
            });
            E.bL(this.bEn, 'phide');
        }
    };
    FD.cWL = function (L) {
        if(window.clipboardData) {
            window.clipboardData.setData('Text', window.location.href);
            nb.l.hR.bm({
                cnt: '复制成功，您可以将其粘贴到QQ/MSN上的好友啦！'
            });
        } else {
            nb.l.hR.bm({
                cnt: '你的浏览器安全设置不允许自动执行复制操作，请选中文本使用键盘(Ctrl+C)复制！'
            });
            E.bL(this.cQV, 'phide');
            this.cQV.select();
        }
    };
    FD.cUI = function (L) {
        this.R('onclose');
    };
    FD.cVT = function (L) {
        this.G.cqJ();
    };
    FD.cdv = function (ai) {
        if(ai <= 0) {
            nb.l.hR.bm({
                cnt: '您今天发送的邮件数已满'
            });
            return;
        }
        if(nb.c.dn) {
            p.buv.bm({
                data: this.I,
                elimit: ai,
                oncite: this.cVs.K(this)
            });
        } else {
            nb.l.cO.bm();
        }
    };
    FD.cVs = function (Uj, aF, _content) {
        this.G.coG(this.I, Uj, aF, _content);
    };
    FD.cut = function (aF, Uj) {
        p.buJ.bm({
            blogTitle: aF,
            emails: Uj,
            onok: this.cVT.K(this)
        });
    };
    p.xl = C();
    eu = p.xl.at(P(N.ui).eB, true);
    eu.bR = function (bv, H) {
        this.I = H.d || O;
        this.cN();
        this.aS(bv, H);
    };
    eu.cN = function () {
        this.cB = p.Qp;
        this.G = new p.abW({
            onalreadyreport: this.Oj.K(this),
            onfollowset: this.rw.K(this)
        });
    };
    eu.bd = function () {
        return nb.x.cF('m-3-txt-1');
    };
    eu.bT = function () {
        var A = E.bz(this.M, 'ztag');
        this.gS = A[0];
        this.Oi = E.aM(A[1]);
    };
    eu.bc = function (H) {
        this.iQ('oncmtcountupdate');
        this.iQ('onaddfriend');
        this.iQ('onsetfollow');
        this.Q('oncmtcountupdate', H.oncmtcountupdate);
        this.Q('onaddfriend', H.onaddfriend);
        this.Q('onsetfollow', H.onsetfollow);
        this.wX();
        this.G.dP(this.I.id, this.I.mainCommentCount);
        this.bo = {
            opage: {
                type: 1,
                pcase: this.Oi[1],
                index: 1
            },
            oitem: {
                icase: this.Oi[0],
                recomBlogHome: this.I.recomBlogHome,
                oncommentreport: this.aTA.K(this)
            },
            ocache: {
                ckey: this.I.id,
                number: 40,
                lazy: true,
                hkey: 'id'
            },
            oedit: {
                'class': 'edt-cmt',
                nofocus: true,
                fixed: true,
                maxlength: 1000,
                iclass: nb.w.ov,
                group: 'commentreply',
                body: document.sbody,
                hasMiniBlog: true,
                miniBlogType: 'comment'
            },
            onitemadd: this.aer.K(this),
            onitemdelete: this.Ck.K(this),
            onitemupdate: this.Jt.K(this),
            onafterchange: this.ro.K(this),
            onempty: this.fD.K(this)
        };
        if(!nb.c.bC.isMultiUserBlog) {
            this.bo.oedit.hasMiniBlog = true;
        } else {
            this.bo.oedit.hasMiniBlog = false;
        }
        if(nb.c.dn) {
            this.bo.oedit.iclass = nb.w.gy;
        } else {
            this.bo.oedit.parentId = this.I.id + '_float';
        }
        if(!this.dS) this.dS = new(P(N.fw).nJ)(this.cB, this.G, this.bo);
        else {
            this.dS.bc(this.bo);
        }
        p.xl.aZ.bc.call(this);
    };
    eu.aTA = function (T) {
        this.G.Nv(T);
    };
    eu.Oj = function (T, xj) {
        if(xj) {
            nb.l.zn.bm({
                title: '举报',
                message: '<p class="txtcenter">该评论已经被你举报过了。</p>'
            });
            return;
        }
        var eU = T.publisherName || '',
            qQ = T.publisherNickname || '';
        nb.l.bje.bm({
            title: '举报',
            type: '评论',
            data: T,
            user: {
                userName: eU,
                nickName: qQ
            },
            onaddreport: this.cTB.K(this, T)
        });
    };
    eu.cTB = function (T, pk, jK, Kc) {
        this.G.cpx(T, pk + 17, jK, Kc);
    };
    eu.wX = function () {
        if(this.I.id == 'fks_080074085095082067083094095095083084080065083095') {
            E.aV(this.gS, 'nolog') || E.bl(this.gS, 'nolog');
            this.gS.innerHTML = '<span class="fc07">此日志只允许用手机博客评论&nbsp;&nbsp; <a class="noul pnt" target="_blank" href="http://blog.163.com/services/wapblog.html?frompersonalbloghome"><span title="手机博客" class="iblock icn0 icn0-417">&nbsp;</span></a></span>';
            return;
        }
        this.bw = {
            'class': 'edt-cmt',
            maxlength: 1000,
            fixed: true,
            nofocus: true,
            body: document.sbody,
            onok: this.sU.K(this),
            hasMiniBlog: true,
            miniBlogType: 'comment'
        };
        if(!nb.c.bC.isMultiUserBlog) {
            this.bw.hasMiniBlog = true;
        } else {
            this.bw.hasMiniBlog = false;
        }
        if(nb.c.dn) {
            if(nb.c.qu || nb.c.aH.isMultiUserMember) {
                this.gS.innerHTML = '<div class="pleft"> <div class="nbw-fce nbw-f50"> <a target="_blank" hidefocus="true"><img onerror="this.src=location.f40" class="cwd ztag" /></a> <a target="_blank" class="fc03"><div class="cwd m2a thide ztag fc05"></div></a> </div> </div> <div class="redt ztag"></div>';
                var A = E.bz(this.gS, 'ztag');
                A[0].src = nb.x.LU(nb.c.aH.userName) + '&r=' + nb.c.aH.imageUpdateTime;
                A[0].parentNode.href = nb.x.bQ(nb.c.aH.userName);
                A[1].innerHTML = nb.c.aH.nickName;
                A[1].parentNode.href = nb.x.bQ(nb.c.aH.userName);
                if(this.bI) {
                    this.bI.aU(A[2], this.bw);
                } else {
                    this.bI = nb.w.gy.as(A[2], this.bw);
                }
                this.dH = A[2];
                if(!!nb.c.bC.isMultiUserBlog && !!nb.c.aH.isOnwer) {
                    var uu = [{
                        userId: nb.c.aH.userId,
                        userName: nb.c.aH.userName,
                        nickName: U.gn(nb.c.aH.nickName)
                    }, {
                        userId: nb.c.bC.userId,
                        userName: nb.c.bC.userName,
                        nickName: U.gn(nb.c.bC.nickName)
                    }];
                    if(!this.AC) {
                        this.AC = document.cloneElement('div', 'cmtMultiUserRole fc03');
                    }
                    this.dH.insertAdjacentElement('beforeEnd', this.AC);
                    var cJ = [];
                    for(var i = 0; i < 2; i++) {
                        var bM = {
                            t: uu[i].nickName,
                            v: uu[i].userId
                        };
                        cJ.push(bM);
                    }
                    var Ab = {
                        'class': 'selectRole',
                        hideListIfListShowed: true,
                        items: cJ,
                        'onchange': this.adm.K(this, cJ)
                    };
                    if(!this.uO) {
                        Ab.items[0].hideThisOption = true;
                        this.uO = P(N.ui).Ei.as(this.AC, Ab);
                    } else {
                        this.uO.bc(Ab);
                    }
                }
            } else {
                E.aV(this.gS, 'nolog') || E.bl(this.gS, 'nolog');
                switch(nb.c.KW) {
                case 0:
                    {
                        break;
                    }
                case 1:
                    {
                        break;
                    }
                case 2:
                    {
                        this.gS.innerHTML = '<span class="iblock icn0 icn0-516">&nbsp;</span> 添加博主为博友、通过对方确认后可以发表评论，请先加为博友。<span class="m2a fc03">加为博友&gt;&gt;</span>';
                        V.Q(this.gS.getElementsByTagName('span')[1], 'click', this.lC.K(this));
                        break;
                    }
                case 3:
                    {
                        this.gS.innerHTML = '<span class="iblock icn0 icn0-516">&nbsp;</span> 该内容仅供欣赏。';
                        break;
                    }
                case 4:
                    {
                        this.gS.innerHTML = '<span class="iblock icn0 icn0-516">&nbsp;</span> 该内容仅供欣赏。';
                        break;
                    }
                }
            }
        } else {
            if(nb.c.qu) {
                this.bw.parentId = this.I.id;
                if(this.bI) {
                    this.bI.aU(this.gS, this.bw);
                } else {
                    this.bI = nb.w.ov.as(this.gS, this.bw);
                }
            } else {
                E.aV(this.gS, 'nolog') || E.bl(this.gS, 'nolog');
                switch(nb.c.KW) {
                case 0:
                    {
                        break;
                    }
                case 1:
                    {
                        this.gS.innerHTML = '<span class="iblock icn0 icn0-516">&nbsp;</span> 登录后你可以发表评论，请先登录。<span class="m2a fc03">登录&gt;&gt;</span>';
                        V.Q(this.gS.getElementsByTagName('span')[1], 'click', this.ox.K(this));
                        break;
                    }
                case 2:
                    {
                        this.gS.innerHTML = '<span class="iblock icn0 icn0-516">&nbsp;</span> 登录并添加博主为博友、通过对方确认后可以发表评论，请先登录。<span class="m2a fc03">登录&gt;&gt;</span>';
                        V.Q(this.gS.getElementsByTagName('span')[1], 'click', this.ox.K(this));
                        break;
                    }
                case 3:
                    {
                        this.gS.innerHTML = '<span class="iblock icn0 icn0-516">&nbsp;</span> 该内容仅供欣赏。';
                        break;
                    }
                case 4:
                    {
                        this.gS.innerHTML = '<span class="iblock icn0 icn0-516">&nbsp;</span> 该内容仅供欣赏。';
                        break;
                    }
                }
            }
        }
    };
    eu.adm = function (cJ, wk) {
        if(!!this.I) this.I.publishRole = wk;
        if(!this.uO || !cJ || cJ.length < 2) return;
        for(var i = 0; i < 2; i++) {
            if(this.I.publishRole == cJ[i].v) {
                cJ[i].hideThisOption = true;
            } else {
                cJ[i].hideThisOption = false;
            }
        }
        this.uO.acY(cJ);
    };
    eu.ox = function () {
        this.fk = {
            xparam: {}
        };
        this.fk.xparam.op = '';
        if(!nb.l.cO) return;
        nb.l.cO.bm(this.fk);
    };
    eu.ro = function () {
        if(!this.oI) {
            this.oI = true;
        } else {
            nb.x.mU(this.M);
        }
    };
    eu.aN = function () {
        if(this.bI) {
            this.bI = this.bI.constructor.ah(this.bI);
        }
        if(this.dS) {
            this.dS.aN();
            this.dS = null;
        }
        p.xl.aZ.aN.call(this);
    };
    eu.fD = function () {
        this.bo.oitem.icase.innerHTML = '';
    };
    eu.sU = function (dJ) {
        if(this.dS) {
            this.dS.GA({
                itm: this.I,
                ipt: dJ
            });
        }
    };
    eu.aer = function (ai, T) {
        if(!!this.bI.ny) {
            this.bI.ny();
        }
        if(!!this.dS) {
            this.dS.aiE();
        }
        if(!T) {
            return;
        }
        if(BW(ai)) {
            return;
        }
        if(!!ai && !ai.javaClassName) {
            E.bN('评论添加成功！', true, false, 'success');
            this.dS.ay();
            this.bI.ay();
            this.ub(1, 1);
        } else {
            E.bN('评论添加失败！', true, false, 'fail');
        }
    };
    eu.Ck = function (ai, T) {
        if(!T) return;
        if(ai) {
            E.bN('评论删除成功！', true, false, 'success');
            this.dS.ay();
            this.ub(-1, -(1 + T.item.subComments.length));
        } else {
            E.bN('评论删除失败！', true, false, 'fail');
        }
    };
    eu.Jt = function (ai, T) {
        if(!!this.bI.ny) {
            this.bI.ny();
        }
        if(!!this.dS) {
            this.dS.aiE();
        }
        if(!T) {
            return;
        }
        if(BW(ai)) {
            return;
        }
        if(!!ai && !ai.javaClassName) {
            switch(T.item.cmd) {
            case 0:
                {
                    break;
                }
            case 1:
                {
                    E.bN('评论添加成功！', true, false, 'success');
                    this.ub(0, 1);
                    break;
                }
            case 2:
                {
                    E.bN('评论删除成功！', true, false, 'success');
                    this.ub(0, -1);
                    break;
                }
            }
            this.dS.ay();
        } else {
            E.bN('操作不成功！', true, false, 'fail');
        }
    };
    eu.ub = function (bhv, aYI) {
        this.I.mainCommentCount += bhv || 0;
        this.I.commentCount += aYI || 0;
        this.R('oncmtcountupdate', this.I.commentCount);
    };
    eu.lC = function () {
        if(!nb.c.Kj) {
            if(!nb.c.dn) {
                nb.l.cO.bm();
            } else this.isBlackUser(2);
        } else {
            !nb.c.dn ? nb.l.cO.bm({
                xparam: {
                    'op': 'addfriend'
                }
            }) : this.jl(1);
        }
    };
    eu.jl = function (bP) {
        if(nb.c.bC.isBlack == undefined) J.bi(location.dwr, 'UserBeanNew', 'isBlackUser', this.fV.K(this, bP));
        else this.fV(bP, nb.c.bC.isBlack);
    };
    eu.fV = function (bP, cK) {
        if(nb.c.bC.isBlack != cK) {
            nb.c.bC.isBlack = cK;
        }
        if(cK) {
            E.bN('由于对方的权限设置，您暂时不能完成该操作!', true, false, 'fail');
        } else {
            if(bP == 1) nb.l.yR.bm({
                onok: this.lL.K(this)
            });
            else if(bP == 2) p.Aq.bm({
                onok: this.vc.K(this),
                title: '加为博友'
            });
        }
    };
    eu.lL = function (ia) {
        this.R('onaddfriend', ia);
    };
    eu.vc = function () {
        this.G.la(0, '');
    };
    eu.rw = function (followOrCancel, cV) {
        if(!cV) {
            E.bN('暂时无法设置关注，请稍后再试！', true, false, 'fail');
            return;
        } else {}
        this.R('onsetfollow', cV);
    };
    p.Ah = C();
    el = p.Ah.prototype;
    el.bR = function (ak, H) {
        if(!ak) return;
        this.I = H.d;
        this.dT();
        this.M = this.dw();
        this.ea();
        this.bc();
        ak = E.aq(ak);
        if(!!ak) ak.appendChild(this.M);
    };
    el.dT = function () {
        this.G = new p.abW({
            onshowminiblog: this.auo.K(this),
            onnewblogload: this.caK.K(this),
            onmultiuserblogsload: this.ceo.K(this),
            onrelateblogload: this.aFO.K(this),
            onrecommendblogload: this.caE.K(this),
            onselfrecomblogload: this.dfO.K(this),
            onrecommendreadload: this.cfc.K(this),
            onpersonalrecommendblogload: this.cbc.K(this),
            onfollowset: this.rw.K(this),
            delfriend: this.AS.K(this),
            ongetmbscreenname: this.Oy.K(this)
        });
    };
    el.dw = function () {
        var bF = E.aO(nb.x.cF('m-3-txt-0')),
            A = E.bz(bF, 'ztag');
        var i = 0;
        this.XT = A[i++];
        this.dfJ = A[i++];
        this.dgO = A[i++];
        this.dgT = A[i++];
        this.cSa = A[i++];
        this.cUP = A[i++];
        this.cUS = A[i++];
        this.cFk = A[i++];
        this.cFq = A[i++];
        this.cWg = A[i++];
        this.aHu = A[i++];
        this.cLS = A[i++];
        this.cLq = A[i++];
        this.cFF = A[i++];
        this.cGt = A[i++];
        return bF;
    };
    el.bc = function () {
        var ax = this.I.id;
        var bqg = this.I.publisherId;
        if(nb.c.hP) {
            J.afU('bredt');
        } else {
            J.afU('br');
        }
        J.akE();
        this.G.dcy({
            id: ax
        });
        this.G.cmR({
            id: ax
        });
        J.ahW();
        if(this.I.selfRecomBlogCount > 0) this.G.dfU();
        else this.G.crJ({
            id: ax
        });
        if(bqg > 0) this.G.crG({
            multiUserId: nb.c.bC.userId,
            publisherId: bqg,
            blogId: ax
        });
        this.G.byr({
            id: ax
        });
        this.G.cms();
    };
    el.auo = function (cNd) {
        var rb = this.I.hostIntro;
        var bMz = false;
        var byo = '',
            T = {};
        if(rb.length > 260) {
            rb = rb.substring(0, 260);
            bMz = true;
            byo = ' ... >><a class="fc03 m2a" target="_blank" href="http://blog.163.com/' + nb.c.bC.userName + '/profile">详情</a>';
        }
        T.selfIntro = rb;
        T.userName = nb.c.bC.userName;
        T.nickname = nb.c.bC.nickName;
        this.XT.innerHTML = E.aI('m-3-jst-2', {
            a: T,
            fn: U.da,
            fn1: nb.x.gr,
            great260: bMz,
            suplement: byo
        });
        if(!nb.c.hP) {
            this.sc();
        }
        this.ddy(cNd);
    };
    el.ddy = function (cNd) {
        var A = E.bz(this.XT, 'xtag'),
            bVj = this.I.hmcon;
        this.ddd = A[0];
        this.bSy = A[1];
        if(!!cNd && !nb.w.hm.deC()) {
            if(nb.c.hP) {
                this.bSy.innerHTML = '我的网易微博';
                var hK = this.G.Ga(bVj, false);
                if(!!hK) {
                    this.Oy(hK, false);
                }
            } else if(bVj == '0' || bVj == '1') {
                V.Q(this.bSy, 'click', this.cgE.K(this));
                this.bSy.innerHTML = nb.c.bC.gender + '的网易微博';
                E.bL(this.ddd, 'phide');
                this.G.Ga(bVj, false);
            }
        }
    };
    el.cgE = function (L) {
        V.bU(L);
        if(this.bSy.href.indexOf('t.163.com') < 0) {
            this.G.Ga(this.I.hmcon, true);
        } else {
            window.open(this.bSy.href);
        }
    };
    el.Oy = function (hK, axJ) {
        if(nb.c.hP && !!hK) {
            this.bSy.innerHTML = '我的网易微博';
            E.bL(this.ddd, 'phide');
            this.bSy.href = 'http://t.163.com/' + hK + '?f=blogme';
            if(this.I.hmcon != '0' && this.I.hmcon != '1') {
                J.bi(location.dwr, 'MiniBlogConnectBean', 'refreshBlogConnectInfo', '0', '-1', '-1', '-1', function () {});
            }
        } else {
            if(!!hK) {
                this.bSy.href = 'http://t.163.com/' + hK + '?f=blogme';
                if(!!axJ) {
                    window.open(this.bSy.href);
                }
            }
        }
    };
    el.sc = function () {
        var A = E.bz(this.XT, 'ztag'),
            dz, rU, vU;
        this.Bb = A[0];
        switch(this.I.friendstatus) {
        case 'friend':
            {
                rU = E.aO('<span class="ztag frd">我们是博友 <span class="cancel m2a" onclick="nb.p[\'m-3\'].g.df(event);">&lt;取消</span> </span>');
                E.cR(rU, 'js-hover');
                break;
            }
        case 'inviting':
            {
                rU = E.aO('<span class="ns">待确认&nbsp;&nbsp;&nbsp;&nbsp;</span>');
                break;
            }
        default:
            {
                var str = '<span> <span class="iblock icn0 icn0-41">&nbsp;</span> <span class="fc03 ul ztag" onclick="nb.p[\'m-3\'].g.af(event);">加博友</span> </span>';
                if(nb.c.bC.isMultiUserBlog) {
                    str = '<span> </span>';
                }
                rU = E.aO(str);
                break;
            }
        }
        switch(this.I.followstatus) {
        case 'friend':
            {
                break;
            }
        case 'follow':
            {
                if(this.I.friendstatus == 'friend') break;
                vU = E.aO('<span class="ns follow"><span class="flld">已关注</span> <span class="cancel m2a" onclick="nb.p[\'m-3\'].g.sf(1);">&lt;取消</span> </span>');
                E.cR(vU, 'js-hover');
                break;
            }
        default:
            {
                vU = E.aO('<span> <span class="iblock icn0 icn0-016">&nbsp;</span> <span class="fc03 ul tofollow" onclick="nb.p[\'m-3\'].g.sf(0);">关注' + nb.c.bC.gender + '</span> </span>');
                break;
            }
        }
        this.Bb.innerHTML = '';
        if(rU) this.Bb.appendChild(rU);
        if(vU) this.Bb.appendChild(vU);
    };
    el.ea = function () {
        var cy = P('nb.p.m' + z + '.g');
        cy.sf = this.wd.K(this);
        cy.df = this.uj.K(this);
        cy.af = this.lC.K(this);
    };
    el.uj = function () {
        p.hA.bm({
            onok: this.EN.K(this),
            contentdesc: '<span class="fs1">您是否真的要删除该博友？</span><br/><span class="fs0 fc02">断开博友关系后，你将自动转为对方关注的博客，但是系统不会通知对方</span>',
            title: '删除博友'
        });
    };
    el.EN = function () {
        this.G.DI();
    };
    el.AS = function (jb) {
        if(jb) {
            E.bN('取消博友成功!', true, false, 'success');
            this.I.friendstatus = '';
            this.I.followstatus = '';
            this.sc();
        } else {
            E.bN('取消博友不成功!', true, false, 'fail');
        }
    };
    el.lC = function () {
        if(!nb.c.Kj) {
            if(!nb.c.dn) {
                nb.l.cO.bm();
            } else this.jl(2);
        } else {
            !nb.c.dn ? nb.l.cO.bm({
                xparam: {
                    'op': 'addfriend'
                }
            }) : this.jl(1);
        }
    };
    el.jl = function (bP) {
        if(nb.c.bC.isBlack == undefined) J.bi(location.dwr, 'UserBeanNew', 'isBlackUser', this.fV.K(this, bP));
        else this.fV(bP, nb.c.bC.isBlack);
    };
    el.fV = function (bP, cK) {
        if(nb.c.bC.isBlack != cK) {
            nb.c.bC.isBlack = cK;
        }
        if(cK) {
            E.bN('由于对方的权限设置，您暂时不能完成该操作!', true, false, 'fail');
        } else {
            if(bP == 1) nb.l.yR.bm({
                onok: this.lL.K(this)
            });
            else if(bP == 2) nb.l.Aq.bm({
                onok: this.vc.K(this),
                title: '加为博友'
            });
        }
    };
    el.lL = function (ia) {
        p.hA.bm({
            onok: window.F,
            contentdesc: '发送邀请成功，您现在已经关注了' + nb.c.bC.gender + '。<br/>以后&nbsp;<a class="fc04" href="' + nb.c.aH.baseUrl + 'manage/' + '">博客中心</a>&nbsp;能收到他的动态的更新了。',
            title: '加博友'
        });
        if(ia > 0) {
            this.I.friendstatus = 'inviting';
            this.I.followstatus = 'follow';
        } else if(ia <= -10) {
            this.I.friendstatus = 'friend';
        } else {
            this.I.friendstatus = '';
            this.I.followstatus = '';
        }
        this.sc();
    };
    el.wd = function (followOrCancel) {
        if(!nb.c.dn) {
            nb.l.cO.bm({
                xparam: {
                    'op': 'setfollow'
                }
            });
        } else if(followOrCancel == 1) {
            p.hA.bm({
                onok: this.II.K(this),
                contentdesc: '您真的要取消关注 ' + nb.c.bC.nickName + ' ？',
                title: '取消关注'
            });
        } else this.G.la(0, '');
    };
    el.rw = function (followOrCancel, av) {
        var cV = av == 'success';
        if(!cV) {
            if(av == 'maximum') {
                E.bN('你已经关注1000个博客了，关注量太大会让你忽略某些重要的关注信息！', true, false, 'fail');
                return;
            }
            if(av == 'blacked') {
                E.bN('由于对方权限设置，您暂时不能关注!', true, false, 'fail');
                return;
            }
            if(av == "valCode") {
                nb.l.Il.bm({
                    bJ: this.wY.K(this),
                    title: '关注' + (nb.c.bC.gender)
                });
                return;
            }
            if(av == 'friend') {
                E.bN('已经是博友', true, false, 'fail');
                this.I.friendstatus = 'friend';
                this.sc();
                return;
            }
            if(followOrCancel == 0) {
                E.bN('暂时无法设置关注，请稍后再试！', true, false, 'fail');
                return;
            } else {
                E.bN('暂时无法取消关注，请稍后再试！', true, false, 'fail');
                return;
            }
        } else {
            if(followOrCancel == 0) {
                this.I.followstatus = 'follow';
                this.sc();
                this.rC = E.aO('<div class="flw ztag"> <span class="iblock icn0 icn0-714">&nbsp;</span> 关注成功<br/>以后<a href="' + nb.x.bQ(nb.c.aH.userName) + 'manage/">博客中心</a>能收到' + nb.c.bC.gender + '的动态更新了。 </div>');
                this.Bb.insertAdjacentElement('beforeEnd', this.rC);
                this.dF = window.setTimeout(this.Qq.K(this), 5000);
            } else {
                this.I.followstatus = 'unfollow';
                this.sc();
                E.bN('成功取消关注!', true, false, 'success');
            }
        }
    };
    el.wY = function (nF) {
        this.G.la(0, nF);
    };
    el.vc = function () {
        this.G.la(0, '');
    };
    el.Qq = function () {
        E.cT(this.rC);
        window.clearInterval(this.dF);
    };
    el.II = function () {
        this.G.CG(1);
    };
    el.caK = function (D) {
        if(!!D && D.length > 0) {
            E.bL(this.dgT, 'phide');
            this.cSa.innerHTML = E.aI('m-3-jst-3', {
                a: D,
                fn: U.da,
                furl: nb.x.bQ,
                n: false
            });
        }
    };
    el.ceo = function (fP, D) {
        if(!!D && D.length > 0) {
            for(var i = D.length; i > 0; i--) {
                if(D[i - 1].id == fP) {
                    D.splice(i - 1, 1);
                    break;
                }
            }
        }
        if(!!D && D.length > 0) {
            E.bL(this.cUP, 'phide');
            this.cUS.innerHTML = E.aI('m-3-jst-3', {
                a: D,
                fn: U.da,
                furl: nb.x.bQ,
                n: false
            });
        }
    };
    el.aFO = function (D) {
        if(true) return;
    };
    el.caE = function (D) {
        if(!!D && D.length > 0) {
            E.bL(this.cFk, 'phide');
            this.cFq.innerHTML = E.aI('m-3-jst-6', {
                a: D,
                fn: U.da,
                furl: nb.x.bQ,
                n: true
            });
        }
    };
    el.dfO = function (D) {
        if(!!D && D.length > 0) {
            E.bL(this.dfJ, 'phide');
            this.dgO.innerHTML = E.aI('m-3-jst-11', {
                a: D,
                fn: U.da,
                furl: nb.x.bQ,
                n: false
            });
        }
    };
    el.cbc = function (D) {
        if(!!D && D.length > 0) {
            E.bL(this.cLS, 'phide');
            this.cLq.innerHTML = E.aI('m-3-jst-7', {
                a: D,
                fn: U.da,
                furl: nb.x.bQ,
                n: true
            });
        }
    };
    el.cfc = function () {
        if(nb.c.bC.isMultiUserBlog) {
            return;
        }
        if(!!window.recomReads) {
            E.bL(this.cFF, 'phide');
            recomReads.sort(function () {
                if(U.ar(1) > 4) {
                    return 1;
                } else {
                    return -1;
                }
            });
            this.cGt.innerHTML = E.aI('m-3-jst-8', {
                a: recomReads.slice(0, 6),
                fn: U.da,
                furl: nb.x.bQ,
                n: true
            });
        }
    };
    p.db = C();
    dr = p.db.at(nb.w.fc, true);
    dr.bR = function () {
        this.aS.apply(this, arguments);
        if(!!this.bq.bsrk && this.bq.bsrk > this.bq.srk) {
            this.bq.srk = this.bq.bsrk;
        }
        nb.w.dfQ.Wt(this.bq.srk);
        nb.w.hm.Wt(this.bq.mcon, this.bq.mset, this.bq.srk);
        nb.w.dfI.Wt(this.bq.srk);
        this.cN();
        this.ir();
        this.aTh(this.bq.type);
        this.cNS();
        this.hu();
        this.iB();
        this.ea();
        if(this.aCk()) {
            var dL = {
                nomove: true,
                postAddInfo: this.bq.postAddInfo,
                onclose: this.deI.K(this)
            };
            if(B.fa) dL.parent = document.sbody.parentNode;
            nb.l.abQ.bm(dL);
        } else if(nb.c.bvS) {
            if(B.fa) nb.l.avR.bm({
                nomove: true,
                parent: document.sbody.parentNode,
                nocenter: true
            });
            else nb.l.avR.bm({
                nomove: true,
                nocenter: true
            });
        } else {
            this.cMR();
        }
        this.cLC();
        this.dcF();
    };
    dr.cXf = function (fileIds) {
        this.G.cst(fileIds, this.bTc.K(this));
    };
    dr.bTc = function (T) {
        for(var k in T) {
            var Bi = E.aq('$_attachment_' + k);
            if(!!Bi) {
                Bi.innerText = '已下载' + T[k] + '次';
            }
        }
    };
    dr.ea = function () {
        var cy = P('nb.p.m' + z + '.g');
        cy.recommendBlog = this.aNf.K(this);
        cy.citeBlog = this.aRZ.K(this);
        cy.alf = this.cTW.K(this);
    };
    dr.cTW = function () {
        if(!nb.c.dn) {
            nb.l.cO.bm();
            return false;
        }
        return true;
    };
    dr.aNf = function () {
        this.KC();
    };
    dr.aRZ = function () {
        this.azJ();
        nb.x.mU(this.aCF);
    };
    dr.aCk = function () {
        if(!this.bq.postAddInfo.isAdShow) {
            return false;
        }
        var deU = U.gl(new Date(), 'MM_dd') + '_post_ad_postid';
        var axp = U.rA(deU);
        if(!axp) {
            axp = this.bq.id;
            U.zj(deU, axp, 'blog.163.com', 1, '/');
        } else if(axp == this.bq.id) {
            return false;
        }
        var deq = U.rA(U.gl(new Date(), 'MM_dd') + 'post_ad_session');
        if(!!deq) {
            return false;
        }
        var Qw = U.gl(new Date(), 'MM_dd') + '_post_ad_ct';
        var GY = parseInt(U.rA(Qw)) || 0;
        if(GY < 3) {
            U.zj(Qw, GY + 1, 'blog.163.com', 1, '/');
            return true;
        } else {
            return false;
        }
    };
    dr.deI = function () {
        var Qw = U.gl(new Date(), 'MM_dd') + '_post_ad_ct';
        var GY = parseInt(U.rA(Qw)) || 0;
        if(GY > 1) {
            U.zj(U.gl(new Date(), 'MM_dd') + 'post_ad_session', 1, 'blog.163.com', 0, '/');
        }
    };
    dr.cN = function () {
        this.oW = {
            c: p.Ah,
            o: {
                d: this.bq
            }
        };
        this.Ns = {
            c: p.azU,
            o: {
                d: this.bq,
                onclose: this.adN.K(this, 0)
            }
        };
        this.afy = {
            c: p.xl,
            o: {
                d: this.bq,
                oncmtcountupdate: this.ub.K(this),
                onaddfriend: this.azL.K(this),
                onsetfollow: this.aBO.K(this)
            }
        };
        this.cB = p.Qp;
        this.G = new p.abW({
            onrelateblogload: this.aFO.K(this),
            onhistoryblogload: this.bLo.K(this),
            onblogreaderload: this.bMg.K(this),
            onrecommendinfoload: this.bKK.K(this),
            onexistrecommend: this.bfv.K(this),
            onaddAnonymousBlogRecommend: this.dgA.K(this),
            onrecommend: this.bfk.K(this),
            onalreadyreportblog: this.cuK.K(this),
            onaddreport: this.ceI.K(this),
            onaddvote: this.FM.K(this),
            onaddvoteamy: this.FM.K(this),
            onvoteload: this.aiA.K(this),
            ongetmbscreenname: this.Oy.K(this)
        });
    };
    dr.ir = function () {
        var A = E.bz(this.M, 'ztag');
        this.Gy = A[0];
        this.zf = A[1];
        this.crN = A[2];
        A = E.aM(this.crN);
        this.crI = A[0];
        this.Oi = A[1];
        this.aCF = A[2];
        A = E.aM(this.crI);
        this.aoG = E.bz(E.bz(A[0], 'ztag')[0], 'stag');
        this.dcf = E.aq('$_fontswitch');
        this.ddb = E.aq('$_fontsTypes');
        if(!!this.dcf && !!this.ddb) {
            V.Q(this.dcf, 'mouseover', this.ddw.K(this, this.ddb));
            V.Q(this.dcf, 'mouseout', this.dcI.K(this, this.ddb));
        }
        this.cP = A[3];
        this.xV = A[5];
        this.Ym = A[8];
        V.Q(this.Ym, 'click', this.cDZ.K(this));
        V.Q(this.Ym, 'mouseup', this.dcN.K(this));
        E.kd(this.Ym, false);
        this.Zl = A[9];
        V.Q(this.Zl, 'click', this.cAi.K(this));
        V.Q(this.Zl, 'mouseup', this.dcN.K(this));
        E.kd(this.Zl, false);
        this.aUn = A[10];
        V.Q(this.aUn, 'click', this.dcW.K(this));
        E.kd(this.aUn, false);
        this.dbU = E.aq('$_mblogcardf');
        A = E.bz(this.Oi, 'ztag');
        this.me = A[0];
        this.aHu = A[1];
        this.aZO = A[2];
        this.xr = A[3];
        this.aoo(0);
        A = this.cP.getElementsByTagName('img');
        if(!!A) {
            for(var i = 0; i < A.length; i++) {
                A[i].removeAttribute('title');
                V.Q(A[i], 'mouseover', this.aJh.K(this, A[i], true));
                V.Q(A[i], 'mouseout', this.aJh.K(this, A[i], false));
            }
        }
        A = E.bz('$_suggestedreading2', 'srtag');
        if(!!A) {
            for(var i = 0; i < A.length; i++) {
                V.Q(A[i], 'mouseover', this.cJZ.K(this, A[i]));
                V.Q(A[i], 'mouseout', this.cJq.K(this, A[i]));
            }
        }
    };
    dr.ddw = function (bG, L) {
        V.bU(L);
        E.bL(bG, 'phide');
    };
    dr.dcI = function (bG, L) {
        V.bU(L);
        E.bl(bG, 'phide');
    };
    dr.cJZ = function (bG, L) {
        V.bU(L);
        E.bl(bG, 'bgc0');
    };
    dr.cJq = function (bG, L) {
        V.bU(L);
        E.bL(bG, 'bgc0');
    };
    dr.aTh = function (bP) {
        this.bj = bP || 0;
        switch(bP) {
        case 1:
            {
                E.aV(this.Gy, 'js-auto-098') && E.bL(this.Gy, 'js-auto-098');
                E.aV(this.Gy, 'js-fix-098') || E.bl(this.Gy, 'js-fix-098');
                break;
            }
        case 2:
            {
                E.aV(this.Gy, 'js-fix-098') && E.bL(this.Gy, 'js-fix-098');
                E.aV(this.Gy, 'js-auto-098') || E.bl(this.Gy, 'js-auto-098');
                break;
            }
        default:
            {
                E.aV(this.Gy, 'js-fix-098') && E.bL(this.Gy, 'js-fix-098');
                E.aV(this.Gy, 'js-auto-098') && E.bL(this.Gy, 'js-auto-098');
                break;
            }
        }
    };
    dr.iB = function () {
        this.IV();
        J.afU('rb');
        J.akE();
        if(!!bLi()) this.G.cnb({
            id: this.bq.id,
            permalink: this.bq.permalink,
            modifyTime: this.bq.modifyTime
        });
        this.G.cqM({
            publishTime: new Date(this.bq.publishTime).valueOf()
        });
        J.ahW();
        if(!(nb.c.hP && this.bq.isPublished == 0)) {
            this.G.crt({
                id: this.bq.id
            });
            this.adN();
        }
        this.cMt();
    };
    dr.cMt = function () {
        var aCE = nb.c.bC.userId;
        if(!this.bq.recomBlogHome && !this.bq.isShowYodaoAd) {
            if(!!E.aq('lofter_single')) {
                E.aq('lofter_single').innerHTML = this.bq.lofter_single || '';
            }
            return;
        }
        if(aCE == 171872926 || aCE == 721279 || aCE == 116638732 || aCE == 202150023) return;
        window.youdao_client = '1005';
        window.youdao_member = '110770';
        window.youdao_template = 'text_459_30';
        window.youdao_width = '459';
        window.youdao_height = '30';
        if(!!this.bq.recomBlogHome) {
            window.youdao_position = '1';
        } else {
            window.youdao_position = '2';
        }
        window.youdao_css_template = E.aq('blog-163-com-theme').href || '';
        window.youdao_blog_uid = aCE || 0;
        J.yQ('http://impservice.union.youdao.com/imp/leftblog_req_ads.js');
        if(!!E.aq('yodaoad_r')) {
            J.yQ('http://impservice.union.youdao.com/imp/rightblog_req_ads.js');
        }
    };
    dr.hu = function () {
        this.aB = new(P(N.ut).eH)(this.aoG, {
            onchange: this.bYD.K(this),
            index: 2
        });
        V.Q('$_spanRecommend', 'click', this.KC.K(this));
        V.Q('$_spanCite', 'click', this.azJ.K(this));
        V.Q('$_spanCiteCount', 'click', this.cVF.K(this));
        V.Q('$_spanReport', 'click', this.RC.K(this));
        V.Q('$_shareBtn_163weibo', 'click', this.Od.K(this));
        V.Q('$_shareBtn_qqweibo', 'click', this.cBP.K(this));
        V.Q('$_shareBtn_sinaweibo', 'click', this.PA.K(this));
        V.Q('$_shareBtn_renren', 'click', this.afp.K(this));
        V.Q('$_shareBtn_kaixin', 'click', this.axZ.K(this));
        V.Q('$_shareBtn_qq', 'click', this.ON.K(this));
        V.Q('$_shareBtn_douban', 'click', this.axo.K(this));
        V.Q('$_shareBtn_msn', 'click', this.NC.K(this));
        V.Q('$_applySpamBlogBtn_2', 'click', this.cSw.K(this, 0));
        V.Q('$_goodnightblog', 'click', this.cHB.K(this));
        V.Q('$_group_recommend', 'click', this.Yh.K(this));
        V.Q(this.cP, 'mouseup', this.dce.K(this));
        V.Q(document, 'mousedown', this.dcN.K(this));
        nb.x.Dl('$_spanShowRecommend', this.bRO.K(this));
        E.cR('$_spanShare', 'js-share-hover');
        this.ddN();
    };
    dr.ddN = function () {
        this.dfz = E.aq("$_shieldfield");
        if(!!this.dfz) {
            var A = E.bz(this.dfz, 'stag');
            this.deZ = A[0];
            this.ddU = A[1];
            this.dew = A[2];
            this.dej = A[3];
            V.Q(this.dew, 'click', this.dfx.K(this));
            V.Q(this.dej, 'click', this.dep.K(this));
            this.dfx();
            E.bL(this.ddU, 'phide');
        }
    };
    dr.dfx = function () {
        this.ddU.src = 'http://api.blog.163.com/cap/captcha.jpgx?parentId=' + nb.c.aH.userId + '&r=' + U.ar(6);
        this.deZ.value = '';
    };
    dr.cNS = function () {
        var bE = E.aq('$_blogTagInfo');
        var aKm = E.aq('$_blogTagTitle');
        if(!!bE && !!aKm) {
            var bTn = this.bq.blogTag;
            if(!!bTn) {
                var dz = "";
                var aVI = bTn.split(",");
                for(var i = 0; i < aVI.length; i++) {
                    dz += '<a href="' + nb.x.bQ(nb.c.bC.userName) + 'blog/#m=0&t=3&c=' + aVI[i] + '" class="fc03 m2a">' + U.ad(aVI[i]) + '</a>&nbsp;&nbsp;';
                }
                bE.innerHTML = dz;
                E.bL(bE, 'phide');
                E.bL(aKm, 'phide');
            }
        }
    };
    dr.Yh = function () {
        J.bi(location.dwr, 'GroupBean', 'getRecommendGroups', this.cOE.K(this));
    };
    dr.cOE = function (mk, L) {
        V.bU(L);
        if(!mk || mk.length <= 0) {
            nb.l.zn.bm({
                message: "只有小组创建者、管理员、投稿者连续3篇通过小组审核，才能推送别人的日志到小组"
            });
            return;
        } else {
            p.aIX.bm({
                blogId: this.bq.id,
                groups: mk,
                blogAuthorId: nb.c.bC.userId
            });
        }
    };
    dr.cHB = function (L) {
        if(!!L) {
            V.bU(L);
        }
        if(this.Uq()) {
            if(nb.c.gf == 0) {
                nb.l.cO.bm({
                    target: "#<root>manage/?gnb#m=0&t=1&ognb",
                    nocover: true
                });
            } else {
                location.href = nb.x.bQ(nb.c.aH.userName) + "manage/?gnb#m=0&t=1&ognb";
            }
        } else {
            nb.l.ahZ.bm({
                bgcolor: '#000',
                opacity: 50,
                nocover: true,
                onOK: function (remind) {
                    this.bq.remindgoodnightblog = remind;
                }.K(this)
            });
            if(!!this.bq.remindgoodnightblog) {
                E.aq('__gnb_need_remind__').checked = true;
            }
            if(nb.c.gf != 0) {
                E.bL('__gnb_need_remind_wrapper__', 'phide');
            }
        }
    };
    dr.Uq = function () {
        return true;
    };
    dr.bRO = function () {
        this.adN();
        var bE = E.aq('$_divRecommendContent');
        if(E.aV(bE, 'phide')) {
            E.bL(bE, 'phide');
            if(bE.innerHTML == '') {
                this.G.aJv(this.bq.id);
            }
        } else {
            E.bl(bE, 'phide');
        }
    };
    dr.bKK = function (T) {
        var bE = E.aq('$_divRecommendContent');
        bE.innerHTML = E.aI('m-3-jst-4', {
            a: T.recommenders,
            b: T.relatedBlogRecommends,
            fn: U.da,
            fn1: nb.x.gr
        });
    };
    dr.bYD = function (mo, FT) {
        if(FT != 0 && !FT) {
            FT = 2;
        }
        if(mo != 0 && !mo) {
            mo = 2;
        }
        E.aV(this.aoG[FT], 'js-fcurrent') && E.bL(this.aoG[FT], 'js-fcurrent fc05');
        E.aV(this.aoG[mo], 'js-fcurrent') || E.bl(this.aoG[mo], 'js-fcurrent fc05');
        E.aV(this.cP, 'js-fs' + FT) && E.bL(this.cP, 'js-fs' + FT);
        E.aV(this.cP, 'js-fs' + mo) || E.bl(this.cP, 'js-fs' + mo);
    };
    dr.RC = function () {
        this.G.bcq(this.bq.id);
    };
    dr.cuK = function (ai) {
        if(!ai) {
            nb.l.aup.bm({
                title: this.bq.blogTitle,
                onaddreport: this.Pn.K(this)
            });
        } else {
            nb.l.hR.bm({
                cnt: '该日志已经被你举报过了。'
            });
        }
    };
    dr.Pn = function (hh, If, jK, Kc) {
        if(hh < 0) return;
        this.G.PG(this.bq.id, hh, If, jK, Kc);
    };
    dr.ceI = function (ai) {
        if(ai) {
            E.bN('举报成功！', 'true', false, 'success');
        } else {
            E.bN('举报失败！', 'true', false, 'fail');
        }
    };
    dr.cDZ = function () {
        p.bns.bm({
            maxlength: 1000,
            parentId: this.bq.id,
            onimagecomment: this.dS.sU.K(this.dS),
            imageUrl: this.auG
        });
    };
    dr.KC = function () {
        if(nb.c.dn) {
            if(!!this.bq.isRecommend) {
                nb.l.hR.bm({
                    cnt: '你已经推荐过这篇日志啦'
                });
                return;
            }
            this.G.aZR(this.bq.id);
        } else {
            this.G.dhb(this.bq.id, nb.c.bC.userId);
        }
    };
    dr.bfv = function (ai) {
        if(ai == 1) {
            this.bq.isRecommend = true;
            nb.l.hR.bm({
                cnt: '你已经推荐过这篇日志啦'
            });
            return;
        } else {
            p.Na.bm({
                title: '推荐',
                data: this.bq,
                onrecommend: this.aDy.K(this)
            });
        }
    };
    dr.dgA = function (ai) {
        if(ai > 0) {
            E.aq('$_spanRecommendCount').innerText = parseInt(E.aq('$_spanRecommendCount').innerText) + 1;
            E.aV('$_spanShowRecommend', 'phide') && E.bL('$_spanShowRecommend', 'phide');
            return;
        }
        if(ai == -2) {
            nb.l.hR.bm({
                cnt: '你今天已经推荐过这篇日志啦'
            });
        } else {
            nb.l.hR.bm({
                cnt: '操作失败，请稍后再试'
            });
        }
    };
    dr.aDy = function (_content, dR) {
        this.G.azW(this.bq.id, _content, dR);
    };
    dr.bfk = function (bXJ, bXg) {
        if(bXJ) {
            this.bq.isRecommend = true;
            E.bN('推荐成功', true, false, 'success');
            E.aq('$_spanRecommendCount').innerText = parseInt(E.aq('$_spanRecommendCount').innerText) + 1;
            E.aV('$_spanShowRecommend', 'phide') && E.bL('$_spanShowRecommend', 'phide');
            var bE = E.aq('$_divRecommendContent');
            if(E.aV('$_divRecommendContent', 'phide')) {
                E.aq('$_divRecommendContent').innerHTML = '';
                V.R('$_spanShowRecommend', 'click');
            } else {
                this.G.aJv(this.bq.id);
            }
        }
        if(bXg) {
            this.bq.mainCommentCount += 1;
            this.adN();
        }
    };
    dr.azJ = function () {
        if(!!this.Ns.o.d.isBlackVisitor) {
            alert('由于对方的隐私设置，您没有权限引用该文章!');
            return;
        }
        var bzm = "http://blog.163.com/share.do?bid=" + this.Ns.o.d.id + "&r=1&host=" + nb.c.aH.userName + "&uid=" + nb.c.bC.userId;
        if(!nb.c.dn) {
            nb.l.cO.bm();
        } else {
            window.open(bzm, 'citeblog', 'width=750,height=631,toolbar=no,scrollbars=no,menubar=no');
        }
    };
    dr.cVF = function () {
        if(!E.aV('$_divRecommendContent', 'phide')) {
            V.R('$_spanShowRecommend', 'click');
        }
        this.cQB();
        if(!this.cdG) {
            this.cdG = new this.Ns.c(this.aCF, this.Ns.o);
        }
    };
    dr.afp = function () {
        var shareUrl = 'http://share.renren.com/share/buttonshare/post/b?title=' + encodeURIComponent(this.bq.blogTitle) + '&content=' + encodeURIComponent(this.bq.blogAbstract) + '&url=' + encodeURIComponent(location.href);
        this.G.Nm(2);
        window.open(shareUrl);
    };
    dr.cAi = function (L) {
        V.bU(L);
        if(!!this.auG) {
            var url = 'link=http://blog.163.com/&source=' + encodeURIComponent('网易博客') + '&togImg=true&check1stImg=true&info=' + encodeURIComponent(this.bq.blogTitle) + ' ' + encodeURIComponent(location.href) + '&email=' + nb.c.bC.email + '&author=' + encodeURIComponent(nb.c.bC.nickName) + '&type=blog&title=' + encodeURIComponent(this.bq.blogTitle) + '&images=' + encodeURIComponent(this.auG);
            this.G.Nm(1);
            window.open('http://t.163.com/article/user/checkLogin.do?method=click&keyfrom=share1.blog.note&' + url + '&' + new Date().getTime(), '_blank', 'width=510,height=300');
        }
    };
    dr.Od = function () {
        var url = 'link=http://blog.163.com/&source=' + encodeURIComponent('网易博客') + '&info=' + encodeURIComponent(this.bq.blogTitle) + ' ' + encodeURIComponent(location.href);
        this.G.Nm(1);
        window.open('http://t.163.com/article/user/checkLogin.do?' + url + '&' + new Date().getTime(), '_blank', 'width=510,height=300');
    };
    dr.PA = function () {
        var shareUrl = 'http://v.t.sina.com.cn/share/share.php?';
        shareUrl += 'url=' + encodeURIComponent(location.href);
        shareUrl += '&title=' + encodeURIComponent(this.bq.blogTitle);
        shareUrl += '&pic=';
        this.G.Nm(6);
        window.open(shareUrl, '_blank', 'width=450,height=400');
    };
    dr.cBP = function () {
        var Bi = encodeURIComponent(this.bq.blogTitle);
        var ae = encodeURIComponent(location.href);
        var bRY = 'fe9a5861ddea4d478ba64dac9e211eb2';
        var bQU = 'http://v.t.qq.com/share/share.php?url=' + ae + '&appkey=' + bRY + '&title=' + Bi;
        this.G.Nm(8);
        window.open(bQU, '_blank', 'width=700,height=680,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,location=yes,resizable=no,status=no');
    };
    dr.axZ = function () {
        var Js = this.bq.blogAbstract;
        var bE = document.cloneElement('div');
        bE.innerHTML = Js || '';
        Js = encodeURIComponent(U.da(bE.innerText, 100));
        var shareUrl = 'http://www.kaixin001.com/~repaste/repaste.php?';
        shareUrl += 'rurl=' + escape(location.href);
        shareUrl += '&rtitle=' + escape(this.bq.blogTitle);
        shareUrl += '&rcontent=' + Js;
        this.G.Nm(3);
        window.open(shareUrl);
    };
    dr.axo = function () {
        var shareUrl = 'http://www.douban.com/recommend/?';
        shareUrl += 'url=' + encodeURIComponent(location.href);
        shareUrl += '&title=' + encodeURIComponent(this.bq.blogTitle);
        this.G.Nm(5);
        window.open(shareUrl);
    };
    dr.NC = function () {
        var shareUrl = 'http://profile.live.com/badge?';
        shareUrl += 'url=' + encodeURIComponent(location.href);
        shareUrl += '&title=' + encodeURIComponent(this.bq.blogTitle);
        var Js = this.bq.blogAbstract;
        var bE = document.cloneElement('div');
        bE.innerHTML = Js || '';
        Js = encodeURIComponent(U.da(bE.innerText, 100));
        shareUrl += '&description=' + Js;
        this.G.Nm(7);
        window.open(shareUrl);
    };
    dr.ON = function () {
        var shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodeURIComponent(location.href);
        this.G.Nm(4);
        window.open(shareUrl);
    };
    dr.dcN = function (L) {
        if(L.button == 2) return;
        if(!!document.selection) {
            document.selection.empty();
        }
        if(!this.bTD) return;
        if(window.getSelection) {
            window.getSelection().collapseToStart();
        }
        if(B.eW) {
            if(!L.srcElement || L.srcElement.parentElement == this.aUn || (!!L.srcElement.parentElement && L.srcElement.parentElement.parentElement == this.aUn)) return;
        } else {
            if(!L.target || L.target.parentNode == this.aUn || (!!L.target.parentNode && L.target.parentNode.parentNode == this.aUn)) return;
        }
        this.__shareWords　 = 　null;
        E.bl(this.aUn, 'phide');
    };
    dr.dce = function (L) {
        var bF = V.aq(L);
        if(!!bF && !!bF.tagName && bF.tagName.toLowerCase() == 'embed') {
            return;
        }
        if(L.button == 2) return;
        E.bl(this.aUn, 'phide');
        var aMI = null;
        if(window.getSelection) {
            aMI = window.getSelection();
        } else if(document.selection) {
            aMI = document.selection.createRange();
        }
        if(!!aMI) {
            this.bTD = this.dcj(aMI);
            this.dcZ(L, aMI);
        } else {
            this.__shareWords　 = 　null;
        }
    };
    dr.dcj = function (aMI) {
        var kf = '',
            gA = '',
            dcw = ['', ''];
        if(B.eW) {
            kf = U.aQ(aMI.text), awJ = U.aQ(this.cP.innerText);
            if(!kf || kf.length < 10) return dcw;
            if(!awJ || awJ.length < 10) return dcw;
            var RN = awJ.substring(0, 10);
            var aY = kf.indexOf(RN);
            if(aY >= 0) {
                kf = kf.substring(aY);
            } else {
                var nI = awJ.substring(awJ.length - 10);
                aY = kf.lastIndexOf(nI);
                if(aY > 0) {
                    kf = kf.substring(0, aY + 10);
                } else if(aMI.htmlText.lastIndexOf('<div class="nbw-blog-end"></div>') >= 0) {
                    kf = '';
                }
            }
            gA = this.dcY(aMI);
        } else {
            for(var i = 0; i < aMI.rangeCount; i++) {
                var dct = aMI.getRangeAt(i).cloneContents();
                for(var j = 0; j < dct.childNodes.length; j++) {
                    var cKC = dct.childNodes[j];
                    if(cKC.className == 'nbw-blog-start') {
                        kf = '';
                        gA = '';
                    } else if(cKC.className == 'nbw-blog-end') {
                        break;
                    } else if(!!cKC.innerHTML) {
                        kf += cKC.innerText;
                        if(!gA) {
                            var bJs = cKC.getElementsByTagName('img');
                            if(!!bJs && bJs.length > 0) gA = bJs[0].src;
                        }
                    } else if(!!cKC.textContent) {
                        kf += cKC.textContent;
                    }
                }
                kf = U.aQ(kf);
            }
        }
        kf = kf.replace(/[\r\n\t]/g, ' ');
        if(kf.length < 10) return dcw;
        if(kf.length > 80) kf = kf.substring(0, 80) + '...';
        return [kf, gA];
    };
    dr.dcY = function (aMI) {
        if(B.eW) {
            var btg = aMI.htmlText,
                ddx = btg;
            if(!btg) return '';
            btg = btg.toLowerCase();
            var aY = btg.indexOf('<img'),
                aZi = -1,
                ddz = -1;
            if(aY < 0) return '';
            aZi = btg.indexOf('src=\'', aY);
            if(aZi < 0) {
                aZi = btg.indexOf('src=\"', aY);
                if(aZi > 0) {
                    aZi += 5;
                    ddz = btg.indexOf('"', aZi);
                }
            } else {
                aZi += 5;
                ddz = btg.indexOf('\'', aZi);
            }
            if(ddz > aZi) {
                return ddx.substring(aZi, ddz);
            }
        }
        return '';
    };
    dr.dcW = function (L) {
        V.bU(L);
        E.bl(this.aUn, 'phide');
        if(!this.bTD) return;
        if(!!this.bTD[0]) {
            var url = 'link=http://blog.163.com/&source=' + encodeURIComponent('网易博客') + '&info=' + encodeURIComponent(this.bTD[0]) + ' ' + encodeURIComponent(location.href);
            if(!!this.bTD[1]) {
                url += '&togImg=true&images=' + encodeURIComponent(this.bTD[1]);
            }
            window.open('http://t.163.com/article/user/checkLogin.do?' + url + '&' + new Date().getTime() + '&method=click&keyfrom=bloghuaci', '_blank', 'width=510,height=300');
        }
    };
    dr.dcZ = function (L, aMI) {
        V.bU(L);
        if(!this.bTD || !this.bTD[0]) {
            return;
        }
        var cNW = E.oQ(this.cP, this.aHh.K(this));
        var dcb = this.dde(L, aMI, cNW);
        if(!!L.pageX) {
            var bnP = E.mI(this.cP);
            var boG = E.oQ(this.cP);
            if(dcb) {
                this.aUn.style.left = L.pageX - bnP - 60 + 'px';
                this.aUn.style.top = L.pageY - boG + cNW + 40 + 'px';
            } else {
                this.aUn.style.left = L.pageX - bnP + 'px';
                this.aUn.style.top = L.pageY - boG + cNW - 10 + 'px';
            }
        } else {
            if(dcb) {
                this.aUn.style.left = L.offsetX - 60 + 'px';
                this.aUn.style.top = L.offsetY + cNW + 40 + 'px';
            } else {
                this.aUn.style.left = L.offsetX + 'px';
                this.aUn.style.top = L.offsetY + cNW - 10 + 'px';
            }
        }
        E.bL(this.aUn, 'phide');
    };
    dr.dde = function (L, aMI, boG) {
        if(aMI.getRangeAt) {
            var eo = aMI.getRangeAt(0);
            if(!!eo && eo.startContainer != aMI.focusNode) {
                return true;
            }
            if(!!eo && eo.endContainer != aMI.focusNode) {
                return false;
            }
            if(!!aMI.focusNode && !!aMI.focusNode.parentNode) {
                return L.pageY > E.oQ(aMI.focusNode.parentNode) + 15;
            }
        } else if(!!L.clientY) {
            return L.clientY - aMI.boundingHeight / 2 > aMI.offsetTop;
        }
        return true;
    };
    dr.cSw = function (bP) {
        this.G.cqQ(this.bq.id, bP);
    };
    dr.ctF = function (bP, ai) {
        E.bN(ai ? '申请成功！' : '申请失败！', true, false, 'fail');
        if(ai) {
            if(bP == 1) E.aq('$_spamBlogInfoSpan_1').innerHTML = '已经发出申请';
            else E.aq('$_spamBlogInfoSpan_2').innerHTML = '已经发出申请';
        }
    };
    dr.dep = function () {
        var fB = this.deZ.value;
        if(!fB || fB.length != 4) {
            E.bN('请正确输入验证码！', true, false, 'fail');
            return;
        }
        this.G.det(this.bq.id, fB);
    };
    dr.deT = function (ai) {
        if(ai == 1) {
            E.bN('提交成功！', true, false, 'success');
            E.bl(this.dfz, 'phide');
        } else if(ai == -1) {
            E.bN('验证码不正确！', true, false, 'fail');
            this.dfx();
        } else {
            E.bN('提交失败，请重新提交！', true, false, 'success');
        }
    };
    dr.aoo = function (bP) {
        if(bP == 1) {
            E.bl(this.Oi, 'phide');
            E.bL(this.aCF, 'phide');
        } else {
            E.bl(this.aCF, 'phide');
            E.bL(this.Oi, 'phide');
        }
    };
    dr.aFO = function (D) {
        var bHR = null,
            bP, cXQ = null,
            aHs = bLi(),
            aBL = jt(location.href, 'isFromSearchEngine') || 'no';
        if(!!aHs && aBL == 'no') {
            aBL = 'yes';
        }
        if(aBL == 'yes' && !!D && D.length > 0) {
            bHR = D;
            E.bL(this.aHu.parentNode, 'phide');
            this.aHu.innerHTML = E.aI('m-3-jst-9', {
                a: bHR,
                fn2: U.gl,
                isFromSearchEngine: aBL
            });
        } else {
            E.bl(this.aHu.parentNode, 'phide');
        }
    };
    dr.bLo = function (D) {
        if(!!D && D.length > 0) {
            E.bL(this.me.parentNode, 'phide');
            this.me.innerHTML = E.aI('m-3-jst-10', {
                a: D,
                fn1: U.da,
                fn2: U.gl
            });
        } else {
            E.bl(this.me.parentNode, 'phide');
        }
    };
    dr.bMg = function (D) {
        if(!!D && D.length > 0) {
            this.aZO.innerHTML = E.aI('m-3-jst-1', {
                a: D,
                fn: U.da,
                fn1: nb.x.LU,
                visitor: nb.c.aH
            });
        } else {
            E.bl(this.aZO.parentNode, 'phide');
        }
        if(!nb.c.dn) {
            var bF = E.aO('<div class="pleft nlogif clearfix"> <div class="pleft nbw-f50 nbw-fce"><img class="cwd pnt" onerror="this.src=location.f60" src="' + location.f60 + '"/></div> <div class="m2a pright fc03"><span class="ul">登录</span>后，您可以在此留下足迹。</div> </div>'),
                A = E.aM(bF);
            V.Q(A[0], 'click', nb.l.cO.bm.K(nb.l.cO, {}));
            V.Q(A[1], 'click', nb.l.cO.bm.K(nb.l.cO, {}));
            this.aZO.insertAdjacentElement('afterBegin', bF);
        }
    };
    dr.ub = function (cQ) {
        if(!!E.aq('$_spanCommentCount')) E.aq('$_spanCommentCount').innerText = cQ || this.bq.commentCount;
        if(!!E.aq('$_spaniCommentCount')) E.aq('$_spaniCommentCount').innerText = cQ || this.bq.commentCount;
    };
    dr.azL = function (ia) {
        if(ia > 0) {
            this.bq.friendstatus = 'inviting';
            this.bq.followstatus = 'follow';
        } else if(ia <= -10) {
            this.bq.friendstatus = 'friend';
        } else {
            this.bq.friendstatus = '';
            this.bq.followstatus = '';
        }
    };
    dr.aBO = function (cV) {
        if(cV) {
            this.bq.followstatus = 'follow';
            this.IV();
        }
    };
    dr.IV = function () {
        if(this.bq.type == 0) {
            if(!this.qf) {
                this.qf = new this.oW.c(this.zf, this.oW.o);
            } else {
                this.qf.bc(this.oW.o);
            }
        }
    };
    dr.adN = function () {
        this.aoo(0);
        if(!!this.dS) {
            this.dS = this.dS.constructor.ah(this.dS);
        }
        this.dS = new this.afy.c(this.xr, this.afy.o);
    };
    dr.cQB = function () {
        if(!!this.dS) {
            this.dS = this.dS.constructor.ah(this.dS);
        }
        this.aoo(1);
    };
    dr.cMR = function () {
        if(!nb.c.dn) {
            var aHs = cbD();
            if(!!aHs) {
                var bv = document.body;
                if(B.fa) {
                    bv = document.sbody.parentNode;
                }
                p.aFV.bm({
                    engine: aHs,
                    parent: bv
                });
            }
        }
    };
    dr.aJh = function (bG, bWh, L) {
        V.bU(L);
        if(E.aV(bG, "nocomment")) {
            return;
        }
        if(!!bWh) {
            if(bG.width < 110 && bG.height < 110) {
                return;
            }
            this.auG = bG.src;
            E.bL(this.Zl, 'phide');
            var avf = 0;
            if(B.fa) {
                avf = 18;
            } else if(B.eW) {
                if(navigator.appVersion.match(/7./i) == '7.' && navigator.userAgent.indexOf('Trident\/4') < 0) {
                    avf = 10;
                }
            }
            if(nb.c.qu) {
                this.Ym.style.left = E.mI(bG, this.aHh.K(this)) - avf + 'px';
                this.Ym.style.top = (E.oQ(bG, this.aHh.K(this))) + bG.height + 'px';
                E.bL(this.Ym, 'phide');
                avf -= 95;
            }
            this.Zl.style.left = E.mI(bG, this.aHh.K(this)) - avf + 'px';
            this.Zl.style.top = (E.oQ(bG, this.aHh.K(this))) + bG.height + 'px';
        } else {
            if(!!L.pageX) {
                var bCQ = L.pageX;
                var bnP = E.mI(bG);
                if(bCQ <= bnP || bCQ >= bnP + bG.width) {
                    E.bl(this.Zl, 'phide');
                    E.bl(this.Ym, 'phide');
                    return;
                }
                var bEa = L.pageY;
                var boG = E.oQ(bG);
                if(bEa <= boG || bEa >= boG + bG.height) {
                    E.bl(this.Zl, 'phide');
                    E.bl(this.Ym, 'phide');
                    this.auG = null;
                    return;
                }
            } else {
                if(L.offsetY <= 0 || L.offsetY >= bG.height || L.offsetX <= 0 || L.offsetX >= bG.width) {
                    E.bl(this.Zl, 'phide');
                    E.bl(this.Ym, 'phide');
                    this.auG = null;
                }
            }
        }
    };
    dr.xz = function () {
        var eP = this.bq.vote;
        if(eP.status == 1) {
            E.bN('投票已经结束！', true, false, 'fail');
            return;
        }
        var H = document.getElementsByName('vote_option'),
            tV = '',
            acC = 0,
            js = -1;
        for(var i = 0; i < H.length; i++) {
            if(H[i].checked) {
                tV += '1';
                acC++;
            } else {
                tV += '0';
            }
            if(i < H.length - 1) {
                tV += '\t';
            }
        }
        if(acC == 0) {
            E.bN('不要心急，告诉朋友你选择哪一项吧！', true, false, 'fail');
            return;
        }
        if(acC > eP.multiSelect) {
            E.bN('最多限' + eP.multiSelect + '个', true, false, 'fail');
            return;
        }
        if(eP.voteType == 1) {
            var lc = document.getElementsByName('vote_role');
            for(var i = 0; i < lc.length; i++) {
                if(lc[i].checked) {
                    js = i;
                    tV = js + '|' + tV;
                    break;
                }
            }
            if(eP.voteType == 1 && js == -1) {
                E.bN('您还没有选角色，请先选角色！', true, false, 'fail');
                return;
            }
        }
        var gL = {
            voteId: eP.id,
            voteDetail: tV,
            voterUserId: nb.c.bC.userId
        };
        for(var i = 0; i < H.length; i++) {
            H[i].disabled = true;
        }
        if(this.bq.voteType == 1) {
            for(var i = 0; i < lc.length; i++) {
                lc[i].disabled = true;
            }
        }
        if(!nb.c.dn) {
            this.G.bcD(gL);
        } else {
            this.G.bcS(gL);
        }
    };
    dr.FM = function (gL, ai) {
        if(ai == -1) {
            E.bN('该投票不存在or已经删除', true, false, 'fail');
            return;
        } else if(ai == -2) {
            E.bN('投票已经关闭', true, false, 'fail');
            return;
        } else if(ai == -3) {
            E.bN('未登录', true, false, 'fail');
            return;
        } else if(ai == -4) {
            E.bN('服务器错误', true, false, 'fail');
            return;
        } else if(ai == -5) {
            E.bN('你已经参加过本次投票', true, false, 'fail');
            return;
        } else if(ai == 1) {
            E.bN('投票成功！', true, false, 'success');
        }
        var D = gL.voteDetail.split('\t');
        var eP = this.bq.vote;
        if(eP.voteType == 1) {
            var js = parseInt(D[0].split('|')[0]);
            D[0] = D[0].substring(2);
            for(var i = 0; i < D.length; i++) {
                var v = parseInt(D[i]);
                eP.optionRoleScores[i][js] += v;
                eP.totalVote += v;
            }
        } else {
            for(var i = 0; i < D.length; i++) {
                var _v = parseInt(D[i]);
                eP.optionScores[i] += _v;
                eP.totalVote += _v;
            }
        }
        eP.voteCount++;
        E.aq('$$_vote_count').innerText = eP.voteCount;
        this.aTC();
        E.aq('$$_vote').disabled = true;
        if(!nb.c.dn) {
            var ug = U.rA('voteids');
            if(ug.indexOf(',' + eP.id + ',') > -1) {
                return;
            }
            ug = ',' + gL.voteId　 + 　',' + ug;
            if(ug.length > 200) {
                ug = ug.substring(ug.indexOf(',', 100));
            }
            U.zj('voteids', ug);
        }
    };
    dr.aTC = function () {
        var eP = this.bq.vote;
        var H = document.getElementsByName('vote_option'),
            lc = document.getElementsByName('vote_role');
        if(eP.voteType == 1) {
            for(var i = 0; i < H.length; i++) {
                var AU = 0;
                for(var j = 0; j < lc.length; j++) {
                    E.aq('span_' + i + '_' + j).style.width = '0%';
                    var ie = (eP.optionRoleScores[i][j] / eP.voteCount * 100).toFixed(0);
                    if(isNaN(ie)) ie = 0;
                    if(ie > 0) {
                        E.aq('span_' + i + '_' + j).style.width = ie + '%';
                    }
                    AU += eP.optionRoleScores[i][j];
                    E.aq('span_' + i + '_' + j).title = eP.optionRoleList[j] + eP.optionRoleScores[i][j] + '票';
                }
                var ie = (AU / eP.voteCount * 100).toFixed(0);
                if(isNaN(ie)) ie = 0;
                E.aq('option_' + i + '_role_1').innerHTML = AU + "(" + ie + "%)";
            }
        } else {
            for(var i = 0; i < H.length; i++) {
                var ie = eP.optionScores[i] / eP.totalVote * 100;
                E.aq('option_' + i + '_role_0').style.width = ie + '%';
                E.aq('option_' + i + '_role_1').innerText = eP.optionScores[i] + '(' + ie.toFixed(1) + '%' + ')';
            }
        }
    };
    dr.cLC = function () {
        var eP = this.bq.vote;
        if(!eP || !eP.id) {
            return;
        }
        var D = U.aQ(eP.optionScores).split('\t');
        var H = document.getElementsByName('vote_option');
        eP.optionScores = [];
        eP.optionRoleScores = [];
        eP.totalVote = 0;
        if(eP.voteType == 0) {
            for(var i = 0; i < D.length; i++) {
                eP.optionScores.push(isNaN(parseInt(D[i])) ? 0 : parseInt(D[i]));
                eP.totalVote += isNaN(eP.optionScores[i]) ? 0 : eP.optionScores[i];
            }
            for(var i = D.length; i < H.length; i++) {
                eP.optionScores.push(0);
            }
        } else {
            for(var i = 0; i < D.length; i++) {
                eP.optionRoleScores[i] = [];
                var aqK = D[i].split('|');
                for(var j = 0; j < aqK.length; j++) {
                    eP.optionRoleScores[i].push(parseInt(aqK[j]));
                    eP.totalVote += eP.optionRoleScores[i][j];
                }
            }
            var lc = document.getElementsByName('vote_role');
            for(var i = D.length; i < H.length; i++) {
                eP.optionRoleScores[i] = [];
                for(var j = 0; j < lc.length; j++) {
                    eP.optionRoleScores[i].push(0);
                }
            }
            eP.optionRoleList = eP.optionRoles.split('\t');
        }
        if(!nb.c.dn) {
            var ug = U.rA('voteids');
            if(ug.indexOf(',' + eP.id + ',') > -1) {
                E.aq('$$_vote').disabled = true;
            } else {
                V.Q('$$_vote', 'click', this.xz.K(this));
            }
        } else {
            V.Q('$$_vote', 'click', this.xz.K(this));
        }
        var A = E.bz(this.xV, 'vtag');
        this.asY = E.bz(A[0], 'xtag');
        this.bIQ = new(P(N.ut).eH)(this.asY, {
            'selected': 'js-current fc03',
            onchange: this.axi.K(this)
        });
        this.aKW = A[1];
        this.bOA = A[2];
        V.Q(this.bOA, 'click', this.aih.K(this));
        V.Q(this.aKW, 'click', this.cGP.K(this));
        this.aZX = A[3];
        this.aKF = A[4];
        this.aKn = new(P(N.ut).eH)(E.aM(this.aKF, 'xtag'), {
            'selected': 'js-current fc03',
            onchange: this.aRK.K(this)
        });
        this.bEd = A[5];
    };
    dr.aih = function (L) {
        V.bU(L);
        if(!confirm('确定删除吗?')) return;
        this.G.aZP(this.bq.vote.id, this.bq.id);
    };
    dr.beJ = function (ai) {
        if(ai) {
            E.bl(this.xV, 'phide');
        }
    };
    dr.cGP = function () {
        if(E.aV(this.aZX, 'phide')) {
            E.bL(this.aZX, 'phide');
            this.aKW.innerHTML = '隐藏参与情况';
        } else {
            E.bl(this.aZX, 'phide');
            this.aKW.innerHTML = '查看参与情况';
        }
    };
    dr.aRK = function (aY) {
        if(aY == 0) {
            this.G.aIi({
                id: this.bq.vote.id
            });
        } else {
            this.G.aBX({
                id: this.bq.vote.id
            });
        }
    };
    dr.axi = function (mo, FT) {
        var eP = this.bq.vote;
        var H = document.getElementsByName('vote_option'),
            lc = document.getElementsByName('vote_role');
        for(var i = 0; i < H.length; i++) {
            var AU = 0;
            for(var j = 0; j < lc.length; j++) {
                var bE = E.aq('span_' + i + '_' + j);
                bE.style.width = 0;
                if((mo == 0) || (j == mo - 1)) {
                    var ie = (eP.optionRoleScores[i][j] / eP.voteCount * 100).toFixed(0);
                    if(isNaN(ie)) ie = 0;
                    if(ie > 0) {
                        E.aq('span_' + i + '_' + j).style.width = ie + '%';
                    }
                    AU += eP.optionRoleScores[i][j];
                }
            }
            var ie = (AU / eP.voteCount * 100).toFixed(0);
            if(isNaN(ie)) ie = 0;
            E.aq('option_' + i + '_role_1').innerHTML = AU + "(" + ie + "%)";
        }
    };
    dr.aiA = function (D) {
        if(!!D && D.length > 0) {
            this.bEd.innerHTML = E.aI('m-3-txt-3', {
                a: D,
                b: this.bq.vote.optionTextList,
                c: this.bq.vote.optionRoleList,
                fn: U.da,
                fn1: nb.x.jx
            });
        } else {
            var aY = this.aKn.sr();
            this.bEd.innerHTML = (aY == 0) ? '还没有登录用户投过票！' : '还没有博友投过票！';
        }
    };
    dr.dcF = function () {
        if(!this.dbU) return;
        var hK = this.G.Ga(this.bq.hmcon, false);
        if(!!hK) {
            this.Oy(hK, false);
        }
    };
    dr.Oy = function (hK, axJ) {
        if(!!hK && !!this.dbU) {
            this.dbU.src = 'http://t.163.com/page/card.html?' + hK + '|0|0|1';
            E.bL(this.dbU.parentNode, 'phide');
        }
    };
    dr.aHh = function (bE) {
        return bE == this.cP.parentNode;
    };
    nb.m.cA(z);
})();
(function () {
    var z = -3,
        p = P('nb.p.m' + z),
        CH, aJZ, bqk, aNj, apd, axd, hQ;
    var jt = function (ae, aR) {
            if(!U.fH(ae, 'String')) return ae;
            ae = U.aQ(ae);
            ae = ae.substr(ae.indexOf('?') + 1);
            if(!ae) return '';
            ae = ae.split('&');
            for(var i = 0, l = ae.length, d; i < l; i++) {
                d = ae[i].indexOf('=');
                if(ae[i].substring(0, d) === aR) {
                    return ae[i].substr(d + 1) || '';
                }
            }
            return '';
        };
    p.beV = C();
    CH = p.beV.at(p.abW, true);
    CH.byt = function (fP, bP, Bp) {
        this.abl(fP, bP, Bp, this.cja.K(this), this.abC.K(this));
    };
    CH.abl = function (fP, bP, Bp, bS, bdd) {
        J.bi(location.dwr, 'BlogBeanNew', bP ? 'removeBatchDraftBlogs' : (Bp ? 'deleteBlogsToRecycle' : 'deleteBlogs'), fP.split(','), false, bS, bdd);
    };
    CH.cja = function (ai) {
        this.R('ondeleteblog', ai);
    };
    CH.abC = function (bcd, vw) {
        if(vw == undefined || vw == null || vw.type != "DelSysRecomException") {
            return;
        }
        this.R('ondeleteblog', false, -1);
    };
    CH.ask = function (ax, bkk) {
        this.arK({
            id: ax,
            isTop: bkk
        }, this.ast.K(this));
    };
    CH.arK = function (H, bS) {
        if(H.isTop) {
            J.bi(location.dwr, 'BlogBeanNew', 'untopBlog', H.id, bS);
        } else {
            J.bi(location.dwr, 'BlogBeanNew', 'topBlog', H.id, bS);
        }
    };
    CH.ast = function (ai) {
        if(ai) this.R('ontopblog');
    };
    CH.aYb = function (bP) {
        this.bjX({
            type: bP
        }, this.Cl.K(this, bP));
    };
    CH.bjX = function (H, bS) {
        J.bi(location.dwr, 'UserBeanNew', 'updateSingleBlogLayout', H.type, bS);
    };
    CH.Cl = function (bP, ai) {
        if(ai) this.R('onchangelayout', bP);
    };
    CH.QD = function (bB, cC, bM) {
        if(!bB || !cC || !bM) return;
        var D = this.bH(bB)[cC].subComments,
            aY = U.bX(D, bM);
        if(aY >= 0) D.splice(aY, 1);
    };
    CH.QW = function (H, bS) {
        J.bi(location.dwr, 'BlogBeanNew', 'deleteBlogComment', H.item.itm.id, H.ckey, false, bS);
    };
    CH.yz = function (H, bS) {
        J.bi(location.dwr, 'BlogBeanNew', 'deleteBlogComment', H.item.id, H.ckey, true, bS);
    };
    p.bdR = C();
    aJZ = p.bdR.at(p.Qp, true);
    aJZ.uF = function (T) {
        var H = {
            onadd: this.oJ.K(this, 1),
            ondelete: this.oJ.K(this, 2),
            oedit: {
                'class': 'edt-cmt',
                fixed: true,
                hckipt: this.cQl,
                maxlength: 1000,
                iclass: nb.w.gy,
                nofocus: true,
                group: 'commentreply',
                body: document.sbody
            }
        };
        this.gM = p.beu.as(T.subComments, this.hT, H);
    };
    aJZ.eE = function () {
        var eS = '<span class="m2a">回复</span><span class="sep">|</span> <span class="m2a">删除</span>';
        var aY = 0;
        if(!!this.I.moveFrom) {
            if(this.I.moveFrom.toLowerCase() == 'mini_blog') {
                eS = '<span class="pright"><span class="fc05">来自</span><a class="m2a fc03" href="http://t.163.com">网易微博</a></span>' + eS;
                aY = 1;
            } else if(this.I.moveFrom.toLowerCase() == 'tqq') {
                eS = '<span class="pright"><span class="fc05">来自</span><a class="m2a fc03" href="http://t.qq.com">腾讯微博</a></span>' + eS;
                aY = 1;
            } else if(this.I.moveFrom.indexOf('group') == 0) {
                eS = '<span class="pright"><span class="fc05">来自</span>' + this.aHN(this.I.moveFrom) + '</span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'wap') {
                eS = '<span class="pright fc07">来自<a target="_blank" class="noul pnt fc03" href="http://blog.163.com/services/wapblog.html?frompersonalbloghome">网易手机博客</a></span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'iphone') {
                eS = '<span class="pright fc07">来自iPhone客户端</span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'android') {
                eS = '<span class="pright fc07">来自Android客户端</span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'mobile') {
                eS = '<span class="pright fc07">来自<a target="_blank" class="noul pnt fc03" href="http://blog.163.com/services/emsblog.html?frompersonalbloghome">网易短信写博</a></span>' + eS;
                aY = 1;
            }
        }
        this.cL.innerHTML = eS;
        var A = E.aM(this.cL);
        V.Q(A[2 + aY], 'click', this.gQ.K(this));
        V.Q(A[0 + aY], 'click', this.ig.K(this));
    };
    aJZ.vT = function () {
        this.gM = p.beu.ah(this.gM);
    };
    p.beu = C();
    bqk = p.beu.at(p.aco, true);
    bqk.eE = function () {
        var eS = '<span class="m2a">回复</span><span class="sep fc07">|</span> <span class="m2a">删除</span>';
        var aY = 0;
        if(!!this.I.moveFrom) {
            if(this.I.moveFrom.toLowerCase() == 'mini_blog') {
                aY = 1;
                eS = '<span class="pright"><span class="fc05">来自</span><a class="m2a fc03" href="http://t.163.com">网易微博</a></span>' + eS;
            } else if(this.I.moveFrom.toLowerCase() == 'tqq') {
                eS = '<span class="pright"><span class="fc05">来自</span><a class="m2a fc03" href="http://t.qq.com">腾讯微博</a></span>' + eS;
                aY = 1;
            } else if(this.I.moveFrom.indexOf('group') == 0) {
                eS = '<span class="pright"><span class="fc05">来自</span>' + this.aHN(this.I.moveFrom) + '</span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'wap') {
                eS = '<span class="pright fc07">来自<a target="_blank" class="noul pnt fc03" href="http://blog.163.com/services/wapblog.html?frompersonalbloghome">网易手机博客</a></span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'iphone') {
                eS = '<span class="pright fc07">来自iPhone客户端</span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'android') {
                eS = '<span class="pright fc07">来自Android客户端</span>' + eS;
                aY = 1;
            }
            if(!!this.I.moveFrom && this.I.moveFrom.toLowerCase() == 'mobile') {
                eS = '<span class="pright fc07">来自<a target="_blank" class="noul pnt fc03" href="http://blog.163.com/services/emsblog.html?frompersonalbloghome">网易短信写博</a></span>' + eS;
                aY = 1;
            }
        }
        this.cL.innerHTML = eS;
        var A = E.aM(this.cL);
        V.Q(A[2 + aY], 'click', this.gQ.K(this));
        V.Q(A[0 + aY], 'click', this.jQ.K(this));
    };
    p.aAt = C();
    aNj = p.aAt.at(p.azU, true);
    p.aoJ = C();
    apd = p.aoJ.at(p.xl, true);
    apd.cN = function () {
        this.cB = p.bdR;
        this.G = new p.beV();
    };
    p.VO = C();
    axd = p.VO.at(p.Ah, true);
    p.dM = C();
    hQ = p.dM.at(p.db, true);
    hQ.cN = function () {
        this.oW = {
            c: p.VO,
            o: {
                d: this.bq
            }
        };
        this.Ns = {
            c: p.aAt,
            o: {
                d: this.bq,
                onclose: this.adN.K(this, 0)
            }
        };
        this.afy = {
            c: p.aoJ,
            o: {
                d: this.bq,
                oncmtcountupdate: this.ub.K(this)
            }
        };
        this.cB = p.bdR;
        this.G = new p.beV({
            onrelateblogload: this.aFO.K(this),
            onhistoryblogload: this.bLo.K(this),
            onblogreaderload: this.bMg.K(this),
            onrecommendinfoload: this.bKK.K(this),
            ondeleteblog: this.cee.K(this),
            ontopblog: this.cfe.K(this),
            onchangelayout: this.blG.K(this),
            onapplyspamblog: this.ctF.K(this),
            onapplyunshield: this.deT.K(this),
            onaddvote: this.FM.K(this),
            onaddvoteamy: this.FM.K(this),
            onvoteload: this.aiA.K(this),
            ondeleteVote: this.beJ.K(this),
            ongetmbscreenname: this.Oy.K(this)
        });
    };
    hQ.hu = function () {
        p.dM.aZ.hu.call(this);
        V.Q('$_spanDelete', 'click', this.gQ.K(this));
        V.Q('$_spanTop', 'click', this.bKB.K(this));
        V.Q('$_spanDisplay', 'click', this.Cl.K(this));
        nb.x.Dl('$_spanShowRecommend', '$_divRecommendContent');
    };
    hQ.Cl = function (L) {
        p.bfN.bm({
            type: this.bj,
            onchangelayout: this.aTh.K(this),
            onsavelayout: this.aOo.K(this)
        });
    };
    hQ.aOo = function (bP) {
        this.G.aYb(bP);
    };
    hQ.blG = function (bP) {
        E.bN('显示设置保存成功!', true, false, 'success');
        this.bq.type = bP;
        this.IV();
    };
    hQ.gQ = function (L) {
        V.bU(L);
        if(this.bq.isPublished == 1) {
            p.Fd.bm({
                title: '删除日志',
                ondeleteblog: this.G.byt.K(this.G, this.bq.id, 0)
            })
        } else {
            if(!confirm('确定删除吗？')) return;
            this.G.byt(this.bq.id, (this.bq.isPublished == 0) ? 1 : 0, false);
        }
    };
    hQ.cee = function (ai, xi) {
        if(ai) {
            location.href = nb.x.bQ() + 'blog/';
        } else {
            if(xi && xi == -1) {
                E.bN('该日志已经被系统推荐, 不能删除!', true, false, 'fail');
                return;
            }
            E.bN('日志删除失败!', true, false, 'fail');
        }
    };
    hQ.bKB = function (L) {
        V.bU(L);
        this.G.ask(this.bq.id, this.bq.istop);
    };
    hQ.cfe = function () {
        var bE = E.aq('$_spanTop');
        if(bE.innerText == '置顶') {
            bE.innerText = '取消置顶';
            E.bN('置顶成功！', true, false, 'success');
        } else {
            bE.innerText = '置顶';
            E.bN('取消置顶成功！', true, false, 'success');
        }
        this.bq.istop = !this.bq.istop;
    };
    hQ.Oy = function (hK, axJ) {
        p.dM.aZ.Oy.call(this, hK, axJ);
    };
    nb.m.cA(z);
})();