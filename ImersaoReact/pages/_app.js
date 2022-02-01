import Head from "next/head";

function GlobalStyle() {
  return (
    <>

      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        #box-mensagens::-webkit-scrollbar {
          width: 0px;
        }
        #img-github-user{
          transition: transform .3s; 
          cursor: pointer;
        }
        #img-github-user:hover {
          transform:scale(1.5);
        }
        .box-git-image{
          border: 1px solid blue;
          position: absolute;
          top: -60px;
          padding: 20px 5px; 
          display:none;

        }
        .box-git-image.ativo{
          border: 1px solid green;
        }
        /* ./App fit Height */ 

      `}</style>
    </>
  )
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Head>
        <link rel="shortcut icon" href="/pngegg.png" />
        <title>Discord - Vagabond</title>
      </Head>

    </>
  )

}