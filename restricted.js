
export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname !== "/restricted") {
      return new Response("Not found", { status: 404 });
    }

    return new Response(
      `<!doctype html>
      <html lang="de">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Restricted</title>
        <style>
          body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            color: #111;
            text-align: center;
          }
          main { max-width: 440px; padding: 32px; }
          h1 { font-size: 42px; letter-spacing: 5px; }
          p { color: #666; line-height: 1.6; }
        </style>
        <main>
          <h1>RESTRICTED</h1>
          <p>Diese Seite ist nur für autorisierte Besucher verfügbar.</p>
        </main>
      </html>`,
      {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
          "X-Content-Type-Options": "nosniff"
        }
      }
    );
  }
};
