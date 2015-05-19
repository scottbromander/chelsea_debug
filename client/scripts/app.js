console.log("Scripts loading");

var myApp = angular.module('myApp', ['pascalprecht.translate']);

/*

 app.config(['$translateProvider', function ($translateProvider) {
 // add translation table
 $translateProvider
 .translations('en', translations)
 .preferredLanguage('en');
 }]);

 */


myApp.config(['$translateProvider',function($translateProvider) {
    $translateProvider.translations('en', {
        "HEADING": "This website can be translated into German or English.",
        "PARA": "Just click one of the buttons below to see how it works.",
        "BUTTON_TEXT_EN": "English",
        "BUTTON_TEXT_DE": "German"
    })
    .translations('de', {
        "HEADING": "Diese Webseite kann in deutscher oder englischer Sprache übersetzt werden.",
        "PARA": "Klicken Sie einfach auf eine der Tasten, um zu sehen, wie es funktioniert.",
        "BUTTON_TEXT_EN": "Englisch",
        "BUTTON_TEXT_DE": "Deutsch"
    });
    $translateProvider.preferredLanguage('en');
}]);
//
////myApp.config(['$translateProvider', function ($translateProvider) {
////    $translateProvider.useStaticFilesLoader({
////        prefix: 'lang-',
////        suffix: '.json'
////    });
////    $translateProvider.preferredLanguage('en');
////}]);
//
myApp.controller('langController', ["$scope", "$translate", function($scope, $translate) {
    $scope.switchLanguage = function (languageKey) {
        console.log("Works");
        $translate.uses(languageKey);
    };
}]);
