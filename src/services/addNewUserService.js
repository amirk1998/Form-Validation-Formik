import http from './httpServices';

export function addNewUser(data) {
  return http.post('/users', data);
}
