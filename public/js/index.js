// import '../css/styles.css';
import Groceries from './groceries.js';

window.addEventListener('DOMContentLoaded', () => {
  const groceriesList = document.getElementById('groceriesList');

  async function init() {
    const { groceries } = await Groceries.getItems();

    groceries.forEach((grocery) => {
      const el = Groceries.createItem(grocery);
      groceriesList.appendChild(el);
    });
  }

  const groceriesForm = document.getElementById('groceriesForm');
  const groceriesName = document.getElementById('groceriesName');
  const groceriesQuantity = document.getElementById('groceriesQuantity');

  groceriesForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
      name: groceriesName.value,
      quantity: groceriesQuantity.value,
    };

    try {
      const { message, grocery } = await Groceries.storeItem(data);
      window.alert(message);

      const el = Groceries.createItem(grocery[0]);
      groceriesList.appendChild(el);
    } catch (error) {
      console.error(error);
    }

    groceriesName.value = '';
    groceriesQuantity.value = '';
  });

  init();
});
