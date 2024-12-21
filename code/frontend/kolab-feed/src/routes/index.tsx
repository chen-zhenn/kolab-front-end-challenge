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
            element: <View.Pages.Feed />,
            loader: async () => post.getAll(),
            children: [{
            },{
                path: 'post',
            },{
                path: 'post',
            },{
                path: 'add',
            },{
                path: 'edit',
            },{
                path: 'delete',
            },]
        },{
            path: '/post',
            element: <View.Pages.Post />,
            loader: async () => post.getAll(),
            children: [{
                path: 'edit',
            },{
                path: 'delete',
            }]
        },{
            path: '/post/:userId',
            element: <View.Pages.Post />,
            loader: async ({ params }) => post.getAll({ ...params }),
            children: [{
                path: 'edit',
            },{
                path: 'delete',
            }]
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