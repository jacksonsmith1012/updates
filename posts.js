// ============================================================
//  MY BLOG POSTS
//  To add a new post, copy one of the post objects below,
//  paste it at the TOP of the posts array, and fill it in.
//  Photos go in the /photos/ folder.
// ============================================================

const BLOG_CONFIG = {
  authorName: "Jackson",
  blogTitle: "From Where I Am",
  blogSubtitle: "Updates from the road — for the people back home.",
  profilePhoto: "photos/profile.jpg", // Replace with your photo filename
};

const posts = [
  // ── EXAMPLE POST (edit or delete this) ──────────────────────
  {
    date: "June 1, 2026",
    title: "First Update — I Made It!",
    location: "Somewhere New",
    body: `
      Just wanted to let everyone know I arrived safe and sound. The flight was long
      but smooth, and I'm already feeling that mix of excited and a little homesick —
      the good kind that makes you grateful for where you come from.
      <br><br>
      I've been thinking a lot about Psalm 121 — <em>"My help comes from the Lord,
      the Maker of heaven and earth."</em> Feeling that deeply right now.
      <br><br>
      Miss you all already. More updates soon!
    `,
    // Photos for this post — filenames inside the /photos/ folder.
    // Add as many as you want, or leave the array empty: photos: []
    photos: [
      { file: "photos/example1.jpg", caption: "The view from my window" },
    ],
  },

  // ── TEMPLATE — copy this block to add a new post ────────────
  // {
  //   date: "Month Day, Year",
  //   title: "Post Title Here",
  //   location: "City or Place",
  //   body: `
  //     Write your update here. You can use <br><br> for paragraph breaks,
  //     and <em>italics</em> or <strong>bold</strong> for emphasis.
  //   `,
  //   photos: [
  //     { file: "photos/your-photo.jpg", caption: "Optional caption" },
  //   ],
  // },
];
