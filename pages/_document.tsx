import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const withServerStyleSheet = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const originalRenderPage = ctx.renderPage;
  const sheet = new ServerStyleSheet();

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    };
  } finally {
    sheet.seal();
  }
};
// The code above is the default requirements for next to run. It has been
// modified to function as a return for code simplicity

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return withServerStyleSheet(ctx);
  }

}

export default MyDocument;
