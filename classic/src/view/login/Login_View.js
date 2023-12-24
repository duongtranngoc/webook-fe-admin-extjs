Ext.define('WebookAdmin.view.login.Login_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Login_View',

    controller: 'Login_ViewController',
    viewModel: {
        type: 'Login_ViewModel'
    },

    cls: 'login-view',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    plugins: 'viewport',

    items: [
        {
            xtype: 'panel',
            cls: 'login-form',
            width: '50%',
            minWidth: 200,
            maxWidth: 400,
            padding: 20,

            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },

            items: [
                {
                    xtype: 'container',
                    cls: 'login-title',
                    html: 'Login',
                },
                {
                    xtype: 'form',
                    cls: 'login-content',
                    width: '100%',
                    padding: '16 0',

                    layout: 'vbox',
                    reference: 'form',

                    items: [
                        {
                            xtype: 'textfield',
                            width: '100%',

                            id: 'username',
                            name: 'username',
                            fieldLabel: 'Tên đăng nhập',
                            emptyText: 'Nhập tên đăng nhập',

                            allowBlank: false
                        },
                        {
                            cls: 'login-password-wrap',
                            width: '100%',

                            items: [
                                {
                                    xtype: 'textfield',
                                    width: '100%',

                                    id: 'password',
                                    name: 'password',
                                    inputType: 'password',
                                    fieldLabel: 'Mật khẩu',
                                    emptyText: 'Nhập mật khẩu',

                                    allowBlank: false
                                },
                                {
                                    xtype: 'button',
                                    cls: 'show-password-button',
                                    iconCls: 'x-fa fa-eye-slash',
                                    tooltip: 'Hiển thị mật khẩu',

                                    handler: 'onShowPassword'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'button',
                    text: 'Đăng nhập',
                    cls: 'login-button',
                    width: '100%',
                    height: 40,
                    margin: '20 0 0',

                    handler: 'onLoginClick'
                }
            ]
        }
    ],

    listeners: {
        afterrender: 'initKeyMappings'
    }
});
