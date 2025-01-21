const GridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-4 my-2 grid grid-cols-1 gap-2 bg-slate-500 xl:grid-cols-2 2xl:grid-cols-3">
      {children}
    </div>
  );
};

export default GridContainer;
