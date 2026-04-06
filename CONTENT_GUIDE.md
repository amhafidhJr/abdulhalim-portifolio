## Enabling the Forms (Saving Data)

By default, the forms in your Dashboard need a small backend service to save your changes to `db.json`. 

### How to start the server:
1.  Open a **new terminal** window in your project folder.
2.  Run the following command:
    ```bash
    npm run server
    ```
3.  Keep this terminal running alongside your main website (`npm start`).

> [!IMPORTANT]
> If the server is not running, the "Publish" and "Add to Gallery" buttons will show an error. Once the server is running, your changes will be saved directly to `src/data/db.json` and appear on the site immediately.

## Location
- **Database File**: `src/data/db.json`
- **Dashboard**: `http://localhost:3003/dashboard` (Key: `12345`)

## Adding a New Project

To add a new project, open `src/data/db.json` and add a new object to the `projects` array. 

### Project Template
```json
{
  "id": "unique-id-here",
  "title": "Project Name",
  "subtitle": "Short Category (e.g., Mobile App)",
  "description": "Full project description...",
  "image": "https://url-to-your-image.png",
  "tech": ["React", "Node.js", "Tailwind"],
  "github": "https://github.com/your-repo",
  "demo": "https://your-live-demo.com"
}
```

## Adding a New Blog Post

To add a new blog post, add a new object to the `blogs` array in the same file.

### Blog Template
```json
{
  "id": "unique-uuid-here",
  "title": "Article Title",
  "date": "Month Day, Year",
  "author": "Your Name",
  "readTime": "X min",
  "excerpt": "Short summary for the blog grid...",
  "content": [
    "Paragraph one of your article.",
    "Paragraph two of your article.",
    "..."
  ]
}
```

> [!TIP]
> After saving the file, the website will automatically refresh (if running in dev mode) and display your new content immediately.
