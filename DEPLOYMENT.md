# Deployment Guide

This guide will walk you through deploying your Full-Stack Authentication System to Vercel.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- MongoDB Atlas database (or other MongoDB instance)
- Mailtrap account for email testing (or production email service)

## Step 1: Prepare Your Environment Variables

Before deploying, gather all the required environment variables:

### Required Variables

1. **MONGO_URI**
   - Get from MongoDB Atlas: Database → Connect → Connect your application
   - Format: `mongodb+srv://username:password@cluster.mongodb.net/database_name`

2. **TOKEN_SECRET**
   - Generate a secure random string:
     ```bash
     openssl rand -base64 32
     ```
   - Or use any secure random string generator

3. **DOMAIN**
   - For Vercel, this will be: `https://your-app-name.vercel.app`
   - You'll update this after first deployment

4. **Email Service Variables**
   - **MAILTRAP_HOST**: `sandbox.smtp.mailtrap.io`
   - **MAILTRAP_PORT**: `2525`
   - **MAILTRAP_USER**: From your Mailtrap inbox settings
   - **MAILTRAP_PASS**: From your Mailtrap inbox settings
   - **EMAIL_FROM**: `noreply@yourdomain.com` (or your preferred sender email)

## Step 2: Push to GitHub

Ensure your code is pushed to GitHub:

\`\`\`bash
git add .
git commit -m "Prepare for deployment"
git push origin main
\`\`\`

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

4. **Add Environment Variables**
   Click "Environment Variables" and add each variable:
   
   | Name | Value |
   |------|-------|
   | MONGO_URI | `your_mongodb_connection_string` |
   | TOKEN_SECRET | `your_generated_secret` |
   | DOMAIN | `https://your-app-name.vercel.app` |
   | MAILTRAP_HOST | `sandbox.smtp.mailtrap.io` |
   | MAILTRAP_PORT | `2525` |
   | MAILTRAP_USER | `your_mailtrap_user` |
   | MAILTRAP_PASS | `your_mailtrap_password` |
   | EMAIL_FROM | `noreply@yourdomain.com` |

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 1-2 minutes)

### Option B: Using Vercel CLI

1. **Install Vercel CLI**
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **Login to Vercel**
   \`\`\`bash
   vercel login
   \`\`\`

3. **Deploy**
   \`\`\`bash
   vercel
   \`\`\`
   
   Follow the prompts to link your project and deploy.

4. **Add Environment Variables**
   \`\`\`bash
   vercel env add MONGO_URI
   vercel env add TOKEN_SECRET
   vercel env add DOMAIN
   vercel env add MAILTRAP_HOST
   vercel env add MAILTRAP_PORT
   vercel env add MAILTRAP_USER
   vercel env add MAILTRAP_PASS
   vercel env add EMAIL_FROM
   \`\`\`

5. **Redeploy with Environment Variables**
   \`\`\`bash
   vercel --prod
   \`\`\`

## Step 4: Update DOMAIN Variable

After your first deployment:

1. Copy your Vercel deployment URL (e.g., `https://your-app-name.vercel.app`)
2. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
3. Update the `DOMAIN` variable with your actual Vercel URL
4. Redeploy the application (Deployments → ... → Redeploy)

## Step 5: Configure MongoDB Network Access

1. Go to MongoDB Atlas
2. Navigate to Network Access
3. Add Vercel's IP addresses or allow access from anywhere (`0.0.0.0/0`)
   - **Note**: For production, it's better to whitelist specific IPs

## Step 6: Test Your Deployment

1. **Visit your deployed app**
   - Open `https://your-app-name.vercel.app`

2. **Test signup flow**
   - Create a new account
   - Check Mailtrap for verification email
   - Click verification link
   - Verify email is confirmed

3. **Test login**
   - Log in with verified account
   - Access profile page
   - Test logout

## Troubleshooting

### Build Fails

- Check Vercel build logs for specific errors
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation: `npm run build` locally

### Database Connection Issues

- Verify `MONGO_URI` is correct
- Check MongoDB Atlas network access settings
- Ensure database user has proper permissions

### Email Not Sending

- Verify all Mailtrap credentials are correct
- Check Vercel environment variables are set
- Review Vercel function logs for errors

### 500 Internal Server Error

- Check Vercel function logs (Deployments → View Function Logs)
- Verify all environment variables are set correctly
- Ensure `DOMAIN` matches your actual deployment URL

## Production Considerations

### Email Service

For production, replace Mailtrap with a real email service:

**Option 1: Gmail**
\`\`\`env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
\`\`\`

Update `src/helpers/mailer.ts` to use Gmail configuration.

**Option 2: SendGrid**
- Sign up at [sendgrid.com](https://sendgrid.com)
- Get API key
- Update mailer configuration

**Option 3: AWS SES**
- Configure AWS SES
- Update mailer with SES credentials

### Security Enhancements

1. **Rate Limiting**: Add rate limiting to prevent abuse
2. **CORS**: Configure CORS for API routes
3. **HTTPS Only**: Ensure all cookies are secure in production
4. **Environment Variables**: Never commit `.env` to git
5. **MongoDB**: Use strong passwords and IP whitelisting

### Custom Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `DOMAIN` environment variable to your custom domain

## Monitoring

- **Vercel Analytics**: Enable in project settings
- **Error Tracking**: Consider adding Sentry or similar
- **Logs**: Monitor Vercel function logs regularly

## Continuous Deployment

Vercel automatically redeploys when you push to your main branch:

\`\`\`bash
git add .
git commit -m "Update feature"
git push origin main
\`\`\`

Vercel will automatically build and deploy your changes.

---

🎉 **Congratulations!** Your authentication system is now deployed and ready for use!
