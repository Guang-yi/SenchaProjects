Ext.define('Practice.view.Viewport', {
    extend: 'Ext.Panel',
    itemId: 'mycontainer',
    config: {
        layout: {
            type: 'card',
            animation: 'fade'
        },
        fullscreen: true,
        
        items: [
            {
                xtype: 'mainPanel'
            },
            {
                xtype: 'subviewPanel'
            },
            {
                xtype: 'babyPage'
            }
            
        ]
        
        
    }
});