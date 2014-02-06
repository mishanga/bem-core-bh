module.exports = function(bh) {

    bh.match('ua', function(ctx) {
        ctx.tag('script');
        ctx.bem(false);
        ctx.content([
            '(function(e,c){',
                'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");',
            '})(document.documentElement,"className");',
            ctx.content()
        ], true);
    });

};
