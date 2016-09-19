Ext.define('Slate.cbl.admin.overrides.SlateAdmin', {
    override: 'SlateAdmin.Application',
    requires: [

        'Slate.cbl.admin.controller.Skills',

        'Slate.cbl.admin.overrides.SettingsNavPanel'
    ],

    initControllers: function() {
        this.callParent();
        this.getController('Slate.cbl.admin.controller.Skills');
    }
});