Ext.define('Slate.cbl.admin.store.Skills', {
    extend: 'Ext.data.BufferedStore',

    model: 'Slate.cbl.admin.model.Skill',
    leadingBufferZone: 100,
    pageSize: 50,
});