(function($, _) {
    function centerDialog($container) {
        var targetHeight = $container.height();
        var targetWidth = $container.width();
        $container.css({"margin-left":(-targetWidth/2 + "px"),"margin-top":(-targetHeight/2 + "px")});
    }
    
    function render($container, $mask, $dialog, content, options) {
        if(options.template) {
            content = _.template(content)(options.data);
        }
        $container.html(content);
        $dialog.append($mask).append($container);
        $("body").append($dialog);

        centerDialog($container);
        
        $dialog.bind('close', function(){
            $dialog.remove();
            if(typeof options.onClose == 'function'){
                options.onClose($dialog);
            }
        });

        $mask.click(function(){
            $dialog.trigger('close');
        });

        $(options.cancel).click(function(){
            $dialog.trigger('close');
            return false;
        });

        if(typeof options.callback == 'function'){
            options.callback($dialog);
        }
    }
    
    $.fn.jqueryDialog = function(options){
        options = $.extend({}, $.fn.jqueryDialog.defaults, options);
        var $dialog = $('<div class="jq-dialog-box" style="width:100%; height:100%; position:fixed; top:0;left:0; z-index:' + options.zIndex + ';"/>');
        var $mask = $('<div class="jq-dialog-mask" style="filter:alpha(opacity=80); -moz-opacity:0.8; opacity:0.8;width:100%; height:100%; position:absolute; top:0;left:0; background:#000;"/>');
        var $container = $('<div class="jq-dialog-container" style="position:absolute; top:50%;left:50%;"/>');
        var $temp = $('<div/>');
        if(options.url) {
            $temp.load(options.url, function(content){
                render($container, $mask, $dialog, content, options);
            });
        } else {
            var content = $(this).html();
            render($container, $mask, $dialog, content, options);
        }
    };

    $.fn.jqueryDialog.close = function(){
        $(this).trigger('close');
    };
    
    $.fn.jqueryDialog.defaults = {
        cancel: ".close",
        template: false,
        data: {},
        zIndex: 10000,
        url: false,
        callback: function($dialog) {

        },
        onClose: function($dialog) {

        }
    };
    
    $.jqueryDialog = $.fn.jqueryDialog;
})(jQuery, _);
