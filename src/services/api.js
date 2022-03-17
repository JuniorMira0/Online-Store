export async function getCategories() {
  // Implemente aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(id, item) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe

  const url3 = `https://api.mercadolibre.com/sites/MLB/search?category=${id}_ID&q=${item}`;
  const response3 = await fetch(url3);
  const data3 = await response3.json();

  return data3;
}

export async function getCategoryFromId(id) {
  const url2 = `https://api.mercadolibre.com/sites/MLB/search?category=${id}`;
  const response2 = await fetch(url2);
  const data2 = await response2.json();
  return data2;
}

export async function getProductsFromQuery(item) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function getProductId(id) {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await response.json();
  return data;
}
