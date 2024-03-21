import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";
import rehypeShiki from "@shikijs/rehype";
import { transformerMetaHighlight } from "@shikijs/transformers";
import remarkFrontmatter from "remark-frontmatter";
import remarkSolidFrontmatter from "./src/lib/mdx/frontmatter";

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
        remarkPlugins: [remarkFrontmatter, remarkSolidFrontmatter],
        rehypePlugins: [
          [
            rehypeShiki,
            {
              theme: "github-dark",
              transformers: [transformerMetaHighlight()],
            },
          ],
        ],
      }),
    ],
  },
});
