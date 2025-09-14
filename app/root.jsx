import 'bootstrap/dist/css/bootstrap.min.css'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />

        <main className="container mt-4">
          <Outlet />
        </main>

        <Footer />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
