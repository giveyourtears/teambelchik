export const Service = {
    getAbout,
    updateAbout,
    getContacts,
    updateContacts,
    getProduct,
    getProductsByCategory,
    getProductsBySubCategory,
    getProductsBySubSubCategory,
    updateProduct,
    deleteProduct,
    getCategory,
    Login,
    getProducts,
    getAllCategory,
    addProduct,
    addCategory,
    deleteCategory,
    updateCategory,
    addCallback, 
    getAllCallbacks,
    deleteCallback,
    getProductsHot
}

let now_date = Date.now();

function addProduct(product) {
  return fetch("https://dvok.by/api/product/addproduct", 
  {method: 'PUT',
  mode: 'no-cors',
  cache: 'no-store',
  body: product}).then(
    handleResponse
  );
}

function addCategory(category) {
  return fetch("https://dvok.by/api/product/addcategory", 
  { method: 'PUT',
  mode: 'no-cors', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    cache: 'no-store',
    body: JSON.stringify(category)}).then(
      handleResponse
  );
}

function addCallback(callback) {
  return fetch("https://dvok.by/api/callback/addcallback", 
  { method: 'PUT',
  mode: 'no-cors', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    cache: 'no-store',
    body: JSON.stringify(callback)}).then(
      handleResponse
  );
}

function getCategory(pathName) {
  return fetch(
    "https://dvok.by/api/product/getCategory?cat=" + pathName,  {cache: 'no-store'}
  ).then(handleResponse);
}

function getAllCategory() {
  return fetch(
    "https://dvok.by/api/product/getallcategory",  {cache: 'no-store'}
  ).then(handleResponse);
}

function getAbout() {
    return fetch("https://dvok.by/api/about/about",  {cache: 'no-store'}).then(
        handleResponse
    );
}

function getAllCallbacks() {
  return fetch("https://dvok.by/api/callback/getcallbacks",  {cache: 'no-store'}).then(
      handleResponse
  );
}

function updateAbout(about) {
    return fetch("https://dvok.by/api/about/updateabout", 
    {
    method: 'POST', 
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    cache: 'no-store',
    body: JSON.stringify(about)}).then(
      handleResponse
    );
}

function getContacts() {
    return fetch("https://dvok.by/api/contacts/contacts",  {cache: 'no-store'}).then(
        handleResponse
    );
}

function updateContacts(contacts) {
    return fetch("https://dvok.by/api/contacts/updatecontacts", 
    {
    method: 'POST', 
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    cache: 'no-store',
    body: JSON.stringify(contacts)}).then(
      handleResponse
    );
}

function Login(login, password) {
  return fetch("https://dvok.by/api/product/login", {
      method: 'POST',
  headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
  },
  cache: 'no-store',
  body: JSON.stringify({LoginName: login, Password: password})}).then(
    handleResponse
  );
}

function getProductsByCategory(pathName) {
  return fetch(
    `https://dvok.by/api/product/getProductsByCategory?category=${pathName}&date=${now_date}`, {cache: 'no-store'}, { mode: 'no-cors' }
  ).then(handleResponse);
}


function getProductsBySubCategory(pathName) {
    return fetch(`https://dvok.by/api/product/getProductsBySubCategory?sub_category=${pathName}&date=${now_date}`,  {cache: 'no-store'}
  ).then(handleResponse);
}

function getProductsBySubSubCategory(pathName) {
  return fetch(`https://dvok.by/api/product/getProductsBySubSubCategory?sub_sub_cat=${pathName}&date=${now_date}`, {cache: 'no-store'}
  ).then(handleResponse);
}

function getProducts() {
  return fetch(`https://dvok.by/api/product/getallproducts?date=${now_date}`, {cache: 'no-store'}).then(
    handleResponse
  );
}

function getProductsHot() {
  return fetch(`https://dvok.by/api/product/getProductsHot?date=${now_date}`, {cache: 'no-store'}).then(
    handleResponse
  );
}

function getProduct(pathName) {
    return fetch(
      "https://dvok.by/api/product/getproduct?product=" + pathName, {cache: 'no-store'}
    ).then(handleResponse);
}

function updateProduct(product) {
  return fetch("https://dvok.by/api/product/updateproduct",
  {
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-store', 
  body: product}).then(
    handleResponse
  );
}

function updateCategory(category) {
  return fetch("https://dvok.by/api/product/updatecategory", 
  {
  method: 'POST', 
  mode: 'no-cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  cache: 'no-store',
  body: JSON.stringify(category)}).then(
    handleResponse
  );
}

function deleteProduct(id) {
    return fetch("https://dvok.by/api/product/deleteproduct?id=" + id,  {method: 'DELETE'}).then(
      handleResponse
    );
}

function deleteCategory(id) {
  return fetch("https://dvok.by/api/product/deletecategory?id=" + id,  {method: 'DELETE'}).then(
    handleResponse
  );
}

function deleteCallback(id) {
  return fetch("https://dvok.by/api/product/deletecallback?id=" + id,  {method: 'DELETE'}).then(
    handleResponse
  );
}

function handleResponse(response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  }