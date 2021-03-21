import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>OsteriaX | Home</title>

          <link
            rel="shortcut icon"
            href="/assets/img/favicon.ico"
            type="image/x-icon"
          />

          <link href="/assets/css/font-awesome.css" rel="stylesheet" />
          <link href="/assets/css/bootstrap.css" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="/assets/css/slick.css" />
          <link rel="stylesheet" type="text/css" href="slick/slick.css" />
          <link rel="stylesheet" type="text/css" href="slick/slick-theme.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/css/bootstrap-datepicker.css"
          />
          <link href="/assets/css/magnific-popup.css" rel="stylesheet" />
          <link
            id="switcher"
            href="/assets/css/theme-color/default-theme.css"
            rel="stylesheet"
          />

          <link href="style.css" rel="stylesheet" />

          <link
            href="https://fonts.googleapis.com/css?family=Prata"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Tangerine"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src="/assets/js/jquery.min.js"></script>
          <script src="/assets/js/bootstrap.js"></script>
          <script type="text/javascript" src="/assets/js/slick.js"></script>
          <script
            type="text/javascript"
            src="/assets/js/simple-animated-counter.js"></script>
          <script
            type="text/javascript"
            src="/assets/js/jquery.magnific-popup.min.js"></script>
          <script
            type="text/javascript"
            src="/assets/js/bootstrap-datepicker.js"></script>
          <script type="text/javascript" src="/assets/js/app.js"></script> */}

          {/* <script src="/assets/js/custom.js"></script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
