Ext.define('WebookAdmin.view.login.Login_ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.Login_ViewController',

    onShowPassword: function (button) {
        var passwordField = Ext.getCmp('password');
        var inputEl = passwordField.inputEl.dom;

        if (inputEl.getAttribute('type') === 'password') {
            inputEl.setAttribute('type', 'text');
            button.setIconCls('x-fa fa-eye');
            button.setTooltip('Ẩn mật khẩu');
        } else {
            inputEl.setAttribute('type', 'password');
            button.setIconCls('x-fa fa-eye-slash');
            button.setTooltip('Hiển thị mật khẩu');
        }
    },

    onLoginClick: function () {
        var form = this.getView().lookupReference('form');
        var view = this.getView();
        if (form && form.isValid()) {
            var username = form.getForm().findField('username').getValue();
            var password = form.getForm().findField('password').getValue();

            Ext.Ajax.request({
                url: config.getAppBaseUrl() + 'login', // Đặt URL endpoint tại đây
                method: 'POST', // Sử dụng phương thức POST
                params: {
                    admin_username: username,
                    admin_password: password
                },
                success: function () {
                    view.destroy();
                    Ext.create('WevbookAdmin.view.main.Main', {
                        fullscreen: true
                    });
                },
                failure: function (response) {
                    errorTitle = Ext.decode(response.responseText).title ? Ext.decode(response.responseText).title : 'thông báo lỗi';
                    errorMessage = Ext.decode(response.responseText).message;
                    toast.toastError(errorTitle, errorMessage);
                }
            });
        }
    },

    initKeyMappings: function () {
        Ext.getBody().on('keydown', this.onKeyDown, this);
    },

    onKeyDown: function (event) {
        if (event.getKey() === event.ENTER) {
            var form = this.lookupReference('form');
            if (form.isValid()) {
                this.onLoginClick();
            }
        }
    },
});
