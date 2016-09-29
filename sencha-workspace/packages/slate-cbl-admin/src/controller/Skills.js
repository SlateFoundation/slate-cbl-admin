Ext.define('Slate.cbl.admin.controller.Skills', {
    extend: 'Ext.app.Controller',

    views: [
        'skills.Grid@Slate.cbl.admin.view'
    ],

    stores: [
        'Skills@Slate.cbl.admin.store'
    ],

    refs: {
        skillsGrid: {
            selector: 'slate-cbl-admin-skillsgrid',
            autoCreate: true,

            xtype: 'slate-cbl-admin-skillsgrid'
        },
        settingsNavPanel: 'settings-navpanel'
    },

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
            grid = me.getSkillsGrid(),
            navPanel = me.getSettingsNavPanel();

        Ext.suspendLayouts();

        Ext.util.History.suspendState();

        navPanel.setActiveLink('settings/cbl/skills');
        navPanel.expand();
        Ext.util.History.resumeState(false); // false to discard any changes to state

        me.getApplication().getController('Viewport').loadCard(grid);
        grid.getStore().load();

        Ext.resumeLayouts(true);
    }
});