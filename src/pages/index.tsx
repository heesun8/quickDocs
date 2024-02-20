import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Intro } from "~/container/Intro";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>QuickDocs</title>
        <meta name="description" content="A quick notebook/documentation app" />
        <link rel="icon" href="/my-daily-headerIcon3.png" />
      </Head>
      <main>
        <Intro />
      </main>
    </>
  );
};

export default Home;