module.exports = function(bh) {

    bh.match('page', function(ctx, json) {
        ctx.js(true);
        ctx.tag('body');
        ctx.mix({ elem : 'body' });

        return [
            { elem : 'doctype', doctype : json.doctype || '<!DOCTYPE html>' },
            {
                elem : 'root',
                content : [
                    {
                        elem : 'head',
                        content : [
                            [
                                { tag : 'meta', attrs : { charset : 'utf-8' } },
                                // TODO: вынести в desktop
                                json['x-ua-compatible'] === false ?
                                    false :
                                    {
                                        elem : 'meta',
                                        attrs : {
                                            'http-equiv' : 'xUACompatible',
                                            'x-ua-compatible' : json['x-ua-compatible'] || 'IE=edge'
                                        }
                                    },
                                { elem : 'title', content : json.title },
                                json.favicon? { elem : 'favicon', url : json.favicon } : '',
                                json.meta
                            ],
                            json.head
                        ]
                    },
                    json
                ]
            }
        ];
    });

    bh.match('page__root', function(ctx) {
        ctx.bem(false);
        ctx.tag('html');
        ctx.cls('ua_js_no ua_css_standard');
    });

    bh.match('page__doctype', function(ctx, json) {
        return json.doctype;
    });

    bh.match('page__head', function(ctx) {
        ctx.bem(false);
        ctx.tag('head');
    });

    bh.match('page__meta', function(ctx) {
        ctx.bem(false);
        ctx.tag('meta');
    });

    bh.match('page__title', function(ctx) {
        ctx.bem(false);
        ctx.tag('title');
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
