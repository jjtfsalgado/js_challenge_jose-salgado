import json from '../products.json';

const initialState = {
  pageProducts: [],
  bagProducts: [],
  wishProducts: [],
  selectedPage: null,
  currentPagination: [],
  numberPages: Math.ceil(json.products.length / 6)
}

export const productsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case "@@router/LOCATION_CHANGE": {
      const routePath = action.payload.pathname;
      const pageRoute = routePath.split('').splice(1,routePath.length).join('');

      return {
        ...state,
        selectedPage: pageRoute,
        pageProducts : json.products.slice(((pageRoute*6)-6), pageRoute*6)
      }
    }
    case "MODIFY_PAGINATION": {
      return {
        ...state,
        currentPagination : action.payload
      }
    }
    case "ADD_TO_WISHLIST": {
      return {
        ...state,
        wishProducts : state.wishProducts.concat(action.payload)
      }
    }
    case "ADD_TO_BAG": {
      return {
        ...state,
        bagProducts : state.bagProducts.concat(action.payload)
      }
    }
    case "REMOVE_FROM_BAG": {
      return {
        ...state,
        bagProducts : state.bagProducts.filter((product) => {
          return product.id !== action.payload;
        })
      }
    }
    case "REMOVE_FROM_WISH": {
      return {
        ...state,
        wishProducts : state.wishProducts.filter((product) => {
          return product.id !== action.payload;
        })
      }
    }
  }
  return state;
};
