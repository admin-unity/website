# Website Source Files

**Want us to host/maintain your site? Contact us at [gmgwebdesign.com/help](https://gmgwebdesign.com/help)**

## What You've Received

These are the source files for your custom website. To make your website live and accessible to visitors, you'll need to:

1. **Purchase a domain name** from a domain registrar
2. **Set up web hosting** with a compatible server
3. **Install and configure** the necessary server software
4. **Deploy the website files** to your hosting environment

## Technical Requirements

Your website requires:
- Node.js runtime environment (version 18 or higher)
- npm or yarn package manager
- Web server with HTTPS support
- Database connectivity (if applicable)
- SSL certificate for secure connections
- **SMTP email service configuration (CRITICAL for form submissions)**

## Installation Process Overview

### Step 1: Server Preparation
```bash
# Connect to your server via SSH
ssh username@your-server-ip

# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### Step 2: File Deployment
```bash
# Upload files to server (replace with your details)
scp -r ./website-files username@your-server:/var/www/your-domain/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/your-domain/
sudo chmod -R 755 /var/www/your-domain/
```

### Step 3: Dependency Installation
```bash
# Navigate to website directory
cd /var/www/your-domain/

# Install required packages
npm install

# Build production version
npm run build
```

### Step 4: Web Server Configuration
Configure your web server (Apache/Nginx) to serve the files with proper routing, SSL certificates, and security headers. This involves editing server configuration files and setting up reverse proxy rules.

### Step 5: DNS Configuration
Point your domain's DNS records to your server's IP address and configure subdomains if needed.

### Step 6: SSL Certificate Setup
Install and configure SSL certificates for secure HTTPS connections.

### Step 7: Email Service Configuration (CRITICAL)
**WARNING: Your contact forms will NOT work without this step!**

Configure SMTP email settings to receive form submissions and notifications:
- Set up an email service provider (Gmail, SendGrid, Mailgun, etc.)
- Obtain SMTP server details (host, port, username, password)
- Configure environment variables for email authentication
- **Modify the form handler code to integrate with your SMTP provider**
- Update API endpoints and email templates in the codebase
- Configure proper error handling for failed email delivery
- Test email delivery to ensure forms work properly

**This requires modifying server-side code and API configurations!**

**Without proper email configuration, you will miss all customer inquiries and leads!**

*Alternative: If you prefer not to deal with email setup complexity, we can help remove the contact form from your site entirely. Contact us at [gmgwebdesign.com/help](https://gmgwebdesign.com/help)*

## Important Notes

- These files contain a modern web application that requires specific server configurations
- Improper installation may result in security vulnerabilities or site malfunction
- Regular updates and maintenance are required for optimal performance
- Backup procedures should be implemented before going live
- Server monitoring and security measures are essential

## Troubleshooting

Common issues during installation include:
- Port configuration conflicts
- Permission errors
- Missing dependencies
- Database connection failures
- SSL certificate problems
- DNS propagation delays
- SMTP authentication failures
- Environment variable conflicts in production

## Professional Installation

Website hosting should involve many technical considerations including server security, performance optimization, backup systems, and ongoing maintenance.

**For help with hosting/maintenance please contact us at [gmgwebdesign.com/help](https://gmgwebdesign.com/help)** 