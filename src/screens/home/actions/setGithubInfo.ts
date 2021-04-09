import { getToken } from '../../../common/storage'
import { getUserInfo } from '../../../common/auth'
import { setUserInfo } from '../../../slices/users-slice'

export const getGithubInfo = async dispatch => {
  const githubInfo = await getUserInfo()
  const { nickname } = githubInfo
  dispatch(
    setUserInfo({
      nickname,
      githubURL: `https://github.com/${nickname}`,
    })
  )
}
