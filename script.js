const codes = document.querySelectorAll('.code');
const container = document.querySelector('.code-container');
window.addEventListener('DOMContentLoaded', () => {
  codes[0].focus();
});
codes.forEach((input, index) => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, ''); 
    if (input.value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value) {
        input.value = '';
        e.preventDefault();
      } else if (index > 0) {
        codes[index - 1].focus();
        e.preventDefault();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      codes[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < codes.length - 1) {
      e.preventDefault();
      codes[index + 1].focus();
    }
  });
});
container.addEventListener('paste', (e) => {
  e.preventDefault();
  const pastedDigits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, codes.length);
  pastedDigits.split('').forEach((digit, i) => {
    codes[i].value = digit;
  });
  const nextFocus = pastedDigits.length < codes.length ? pastedDigits.length : codes.length - 1;
  codes[nextFocus].focus();
});