// Adapted to es6 from https://www.w3schools.com/js/js_cookies.asp.

function setCookie(name, value, exdays=1) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + d.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}


function getCookie(name) {
  const namePrefix = name + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(namePrefix) == 0) {
      return c.substring(namePrefix.length, c.length);
    }
  }
  return '';
}

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


function bind() {
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
    setCookie('diurnal', 'bright');
  };
  darkElt.onclick = () => {
    attr(body, 'class', 'diurnal-dark');
    setCookie('diurnal', 'dark');
  };
  const cookie = getCookie('diurnal');
  if (cookie) {
    if (cookie == 'bright') {
      attr(body, 'class', 'diurnal-bright');
    } else if (cookie == 'dark') {
      attr(body, 'class', 'diurnal-dark');
    }
  }
}

export { bind };
