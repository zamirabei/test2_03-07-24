import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IPost, getRequest, requestPosts } from "../../store/PostSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useSelector } from "react-redux";

const UserPage: React.FC = () => {
  const { posts } = useSelector((state: RootState) => state.postsReducer);
  const [post, setPost] = useState<IPost>({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch<AppDispatch>();

  const handlePost = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(requestPosts(post));
  };

  useEffect(() => {
    dispatch(getRequest());
  }, [dispatch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  //   console.log(posts);

  return (
    <div>
      <form onSubmit={handlePost}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={post.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="UserName"
          name="username"
          value={post.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={post.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={post.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {posts.map((item, index) => (
        <div key={index}>
          <h4>{item.email}</h4>
          <h4>{item.username}</h4>
          <h4>{item.name}</h4>
          <h4>{item.password}</h4>
        </div>
      ))}
    </div>
  );
};

export default UserPage;
