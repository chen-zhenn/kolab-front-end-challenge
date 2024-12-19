import { 
    UseCaseGetAllPost, 
} from '@/main/usecases'

import { 
    IHttpPostQueryParams, 
} from '@/main/services'

export function makePost() {

    return {
        getAll: (queryParams?: IHttpPostQueryParams) => 
            UseCaseGetAllPost(queryParams)
    }
}