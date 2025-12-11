# Node.js Version Update - December 2025

## Issue
Node.js version 16.x has reached end-of-life and is no longer supported.

## Solution
Updated the project to use **Node.js 22.18.0 LTS** (latest stable version).

## Changes Made

### 1. Created `.nvmrc` file
Specifies Node.js version `22.18.0` for deployment platforms and local development.

### 2. Created `netlify.toml` file
Configures Netlify to use:
- Node.js 22.18.0
- npm 10.9.3
- Proper build settings
- HTTPS redirect
- SPA routing fallback

### 3. Updated `package.json`
Added `engines` field to specify minimum versions:
```json
"engines": {
  "node": ">=18.0.0",
  "npm": ">=9.0.0"
}
```

## Verification

Your local environment is already running:
- ✅ Node.js: v22.18.0
- ✅ npm: 10.9.3

## Next Steps

### For Netlify Deployment:
1. Commit these changes:
   ```bash
   git add .nvmrc netlify.toml package.json
   git commit -m "Update Node.js to v22.18.0 LTS"
   git push
   ```

2. Netlify will automatically:
   - Detect the `.nvmrc` file
   - Use Node.js 22.18.0 for builds
   - Clear the old build cache

### If You See Build Errors:
1. Go to Netlify dashboard
2. Navigate to: Site Settings → Build & Deploy → Environment
3. Clear build cache
4. Trigger a new deploy

## Supported Node.js Versions (as of Dec 2025)

| Version | Status | End of Life |
|---------|--------|-------------|
| 22.x    | ✅ LTS (Current) | April 2027 |
| 20.x    | ✅ LTS | April 2026 |
| 18.x    | ✅ LTS | April 2025 |
| 16.x    | ❌ EOL | September 2023 |

## Benefits of Node.js 22

- Improved performance
- Better security
- Latest JavaScript features
- Long-term support until 2027
- Better compatibility with modern packages

## Troubleshooting

### If you need to switch Node.js versions locally:

**Using nvm (Node Version Manager):**
```bash
# Install nvm if you haven't: https://github.com/nvm-sh/nvm

# Install Node.js 22
nvm install 22

# Use Node.js 22
nvm use 22

# Set as default
nvm alias default 22
```

**Using nvm-windows:**
```powershell
# Install nvm-windows if you haven't: https://github.com/coreybutler/nvm-windows

# Install Node.js 22
nvm install 22.18.0

# Use Node.js 22
nvm use 22.18.0
```

### Verify installation:
```bash
node --version  # Should show v22.18.0
npm --version   # Should show 10.9.3
```

## Additional Resources

- [Node.js Release Schedule](https://nodejs.org/en/about/releases/)
- [Netlify Node.js Version](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript)
- [nvm Documentation](https://github.com/nvm-sh/nvm)
