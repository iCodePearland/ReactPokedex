function ErrorComponent(isError ){
  if (!isError) {
    return null;
  }

  return (
    <div className="pokedex-error">Pokemon not found!<br />Try again!</div>
  );
};

export default ErrorComponent;
