import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import store from "../../../../../store/store";
import BlogViewContainer from "./component/BlogViewContainer";

const MainBlogContainer = observer(() => {
  const {
    BlogStore: { getBlogs, blogs },
    auth: { openNotification },
  } = store;

  useEffect(() => {
    getBlogs()
      .then(() => {})
      .catch((err: any) => {
        openNotification({
          title: "GET Blogs Failed",
          message: err.message,
          type: "error",
        });
      });
  }, [openNotification, getBlogs]);

  return (
    <>
      {blogs.data.map((item: any) => (
        <BlogViewContainer item={item} key={item._id} multi={true} />
      ))}
    </>
  );
});

export default MainBlogContainer;
