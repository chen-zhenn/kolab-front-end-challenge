import { 
    useCaseGetAllPost, 
} from '@/main/usecases'

export function makePost() {

    return {
        getAll: useCaseGetAllPost,
    }
}