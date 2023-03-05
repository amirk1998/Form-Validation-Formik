import http from './httpServices';

export function deleteComment(commentID) {
  return http.delete(`/comments/${commentID}`);
}
