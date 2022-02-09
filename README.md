# A JAMstack e-commerce site using Next.js, Notion and Foxy

Live demo: https://foxy-notion.vercel.app/

## 🛠 Technologies used

- [Next.js](https://nextjs.org/) - Front-end framework
- [Notion](https://www.notion.so/) - Product database
- [Foxy](https://foxy.io/) - E-commerce platform
- [Vercel](https://vercel.com/) - Deployment
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 🚀 Quick start

## Quick start

### 1. Create a Foxy store

1. Sign up or log in your [Foxy](https://admin.foxycart.com/admin) admin account
2. Create a new store or use an existing one. Other settings are optional. The key thing is to have your own Foxy store subdomain

### 2. Set up a product database in Notion

1. Sign up or log in [Notion](https://www.notion.so/login)
2. Open [this template](https://bustling-naranja-1d1.notion.site/009d7e02dbe8479fb0bbc80458a5eb0d?v=2f6b23ba9e99493da557cf82ac5210bb) and duplicate the template
3. Add your own products

### 3. Create an integration with the Notion database

1. Go to https://www.notion.com/my-integrations
2. Click the "+ New integration" button
3. Give your integration a name
4. Select the workspace where the product database exists
5. Click the "Submit" button to create the integration
6. The "Internal Integration Token" on the next page would be the `NOTION_TOKEN` environment variable
7. In the product database, click the "Share" button
8. Click the input field beside the "Invite" button, which opens a pop-up window to select an integration
9. Select the integration created in previous steps
10. Click the "Invite" button

### 4. Get the required environment variables

| Variable                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NOTION_TOKEN`               | Follow the steps in the [previous section](#3.-Create-an-integration-with-the-Notion-database) to get this variablevalue                                                                                                                                                                                                                                                                                                                                                               |
| `NOTION_DATABASE_ID`         | This should be he part of your product database URL after the workspace name and the slash and before the question mark. <br /> For example, your product database URL is `https://www.notion.so/myworkspace/a8aec43384f447ed84390e8e42c2e089?v=...`, then the database ID would be `a8aec43384f447ed84390e8e42c2e089`                                                                                                                                                                 |
| `NEXT_PUBLIC_FOXY_SUBDOMAIN` | The Foxy store subdomain, which can be found in the Foxy admin [Dashboard](https://admin.foxycart.com/admin.php). <br /> For example, your store domain is `foxy-demo.foxycart.com`, then the subdomain would be `foxy-demo`                                                                                                                                                                                                                                                           |
| `FOXY_STORE_SECRET`          | This is required only if you want to enable [Foxy HMAC cart validation](https://wiki.foxycart.com/v/2.0/hmac_validation). <br /> To get this variable value, go to [Advanced Settings](https://admin.foxycart.com/admin.php?ThisAction=EditAdvancedFeatures) in the Foxy admin. Look for the "store secret" setting, click the "Show" button, and copy the value in the text box. Also, the "would you like to enable cart validation?" option in the same section needs to be checked |
|                              |

### 5. Deploy to Vercel with one click

## 🏗 Want to get your hands dirty?

1. Clone this repo: `git clone https://github.com/Foxy/foxy-notion-example-site`
2. Copy the `.env.example` file to `.env.local`, and set the [variables](#4.-Get-the-required-environment-variables)
3. Make your changes
4. Push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.
