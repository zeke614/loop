export default function Footer() {
  return (
    <footer className="text-center">
      <div className="px-4 mt-10 fixed bottom-0 w-full text-[0.969rem] text-[#6e7780] pb-1.5">
        <p className="space-x-1 text-center">
          <span>&copy;</span>
          <span>{new Date().getFullYear()}</span>
          <span className="font-bold text-black text-[1.0625rem]"> loop</span>
          <span> All rights reserved.</span>
        </p>
        <span>
          Built by
          <a
            href="https://github.com/zeke614"
            target="_blank"
            className="font-bold ml-1 text-black text-[1.0625rem] underline underline-offset-2"
          >
            Ezekiel
          </a>
        </span>
      </div>
    </footer>
  );
}
