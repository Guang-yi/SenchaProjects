Ext.define ('Practice.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'mainPanel',
    fullscreen: true,
    config: {
        layout: 'vbox',
       
        items:[
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Home',
                items: [
                    {
                        xtype: 'button',
                        ui: 'confirm-forward',
                        iconCls: 'add',
                        action: 'pageForward'
                    },
                    {
                        xtype: 'button',
                        ui: 'confirm-back',
                        iconCls: 'user',
                        action: 'pageForwarding',
                        align: 'right'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                html: 'Hello'
            },
            {
                xtype: 'panel',
                flex: 1,
                html: 'Hola'
            }
        ]
      }
});