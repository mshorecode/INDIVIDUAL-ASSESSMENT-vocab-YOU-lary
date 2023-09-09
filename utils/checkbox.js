const selectedCheckbox = (id) => {
  for (let i = 1; i <= 2; i++) {
    document.getElementById(`checkbox${i}`).checked = false;
  }
  document.getElementById(id).checked = true;
};

export default selectedCheckbox;
