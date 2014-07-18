Ext.define ('Repeat.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            view: 'viewpanel'
        },
        control: {
            'mainpanel' : {
                disclose: 'showDetail'
            }
        }    
    },
    showDetail: function(list, record) {
        this.getView().push({
            xtype: 'detail',
            data: record.data
        });
    }
        
});