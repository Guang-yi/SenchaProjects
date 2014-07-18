Ext.define('list.view.Viewport', {
	extend: 'Ext.Panel',

	config: {
        layout: 'card',
		fullscreen: true,
        items:[
            {
                xtype: 'listPanel',
            },
            {
                docked: 'top',
                xtype: 'button',
                iconCls: 'add'
            }
        ]
    }
});