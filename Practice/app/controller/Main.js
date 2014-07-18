Ext.define ('Practice.controller.Main', {
    extend: 'Ext.app.Controller',
    views: ['Main', 'Subview', 'Baby'],
    
    init: function() {
        this.control({
            'button[action = pageForward]' :{
                tap: 'pageForwardFunction'
            },
            'button[action = pageBackward]' :{
                tap: 'pageBackwardFunction'
            },
            'button[action = pageForwarding]' : {
                tap: 'pageForwardingFunction'
            }
        });
    },
    
    pageForwardFunction: function(){
        var cntr = Ext.ComponentQuery.query('#mycontainer')[0];
        cntr.setActiveItem(1);
    },
    
    pageBackwardFunction: function(){
        var cntr = Ext.ComponentQuery.query('#mycontainer')[0];
        cntr.setActiveItem(0);
    },
    
    pageForwardingFunction: function(){
        var cntr = Ext.ComponentQuery.query('#mycontainer')[0];
        cntr.setActiveItem(2)
    }
    
});