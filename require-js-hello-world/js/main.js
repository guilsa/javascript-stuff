require.config({
  baseUrl: './',
  paths: {
    knockout: 'js/libs/knockout/knockout',
    app: 'js/app',
    buyer: 'js/modules/buyer'
  },
  waitSeconds: 2
});

require(['knockout', 'app'], function (ko, appViewModel) {
  ko.applyBindings(new appViewModel());
})
