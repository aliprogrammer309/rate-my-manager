import { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function htmlToPlainText(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
}

const fetchBlogs = async () => {
  const blogsCollection = collection(db, "blogs");
  const blogsSnapshot = await getDocs(blogsCollection);
  const blogsList = blogsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return blogsList;
};

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const fetchedBlogs = await fetchBlogs();
      setBlogs(fetchedBlogs);
    };

    loadBlogs();
  }, []);

  const handleDelete = async (blogId) => {
    try {
      // Delete the blog from Firestore
      const blogRef = doc(db, "blogs", blogId);
      await deleteDoc(blogRef);

      // Optionally, also delete the blog image from Firebase Storage
      // Example: await deleteObject(ref(storage, 'path-to-blog-image'));

      // Then remove from the local state or re-fetch the blogs
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
      alert("Blog deleted succesfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <>
      <Navbar showLinks={true} />
      <div style={{ padding: "20px", marginTop: "90px" }}>
        <Grid container spacing={4}>
          {blogs.map((blog) => {
            const plainDescription = htmlToPlainText(blog.description);
            const shortenedDescription = `${plainDescription
              .split(" ")
              .slice(0, 30)
              .join(" ")}...`;

            return (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <Link
                  to={`/blogs/${blog.id}`}
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={blog.title}
                        height="140"
                        image={blog.imageUrl}
                        title={blog.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {blog.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {shortenedDescription}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          Published on:{" "}
                          {new Date(
                            blog.publishDate?.toDate()
                          ).toLocaleDateString()}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
                <CardActions>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default Blogs;
