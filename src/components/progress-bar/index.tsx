const ProgressBar = () => {
  return (
    <div className="bg-aqua w-full px-0">
      <div className="mb-0 bg-aqua">
        <div className="bg-aqua dark:bg-dark-3 relative h-1.5 w-full rounded-none">
          <div className="bg-darkTurquoise absolute top-0 left-0 h-full w-[20%] sm:w-[10%] rounded-none"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
