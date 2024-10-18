
# Deployment

#### Requirements
* [NodeJS](https://nodejs.org/en/download/package-manager) is an open-source, cross-platform JavaScript runtime environment.
* [Nginx](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/) for reverse proxy, load balancing, and caching


---

## Step 1. NodeJS
### Install node.js

- [How To Install Node.js on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

### Install npm
npm is a package manager for the JavaScript

```bash
npm install -g npm
```


## Step 2. Nginx
### Install nginx
- [How To Install Nginx on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)


#### Setting up the config for Next.js
Open your ngix file 
```bash
nano /etc/nginx/sites-available/***FILE_NAME*** 
```
Example: `default` or `your_file_name`
 
Paste these settings there

```bash
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:10m inactive=7d use_temp_path=off;


upstream nextjs_upstream {
  server localhost:3000;
}

server {
  listen 80;

  # Replace the server name with your domain
  server_name ***YOUR_DOMAIN***;

  server_tokens off;

  gzip on;
  gzip_proxied any;
  gzip_comp_level 4;
  gzip_types text/css application/javascript image/svg+xml;

  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass $http_upgrade;

  location /abdk-consulting/_next/static {
    proxy_cache STATIC;
    proxy_pass http://nextjs_upstream;

    # For testing cache - remove before deploying to production
    add_header X-Cache-Status $upstream_cache_status;
  }

  location /static {
    proxy_cache STATIC;
    proxy_ignore_headers Cache-Control;
    proxy_cache_valid 60m;
    proxy_pass http://nextjs_upstream;

    # For testing cache - remove before deploying to production
    add_header X-Cache-Status $upstream_cache_status;
  }

  location / {
    proxy_pass http://nextjs_upstream;
  }
}
```

Don't forget to change the server name
```bash
...
server_name abdk.consulting;
...
```
Save and close the file when you are finished.

Next, test to make sure that there are no syntax errors in any of your Nginx files:
```bash
sudo nginx -t
```

Restart Nginx to enable your changes
```bash
sudo systemctl restart nginx
```



## Step 3. Deploying the Next.js Application 
#### Copy git repository:

```bash
git clone https://github.com/brandpack/abdk-consulting
#or update repository
git pull
```

#### Install dependencies
Open your project/repository directory
```bash
npm install
```

Take a build

```bash
npm run build
```


## STEP 4. Setting Up PM2 Process Manager
> [PM2](https://pm2.keymetrics.io) is a daemon process manager that will help you manage and keep your application online 24/7.

We run `npm start` from within our server. Sometimes this command may stop running for reasons like the server restarted or it needed to install updates. We will use a tool called PM2 to make sure that our Next.js application is always running. PM2 will even restart the Next.js application if it goes down.

#### Install pm2
You may need to use `sudo`
```bash
npm install pm2 -g
```

#### Start the Next.js
Navigate to the Next.js application directory (if not already there):
```bash
cd /var/www/***NEXTJS_PROJECT***
#example
cd /var/www/abdk-consulting
```

Start the Next.js application using PM2:
```bash
pm2 start npm --name "nextjs" -- start
```
<small>
This command will start the Next.js application with the name “nextjs” using the npm start command. PM2 will automatically restart the application if it crashes or if the server reboots.
</small>

To ensure PM2 starts on boot, run:
```bash
pm2 startup
```

This command will generate a script that you can copy and paste into your terminal to enable PM2 to start on boot.

Save the current PM2 processes:
```bash
pm2 save
```

Update pm2
```bash
#nextjs is example name your pm2 process
pm2 restart nextjs
```


---

# Update
Open project
Navigate to the Next.js application directory (if not already there):
```bash
cd /var/www/***NEXTJS_PROJECT***
#example
cd /var/www/abdk-consulting
```

Update repository
```bash
git pull
#if necessary, install new packages
npm i
```

Clear cache
```bash
rm -rf .next
```

Take a build
```bash
npm run build
```

Update pm2
```bash
#nextjs is example name of your pm2 process
pm2 restart nextjs
```
Done
