const { API } = require("../../backend");
// category calls
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type" : "application/json",
        Authorization : `Bearer ${token}`
        },
        body: JSON.stringify(category)

    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))

};
// get all categories
export const getCategories =() => {
    return fetch(`${API}/categories`,{
        method: "GET"

    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}

// product calls

// create a product
export const createaProduct =(userId,token,product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization : `Bearer ${token}`
        },
        body: product
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}
// get all products
export const getProducts =() => {
    return fetch(`${API}/products`,{
        method: "GET"

    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}

// delete a products

export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        let err = {error}
        console.log(err.error);
        //do whatever you want with the err object
    });
}


// delete a category

export const deleteCategory = (categoryId, userId, token) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        let err = {error}
        console.log(err.error);
        //do whatever you want with the err object
    });
}
    

// get a products
export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`,{
        method: "GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}
// get a category
export const getCategory = categoryid => {
    return fetch(`${API}/category/${categoryid}`,{
        method: "GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}

// update a products

export const updateProduct =(productId, userId,token,product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization : `Bearer ${token}`
        },
        body: product
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}
// update a catgory

export const updateaCategory =(categoryId, userId,token,category) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization : `Bearer ${token}`
        },
        body: category
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}