# [pasha.work](https://pasha.work/)

😲<br/>
👕<br/>
👖<br/>

```bash
nvm install && nvm use
yarn install
yarn start
yarn build
yarn preview
```

## Caddy configuration

Create your local Caddy configuration from the public template before starting the production stack:

```bash
cp Caddyfile.example Caddyfile
```

Replace `example.com` with your domain and customize the routes for your server. The actual `Caddyfile` is ignored by Git, so host-specific reverse-proxy routes stay out of this repository.
