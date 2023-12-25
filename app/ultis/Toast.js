Ext.define('WevbookAdmin.utils.Toast', {
    singleton: true,
    alternateClassName: [
        'toast'
    ],

    showToast: function (toastCls, title, message) {
        Ext.toast({
            title: title,
            html: message,
            cls: toastCls.cls,
            iconCls: toastCls.iconCls,
            align: 'br',
            minWidth: 200,
            maxWidth: 400,
            paddingX: 20,
            paddingY: 20
        });
    },

    toastSuccess: function (title, message) {
        var toastCls = {
            cls: 'toast-success',
            iconCls: 'x-fa fa-check-circle',
        };

        this.showToast(toastCls, title, message);
    },

    toastInfo: function (title, message) {
        var toastCls = {
            cls: 'toast-info',
            iconCls: 'x-fa fa-info-circle',
        };

        this.showToast(toastCls, title, message);
    },

    toastError: function (title, message) {
        var toastCls = {
            cls: 'toast-error',
            iconCls: 'x-fa fa-times-circle',
        };

        this.showToast(toastCls, title, message);
    },

    toastWarning: function (title, message) {
        var toastCls = {
            cls: 'toast-warning',
            iconCls: 'x-fa fa-exclamation-circle',
        };

        this.showToast(toastCls, title, message);
    },
});