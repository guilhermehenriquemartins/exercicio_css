function acao() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}

function mudouTela() {
  if (window.innerWidth >= 992) {
    itens.style.display = 'block'
  } else {
    itens.style.display = 'none'
  }
}