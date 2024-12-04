import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p className="my-4 text-center text-xl hover:text-2xl hover:text-muted transition-all duration-300 animate-bounce cursor-pointer">
        <Link href="https://github.com/cod3prod">Created by cod3prod</Link>
      </p>
    </footer>
  );
}
