import { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [text, setText] = useState('# md-editor-v3');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
        {/* in nuxt, editor-id must be set. */}
        <MdEditor editorId="myId" modelValue={text} onChange={setText} />
      </main>
    </div>
  );
}
