export const CustomButton = ({ label, onClick }) => {
  console.log(onClick);
  return `
    <div class="button button-large button-full-dark">
      <button onclick='${onClick}'>${label}</button>
    </div>
  `;
};
