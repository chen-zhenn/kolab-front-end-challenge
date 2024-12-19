export interface IComments {
    id: number;
    userId: number;
    postId: number;
    body: string;
    created_at?: string;
}