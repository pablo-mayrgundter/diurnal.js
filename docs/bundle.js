// node_modules/@pablo-mayrgundter/cookies.js/cookies.js
function setCookie(name, value, exdays = 1) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1e3);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}
function getCookie(name) {
  const namePrefix = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(namePrefix) == 0) {
      return c.substring(namePrefix.length, c.length);
    }
  }
  return "";
}

// diurnal.js
function attr(elt2, attrName, attrValue) {
  elt2.setAttribute(attrName, attrValue);
}
function elt(name, attrName, attrValue, text) {
  const elt2 = document.createElement(name);
  attr(elt2, attrName, attrValue);
  if (text) {
    elt2.appendChild(document.createTextNode(text));
  }
  return elt2;
}
function bind() {
  if (!document.body) {
    throw new Error("Document must contain body element");
  }
  const diurnalElt = elt("div", "id", "diurnal-controls");
  const brightElt = elt("button", "class", "diurnal-control diurnal-bright", "\u263C");
  const darkElt = elt("button", "class", "diurnal-control diurnal-dark", "\u263C");
  diurnalElt.appendChild(brightElt);
  diurnalElt.appendChild(darkElt);
  const body = document.body;
  body.insertBefore(diurnalElt, body.firstElementChild);
  brightElt.onclick = () => {
    attr(body, "class", "diurnal-bright");
    setCookie("diurnal", "bright");
  };
  darkElt.onclick = () => {
    attr(body, "class", "diurnal-dark");
    setCookie("diurnal", "dark");
  };
  const cookie = getCookie("diurnal");
  if (cookie) {
    if (cookie == "bright") {
      attr(body, "class", "diurnal-bright");
    } else if (cookie == "dark") {
      attr(body, "class", "diurnal-dark");
    }
  }
}

// docs/index.js
bind();
