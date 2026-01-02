// source.config.ts
import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
import jsonSchema from "fumadocs-mdx/plugins/json-schema";
import lastModified from "fumadocs-mdx/plugins/last-modified";
import { z } from "zod";
var docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      index: z.boolean().default(false),
      /**
       * API routes only
       */
      method: z.string().optional()
    }),
    postprocess: {
      includeProcessedMarkdown: true,
      extractLinkReferences: true
    },
    async: true
  },
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional()
    })
  }
});
function transformerEscape() {
  return {
    name: "@shikijs/transformers:remove-notation-escape",
    code(hast) {
      function replace(node) {
        if (node.type === "text") {
          node.value = node.value.replace("[\\!code", "[!code");
        } else if ("children" in node) {
          for (const child of node.children) {
            replace(child);
          }
        }
      }
      replace(hast);
      return hast;
    }
  };
}
var source_config_default = defineConfig({
  plugins: [
    jsonSchema({
      insert: true
    }),
    lastModified()
  ],
  mdxOptions: async () => {
    const { rehypeCodeDefaultOptions } = await import("fumadocs-core/mdx-plugins/rehype-code");
    const { remarkSteps } = await import("fumadocs-core/mdx-plugins/remark-steps");
    const { transformerTwoslash } = await import("fumadocs-twoslash");
    const { createFileSystemTypesCache } = await import("fumadocs-twoslash/cache-fs");
    const { default: remarkMath } = await import("remark-math");
    const { default: rehypeKatex } = await import("rehype-katex");
    const { remarkAutoTypeTable } = await import("fumadocs-typescript");
    return {
      rehypeCodeOptions: {
        langs: ["ts", "js", "html", "tsx", "mdx"],
        inline: "tailing-curly-colon",
        themes: {
          light: "catppuccin-latte",
          dark: "catppuccin-mocha"
        },
        transformers: [
          ...rehypeCodeDefaultOptions.transformers ?? [],
          transformerTwoslash({
            typesCache: createFileSystemTypesCache()
          }),
          transformerEscape()
        ]
      },
      remarkCodeTabOptions: {
        parseMdx: true
      },
      remarkNpmOptions: {
        persist: {
          id: "package-manager"
        }
      },
      remarkPlugins: [remarkSteps, remarkMath, remarkAutoTypeTable],
      rehypePlugins: (v) => [rehypeKatex, ...v]
    };
  }
});
var blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    date: z.string().or(z.date()).transform((value, context) => {
      try {
        return new Date(value);
      } catch {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid date"
        });
        return z.NEVER;
      }
    }),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional()
  })
});
export {
  blog,
  source_config_default as default,
  docs
};
