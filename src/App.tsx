import PostForm from "./features/posts/components/PostForm";
import PostList from "./features/posts/components/PostList";

function App() {
  return (
    <main className="flex flex-col w-1/3 mx-[calc(100vw/3)] pt-24 pb-10 overflow-y-auto">
      <PostForm />
      <hr className="my-5" />
      <PostList />
    </main>
  )
}
export default App;