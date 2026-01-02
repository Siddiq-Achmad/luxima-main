// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
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
}>();
const browserCollections = {
  blog: create.doc("blog", {}),
  docs: create.doc("docs", {"(index)/index.mdx": () => import("../content/docs/(index)/index.mdx?collection=docs"), "(index)/quickstart.mdx": () => import("../content/docs/(index)/quickstart.mdx?collection=docs"), "api-reference/index.mdx": () => import("../content/docs/api-reference/index.mdx?collection=docs"), "changelog/index.mdx": () => import("../content/docs/changelog/index.mdx?collection=docs"), "(index)/essentials/code.mdx": () => import("../content/docs/(index)/essentials/code.mdx?collection=docs"), "(index)/essentials/markdown.mdx": () => import("../content/docs/(index)/essentials/markdown.mdx?collection=docs"), "(index)/essentials/routing.mdx": () => import("../content/docs/(index)/essentials/routing.mdx?collection=docs"), "(index)/features/ai-chat.mdx": () => import("../content/docs/(index)/features/ai-chat.mdx?collection=docs"), "(index)/features/async-mode.mdx": () => import("../content/docs/(index)/features/async-mode.mdx?collection=docs"), "(index)/features/llms.mdx": () => import("../content/docs/(index)/features/llms.mdx?collection=docs"), "(index)/features/openapi.mdx": () => import("../content/docs/(index)/features/openapi.mdx?collection=docs"), "(index)/features/rss.mdx": () => import("../content/docs/(index)/features/rss.mdx?collection=docs"), "(index)/guides/adding-a-root-folder.mdx": () => import("../content/docs/(index)/guides/adding-a-root-folder.mdx?collection=docs"), "(index)/guides/customizing-the-layout.mdx": () => import("../content/docs/(index)/guides/customizing-the-layout.mdx?collection=docs"), "(index)/guides/using-custom-themes.mdx": () => import("../content/docs/(index)/guides/using-custom-themes.mdx?collection=docs"), "api-reference/(generated)/events/createSpecialEvent.mdx": () => import("../content/docs/api-reference/(generated)/events/createSpecialEvent.mdx?collection=docs"), "api-reference/(generated)/events/deleteSpecialEvent.mdx": () => import("../content/docs/api-reference/(generated)/events/deleteSpecialEvent.mdx?collection=docs"), "api-reference/(generated)/events/getSpecialEvent.mdx": () => import("../content/docs/api-reference/(generated)/events/getSpecialEvent.mdx?collection=docs"), "api-reference/(generated)/events/listSpecialEvents.mdx": () => import("../content/docs/api-reference/(generated)/events/listSpecialEvents.mdx?collection=docs"), "api-reference/(generated)/events/publishNewEvent.mdx": () => import("../content/docs/api-reference/(generated)/events/publishNewEvent.mdx?collection=docs"), "api-reference/(generated)/events/updateSpecialEvent.mdx": () => import("../content/docs/api-reference/(generated)/events/updateSpecialEvent.mdx?collection=docs"), "api-reference/(generated)/operations/getMuseumHours.mdx": () => import("../content/docs/api-reference/(generated)/operations/getMuseumHours.mdx?collection=docs"), "api-reference/(generated)/tickets/buyMuseumTickets.mdx": () => import("../content/docs/api-reference/(generated)/tickets/buyMuseumTickets.mdx?collection=docs"), "api-reference/(generated)/tickets/getTicketCode.mdx": () => import("../content/docs/api-reference/(generated)/tickets/getTicketCode.mdx?collection=docs"), }),
};
export default browserCollections;