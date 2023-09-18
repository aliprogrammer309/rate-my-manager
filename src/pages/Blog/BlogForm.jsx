// BlogForm.js
import React, { useState } from "react";
import "./blogform.css";
import {
  Button,
  TextField,
  Container,
  Typography,
  Grid,
  Input,
  LinearProgress,
  Snackbar,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addDoc, collection } from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { db, storage } from "../../firebase";
import Navbar from "../../components/navbar/Navbar";

function BlogForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";

    if (image) {
      const storageRef = ref(storage, "blogImages/" + image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Compute and update the progress as a percentage
          const currentProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(currentProgress);
        },
        (error) => {
          console.error("Upload failed:", error);
        },
        async () => {
          imageUrl = await getDownloadURL(storageRef);
          const blogData = {
            title,
            description,
            imageUrl,
            publishDate: new Date(),
          };

          await addDoc(collection(db, "blogs"), blogData);
          setUploading(false);
          setTitle("");
          setDescription("");
          setImage(null);
          setProgress(0);
          setSuccessMessage("Blog uploaded successfully!");
        }
      );

      setUploading(true);
    }
  };

  return (
    <>
      <Navbar showLinks={true} />
      <div className="styled-container">
        {uploading && <LinearProgress variant="determinate" value={progress} />}
        <Typography variant="h4" component="h2">
          Create Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <ReactQuill
                value={description}
                // style={{ height: "200px" }}
                onChange={setDescription}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={uploading} // Disable the button if uploading
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar
          open={!!successMessage}
          autoHideDuration={6000}
          onClose={() => setSuccessMessage("")}
          message={successMessage}
        />
      </div>
    </>
  );
}

export default BlogForm;
