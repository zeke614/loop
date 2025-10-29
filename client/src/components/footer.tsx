export default function Footer() {
  return (
    <footer className="text-center">
      <div className="px-4 text-base text-[#6e7780] py-1.5">
        <p className="space-x-1 text-center">
          <span>&copy;</span>
          <span>{new Date().getFullYear()}</span>
          <span className="font-bold text-[1.063rem] text-black"> loop</span>
          <span> All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
