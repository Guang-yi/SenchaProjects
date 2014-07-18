Ext.define('list.model.User', {
    extend: 'Ext.data.model',
    
    config: {
        fields: ['id','aame', 'age', 'gender'],
        proxy: {
            type: 'localstorage',
            id: 'list-users'
        }
    }
    
});