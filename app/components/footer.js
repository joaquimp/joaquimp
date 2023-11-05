import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

import { Twitter, Facebook, Instagram, LinkedIn } from "./social";

export default function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative w-full">
      <Container>
        <div className="flex flex-wrap justify-between">
          <div className="max-w-xs">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-gray-700 dark:text-gray-100"
              >
                <Image
                  src="/joca.png"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Joaquim</span>
              </Link>
            </div>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              “Não havendo sábia direção, cai o povo, mas na multidão de
              conselheiros há segurança.”&nbsp;
              <a
                href="https://bible.com/bible/1608/pro.11.14.ARA"
                target="_blank"
              >
                Provérbios 11:14 ARA
              </a>
            </div>
          </div>

          
          <div className="max-w-xs">
            <div>Siga-me</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <Twitter />
              <Facebook />
              <Instagram />
              <LinkedIn />
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Joaquim Pessôa Filho
        </div>
      </Container>
    </div>
  );
}
