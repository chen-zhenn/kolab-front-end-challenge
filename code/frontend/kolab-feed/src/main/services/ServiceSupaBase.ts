import { 
    SupaBaseClient,
    IHttpResponse,
    HttpStatusCode, 
} from "@/infra"

export class ServiceSupaBase {

    constructor(readonly table: string) {
        this.table =  table
    }

    async getAll<T>(): Promise<IHttpResponse<T[]>> {
        const { data, error } = await SupaBaseClient
            .from(this.table)
            .select(`
                *,
                users:userId (username, avatar),
                comments:id (id, userId, postId, body)
            `)

        if(error) throw new Error()
        return {
            data,
            status: HttpStatusCode.success,
            statusText: 'ok',
            message: ''
        }
    }

    async getAllById<T>(userId: string): Promise<IHttpResponse<T[]>> {
        const { data, error } = await SupaBaseClient
            .from(this.table)
            .select(`
                *,
                users:userId (username, avatar),
                comments:id (id, userId, postId, body)
            `)
            .eq('userId', userId)

        if(error) throw new Error()
        return {
            data,
            status: HttpStatusCode.success,
            statusText: 'ok',
            message: ''
        }
    }
}
