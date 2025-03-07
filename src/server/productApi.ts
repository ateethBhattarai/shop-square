const getProduct = async () => {
  try {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    return data;
  } catch (error) {
    throw Error("Something went wrong on hitting product-api: " + error);
  }
};

const getcategories = async () => {
  try {
    const api = await fetch("https://fakestoreapi.com/products/categories");
    const data = await api.json();
    return data;
  } catch (error) {
    throw Error(
      "Something went wrong on fetching product-categories: " + error
    );
  }
};

const getProductByID = async (id: number) => {
  try {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();
    return data;
  } catch (error) {
    throw Error(
      "Something went wrong on fetching product-categories: " + error
    );
  }
};

export { getProduct, getcategories, getProductByID };
