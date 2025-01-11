export async function getUsers(params) {
  const token = JSON.parse(sessionStorage.getItem("accessToken"));
  const ids = JSON.parse(sessionStorage.getItem("id"));
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/600/users/${ids}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  console.log(data, "data2");
  return data;
}

export async function getUserOrders(params) {
  const ids = JSON.parse(sessionStorage.getItem("id"));
  const token = JSON.parse(sessionStorage.getItem("accessToken"));
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${ids}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
}

export async function createOrders(cart, total, user) {
  const token = JSON.parse(sessionStorage.getItem("accessToken"));
  const orderdetails = {
    cartList: cart,
    total: total,
    quantity: cart.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderdetails),
  });
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
}
