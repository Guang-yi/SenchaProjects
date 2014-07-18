Ext.define ('Repeat.model.Name', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'firstName', type: 'string'},
            {name:'lastName', type: 'string'}
        ]
    }
});