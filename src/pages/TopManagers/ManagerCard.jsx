import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";


export default function ManagerCard({ id, name, company, department }) {
  const obj = {
    id: id,
    name: name,
    company: company,
    department: department,
  };
  const navigate = useNavigate();

  const handleOnSelect = (item) => {
    navigate("/ManagerResult", { state: item });
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Company: {company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Department: {department}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleOnSelect(obj)}>View Ratings</Button>
      </CardActions>
    </Card>
  );
}
