export default function({ $http, redirect,req }) {
  $http.onError((err) => {
    // In case of unauthorized, redirect to a specific page
    if (err.statusCode === 401) {
      console.log('Unauthorized!');
    }
    if (err.statusCode === 404) {
      redirect('/404');
    }
    if (err.statusCode === 500) {
      return err.statusCode;
    }
    if (err.statusCode === 429) {
      return err.statusCode;
    }
  });
}
