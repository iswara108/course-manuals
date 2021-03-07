//@ts-check
document.addEventListener('DOMContentLoaded', () =>
  // once the page loaded, wrap any combination of a
  // header and paragraph in a div with class "title-and-1st-para"
  document.querySelectorAll('h1 + p, h2 + p, h3 + p').forEach($el => {
    const p = $el.outerHTML;
    const h3 = $el.previousElementSibling.outerHTML;
    $el.previousElementSibling.outerHTML = `<div class="title-and-1st-para">${h3}${p}</div>`;
    $el.remove();
  })
);
