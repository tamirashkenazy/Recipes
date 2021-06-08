export enum LoadingStatus {
  STARTED = 'started',
  FAILED = 'failed',
  FINISHED = 'finished',
  INIT = 'init'
}

export interface FetchStatus {
  loading: LoadingStatus
  error: string | null
}
