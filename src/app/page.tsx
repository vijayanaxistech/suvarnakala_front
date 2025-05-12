import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Suvarnakala | Handcrafted Elegance</title>
        <meta
          name="description"
          content="Explore timeless handcrafted jewelry by Suvarnakala."
        />
        <meta
          name="keywords"
          content="jewelry, handcrafted, suvarnakala, gold, elegance"
        />
        <meta name="author" content="Suvarnakala" />
        <meta
          property="og:title"
          content="Suvarnakala | Handcrafted Elegance"
        />
        <meta
          property="og:description"
          content="Explore timeless handcrafted jewelry by Suvarnakala."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold">Welcome to Suvarnakala</h1>
      </main>
    </>
  );
}
