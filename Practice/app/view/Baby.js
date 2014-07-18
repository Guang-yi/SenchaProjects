Ext.define('Practice.view.Baby', {
    extend: 'Ext.Panel',
    xtype: 'babyPage',
    fullscreen: true,
    config: {
       
        items:[
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Baby',
                items: [
                    {
                        xtype: 'button',
                        ui: 'decline-back',
                        iconCls: 'user',
                        action: 'pageBackward'
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: 'fit',
                html: 'Below is the entry',
                items: [
                    {
                        xtype: 'panel',
                        html: 'this is a picture of a baby!!',
                        flex: 1
                    },
                    {
                        xtype: 'image',
                        src: 'http://funnyasduck.net/wp-content/uploads/2012/08/12_funny+pictures.jpg',
                        flex: 1,
                        height: 100,
                        width: 100
                    }
                ]
            } 
        ]
    }    
});


           