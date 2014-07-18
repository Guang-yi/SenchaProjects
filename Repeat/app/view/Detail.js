Ext.define('Repeat.view.Detail', {
    extend: 'Ext.Panel',
    xtype: 'detail',
    
    config: {
        styleHtmlContent: true,
        scrollable: 'vertical',
        title: 'Details',
        //html: 'Hello, World!'
        tpl: 'Hello {firstName} {lastName}'
    }
});