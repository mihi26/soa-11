import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'
import App from '../App'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index element={<Navigate to="/newfeed" />} />
      <Route path="newfeed" element={<NewFeedView />} />
      <Route path="explore" element={<ExploreView />} />
      <Route path="bookmark" element={<BookmarkView />} />
      <Route path="mypost" element={<MyPostView />}>
        <Route
          path=""
          element={
            <div>These are all posts, type /:postId to view each post</div>
          }
        ></Route>
        <Route path=":userId" element={<div>Details post</div>}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/newfeed" replace={true} />} /> */}
    </Route>
  ),{}
)
