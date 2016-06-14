# jquery.dialog.js

### Useage:
#### Local
```javascript
$('dialog').jqueryDialog();
```
#### Remote
```javascript
$.jqueryDialog({
    url: url
});
```
#### Template (need underscore or lodash)
```javascript
$.jqueryDialog({
    template: true,
    data: {}
});
```

### Options:

```javascript
$.fn.jqueryDialog.defaults = {
    cancel: ".close",
    template: false,
    data: {},
    zIndex: 10000,
    url: false,
    autoClose: false,
    opacity: 0.8,
    background: '#000',
    top: '50%',
    onCountDown: function(seconds, $dialog) {

    },
    onShow: function($dialog) {

    },
    onClose: function($dialog) {

    }
};
```
