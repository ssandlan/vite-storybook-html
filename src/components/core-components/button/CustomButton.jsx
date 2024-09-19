const CustomButton = ({ label, onClick }) => {
  return `
    <div class="button button-large button-full-dark">
      <button onclick='${onClick}'>${label}</button>
    </div>
  `;
};

export default CustomButton;
