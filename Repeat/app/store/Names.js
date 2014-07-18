Ext.define ('Repeat.store.Names', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'Repeat.model.Name',
        sorters: 'lastName',
        grouper: function(record) {
            return record.get('lastName')[0];
        },
        data: [
            {firstName: 'Michael', lastName: 'Lee'},
            {firstName: 'Michael', lastName: 'Huang'},
            {firstName: 'Michael', lastName: 'Chan'},
            {firstName: 'Michael', lastName: 'Huey'},
            {firstName: 'Michael', lastName: 'Johnson'},
            {firstName: 'Michael', lastName: 'Cumberbatch'},
            {firstName: 'Michael', lastName: 'Hitler'},
            {firstName: 'Michael', lastName: 'Stalin'},
            {firstName: 'Michael', lastName: 'Zhedong'},
            {firstName: 'Michael', lastName: 'Khan'},
            {firstName: 'Michael', lastName: 'Genghis'}
            
        ]
    }
});