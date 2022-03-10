export async function getCategories() {
  // Implemente aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getProductsFromCategoryAndQuery(id, item) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const url2 = `https://api.mercadolibre.com/sites/MLB/search?category=${id}`;
  const response2 = await fetch(url2);
  const data2 = await response2.json();
  console.log(data2);

  const url3 = `https://api.mercadolibre.com/sites/MLB/search?category=${id}_ID&q=${item}`;
  const response3 = await fetch(url3);
  const data3 = await response3.json();
  console.log(data3);

  return (data, data2, data3);
}
