import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>

      


         {/* Global site tag (gtag.js) - Google Analytics */}
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-DV07Y1QVPL"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DV07Y1QVPL');
            `
          }}>
          </script>

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

         {/* Open Graph */}
         <meta property="og:title" content="Ave Media - Leading Lead Generation Agency in UAE" />
        <meta property="og:description" content="Ave Media - The Best Lead Generation Agency In The UAE. We generate high quality leads for companies based in the UAE." />
        <meta property="og:image" content="/favicon.ico" /> 
        <meta property="og:url" content="https://www.avemedia.business/" /> 

          {/* Canonical Link */}
          <link rel="canonical" href="https://www.avemedia.business/" /> {/* Replace with your website URL */}
        
        <meta name="keywords" content="Lead Generation Leadgeneration advertising advertisement google ads facebook ads ave media avemedia leads b2b b2c leadgeneration agency web development branding more sales more clients get more leads clients" />
        <meta name="author" content="" />
        {/* ------ Favicon ------ */}
        <link rel="shortcut icon" href="/dark/assets/imgs/favicon.ico" />
        {/* ------ Google Fonts ------ */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        {/* ------ bootstrap icons cdn ------ */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
        {/* ------ Plugins ------ */}
        <link rel="stylesheet" href="/dark/assets/css/plugins.css" />
        {/* ------ Core Style Css ------ */}
        <link rel="stylesheet" href="/dark/assets/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
