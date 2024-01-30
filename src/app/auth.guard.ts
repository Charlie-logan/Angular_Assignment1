import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let token=localStorage.getItem('token');
  if(!token){
    alert("Please select a course to see its details");
    window.location.href='/courses';
    return false;
  }
  else{
    return true;
  }
};
