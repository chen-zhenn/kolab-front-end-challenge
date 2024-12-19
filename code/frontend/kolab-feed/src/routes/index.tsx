import { 
    createBrowserRouter,
    RouterProvider,
    Navigate 
} from 'react-router'

import { makePost } from '@/main/usecases'
import { View } from '@/presentation'

const post = makePost()

const router = createBrowserRouter([{
    element: <View.App />,
    children: [
        {
            path: '/',
            element: <Navigate to='/feed' />,
        },{
            path: '/feed',
            element: <View.Feed />,
            loader: async () => post.getAll()
        },{
            path: '/post/:userId',
            element: <View.Feed />,
            loader: async ({ params }) => post.getAll({ ...params })
        },{
            path: '/post/add',
            element: 'Post Registration Page',
        },{
            path: '/post/edit/:postId',
            element: 'Post Edit Page',
        },{
            path: '/post/delete/:postId',
            element: 'Post Delete Confirmation Page',
        },{
            path: '/profile',
            element: 'User Profile Page',
        }
    ]
}])

export function Router() {
    return (
        <RouterProvider router={router} />
    )
}