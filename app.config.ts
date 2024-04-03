import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";
import rehypeShiki from "@shikijs/rehype";

const { default: mdx } = pkg;

export default defineConfig({
  ssr: true,
  extensions: ["mdx", "md"],
  vite: {
    plugins: [
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        rehypePlugins: [[rehypeShiki, { theme: "github-dark" }]],
      }),
    ],
  },
});
