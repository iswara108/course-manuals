//@ts-check
document.addEventListener('DOMContentLoaded', () =>
  // once the page loaded, wrap any combination of a
  // header and paragraph in a div with class "title-and-1st-para"
  document.querySelectorAll(':is(h1,h2,h3) + p').forEach($el => {
    console.log($el);
    const p = $el.outerHTML;
    const headings = getHeadingPreviousSiblings($el).reverse();
    console.log(headings);
    const headingsHTMLs = headings.map(heading => heading.outerHTML);
    headings.forEach(heading => heading.remove());
    $el.outerHTML = `<div class="title-and-1st-para">${headingsHTMLs.join(
      ''
    )}${p}</div>`;
  })
);

// get an array of all adjacent headings before the paragraph.
/**
 * @param {Element} $el
 */
function getHeadingPreviousSiblings($el) {
  const array = [];
  let currentElement = $el.previousElementSibling;
  while (currentElement?.tagName.match(/^H/)) {
    array.push(currentElement);
    currentElement = currentElement.previousElementSibling;
  }
  return array;
}
