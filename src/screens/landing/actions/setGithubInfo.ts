import { getUserInfo } from '../../../common/auth'
import { setUserInfo } from '../../../slices/users-slice'

export const setGithubInfo = async dispatch => {
  const githubInfo = await getUserInfo()
  const { nickname, name, picture } = githubInfo

  dispatch(
    setUserInfo({
      name,
      githubURL: `https://github.com/${nickname}`,
      pictureURL: picture,
    })
  )
}
