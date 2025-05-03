import { linkStyle } from "@/constants/styles";
import Link from "next/link";
export default function BackToMain() {
    return (
        <div className="my-4">
            <Link href="/" className={linkStyle}>
                ← Back to main page
            </Link>
        </div>)
}