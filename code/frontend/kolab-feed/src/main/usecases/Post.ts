import { IPost } from '../../domain/models'

export default function makePost() {

    async function getAll(): Promise<IPost[]> {
        return await []
    }

    return {
        getAll,
    }
}