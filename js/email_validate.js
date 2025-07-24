// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector('.subscription-form');
//     const emailInput = form.querySelector('input[type="email"]');
//     const feedback = form.querySelector('.invalid-feedback');

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const email = emailInput.value.trim();
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (emailPattern.test(email)) {
//             emailInput.classList.remove('is-invalid');
//             feedback.style.display = 'none';

//             alert("Subscribed successfully!");
//             form.reset();

//         } else {
//             emailInput.classList.add('is-invalid');
//             feedback.style.display = 'block';
//         }
//     });
// });


function setupEmailValidation() {
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.subscription-form');
    const emailInput = form.querySelector('input[type="email"]');
    const feedback = form.querySelector('.invalid-feedback');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const email = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailPattern.test(email)) {
        emailInput.classList.remove('is-invalid');
        feedback.style.display = 'none';
        alert("Subscribed successfully!");
        form.reset();
      } else {
        emailInput.classList.add('is-invalid');
        feedback.style.display = 'block';
      }
    });
  });
}

// call the function directly
setupEmailValidation();
