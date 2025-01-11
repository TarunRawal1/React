export async function getProductList(querypara) {
  console.log(process.env.REACT_APP_HOST, "host");
  const response = await fetch(`${process.env.REACT_APP_HOST}/products`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
}
export async function getProductDetail(id) {
  const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
}
export async function getFeaturedList() {
  console.log(process.env.REACT_APP_HOST, "host");
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/featured_products`
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
}
