document.querySelectorAll('h3 + p').forEach($el => {
  const p = $el.outerHTML;
  const h3 = $el.previousElementSibling.outerHTML;
  $el.previousElementSibling.outerHTML = `<div class="title-and-1st-para">${h3}${p}</div>`;
  $el.remove();
});
