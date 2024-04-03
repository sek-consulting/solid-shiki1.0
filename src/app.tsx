import { Suspense } from "solid-js";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { MDXProvider } from "solid-mdx";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MDXProvider components={{}}>
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
