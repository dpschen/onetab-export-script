(() => {
  const tabGroupsEls = [...document.querySelectorAll(".tabGroup")];

  function getTextContentByPrefix(root = document.body, prefix) {
    const nodeIterator = document.createNodeIterator(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          return node.nodeValue.startsWith(prefix)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        },
      }
    );

    const pars = [];
    let currentNode;

    while ((currentNode = nodeIterator.nextNode())) {
      pars.push(currentNode);
    }

    if (pars.length === 0 || pars.length > 1) {
      throw Error("Wrong amount of nodes found", pars.length);
    }

    return pars[0].textContent;
  }

  function isDisplayedBySelector(parentNode, selector) {
    const node = parentNode.querySelector(selector);
    return node && getComputedStyle(node).display !== "none";
  }

  const CREATED_PREFIX = "Created ";

  const meta = tabGroupsEls.map((groupNode) => {
    const groupTitle = groupNode
      .querySelector(".tabGroupTitleText")
      .textContent.trim() || undefined;

    const createdTextContent = getTextContentByPrefix(
      groupNode,
      CREATED_PREFIX
    );
    const created = createdTextContent?.split(CREATED_PREFIX)[1];

    const isLocked = isDisplayedBySelector(groupNode, ".lockImg");
    const isStarred = isDisplayedBySelector(groupNode, ".starImg");

    const tabLinks = [...groupNode.querySelectorAll(".tab")].map((tabNode) => {
        const { href, textContent } = tabNode.querySelector(".tabLink");

      return {
        link: href,
        title: textContent,
      };
    });

    return {
      groupTitle,
      created,
      tabLinks,
      isLocked,
      isStarred,
    };
  });

  copy(meta);
  console.log('Meta copied to clipboard');

  return meta;
})();
