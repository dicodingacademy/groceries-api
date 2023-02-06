import Endpoints from './endpoint.js';

const Groceries = {
  async getItems() {
    const response = await fetch(Endpoints.get);
    const data = await response.json();

    return data;
  },

  async storeItem({ name, quantity }) {
    const response = await fetch(Endpoints.post, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        quantity,
      }),
    });

    const data = await response.json();

    return data;
  },

  createItem({ id, name, quantity }) {
    const li = document.createElement('li');

    li.innerHTML = `${name} - ${quantity}`;
    li.setAttribute('data-id', id);
    li.addEventListener('click', async () => {
      const result = await this.deleteItem({ name });
      window.alert(result.message);
    });

    return li;
  },

  async deleteItem({ name }) {
    const groceriesList = document.getElementById('groceriesList');
    const items = groceriesList.getElementsByTagName('li');

    let grocery = null;
    for (const item of items) {
      if (item.innerHTML.includes(name)) {
        grocery = item;
      }
    }

    try {
      const response = await fetch(Endpoints.delete(grocery.dataset.id), {
        method: 'DELETE',
      });

      const data = await response.json();
      groceriesList.removeChild(grocery);

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default Groceries;
