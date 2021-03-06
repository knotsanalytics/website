import Head from "next/head";
import config from "../config";

type Props = {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url: string;
};
export default function BasicMeta({
  title,
  description,
  keywords,
  author,
  url,
}: Props) {
  return (
    <Head>
      <title>
        {title ? [title, config.site_title].join(" | ") : config.site_title}
      </title>
      <meta
        name="description"
        content={description ? description : config.site_description}
      />
      <meta
        name="keywords"
        content={
          keywords
            ? keywords.join(",")
            : config.site_keywords.map((it) => it).join(",")
        }
      />
      {author ? <meta name="author" content={author} /> : null}

      <link rel="canonical" href={config.base_url + url} />
      <link rel="shortcut icon" href="/favicon.svg" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#fefefe" />

      <meta property="og:title" content="Knots" />
      <meta property="og:image" content="/images/sharePic.png" />
      <meta
        property="og:description"
        content="Get deeper insights into your data"
      />
      <meta property="og:url" content="https://knotsanalytics.com/" />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${"G-DZRSW2E4PP"}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${"G-DZRSW2E4PP"}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
}
