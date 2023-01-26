import { visit } from 'unist-util-visit';
import type { Element } from 'hast';
import { hasProperty } from 'hast-util-has-property';

const rephyTargetBlank = () => {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (hasProperty(node, 'target')) {
        return;
      }

      const props = node.properties || {};
      const href = props.href?.toString();
      if (href?.startsWith('http') || href?.startsWith('https')) {
        props.target = '_blank';
      }
    });
  };
};

export default rephyTargetBlank;
