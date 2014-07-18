Ext.Loader.setConfig({
    enabled: true
});

Ext.application ({
    name: 'Practice',
    
    controllers: ['Main'],
    //views: ['Main'],
    
    launch: function() {
        Ext.create('Practice.view.Viewport');
    }
});