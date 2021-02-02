function attr (elt, attrName, attrValue) {
  elt.setAttribute(attrName, attrValue);
}


function elt(name, attrName, attrValue, text) {
  const elt = document.createElement(name);
  attr(elt, attrName, attrValue);
  if (text) {
    elt.appendChild(document.createTextNode(text));
  }
  return elt;
}


export function bind() {
  if (!document.body) {
    throw new Error('Document must contain body element');
  }
  const diurnalElt = elt('div', 'id', 'diurnal-controls');
  const brightElt = elt('button', 'class', 'diurnal-control diurnal-bright', '☼');
  // TODO: ☀ is more semantically correct, but on a dark background it turns bright.
  const darkElt = elt('button', 'class', 'diurnal-control diurnal-dark', '☼');
  diurnalElt.appendChild(brightElt);
  diurnalElt.appendChild(darkElt);
  const body = document.body;
  brightElt.onclick = () => { attr(body, 'class', 'diurnal-bright'); };
  darkElt.onclick = () => { attr(body, 'class', 'diurnal-dark'); };
  document.body.insertBefore(diurnalElt, document.body.firstElementChild);
}
