export default function Footer() {
  return (
    <footer className="text-center">
      <div className="text-center text-sm text-[#6e7780] pb-3 flex flex-col justify-center space-x-1.5 flex-wrap">
        <p className="space-x-1">
          <span>&copy;</span>
          <span>loop</span>
          <span>{new Date().getFullYear()}</span>
          <span>All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
}
