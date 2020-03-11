import jsonData from '@/assets/json/menu.json'
import seaneData from '@/assets/json/seane.json'

// 状態管理
export const state = () => ({
  data: jsonData,
  seanedata: seaneData

})

// getters
export const getters = {
  getAll: (state) => {
    return state.data
  },
  getSeane: (state) => {
    return state.seanedata
  },
}