export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 flex h-14 w-full justify-center bg-zinc-100">
      <div className="page flex items-center gap-4">
        <a href="/" className="text-lg font-semibold text-zinc-800">
          conduit
        </a>

        <span className="text-sm font-normal text-zinc-500">
          An interactive learning project from{" "}
          <a className="italic underline" href="https://thinkster.io">
            Thinkster
          </a>
          . Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  );
};
