import http from './httpServices';

export function addFakeUser(data) {
  return http.post('/FakeData', data);
}
