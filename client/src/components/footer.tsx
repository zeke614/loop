export default function Footer() {
  return (
    <footer className="text-center">
      <div className="px-4 mt-8 text-base text-[#6e7780] pb-3">
        <p className="space-x-1 text-center">
          <span>&copy;</span>
          <span>{new Date().getFullYear()}</span>
          <span className="font-bold text-lg text-black"> loop</span>
          <span> All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
