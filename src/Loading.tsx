const Loading = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[70vh]">
        <figure
          className="rounded-full flex items-center justify-center shadow-lg h-[50px] w-[50px]"
          //   animate={{ height: '90px', width: '90px' }}
        >
          <img
            src="/favicon-32x32.png"
            alt="Loading icon"
            className="h-[50px] w-[50px] rotate-[360] animate-ping"
          />
        </figure>
      </div>
    </>
  );
};

export default Loading;
