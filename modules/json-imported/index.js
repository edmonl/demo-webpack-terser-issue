import constants from './constants.json'

const { message } = constants.data

export default function () {
  console.log(message || 'Fail!')
}
