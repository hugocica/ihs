import API from './index'

const getVisitsRequest = () => {
  API.get(`${}`)
}

export default getVisitsRequest