import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function FirstPost() {
  return (
    <>
      <Head>
        <Title>First Post</Title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
