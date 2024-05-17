interface IsLoading {
  darkTheme: boolean;
}

const Loading: React.FC<IsLoading> = ({ darkTheme }) => {
  const darkAndLightBackground = darkTheme ? 'bg-[#4e5b62]' : 'bg-[#fff]';
  return (
    <>
      <div className="flex items-center justify-center h-[90vh] -mt-7">
        <figure
          className={`rounded-full flex items-center justify-center shadow-lg h-[50px] w-[50px]v${darkAndLightBackground}`}
        >
          <img
            src="/favicon-32x32.png"
            alt="Loading icon"
            className="h-[50px] w-[50px] animate-ping"
          />
        </figure>
      </div>
    </>
  );
};

export default Loading;
