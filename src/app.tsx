import { Suspense } from "solid-js";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { MDXProvider } from "solid-mdx";

import { MDXComponents } from "~/components/mdx-components";
// import { Frontmatter } from "~/lib/mdx/frontmatter";

import "./app.css";

// const contents = import.meta.glob<{
//   frontmatter: Frontmatter;
// }>("./**/*.mdx", { eager: true });

export default function App() {
  return (
    <Router
      root={(props) => (
        <MDXProvider components={MDXComponents}>
          <main>
            <Suspense>{props.children}</Suspense>
          </main>
        </MDXProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
