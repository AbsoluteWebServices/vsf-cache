import { ApiClientMethods, IntegrationContext } from '@vue-storefront/core';
import { CacheTag } from './types'

declare module '@vue-storefront/core' {
  export interface Context {
    $vsfCache: {
      tagsSet: Set<CacheTag>
    }
  }
}
