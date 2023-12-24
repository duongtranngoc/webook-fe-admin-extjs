Ext.define('MyProjectFrontend.config.Config', {
    alternateClassName: [
        'config'
    ],
    singleton: true,

    config: {
        appBaseUrl: 'http://localhost:8000/api/admin/',
    },

    constructor: function (config) {
        this.initConfig(config);
        return this
    }
});
