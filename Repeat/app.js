Ext.Loader.setConfig({
   enabled: true 
});

Ext.application({
    name: 'Repeat',
    
    views: ['Main', 'Detail'],
    controllers: ['Main'],
    stores: ['Names'],
    models: ['Name'],
    
    launch: function(){
        Ext.create('Repeat.view.Viewport');
    }
});