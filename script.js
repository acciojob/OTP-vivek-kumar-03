const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    const nextInput = inputs[index + 1];
    if (input.value && nextInput) {
      nextInput.focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    const prevInput = inputs[index - 1];
    if (e.key === 'Backspace') {
      if (input.value === '') {
        if (prevInput) {
          prevInput.focus();
          prevInput.value = '';
        }
      } else {
        input.value = '';
      }
    }
  });
});
