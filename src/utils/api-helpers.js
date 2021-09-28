import axios from 'axios'

// import { isPlainObject } from './helpers'

// import { setAuthToken } from '../modules/auth/auth-api'
// import APIError from './api-error'

export const baseUrl = process.env.GATSBY_API_URL || 'http://localhost:1337'

// Make sure that all paths follow the same schema:
// - begin with a slash
function normalizePath (path = '') {
  return path[0] === '/' ? path : `/${path}`
}

// Make sure request methods accepts correct params.
// ref: https://github.com/axios/axios#request-method-aliases
function normalizeRequestArgs (method, data, config) {
  const createUpdateMethods = ['post', 'put', 'patch']
  const readDeleteMethods = ['get', 'delete']

  if (createUpdateMethods.includes(method)) {
    return [data, config]
  }

  if (readDeleteMethods.includes(method)) {
    // `data` serves as a request config here
    // ref: https://github.com/axios/axios#request-config
    return [data]
  }
}

// Centralized handling of possible Strapi server validation errors
// We can get validation error in the form of the deeply nested
// array or an object.
// If either of those is missing, the error is sent back
// in a top-level `data.message` prop.
// function getValidationErrors (error) {
//   // Depending on HTTP error type, Strapi exposes errors differently
//   const errorPayload = error.data.data || error.data.message

//   if (isPlainObject(errorPayload)) {
//     return errorPayload
//   }

//   if (Array.isArray(errorPayload)) {
//     return { name: errorPayload[0].messages[0].message }
//   }

//   return { name: error.data.message }
// }

// export function handleAPIError (error) {
//   const errResponse = error.response

//   if (!errResponse) {
//     return error
//   }

//   const { status, statusText } = errResponse

//   // If the JWT token is invalid, we should clear out the token from the LS
//   if (status === 401) {
//     setAuthToken(null)
//   }

//   if (status !== 400) {
//     console.error('Unknown error:', error)
//   }

//   // 'status' and 'statusText' are being exposed for convenience to be
//   // used by the callers deciding whether the call was successful or not.
//   return {
//     status,
//     statusText,
//     error:
//       status !== 200
//         ? getValidationErrors(errResponse)
//         : { name: `${status}: ${statusText}` }
//   }
// }

export function request (method, path, data, config) {
  // Handle offline server case
  // const isOnlineConnection = window.navigator.onLine
  // if (!isOnlineConnection) {
  //   throw APIError.offlineServer()
  // }

  return axios[method](
    `${baseUrl}${normalizePath(path)}`,
    ...normalizeRequestArgs(method, data, config)
  )
}

// Set API methods on the request methods to use across the app
const methods = ['get', 'post', 'put', 'delete']
methods.forEach(
  method =>
    (request[method] = (path, data, config = {}) =>
      request(method, path, data, config))
)
