import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <span className="flex items-center space-x-2 text-2xl font-medium text-gray-700 dark:text-gray-100">
        <span>
          <Image
            src="/joca2.png"
            alt="N"
            width="120"
            height="120"
            className="w-8"
          />
        </span>
        <span>Joaquim</span>
      </span>
    </Link>
  );
}
