export interface DecodedJWT {
  name: string
  email: string
  sub: string
  picture?: string
  iss?: string
  aud?: string
  iat?: number
  exp?: number
}

export interface Workspace {
  pk: string
  name: string
  planId: string
  image: string
  subdomain: string
  isPaidWorkspace: boolean
}

export type Tab = 'All' | 'Applications' | 'Shortcuts' | 'This Mac' | 'Tasks' | string

export interface Application {
  uid: string
  title: string
  key: string
  isNativeObject: boolean
  objectKind?: string
}

export interface File {
  uid: string
  title: string
  url: string
  iconURL: string
  isNativeObject: boolean
  objectKind?: string
  last_modified: string
}

export interface OSlashItem {
  uid: string
  title: string
  description?: string
  sharedWithWeb?: boolean
  shortcutDetails?: {
    content?: string | null
    htmlContent?: string | null
  } | null
  url?: string
  iconURL?: string
  objectKind?: string
  isNativeObject?: boolean
}
export interface SearchItem {
  uid: string
  title: string
  url: string
  iconURL?: string
  description?: string
  objectKind: string
  created_at: string
  last_modified: string
  sourceType: SourceType
  breadcrumb: string
  metadata?: Record<string, string>
}

export type ApplicationURLTypes = Array<{
  CFBundleURLName: string
  CFBundleURLSchemes: string[]
}>

export interface ApplicationMetadata {
  alternateNames: string[]
  appCategory: string
  dateAdded: string
  displayName: string
  fileSystemName: string
  kind: string
  useCount: number
  usedDate: string
  usedDateRanking: string
}

export interface ApplicationStore {
  application: string
  hits: number
  metadata: ApplicationMetadata
  urlTypes: ApplicationURLTypes[]
}

export interface FileSearchPayload {
  files: string[]
  query: string
}

export type SourceType =
  | 'coda'
  | 'confluence'
  | 'github'
  | 'google-mail'
  | 'google-drive'
  | 'google-calendar'
  | 'google-contacts'
  | 'jira'
  | 'notion'
  | 'oslash'
  | 'slack'
  | 'website'
  | 'devrev'
  | 'linear'
  | 'figma'
  | 'freshdesk'
  | 'github-docs'

export interface SearchHits {
  _id: string
  _source: {
    created_at: string
    title: string
    content: string
    last_modified: string
    url: string
    f_text_source_type: SourceType
    breadcrumb: string
    meta_data: {
      // Slack
      f_text_entity_type: string

      // Linear
      identifier: string
      f_text_status: string

      // Figma
      f_text_teamName: string
      f_text_projectName: string
      f_text_figma_file_type: string
    }
  }
}

interface SourcesType {
  icon: string
  url: string
  title: string
}

export interface QueryResult {
  intent: string
  answer?: string
  title?: string
  sources?: SourcesType[]
  tasks?: Task[]
  message?: string
}

export type InputListType<T> = T[]
export type FilterFunctionType<T> = (value: T, index: number, array: T[]) => boolean
export type SortFunctionType<T> = (someArg: T, otherArg: T) => number

// Hard coded type from backend. Use with caution

export interface Task {
  kind: 'calendar'
  is_executable: boolean
  task: {
    action: 'create' | 'update' | 'out_of_office' | 'cancel'
    payload: {
      attendees: string[]
      start_time: string
      end_time: string
      recurrence?: (('daily' | 'weekly' | 'once' | '') | null) | undefined
      title: string
      agenda: string
      id?: string | null | undefined
    }
  }
}
