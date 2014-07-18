

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'list',
    
    controllers: ['Main'],
    views: ['Main'],
    models: [],
    stores: [],

    launch: function(){
        Ext.create('list.view.Viewport');
    }
});
