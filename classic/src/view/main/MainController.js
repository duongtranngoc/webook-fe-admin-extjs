Ext.define('WebookAdmin.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    init: function () {

    },

    onToggleNavigationSize: function (button) {
        var self = this;
        var references = self.getReferences();
        var menuStore = references.navigationTreeList;
        var sidebar = references.mainSidebar;
        var center = references.mainCenter;
        var collapsing = !menuStore.getMicro();
        var newWidth = collapsing ? sizeconstant.MAIN.WIDTH_MENU_CLOSED
            : sizeconstant.MAIN.WIDTH_MENU_OPENED;
        var viewModel = self.getViewModel();
        if (collapsing) {
            menuStore.setUi('navigation-collap');
            viewModel.set('sidebarCls', 'sidebar-close');
            button.setIconCls('x-fa fa-list')
        } else {
            menuStore.setUi('navigation');
            viewModel.set('sidebarCls', 'sidebar-open');
            button.setIconCls('x-fa fa-chevron-left')
        }
        if (Ext.isIE9m || !Ext.os.is.Desktop) {
            Ext.suspendLayouts();
            menuStore.setWidth(newWidth);
            menuStore.setMicro(collapsing);
            Ext.resumeLayouts()
        } else {
            menuStore.setMicro(collapsing);
            menuStore.setWidth(newWidth);
            sidebar.setWidth(newWidth);
            center.setWidth(center.lastBox.width + sizeconstant.MAIN.WIDTH_MENU_OPENED - newWidth);
            sidebar.updateLayout();
            center.updateLayout();
        }
        this.getViewModel().set('sidebarWidth', newWidth)
    },
});
