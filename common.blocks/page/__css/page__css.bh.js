module.exports = function(bh) {

    bh.match('page__css', function(ctx, json) {
        ctx.bem(false);

        if(json.url) {
            ctx.tag('link');
            ctx.attr('rel', 'stylesheet');
            ctx.attr('href', json.url);
        } else {
            ctx.tag('style');
        }

    });

};
