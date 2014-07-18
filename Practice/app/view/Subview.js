Ext.define ('Practice.view.Subview', {
    extend: 'Ext.Panel',
    xtype: 'subviewPanel',
    fullscreen: true,
    config: {
       
        items:[
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Subview',
                items: [
                    {
                        xtype: 'button',
                        ui: 'decline-back',
                        iconCls: 'star',
                        action: 'pageBackward'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                html: 'Goodbye'
            }
        ]
      }
});