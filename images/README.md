# Images

This directory contains image assets for the Anirecss project.

## How to use images

To add images to this folder:

1. **Via GitHub Web Interface:**
   - Click "Add file" → "Upload files"
   - Select your image files (.png, .jpg, .gif, .svg, etc.)
   - Commit the changes

2. **Via Git Command Line:**
   ```bash
   # Copy your image files to this directory
   cp /path/to/your/images/* ./images/
   
   # Add and commit
   git add images/
   git commit -m "Add images"
   git push origin main
   ```

## Image Reference

Once you add images, reference them in your project like this:

```markdown
![Description](./images/image-name.png)
```

---

*Add your image files here*
