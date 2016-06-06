export default function getEmojis () {
  return async (dispatch, getState) => {
    const res = await fetch('//cdn.rawgit.com/jgsme/emo/gh-pages/data/emojis.json')
    const json = await res.json()
    dispatch({
      type: 'emojisRecieved',
      emojis: json
    })
  }
}
