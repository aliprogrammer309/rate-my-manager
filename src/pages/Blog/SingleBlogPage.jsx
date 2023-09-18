import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import { db } from "../../firebase";
import Navbar from "../../components/navbar/Navbar";

function SingleBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogDoc = doc(db, "blogs", id);
      const blogData = await getDoc(blogDoc);

      if (blogData.exists()) {
        setBlog(blogData.data());
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <>
      <Navbar showLinks={true} />
      <Container maxWidth="md" style={{ marginTop: "90px" }}>
        <Card
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <CardMedia
            component="img"
            alt={blog.title}
            image={blog.imageUrl}
            title={blog.title}
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {blog.title}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Published on:{" "}
              {new Date(blog.publishDate?.toDate()).toLocaleDateString()}
            </Typography>
            <Typography
              variant="body1"
              style={{ marginTop: "20px" }}
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default SingleBlogPage;
