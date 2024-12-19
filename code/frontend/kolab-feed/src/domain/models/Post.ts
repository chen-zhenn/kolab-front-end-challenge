import { IComments } from './Comments'
import { IUsers } from './User'

export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
    created_at?: string;
    image?: string;
    users?: IUsers;
    comments?: IComments[];
}