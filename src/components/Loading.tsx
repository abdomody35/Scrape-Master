const Loading = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 p-4">
      <div className="loader"></div>
      <div className="text-center">
        <p className="text-white tracking-light text-[32px] font-bold leading-tight">
          {message}...
        </p>
      </div>
    </div>
  );
};

export default Loading;
