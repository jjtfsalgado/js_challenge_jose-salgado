export const modifyPagination = (pages) => ({
  type: 'MODIFY_PAGINATION',
  payload: pages
})

export const addToWishlist = (product) => ({
  type: 'ADD_TO_WISHLIST',
  payload: product
})

export const addToBag = (product) => ({
  type: 'ADD_TO_BAG',
  payload: product
})

export const removeFromBag = (id) => ({
  type: 'REMOVE_FROM_BAG',
  payload: id
})

export const removeFromWish = (id) => ({
  type: 'REMOVE_FROM_WISH',
  payload: id
})
