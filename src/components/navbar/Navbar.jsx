import "./navbar.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useState } from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useUserAuth } from "../../context/UserAuthContext";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Navbar(props) {
  const { logOut, user } = useUserAuth();
  const handleLogIn = () => {
    navigate('/login');
  };
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [managers, setManagers] = useState([]);
  const [coworkers, setCoworkers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  const [managerSearch, setManagerSearch] = useState(true);
  const [companySearch, setCompanySearch] = useState(false);
  const [coworkerSearch, setCoworkerSearch] = useState(false);

  const handleCompanySearch = () => {
    setCompanySearch(true);
    setManagerSearch(false);
    setCoworkerSearch(false);
  };

  const handleManagerSearch = () => {
    setCompanySearch(false);
    setManagerSearch(true);
    setCoworkerSearch(false);
  };

  const handleCoworkerSearch = () => {
    setCompanySearch(false);
    setManagerSearch(false);
    setCoworkerSearch(true);
  };

  //fetch all managers data
  React.useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Managers"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setManagers(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  //fetch all coworkers data
  React.useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Coworkers"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setCoworkers(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  //fetch all companies data
  React.useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Companies"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setCompanies(list);
        // console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  //Sslect a specific manager
  const handleOnSelectManager = (item) => {
    navigate("/ManagerResult", { state: item });
  };

  //Format suggestion results of managers
  const formatManagerResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          Name: {item.name}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          Company: {item.company}
        </span>
      </>
    );
  };

  //Sslect a specific coworker
  const handleOnSelectCoworker = (item) => {
    navigate("/coworkerResult", { state: item });
  };

  //Format suggestion results of coworkers
  const formatCoworkerResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          Name: {item.name}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          Company: {item.company}
        </span>
      </>
    );
  };

  //Sslect a specific company
  const handleOnSelectCompany = (item) => {
    navigate("/CompanyResult", { state: item });
  };

  //Format suggestion results of companies
  const formatCompanyResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          Name: {item.name}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          Address: {item.address}
        </span>
      </>
    );
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const blogsNavigation = () => {
    navigate("/blogs");
    handleDrawerToggle();
  };

  const resumeNavigation = () => {
    navigate("/resumeHelp");
    handleDrawerToggle();
  };

  const jobsNavigation = () => {
    navigate("/jobs");
    handleDrawerToggle();
  };

  const topManagersNavigation = () => {
    navigate("/topManagers");
    handleDrawerToggle();
  };

  const adviceNavigation = () => {
    navigate("/advice");
    handleDrawerToggle();
  };

  const aboutNavigation = () => {
    navigate("/about");
    handleDrawerToggle();
  };

  const contactNavigation = () => {
    navigate("/contactUs");
    handleDrawerToggle();
  };

  const communityNavigation = () => {
    navigate("/communityGuidelines");
    handleDrawerToggle();
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={blogsNavigation}>
            {" "}
            <ListItemText primary="Blogs" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={resumeNavigation}>
            <ListItemText primary="Resume/CV Help" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={jobsNavigation}>
            {" "}
            <ListItemText primary="Jobs" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={adviceNavigation}>
            <ListItemText primary="Advice" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={topManagersNavigation}>
            <ListItemText primary="Top Managers" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={aboutNavigation}>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={contactNavigation}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={communityNavigation}>
            <ListItemText primary="Community Guidelines" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          {user && (
            <ListItemButton onClick={handleLogout}>
              <Button variant="contained" style={{ width: "100%" }}>
                Log out
              </Button>
            </ListItemButton>
          )}
          {!user && (
            <ListItemButton onClick={handleLogIn}>
              <Button variant="contained" style={{ width: "100%" }}>
                Log In
              </Button>
            </ListItemButton>
          )}
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{ marginBottom: "60px" }}>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <AppBar
          position="fixed"
          sx={{
            width: { xxl: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar className="nav-bar">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <h2>RateMyO</h2>
            </Link>
            {props.showLinks && (
              <div className="page-links">
                <ul>
                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/resumeHelp">Resume/CV Help</Link>
                  </li>
                  <li>
                    <Link to="/jobs">Jobs</Link>
                  </li>
                  <li>
                    <Link to="/topManagers">Top Managers</Link>
                  </li>
                </ul>
              </div>
            )}
            {props.showSearchBar && (
              <div className="search-area" style={{ zIndex: "100" }}>
                <div style={{ width: 300 }}>
                  {companySearch && (
                    <ReactSearchAutocomplete
                      items={companies}
                      // onSearch={handleOnSearch}
                      // onHover={handleOnHover}
                      onSelect={handleOnSelectCompany}
                      showNoResults
                      maxResults="6"
                      showClear
                      placeholder="Search Company"
                      formatResult={formatCompanyResult}
                    />
                  )}
                  {managerSearch && (
                    <ReactSearchAutocomplete
                      items={managers}
                      // onSearch={handleOnSearch}
                      // onHover={handleOnHover}
                      onSelect={handleOnSelectManager}
                      showNoResults
                      maxResults="6"
                      showClear
                      placeholder="Search Manager"
                      formatResult={formatManagerResult}
                    />
                  )}
                  {coworkerSearch && (
                    <ReactSearchAutocomplete
                      items={coworkers}
                      // onSearch={handleOnSearch}
                      // onHover={handleOnHover}
                      onSelect={handleOnSelectCoworker}
                      showNoResults
                      maxResults="6"
                      showClear
                      placeholder="Search Coworker"
                      formatResult={formatCoworkerResult}
                    />
                  )}
                </div>
                {!companySearch && (
                  <Button
                    style={{ marginLeft: "10px" }}
                    variant="contained"
                    size="small"
                    onClick={handleCompanySearch}
                  >
                    <SearchIcon /> Company
                  </Button>
                )}
                {!managerSearch && (
                  <Button
                    style={{ marginLeft: "10px" }}
                    variant="contained"
                    size="small"
                    onClick={handleManagerSearch}
                  >
                    <SearchIcon /> Manager
                  </Button>
                )}
                {!coworkerSearch && (
                  <Button
                    style={{ marginLeft: "10px" }}
                    variant="contained"
                    size="small"
                    onClick={handleCoworkerSearch}
                  >
                    <SearchIcon /> Coworker
                  </Button>
                )}
              </div>
            )}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xxl: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { xxl: drawerWidth }, flexShrink: { xxl: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", xxl: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
