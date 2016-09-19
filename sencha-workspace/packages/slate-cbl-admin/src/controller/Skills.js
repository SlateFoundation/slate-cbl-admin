Ext.define('Slate.cbl.admin.controller.Skills', {
    extend: 'Ext.app.Controller',

    views: [
        'skills.Grid'
    ],

    stores: [
        'Skills'
    ],

    refs: [{
        ref: 'skillsGrid',
        selector: 'slate-cbl-admin-skillsgrid',

        autoCreate: true,
        xtype: 'slate-cbl-admin-skillsgrid'
    }],

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