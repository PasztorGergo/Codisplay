import Head from "next/head";
import styles from "../styles/Home.module.css";
import { EditorWrapper } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Make engrossing snippets of your code. Drop in the file, or write it here. Highlighting, lintig, gradient and solid backgrounds. It is free to use, and open source."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <EditorWrapper />
      </main>
    </div>
  );
}
