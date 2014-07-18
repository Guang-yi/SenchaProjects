Ext.define ('Repeat.view.Main', {
    extend: 'Ext.List',
    xtype: 'mainpanel',
    requires: ['Repeat.store.Names'],
    
    config: {
        grouped: true,
        indexBar: true,
        itemTpl: '{firstName} {lastName}',
        store: 'Names',
        onItemDisclosure: true 
    }
});