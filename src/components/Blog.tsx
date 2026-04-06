import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Pagination,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import db from "../data/db.json";

const posts = db.blogs;

export const Blog = () => {
  return (
    <Box component="section" sx={{ py: 15 }}>
      <Container maxWidth="md">
        <Box sx={{ mb: 8 }}>
          <Typography variant="overline" sx={{ color: "var(--text-muted)", fontWeight: 600, letterSpacing: 2 }}>
            RESOURCES & INSIGHTS
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 600, mt: 1, letterSpacing: -2 }}>
            Technical musings.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item xs={12} md={6} key={post.id}>
              <Box
                className="hairline-card"
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  '&:hover .arrow': { transform: "translateX(4px)" }
                }}
              >
                <Box>
                  <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Calendar size={14} style={{ color: "var(--text-muted)" }} />
                      <Typography variant="caption" sx={{ color: "var(--text-muted)" }}>{post.date}</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Clock size={14} style={{ color: "var(--text-muted)" }} />
                      <Typography variant="caption" sx={{ color: "var(--text-muted)" }}>{post.readTime}</Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>{post.title}</Typography>
                  <Typography variant="body2" sx={{ color: "var(--text-muted)", lineHeight: 1.8, mb: 4 }}>
                    {post.excerpt}
                  </Typography>
                </Box>
                
                <Link to={`/posts/${post.id}`} style={{ textDecoration: "none" }}>
                  <Button
                    variant="text"
                    sx={{
                      color: "#fff",
                      p: 0,
                      textTransform: "none",
                      fontWeight: 600,
                      '&:hover': { background: "none" }
                    }}
                    endIcon={<ArrowRight size={18} className="arrow" style={{ transition: "transform 0.3s ease" }} />}
                  >
                    Read article
                  </Button>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
          <Pagination 
            count={1} 
            variant="outlined" 
            sx={{ 
              '& .MuiPaginationItem-root': { color: "var(--text-muted)", borderColor: "var(--border-hairline)" },
              '& .Mui-selected': { bgcolor: "rgba(255,255,255,0.05) !important", color: "#fff", borderColor: "#fff" }
            }} 
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
