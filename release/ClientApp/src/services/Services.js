export const Service = {
    getAbout,
    updateAbout,
    getContacts,
    updateContacts,
    getProduct,
    getProductsByCategory,
    getProductsBySubCategory,
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
    addCallback
}
function addProduct(product) {
  return fetch("https://teambelchik.by/api/product/addproduct", 
  {method: 'PUT', 
  body: product}).then(
    handleResponse
  );
}

function addCategory(category) {
  return fetch("https://teambelchik.by/api/product/addcategory", 
  { method: 'PUT', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(category)}).then(
      handleResponse
  );
}

function addCallback(callback) {
  return fetch("https://teambelchik.by/api/callback/addcallback", 
  { method: 'PUT', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(callback)}).then(
      handleResponse
  );
}

function getCategory(pathName) {
  return fetch(
    "https://teambelchik.by/api/product/getCategory?cat=" + pathName
  ).then(handleResponse);
}

function getAllCategory() {
  return fetch(
    "https://teambelchik.by/api/product/getallcategory"
  ).then(handleResponse);
}

function getAbout() {
    return fetch("https://teambelchik.by/api/about/about").then(
        handleResponse
    );
}

function updateAbout(about) {
    return fetch("https://teambelchik.by/api/about/updateabout", 
    {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(about)}).then(
      handleResponse
    );
}

function getContacts() {
    return fetch("https://teambelchik.by/api/contacts/contacts").then(
        handleResponse
    );
}

function updateContacts(contacts) {
    return fetch("https://teambelchik.by/api/contacts/updatecontacts", 
    {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contacts)}).then(
      handleResponse
    );
}

function Login(login, password) {
  return fetch("https://teambelchik.by/api/product/login", 
  {method: 'POST', 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({login: login, password: password})}).then(
    handleResponse
  );
}

function getProductsByCategory(pathName) {
  return fetch(
    "https://teambelchik.by/api/product/getProductsByCategory?type_cat=" + pathName
  ).then(handleResponse);
}

function getProductsBySubCategory(pathName) {
  return fetch("https://teambelchik.by/api/product/getProductsBySubCategory?type=" + pathName
  ).then(handleResponse);
}

function getProducts() {
  return fetch("https://teambelchik.by/api/product/getallproducts").then(
    handleResponse
  );
}

function getProduct(pathName) {
    return fetch(
      "https://teambelchik.by/api/product/getproduct?product=" + pathName
    ).then(handleResponse);
}

function updateProduct(product) {
  return fetch("https://teambelchik.by/api/product/updateproduct",
  {
  method: 'POST', 
  body: product}).then(
    handleResponse
  );
}

function updateCategory(category) {
  return fetch("https://teambelchik.by/api/product/updatecategory", 
  {
  method: 'POST', 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(category)}).then(
    handleResponse
  );
}

function deleteProduct(id) {
    return fetch("https://teambelchik.by/api/product/deleteproduct?id=" + id, {method: 'DELETE'}).then(
      handleResponse
    );
}

function deleteCategory(id) {
  return fetch("https://teambelchik.by/api/product/deletecategory?id=" + id, {method: 'DELETE'}).then(
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