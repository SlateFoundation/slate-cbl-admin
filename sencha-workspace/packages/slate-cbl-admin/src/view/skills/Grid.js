Ext.define('Slate.cbl.admin.view.skills.Grid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.toolbar.Paging',
        'Ext.grid.plugin.CellEditing'
    ],

    xtype: 'slate-cbl-admin-skillsgrid',

    store: 'Skills',
    height: "100%",

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Skills',
        dock: 'bottom',
        displayInfo: true
    }],

    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 2
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
        },{
            dataIndex: 'FirstLevelDemonstrationsRequired',
            text: 'ER\'S Level 9',
            editor: {
                xtype: 'numberfield',
                allowBlank: false
            }
        },{
            dataIndex: 'SecondLevelDemonstrationsRequired',
            text: 'ER\'S Level 10',
            editor: {
                xtype: 'numberfield',
                allowBlank: false
            }
        },{
            dataIndex: 'ThirdLevelDemonstrationsRequired',
            text: 'ER\'S Level 11',
            editor: {
                xtype: 'numberfield',
                allowBlank: false
            }
        },{
            dataIndex: 'FourthLevelDemonstrationsRequired',
            text: 'ER\'S Level 12',
            editor: {
                xtype: 'numberfield',
                allowBlank: false
            }
        }]
    }
});