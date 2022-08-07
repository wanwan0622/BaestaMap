// import { a } from "react-router-dom";

// import "./styles.css";
import Link from 'next/link';
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@mui/material/List";
import ListItem, { ListItemProps } from "@mui/material/ListItem";

type LinkListItemProps = Omit<
  ListItemProps<"a", { href: string }>,
  "component" | "button"
>;

const LinkListItem = React.forwardRef<HTMLAnchorElement, LinkListItemProps>(
  function LinkListItem(props, forwardedRef) {
    const { href, ...other } = props;
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#212121" }}
        >
          <ListItem component="a" button ref={forwardedRef} {...other} />
        </a>
      );
    } else {
      return (
        <Link href={href} passHref>
          <ListItem component="a" button ref={forwardedRef} {...other} />
        </Link>
      );
    }
  }
);

export function Navigator() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, width: "100%", height: "2em", margin: "0"}}>
        <AppBar position="static">
          <Toolbar
            sx={{ width: "100%", backgroundColor: "#2C2C2C"}}
            >
            <Link href="/" passHref style={{m: "auto auto auto 0"}}>
              <a><img src="/BaestaMap/imgs/logo.png" style={{height: "50px"}}></img></a>
            </Link>
            <IconButton
              size="large"
              edge="start"
              // color="inherit"
              aria-label="menu"
              sx={{ m: "auto 0 auto auto", color: "#EC9CFC" }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor='top'
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        style={{transform: "translateY(56px)"}}
      >
        <List
          sx={{
            backgroundColor: "#6B6B6B",
            color: "#FFFFFF"
          }}
        >
          <LinkListItem href="/">お問い合わせ</LinkListItem>
          <LinkListItem href="/">GitHub</LinkListItem>
          <LinkListItem href="/">BaestaMapについて</LinkListItem>
        </List>
      </Drawer>
    </>

  );
}