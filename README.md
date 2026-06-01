# From Where I Am — Blog

A simple, personal blog for sharing updates with family and friends back home.

---

## File Structure

```
blog/
├── index.html     ← The page (don't need to edit this)
├── style.css      ← All the styling (don't need to edit this)
├── main.js        ← Renders the posts (don't need to edit this)
├── posts.js       ← ✏️ YOUR FILE — edit this to add posts & change settings
└── photos/        ← 📷 Drop all your photos in here
```

---

## How to Add a New Post

Open `posts.js`. At the top of the `posts` array, paste a new post block:

```js
{
  date: "June 15, 2026",
  title: "Week Two — Getting Settled",
  location: "Portland, OR",
  body: `
    Write your update here. Use <br><br> for paragraph breaks,
    <em>italic text</em>, and <strong>bold text</strong>.
  `,
  photos: [
    { file: "photos/week2-sunset.jpg", caption: "The view from my apartment" },
    { file: "photos/week2-food.jpg", caption: "First home-cooked meal" },
  ],
},
```

**Tips:**
- New posts go at the **top** of the array so they show first.
- `location` is optional — leave it out if you don't want to show it.
- `photos` is optional — use `photos: []` or remove it for text-only posts.
- Photo captions are optional too.

---

## How to Add Photos

1. Put the photo file in the `/photos/` folder.
2. Reference it in your post: `"photos/your-filename.jpg"`
3. That's it!

---

## Changing Your Name / Title / Subtitle

Open `posts.js` and edit the `BLOG_CONFIG` block at the top:

```js
const BLOG_CONFIG = {
  authorName: "Jackson",
  blogTitle: "From Where I Am",
  blogSubtitle: "Updates from the road — for the people back home.",
  profilePhoto: "photos/profile.jpg",
};
```

---

## Deploying to GitHub Pages

1. Create a repo on GitHub (e.g. `username.github.io` or any repo name).
2. Push all these files to the repo.
3. Go to **Settings → Pages → Source → main branch / root**.
4. Your blog will be live at `https://username.github.io`.

To update: edit `posts.js`, commit, and push. The site updates automatically.
