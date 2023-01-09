function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir imagem
  if(html.classList.contains("light")) {
   //se conter light mode adicionar a imagem light
   img.setAttribute("src", "./assets/avatar-light.png")
  } else {
   //se não manter a imagem
   img.setAttribute("src", "./assets/avatar.png")
  } 
}