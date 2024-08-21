const Loading = ({ message }: { message: string }) => {
  return (
    <div>
      <div className="loader"></div>
      <p>{message}...</p>
    </div>
  );
};

export default Loading;
