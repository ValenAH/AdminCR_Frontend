import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

describe('AuthService', () => {
  let service: AuthService;
  let tokenService: jasmine.SpyObj<TokenService>;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    tokenService = jasmine.createSpyObj('TokenService', ['saveToken', 'removeToken', 'getToken']);
    httpClient = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    httpClient.get.and.returnValue(of({}));
    httpClient.post.and.returnValue(of({}));

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: HttpClient, useValue: httpClient },
        { provide: TokenService, useValue: tokenService }
      ]
    });

    service = TestBed.inject(AuthService);
  });

  it('should clear token and user state on logout', () => {
    service.sendUser('admin');

    service.logout();

    expect(tokenService.removeToken).toHaveBeenCalled();
    service.userLogged$.subscribe((user) => {
      expect(user).toBe('');
    });
  });
});
