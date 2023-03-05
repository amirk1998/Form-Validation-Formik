import http from './httpServices';

export function getOneUser(id) {
  return http.get(`/Users/${id}`);
}
