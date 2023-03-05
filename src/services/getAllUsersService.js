import http from './httpServices';

export function getAllUsers() {
  return http.get('/users');
}
