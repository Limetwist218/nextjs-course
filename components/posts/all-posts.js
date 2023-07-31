import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <PostsGrid posts={props.posts} />
    </section>
  );
};
export default AllPosts;
