import Container from "./Container";
import Link from "next/link";

export default function () {
  return (
    <Container>
      <div className="hover:cursor-default fixed w-full grid px-4 py-5 grid-cols-2 border-b border-solid z-10">
        <Link href="/work">
          <span>Work</span>
        </Link>
        <Link href="/blog">
          <span>Blog</span>
        </Link>
        <Link href="/about">
          <span>About</span>
        </Link>
      </div>
    </Container>
  );
}
