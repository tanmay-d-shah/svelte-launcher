

import type { SearchHits, SearchItem } from '../types'
import replaceAndGetMatchedText from './replaceTagsBWTags'

export const formatSearchResults = (results: SearchHits[]): SearchItem[] => {
  const result = results.map((each) => {
    return {
      uid: each._id,
      url: each._source.url,
      iconURL: `https://i.oslash.com/launcher/electron/integrations/${each._source.f_text_source_type}.png`,
      title: replaceAndGetMatchedText(each._source.title ?? '') ?? '',
      objectKind: 'SearchResult',
      breadcrumb: each._source.breadcrumb ?? '',
      metadata: each._source.meta_data,
      sourceType: each._source.f_text_source_type,
      description: replaceAndGetMatchedText(each._source.content ?? '') ?? '',
      created_at: each._source.created_at,
      last_modified: each._source.last_modified
    }
  })
  return result
}