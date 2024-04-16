function Loader(isLoading){
  if (!isLoading) {
    return null;
  }

  return <div className="loader"></div>;
};

export default Loader;
