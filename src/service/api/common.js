import { get } from '../tool'

export const loginIn = data => get({ url: '/api/ats/ruleGuide', data, showLoading: true })
