document.getElementById('mode').addEventListener('click', function (event) {
  console.log('change mode')
  const element = document.body
  element.classList.toggle('dark')
})
