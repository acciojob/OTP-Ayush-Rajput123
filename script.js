const codes=document.querySelectorAll('.code')

codes.forEach((input, index) => {
  input.addEventListener("input", () => {
  input.value = input.value.replace(/\D/g, "")});
  input.addEventListener('input', () =>{ 
    if (input.value && index < codes.length - 1) {
      codes[index + 1].focus();}
})
	  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      codes[index - 1].focus();
    }
  })
});
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.code').focus();
});