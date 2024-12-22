import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Uh Oh!</h1>
      <p>Sorry, there must have been something I did not account for.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}