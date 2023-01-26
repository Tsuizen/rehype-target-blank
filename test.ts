import { h } from "hastscript";
import { rehype } from "rehype";
import test from "tape";
import { u } from "unist-builder";

import plugin from "./index.js";

test("rehype-target-blank", (t) => {
  t.deepEqual(
    rehype()
      .use(plugin)
      .runSync(
        u("root", [
          h("a", {
            href: 'https://www.google.com',
            itemProp: true,
          }),
        ])
      ),
      u("root", [
        h("a", {
          href: 'https://www.google.com',
          target: '_blank',
          itemProp: true,
        }),
      ])
  );

  t.end();
});