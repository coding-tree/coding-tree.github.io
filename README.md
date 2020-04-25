# Coding Tree Homepage

Homepage of Coding Tree group.

- We are proudly sharing this code for our friends and fans all over the world.
- We love to learn and share our work with others for free (:
- Hoping this will be helpful to someone.

## Deployment

Coding Tree homepage is deployed to multiple services.

### Production build (Released Version)

- Github Pages

    - [https://codingtree.pl](https://codingtree.pl)
    - [https://coding-tree.github.io](https://coding-tree.github.io)

### Development (Work In Progress)

- Buddy Pipeline (Docker Image)

    [https://develop.codingtree.pl](https://develop.codingtree.pl)

- Netlify

    [https://coding-tree.netlify.app/](https://coding-tree.netlify.app/)

    [![Netlify Status](https://api.netlify.com/api/v1/badges/ac0c482e-33b7-40fc-81a9-ac8397a21721/deploy-status)](https://app.netlify.com/sites/coding-tree/deploys)

### Tags

It is possible to deploy version to custom domain with git tags

    git tag deploy/SUBDOMAIN
    git push --tags 

Remember: if tag is reused it will be needed to add and push tag with force flag

    git tag -f deploy/SUBDOMAIN
    git push -f --tags 

Then version will be available at [https://SUBDOMAIN.hp.codingtree.pl](https://SUBDOMAIN.hp.codingtree.pl)


### Pull Requests (TODO)

