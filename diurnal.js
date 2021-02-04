import * as Cookies from './lib/cookies.js/cookies.js';


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
  body.insertBefore(diurnalElt, body.firstElementChild);
  brightElt.onclick = () => {
    attr(body, 'class', 'diurnal-bright');
    Cookies.setCookie('diurnal', 'bright');
  };
  darkElt.onclick = () => {
    attr(body, 'class', 'diurnal-dark');
    Cookies.setCookie('diurnal', 'dark');
  };
  const cookie = Cookies.getCookie('diurnal');
  if (cookie) {
    if (cookie == 'bright') {
      attr(body, 'class', 'diurnal-bright');
    } else if (cookie == 'dark') {
      attr(body, 'class', 'diurnal-dark');
    }
  }
}
