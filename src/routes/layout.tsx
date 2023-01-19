import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";
import { extractLang } from "../i18n";

export const onRequest = ({ request, locale }) => {
  const lang = extractLang(request.headers.get("accept-language"), request.url);
  locale(lang);
};

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
