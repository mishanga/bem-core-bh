module.exports = function(bh) {

    bh.match('ua', function(ctx) {
        ctx.content([
            ';(function(d,e,c,r,n,w,v,f){' +
                'e=d.documentElement;' +
                'c="className";' +
                'r="replace";' +
                'n="createElementNS";' +
                'f="firstChild";' +
                'w="http://www.w3.org/2000/svg";' +
                'e[c]+=" ua_svg_"+(d[n]&&d[n](w,"svg").createSVGRect?"yes":"no");' +
                'v=d.createElement("div");' +
                'v.innerHTML="<svg/>";' +
                'e[c]+=" ua_inlinesvg_"+((v[f]&&v[f].namespaceURI)==w?"yes":"no");' +
            '})(document);',
            ctx.content()
        ], true);
    });

};
