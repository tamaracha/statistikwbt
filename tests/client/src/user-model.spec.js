describe('user model service', function(){
  'use strict';
  beforeEach(function(){
    $('head').append('<base href="/"/>');
    $('body').attr('username','kennung');
  });
  beforeEach(angular.mock.module('wbt'));
  var user, $httpBackend, $localStorage;
  beforeEach(angular.mock.inject(function(_user_, _$httpBackend_, _$localStorage_){
    user = _user_;
    $httpBackend = _$httpBackend_;
    $localStorage = _$localStorage_;
    $localStorage.$reset();
  }));
  describe('authenticated', function(){
    it('should not be authenticated', function(){
      expect(user.authenticated).toEqual(false);
    });
    it('Should not be authenticated when only token available', function(){
      $localStorage.token = 'abc';
      expect(user.authenticated).toEqual(false);
    });
    it('Should not be authenticated when only _id available', function(){
      $localStorage._id = 'abc';
      expect(user.authenticated).toEqual(false);
    });
    it('Should be authenticated when token and _id available', function(){
      $localStorage._id = 'abc';
      $localStorage.token = 'abc';
      expect(user.authenticated).toEqual(true);
    });
    it('authenticated setter should set _id and token', function(){
      user.authenticated = {
        _id: 'abc',
        token: 'abc'
      };
      expect(user.authenticated).toEqual(true);
    });
  });
  describe('role', function(){
    it('role should be anonymous when not authenticated', function(){
      expect(user.role).toEqual('anonymous');
    });
    it('role getter', function(){
      user.authenticated = {
        _id: 'abc',
        token: 'abc',
        role: 'user'
      };
      expect(user.role).toEqual('user');
    });
  });
  describe('check', function(){
    it('exists', function(){
      $httpBackend.expect('HEAD', 'api/users?kennung=sd6757').respond(200);
      user.check('sd6757');
      expect($httpBackend.flush).not.toThrow();
    });
    it('not exists', function(){
      $httpBackend.expect('HEAD', 'api/users?kennung=sd6757').respond(200);
      user.check('sx1234');
      expect($httpBackend.flush).toThrow();
    });
  });
  describe('basicAuth', function(){
    it('missing param', function(){
      expect(function(){
        return user.basicAuth({kennung: 'abc'});
      }).toThrow();
    });
    it('valid params', function(){
      expect(user.basicAuth({kennung: 'abc', password: 'def'})).toBeTruthy();
    });
  });
  describe('authenticate', function(){
    it('sucessful', function(){
      $httpBackend.expect('GET', 'api/tokens/new').respond(200);
    });
  });
});
