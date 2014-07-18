Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'AutoApp',
    controllers: ['Main'],
    

    launch: function(){
        Ext.create('AutoApp.view.Viewport');
    }
});