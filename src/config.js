import main from './main';
import {types, wrappers} from './formly';

export /*@ngInject*/function config($locationProvider,$compileProvider,$httpProvider,$urlRouterProvider,RestangularProvider,stateHelperProvider,formlyConfigProvider){
  $locationProvider.html5Mode(true);
  $compileProvider.debugInfoEnabled(false);
  $httpProvider.interceptors.push('userInterceptor');
  $httpProvider.defaults.paramSerializer = '$httpParamSerializerJQLike';
  RestangularProvider.setBaseUrl('api');
  RestangularProvider.setRestangularFields({
    id: '_id'
  });
  stateHelperProvider.state(main);
  $urlRouterProvider.otherwise('/home');
  formlyConfigProvider.disableWarnings = true;
  formlyConfigProvider.setWrapper(wrappers);
  formlyConfigProvider.setType(types);
}

export /*@ngInject*/function run($rootScope,$state,$stateParams,Permission,user,modals,formlyValidationMessages){
  $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState,fromParams){
    $rootScope.prevState = fromState;
    $rootScope.prevParams = fromParams;
  });
  $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
    console.error(error); // eslint-disable-line no-console
  });
  $rootScope.$on('$stateChangePermissionDenied',function(event,toState,toParams){
    modals.login()
    .result.then(() => {
      $state.go(toState.name,toParams);
    },() => {
      if($rootScope.prevState.name === ''){
        $state.go('main.home');
      }
    });
  });
  Permission.defineRole('anonymous',function(){
    if(!user.authenticated){
      return true;
    }
    return false;
  });
  formlyValidationMessages.addStringMessage('json','JSON ist invalid');
  formlyValidationMessages.addTemplateOptionValueMessage('minlength','minlength','Bitte mindestens','Zeichen eingeben');
  formlyValidationMessages.addTemplateOptionValueMessage('maxlength','maxlength','Bitte höchstens','Zeichen eingeben');
  formlyValidationMessages.addTemplateOptionValueMessage('required','label','','ist erforderlich');
  formlyValidationMessages.messages.email = function($viewValue){
    return `${$viewValue} ist keine gültige E-Mail-Adresse`;
  };
}
