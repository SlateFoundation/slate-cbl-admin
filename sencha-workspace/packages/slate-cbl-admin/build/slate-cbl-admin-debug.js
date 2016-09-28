Ext.define('Slate.cbl.admin.overrides.SettingsNavPanel', {
    override: 'SlateAdmin.view.settings.NavPanel',
    initComponent: function() {
        var me = this;
        me.data = me.data.concat({
            href: '#settings/cbl/skills',
            text: 'CBL Skills'
        });
        me.callParent(arguments);
    }
});

Ext.define('Slate.cbl.admin.view.skills.Grid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.toolbar.Paging',
        'Ext.grid.plugin.CellEditing'
    ],
    xtype: 'slate-cbl-admin-skillsgrid',
    store: 'Skills',
    height: "100%",
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            store: 'Skills',
            dock: 'bottom',
            displayInfo: true
        }
    ],
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 2
    },
    columns: {
        defaults: {
            flex: 1
        },
        items: [
            {
                dataIndex: 'Code',
                text: 'Code'
            },
            {
                dataIndex: 'Descriptor',
                text: 'Descriptor',
                flex: 5,
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },
            {
                dataIndex: 'Statement',
                text: 'Statement',
                flex: 5,
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },
            {
                dataIndex: 'FirstLevelDemonstrationsRequired',
                text: 'ER\'S Level 9',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false
                }
            },
            {
                dataIndex: 'SecondLevelDemonstrationsRequired',
                text: 'ER\'S Level 10',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false
                }
            },
            {
                dataIndex: 'ThirdLevelDemonstrationsRequired',
                text: 'ER\'S Level 11',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false
                }
            },
            {
                dataIndex: 'FourthLevelDemonstrationsRequired',
                text: 'ER\'S Level 12',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false
                }
            }
        ]
    }
});

/*jslint browser: true, undef: true */
/*global Ext*/
Ext.define('Slate.cbl.admin.model.Skill', {
    extend: 'Ext.data.Model',
    requires: [
        'Slate.proxy.Records',
        'Ext.data.identifier.Negative'
    ],
    // model config
    idProperty: 'ID',
    identifier: 'negative',
    fields: [
        {
            name: "ID",
            type: "int",
            allowNull: true
        },
        {
            name: "Class",
            type: "string",
            defaultValue: "Slate\\CBL\\Skill"
        },
        {
            name: "Created",
            type: "date",
            dateFormat: "timestamp",
            allowNull: true
        },
        {
            name: "CreatorID",
            type: "int",
            allowNull: true
        },
        {
            name: "RevisionID",
            type: "int",
            allowNull: true
        },
        {
            name: "Modified",
            type: "date",
            dateFormat: "timestamp",
            allowNull: true
        },
        {
            name: "ModifierID",
            type: "int",
            allowNull: true
        },
        {
            name: "CompetencyID",
            type: "int"
        },
        {
            name: "Code",
            type: "string"
        },
        {
            name: "Descriptor",
            type: "string"
        },
        {
            name: "Statement",
            type: "string"
        },
        {
            name: "FirstLevelDemonstrationsRequired",
            type: "int",
            defaultValue: 2
        },
        {
            name: "SecondLevelDemonstrationsRequired",
            type: "int",
            defaultValue: 2
        },
        {
            name: "ThirdLevelDemonstrationsRequired",
            type: "int",
            defaultValue: 2
        },
        {
            name: "FourthLevelDemonstrationsRequired",
            type: "int",
            defaultValue: 2
        },
        {
            name: "DemonstrationsRequired",
            type: "int",
            defaultValue: 2
        }
    ],
    proxy: {
        type: 'slate-records',
        url: '/cbl/skills'
    }
});

Ext.define('Slate.cbl.admin.store.Skills', {
    extend: 'Ext.data.Store',
    model: 'Slate.cbl.admin.model.Skill'
});

Ext.define('Slate.cbl.admin.controller.Skills', {
    extend: 'Ext.app.Controller',
    views: [
        'skills.Grid@Slate.cbl.admin.view'
    ],
    stores: [
        'Skills@Slate.cbl.admin.store'
    ],
    refs: [
        {
            ref: 'skillsGrid',
            selector: 'slate-cbl-admin-skillsgrid',
            autoCreate: true,
            xtype: 'slate-cbl-admin-skillsgrid'
        }
    ],
    control: {
        skillsGrid: {
            edit: 'onSkillsGridEdit'
        }
    },
    routes: {
        'settings/cbl/skills': 'showSkills'
    },
    onSkillsGridEdit: function() {
        var me = this,
            grid = me.getSkillsGrid();
        grid.getStore().sync();
    },
    showSkills: function() {
        var me = this,
            grid = me.getSkillsGrid();
        me.getApplication().getController('Viewport').loadCard(grid);
        grid.getStore().load();
    }
});

Ext.define('Slate.cbl.admin.overrides.SlateAdmin', {
    override: 'SlateAdmin.Application',
    requires: [
        'Slate.cbl.admin.controller.Skills'
    ],
    initControllers: function() {
        this.callParent();
        this.getController('Slate.cbl.admin.controller.Skills');
    }
});


