export const PageNotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 h-dvh bg-black text-white">
      <h1 className="font-bold text-5xl ">404: Page Not Found</h1>
      <p>The page you requested could not be found.</p>
      <footer className="mt-20">
        <span className="font-bold">Developed by:</span> Snowi
      </footer>
      <footer>
        <span className="font-bold">Status: </span>Under Development
      </footer>
    </div>
  );
};
