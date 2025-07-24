export function setupDatePicker() {
  flatpickr("#customDate", {
    dateFormat: "m/d/Y",
    allowInput: true
  });
}