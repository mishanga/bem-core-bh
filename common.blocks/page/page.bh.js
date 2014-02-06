module.exports = function(bh) {

    bh.match('page', function(ctx, json) {
        ctx.tag('body');
        ctx.content([
            ctx.content(),
            json.scripts
        ], true);

        return [
            json.doctype || '<!DOCTYPE html>',
            {
                tag : 'html',
                cls : 'ua_js_no',
                content : [
                    {
                        elem : 'head',
                        content : [
                            { tag : 'meta', attrs : { charset : 'utf-8' } },
                            { tag : 'title', content : json.title },
                            { block : 'ua' },
                            json.styles,
                            json.head,
                            json.favicon? { elem : 'favicon', url : json.favicon } : '',
                        ]
                    },
                    json
                ]
            }
        ];
    });

    bh.match('page__head', function(ctx) {
        ctx.bem(false);
        ctx.tag('head');
    });

    bh.match('page__meta', function(ctx) {
        ctx.bem(false);
        ctx.tag('meta');
    });

    bh.match('page__link', function(ctx) {
        ctx.bem(false);
        ctx.tag('link');
    });

    bh.match('page__favicon', function(ctx, json) {
        ctx.bem(false);
        ctx.tag('link');
        ctx.attr('rel', 'shortcut icon');
        ctx.attr('href', json.url);
    });

};
