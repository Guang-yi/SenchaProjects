Ext.define('Repeat.view.Viewport', {
    extend: 'Ext.navigation.View',
    xtype: 'viewpanel',
    requires: [
        'Repeat.view.Main',
        'Repeat.view.Detail'
    ],
    
    config: {
        fullscreen: true,
//        tabBarPosition: 'bottom',
//        layout: 'vbox',
        items: [
            {
                title: 'Names',
                xtype: 'mainpanel'
            }
        ]
    }
});