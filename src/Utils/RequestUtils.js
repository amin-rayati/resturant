import axios from 'axios'

const baseUrl = 'https://rest.negaapps.ir/admin/'

const controllers = {
  Contractors: 'Contractors',
  Products: 'Products',
  Reservations: 'Reservations',
  ContractorTables: 'ContractorTables',
}
const methods = {
  singleContractor: 'singleContractor',
  searchProducts: 'searchProducts',
  getContractorCategories: 'getContractorCategories',
  filterProductsByCatId: 'filterProductsByCatId',
  getProductOptions: 'getProductOptions',
  reservationInfo: 'reservationInfo',
  getTables: 'getTables',
}
export const RequestUtils = {
  resturantInfo: async (barcode) => {
    let response = await axios.post(
      `${baseUrl}/${controllers.Contractors}/API/_${methods.singleContractor}`,
      {
        contractorUrlAddress: barcode,
      },
      {
        headers: {
          token: 'test',
        },
      }
    )
    return response.data
  },
  search: async (urlAddress, searchKey) => {
    let response = await axios.post(
      `${baseUrl}/${controllers.Products}/API/_${methods.searchProducts}`,
      {
        urlAddress: urlAddress,
        searchKey: searchKey,
      },
      {
        headers: {
          token: 'test',
        },
      }
    )
    return response.data
  },
  getResturantCategory: async (urlAddress) => {
    let response = await axios.post(
      `${baseUrl}/${controllers.Products}/API/_${methods.getContractorCategories}`,
      {
        urlAddress: urlAddress,
      },
      {
        headers: {
          token: 'test',
        },
      }
    )
    return response.data
  },
  getResturantFoodList: async (urlAddress, catId) => {
    let response = await axios.post(
      `${baseUrl}/${controllers.Products}/API/_${methods.filterProductsByCatId}`,
      {
        urlAddress: urlAddress,
        catId: catId ? catId : '',
      },
      {
        headers: {
          token: 'test',
        },
      }
    )
    return response.data
  },
  getFoodProperty: async (productId) => {
    let response = await axios.post(
      `${baseUrl}/${controllers.Products}/API/_${methods.getProductOptions}`,
      {
        productId: productId,
      },
      {
        headers: {
          token: 'test',
        },
      }
    )
    return response.data
  },
  sendCode: async (code) => {
    let response = await axios.post(
      `${baseUrl}/${controllers.Reservations}/API/_${methods.reservationInfo}`,
      {
        code: code,
      },
      {
        headers: {
          token: 'test',
        },
      }
    )
    return response.data
  },
  tableList: async (urlAddress) => {
    let response = await axios.post(
      `${baseUrl}/${controllers.ContractorTables}/API/_${methods.getTables}`,
      {
        urlAddress: urlAddress,
      },
      {
        headers: {
          token: 'test',
        },
      }
    )
    return response.data
  },
}
