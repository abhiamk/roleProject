// core/interceptors/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'FAKE_JWT_TOKEN';
  return next(req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  }));
};
