import type { SearchHits } from '../types'

export const fetchIntegrations = async (query: string): Promise<any> => {
  const searchUrl = import.meta.env.VITE_SEARCH_URL
  const token = import.meta.env.VITE_AUTH_TOKEN
  const pk = import.meta.env.VITE_WORKSPACE_PK
  const url = `${searchUrl}/rest`
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: new Headers({
        Authorization: token,
        'Content-Type': 'application/json'
      }),
      /**
       * NOTE: Don't pass query if it's empty
       * as it throws error from open-search and it's not
       * handled in launcher-search-worker
       */
      body: !query
        ? JSON.stringify({
          workspacePk: pk
        })
        : JSON.stringify({
          query,
          workspacePk: pk
        })
    })

    const data = await response.json() as SearchHits[]
    return data
  } catch (e) {
    console.log('>>>error', e)
    return []
  }
}
