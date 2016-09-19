Ext.define('Slate.cbl.admin.overrides.SettingsNavPanel', {
    override: 'SlateAdmin.view.settings.NavPanel',
    requires: [

    ],

    initComponent: function() {
        var me = this;

        me.setData(Ext.Array.merge(me.getData(), [
            { href: '#settings/cbl/skills', text: 'CBL Skills' }
        ]));

        return me.callParent(arguments);
    }
});