# 🎯 QUICK START: 5-MINUTE CUSTOMIZATION

## 🏆 THE ONE FILE YOU MUST EDIT

### ⭐ **`/frontend/src/mock.js`** - THIS IS YOUR PORTFOLIO DATA!

```
mock.js
├── hero {}           ← Your name & title (TOP OF PAGE)
├── about {}          ← Your bio & stats
├── skills []         ← Your technical skills (4-6 items)
├── projects []       ← Your work portfolio (3-6 items)  
├── testimonials []   ← Client reviews (optional)
└── contact {}        ← Email & social links
```

---

## 📝 WHAT TO CHANGE IN EACH SECTION

### 1. HERO SECTION (Lines 4-9)
**What you see:** Big title at the top of the page

```javascript
hero: {
  name: "Your Full Name",           // ← CHANGE THIS
  title: "Your Job Title",          // ← CHANGE THIS
  subtitle: "Your One-Liner",       // ← CHANGE THIS
}
```

**Example:**
```javascript
hero: {
  name: "Jane Doe",
  title: "Full Stack Developer",
  subtitle: "Building Modern Web Applications",
}
```

---

### 2. ABOUT SECTION (Lines 10-19)
**What you see:** "The Chronicle" section with your bio

```javascript
about: {
  description: "Write 2-3 sentences about yourself",  // ← CHANGE THIS
  quote: "Your favorite quote",                       // ← CHANGE THIS
  stats: [
    { label: "Experience", value: "5+" },    // ← CHANGE THESE
    { label: "Projects", value: "30+" },
    { label: "Skills", value: "15+" },
    { label: "Clients", value: "20+" }
  ]
}
```

---

### 3. SKILLS SECTION (Lines 20-53)
**What you see:** "Mastered Arts" cards with your skills

```javascript
skills: [
  {
    id: 1,
    name: "Frontend Development",               // ← Skill name
    icon: "code",                               // ← Icon (see list below)
    description: "React, Vue, JavaScript",      // ← What you know
    level: 90,                                  // ← 1-100 proficiency
    color: "#61dafb"                            // ← Color (hex code)
  },
  // Add 3-6 skills total
]
```

**ICON OPTIONS:** (Use these exact names)
- `code` - For programming
- `palette` - For design  
- `server` - For backend
- `database` - For databases
- `cloud` - For cloud/DevOps
- `smartphone` - For mobile
- `shield` - For security
- `zap` - For performance

---

### 4. PROJECTS SECTION (Lines 54-87)
**What you see:** "Legendary Quests" - Your portfolio work

```javascript
projects: [
  {
    id: 1,
    title: "Project Name",                           // ← Project title
    description: "What it does, technologies used",  // ← 2 sentences
    image: "https://image-url.com/screenshot.jpg",   // ← Screenshot URL
    tags: ["React", "Node.js", "MongoDB"],           // ← Tech stack
    year: "2024"                                     // ← When you built it
  },
  // Add 3-6 projects total
]
```

**WHERE TO GET IMAGES:**
- Your own project screenshots
- Unsplash.com (free stock photos)
- Format: `https://images.unsplash.com/photo-XXXXX?w=800&q=80`

---

### 5. TESTIMONIALS SECTION (Lines 88-103) - OPTIONAL
**What you see:** "Words of Wisdom" - Client reviews

```javascript
testimonials: [
  {
    id: 1,
    name: "Client Name",                        // ← Their name
    role: "Job Title, Company",                 // ← Their position
    text: "What they said about your work",     // ← The review
    avatar: "https://photo-url.com/image.jpg"   // ← Their photo
  },
  // Add 2-4 testimonials
]
```

**If you don't have testimonials:** Delete this entire section (lines 88-103)

---

### 6. CONTACT SECTION (Lines 104-113)
**What you see:** "Send an Owl" - Contact form footer

```javascript
contact: {
  email: "your.email@gmail.com",                      // ← Your email
  location: "City, Country",                          // ← Your location
  social: {
    github: "https://github.com/username",            // ← Full GitHub URL
    linkedin: "https://linkedin.com/in/username",     // ← Full LinkedIn URL
    twitter: "https://twitter.com/username"           // ← Full Twitter URL
  }
}
```

**IMPORTANT:** Use complete URLs, not just usernames!
- ✅ Good: `https://github.com/johndoe`
- ❌ Bad: `johndoe`

---

## 🎨 OPTIONAL: CHANGE COLORS

### Quick Method: Find & Replace

1. Open `/frontend/src/pages/Home.js`
2. Use Find & Replace:
   - Find: `#d4af37` (current gold)
   - Replace: `#4a90e2` (your color)

**COLOR SCHEME IDEAS:**

```
🔵 BLUE TECH
Main: #4a90e2
Secondary: #357abd
Background: Keep as is

🟢 GREEN NATURE  
Main: #2ecc71
Secondary: #27ae60
Background: Keep as is

🟣 PURPLE MODERN
Main: #9b59b6
Secondary: #8e44ad
Background: Keep as is

🔴 RED BOLD
Main: #e74c3c
Secondary: #c0392b
Background: Keep as is
```

---

## 📝 OTHER FILES (Usually don't need to change)

### `/frontend/public/index.html`
- **Line 17:** Change `<title>Nightshade - Portfolio</title>` to your name
- **That's it!**

### `/frontend/src/pages/Home.js`
- **Lines 64-65:** Change "Nightshade" to your brand name
- **Line 353:** Update footer copyright to your name
- **Optional:** Change colors throughout (Find & Replace)

### `/frontend/src/App.css`
- **Don't change** unless you know CSS
- Has custom scrollbar and animations

### `/frontend/tailwind.config.js`
- **Don't change** - This is the design system config

### `/frontend/package.json`
- **Don't change** - This lists all the installed libraries

---

## 🚀 HOW TO RUN IT

```bash
# Step 1: Extract the zip
unzip hogwarts-portfolio.zip

# Step 2: Go to the folder
cd frontend

# Step 3: Install everything (only once)
yarn install
# or if you don't have yarn:
npm install

# Step 4: Start it up!
yarn start
# or:
npm start

# Step 5: Open your browser
# Go to: http://localhost:3000
```

**It will automatically refresh when you save changes to `mock.js`!**

---

## ✅ CUSTOMIZATION CHECKLIST

**REQUIRED (5 minutes):**
- [ ] Line 5: Change `name` to your name
- [ ] Line 6: Change `title` to your job title
- [ ] Line 7: Change `subtitle` to your tagline
- [ ] Lines 11-12: Write your bio
- [ ] Lines 14-17: Update your stats
- [ ] Lines 20-52: Add/edit your 4-6 skills
- [ ] Lines 54-86: Add/edit your 3-6 projects
- [ ] Line 105: Change email to yours
- [ ] Lines 108-110: Add your social media links

**OPTIONAL (Extra polish):**
- [ ] Add testimonials (lines 88-103)
- [ ] Change colors (Find & Replace gold color)
- [ ] Change site title in `index.html`
- [ ] Change brand name from "Nightshade"

---

## 🆘 QUICK TROUBLESHOOTING

**Problem:** Nothing happens when I save `mock.js`
**Solution:** Make sure the dev server is running (`yarn start`)

**Problem:** My project images don't show
**Solution:** Make sure URLs start with `https://` and are complete

**Problem:** Social links don't work
**Solution:** Use full URLs like `https://github.com/username` not just `username`

**Problem:** Colors look wrong
**Solution:** Use hex color codes like `#4a90e2` not color names

---

## 🎉 YOU'RE DONE!

### The Main Thing to Remember:
**90% of customization happens in ONE FILE: `mock.js`**

Just edit that file with your information, save it, and refresh your browser!

---

## 📞 FILES QUICK REFERENCE

```
MUST EDIT:
├── src/mock.js                 ← YOUR CONTENT HERE! ⭐⭐⭐

MIGHT EDIT:
├── public/index.html           ← Change page title (line 17)
├── src/pages/Home.js           ← Change brand name & colors

DON'T NEED TO EDIT:
├── src/App.js                  ← Routing setup
├── src/App.css                 ← Animations  
├── src/index.css               ← Base styles
├── package.json                ← Dependencies
├── tailwind.config.js          ← Theme
└── craco.config.js             ← Build config
```

---

## 🎯 START HERE:

1. Open `src/mock.js`
2. Change lines 5-7 (your name & title)
3. Save the file
4. See your changes in the browser!

**That's it! You're live!** 🚀✨
