'use client';

import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">Keiichi Satake</Link>
          </Typography>

          {/* Desktop navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {pages.map((p) => (
              <Button
                key={p.href}
                color="inherit"
                component={Link}
                href={p.href}
              >
                {p.label}
              </Button>
            ))}
          </Box>

          {/* Mobile menu button */}
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { md: 'none' } }}
            onClick={() => setOpen(true)}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 240 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {pages.map((p) => (
              <ListItem key={p.href} disablePadding>
                <ListItemButton component={Link} href={p.href}>
                  {p.label}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
