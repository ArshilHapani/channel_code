## Repo setup using fogejo

```sh
# Preserve your current GitHub remote
git remote add github "$(git remote get-url origin)"

# Add your Forgejo repository
git remote add forgejo \
  https://git.homelab.arshil.cc/YOUR_USERNAME/YOUR_REPO.git

# Create switching commands
git config alias.use-github \
  '!git remote set-url origin "$(git remote get-url github)"'

git config alias.use-forgejo \
  '!git remote set-url origin "$(git remote get-url forgejo)"'

```

## Switching

```sh
git use-forgejo
git push origin main
```
