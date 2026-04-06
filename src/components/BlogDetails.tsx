import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { User, Calendar, Share2, ArrowLeft, Clock } from "lucide-react";
import db from "../data/db.json";

const posts = db.blogs;

export const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const found = posts.find(p => p.id === id);
    if (found) setPost(found);
  }, [id]);

  if (!post) return (
    <Box sx={{ py: 20, textAlign: "center" }}>
      <Typography sx={{ color: "var(--text-muted)" }}>Post not found.</Typography>
      <Link to="/blog" style={{ color: "#fff", textDecoration: "none", marginTop: "20px", display: "inline-block" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <ArrowLeft size={16} />
          <Typography variant="body2">Back to blog</Typography>
        </Stack>
      </Link>
    </Box>
  );

  return (
    <Box component="article" sx={{ py: 15 }}>
      <Container maxWidth="md">
        <Link to="/blog" style={{ textDecoration: "none", color: "var(--text-muted)" }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 6, '&:hover': { color: "#fff" } }}>
            <ArrowLeft size={16} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>Back to insights</Typography>
          </Stack>
        </Link>

        <Box sx={{ mb: 10 }}>
          <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Calendar size={14} style={{ color: "var(--text-muted)" }} />
              <Typography variant="caption" sx={{ color: "var(--text-muted)" }}>{post.date}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Clock size={14} style={{ color: "var(--text-muted)" }} />
              <Typography variant="caption" sx={{ color: "var(--text-muted)" }}>{post.readTime} read</Typography>
            </Stack>
          </Stack>

          <Typography variant="h1" sx={{ fontWeight: 600, mb: 4, letterSpacing: -3 }}>
            {post.title}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Box sx={{ width: 32, height: 32, borderRadius: "50%", bgcolor: "var(--border-hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <User size={16} style={{ color: "var(--text-muted)" }} />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>{post.author}</Typography>
          </Stack>
        </Box>

        <Box 
          sx={{ 
            p: { xs: 4, md: 8 }, 
            bgcolor: "var(--bg-surface)", 
            borderRadius: "32px", 
            border: "1px solid var(--border-hairline)",
            mb: 10
          }}
        >
          <Stack spacing={4}>
            {post.content.map((p: string, i: number) => (
              <Typography key={i} sx={{ color: "var(--text-main)", lineHeight: 2, fontSize: "1.125rem" }}>
                {p}
              </Typography>
            ))}
          </Stack>
        </Box>

        <Divider sx={{ borderColor: "var(--border-hairline)", mb: 6 }} />

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" sx={{ color: "var(--text-muted)" }}>
            Sharing engineering knowledge.
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton size="small" sx={{ color: "var(--text-muted)", '&:hover': { color: "#fff" } }}>
              <Share2 size={18} />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogDetails;
