module.exports = function(bh) {

    bh.match('ua', function(ctx) {
        ctx.tag('script');
        ctx.bem(false);
        ctx.content([
            ctx.content(),
            ';(function(d,e,c,r){' +
                'e=d.documentElement;' +
                'c="className";' +
                'r="replace";' +
                'e[c]=e[c][r](/(ua_js_)no/g,"$1yes");' +
                'if(d.compatMode!="CSS1Compat")' +
                'e[c]=e[c][r]("ua_css_standart","ua_css_quirks")' +
                'e[c]=e[c][r](/(ua_css_)standart/g,"$1quirks")' +
            '})(document);'
        ], true);
    });

};
