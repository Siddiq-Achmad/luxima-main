// @ts-nocheck
import { frontmatter as __fd_glob_28 } from "../content/docs/api-reference/(generated)/tickets/getTicketCode.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_27 } from "../content/docs/api-reference/(generated)/tickets/buyMuseumTickets.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_26 } from "../content/docs/api-reference/(generated)/operations/getMuseumHours.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_25 } from "../content/docs/api-reference/(generated)/events/updateSpecialEvent.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_24 } from "../content/docs/api-reference/(generated)/events/publishNewEvent.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_23 } from "../content/docs/api-reference/(generated)/events/listSpecialEvents.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_22 } from "../content/docs/api-reference/(generated)/events/getSpecialEvent.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_21 } from "../content/docs/api-reference/(generated)/events/deleteSpecialEvent.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_20 } from "../content/docs/api-reference/(generated)/events/createSpecialEvent.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_19 } from "../content/docs/(index)/guides/using-custom-themes.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_18 } from "../content/docs/(index)/guides/customizing-the-layout.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_17 } from "../content/docs/(index)/guides/adding-a-root-folder.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_16 } from "../content/docs/(index)/features/rss.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_15 } from "../content/docs/(index)/features/openapi.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_14 } from "../content/docs/(index)/features/llms.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_13 } from "../content/docs/(index)/features/async-mode.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_12 } from "../content/docs/(index)/features/ai-chat.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_11 } from "../content/docs/(index)/essentials/routing.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_10 } from "../content/docs/(index)/essentials/markdown.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_9 } from "../content/docs/(index)/essentials/code.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_8 } from "../content/docs/changelog/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_7 } from "../content/docs/api-reference/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_6 } from "../content/docs/(index)/quickstart.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_5 } from "../content/docs/(index)/index.mdx?collection=docs&only=frontmatter"
import { default as __fd_glob_4 } from "../content/docs/(index)/essentials/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/changelog/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/api-reference/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/(index)/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
    docs: {
      /**
       * extracted references (e.g. hrefs, paths), useful for analyzing relationships between pages.
       */
      extractedReferences: import("fumadocs-mdx").ExtractedReference[];
    },
  }
} & {
  DocData: {
    blog: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
    docs: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
  }
}>({"doc":{"passthroughs":["extractedReferences","lastModified"]}});

export const blog = await create.doc("blog", "content/blog", {});

export const docs = await create.docsLazy("docs", "content/docs", {"meta.json": __fd_glob_0, "(index)/meta.json": __fd_glob_1, "api-reference/meta.json": __fd_glob_2, "changelog/meta.json": __fd_glob_3, "(index)/essentials/meta.json": __fd_glob_4, }, {"(index)/index.mdx": __fd_glob_5, "(index)/quickstart.mdx": __fd_glob_6, "api-reference/index.mdx": __fd_glob_7, "changelog/index.mdx": __fd_glob_8, "(index)/essentials/code.mdx": __fd_glob_9, "(index)/essentials/markdown.mdx": __fd_glob_10, "(index)/essentials/routing.mdx": __fd_glob_11, "(index)/features/ai-chat.mdx": __fd_glob_12, "(index)/features/async-mode.mdx": __fd_glob_13, "(index)/features/llms.mdx": __fd_glob_14, "(index)/features/openapi.mdx": __fd_glob_15, "(index)/features/rss.mdx": __fd_glob_16, "(index)/guides/adding-a-root-folder.mdx": __fd_glob_17, "(index)/guides/customizing-the-layout.mdx": __fd_glob_18, "(index)/guides/using-custom-themes.mdx": __fd_glob_19, "api-reference/(generated)/events/createSpecialEvent.mdx": __fd_glob_20, "api-reference/(generated)/events/deleteSpecialEvent.mdx": __fd_glob_21, "api-reference/(generated)/events/getSpecialEvent.mdx": __fd_glob_22, "api-reference/(generated)/events/listSpecialEvents.mdx": __fd_glob_23, "api-reference/(generated)/events/publishNewEvent.mdx": __fd_glob_24, "api-reference/(generated)/events/updateSpecialEvent.mdx": __fd_glob_25, "api-reference/(generated)/operations/getMuseumHours.mdx": __fd_glob_26, "api-reference/(generated)/tickets/buyMuseumTickets.mdx": __fd_glob_27, "api-reference/(generated)/tickets/getTicketCode.mdx": __fd_glob_28, }, {"(index)/index.mdx": () => import("../content/docs/(index)/index.mdx?collection=docs"), "(index)/quickstart.mdx": () => import("../content/docs/(index)/quickstart.mdx?collection=docs"), "api-reference/index.mdx": () => import("../content/docs/api-reference/index.mdx?collection=docs"), "changelog/index.mdx": () => import("../content/docs/changelog/index.mdx?collection=docs"), "(index)/essentials/code.mdx": () => import("../content/docs/(index)/essentials/code.mdx?collection=docs"), "(index)/essentials/markdown.mdx": () => import("../content/docs/(index)/essentials/markdown.mdx?collection=docs"), "(index)/essentials/routing.mdx": () => import("../content/docs/(index)/essentials/routing.mdx?collection=docs"), "(index)/features/ai-chat.mdx": () => import("../content/docs/(index)/features/ai-chat.mdx?collection=docs"), "(index)/features/async-mode.mdx": () => import("../content/docs/(index)/features/async-mode.mdx?collection=docs"), "(index)/features/llms.mdx": () => import("../content/docs/(index)/features/llms.mdx?collection=docs"), "(index)/features/openapi.mdx": () => import("../content/docs/(index)/features/openapi.mdx?collection=docs"), "(index)/features/rss.mdx": () => import("../content/docs/(index)/features/rss.mdx?collection=docs"), "(index)/guides/adding-a-root-folder.mdx": () => import("../content/docs/(index)/guides/adding-a-root-folder.mdx?collection=docs"), "(index)/guides/customizing-the-layout.mdx": () => import("../content/docs/(index)/guides/customizing-the-layout.mdx?collection=docs"), "(index)/guides/using-custom-themes.mdx": () => import("../content/docs/(index)/guides/using-custom-themes.mdx?collection=docs"), "api-reference/(generated)/events/createSpecialEvent.mdx": () => import("../content/docs/api-reference/(generated)/events/createSpecialEvent.mdx?collection=docs"), "api-reference/(generated)/events/deleteSpecialEvent.mdx": () => import("../content/docs/api-reference/(generated)/events/deleteSpecialEvent.mdx?collection=docs"), "api-reference/(generated)/events/getSpecialEvent.mdx": () => import("../content/docs/api-reference/(generated)/events/getSpecialEvent.mdx?collection=docs"), "api-reference/(generated)/events/listSpecialEvents.mdx": () => import("../content/docs/api-reference/(generated)/events/listSpecialEvents.mdx?collection=docs"), "api-reference/(generated)/events/publishNewEvent.mdx": () => import("../content/docs/api-reference/(generated)/events/publishNewEvent.mdx?collection=docs"), "api-reference/(generated)/events/updateSpecialEvent.mdx": () => import("../content/docs/api-reference/(generated)/events/updateSpecialEvent.mdx?collection=docs"), "api-reference/(generated)/operations/getMuseumHours.mdx": () => import("../content/docs/api-reference/(generated)/operations/getMuseumHours.mdx?collection=docs"), "api-reference/(generated)/tickets/buyMuseumTickets.mdx": () => import("../content/docs/api-reference/(generated)/tickets/buyMuseumTickets.mdx?collection=docs"), "api-reference/(generated)/tickets/getTicketCode.mdx": () => import("../content/docs/api-reference/(generated)/tickets/getTicketCode.mdx?collection=docs"), });