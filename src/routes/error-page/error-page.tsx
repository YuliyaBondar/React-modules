import './error-page.css';

export default function ErrorPage() {
  return (
    <div className="error-page">
      <h2 data-testid="h2_error">Oops!</h2>
      <p data-testid="error-text">Sorry, page is not found.</p>
    </div>
  );
}
