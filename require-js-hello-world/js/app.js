define(['knockout'], function (ko) {
  return function app() {
      this.firstName = ko.observable('Elaine');
      this.capitalizeFirstName = function() {
        var currentVal = this.firstName();
        return this.firstName(currentVal.toUpperCase());
      };
  }
})
