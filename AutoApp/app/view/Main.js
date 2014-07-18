Ext.define('AutoApp.view.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'mainpanel',
    
    config: {
        title: 'Home',
        iconCls: 'home',
        html: 'Home',

        

        items: [ 
            {
                xtype: 'textfield',
                name: 'text',
                label: 'Yolo All Day',
                id: 'textForm'

            },

            {
                xtype: 'button',
                text: 'Submit',
                action: 'printPage'

            },

            {
                xtype: 'button',
                text: 'Save',
                action: 'storing'
            }
        ]
    }
});
