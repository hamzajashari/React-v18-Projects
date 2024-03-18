const ErrorExample = () => {
  const handleClick = () => {
    count++;
    console.log(count);
  };

  let count = 0;

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick} className="btn">
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
