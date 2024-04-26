import Button from "../components/Button";

function NotFound() {
  return (
    <div className="notFoundPage">
      <h1>The Page Not found</h1>
      <Button isLink={true} path="/allTodos" text="Back to All Todos Page" />
    </div>
  );
}

export default NotFound;
