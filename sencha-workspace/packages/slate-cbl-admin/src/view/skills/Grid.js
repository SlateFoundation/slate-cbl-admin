Ext.define('Slate.cbl.admin.view.skills.Grid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.plugin.BufferedRenderer'
    ],

    xtype: 'cbl-admin-skills-grid',

    store: 'Skills',
    height: "100%",

    plugins: {
        ptype: 'bufferedrenderer'
    },

    columns: {
        defaults: {
            flex: 1
        },
        items: [{
            dataIndex: 'Code',
            text: 'Code'
        },{
            dataIndex: 'Descriptor',
            text: 'Descriptor',
            flex: 5,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },{
            dataIndex: 'Statement',
            text: 'Statement',
            flex: 5,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }]
    }
});