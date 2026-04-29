# Kubernetes Manifests

This directory contains Kubernetes configuration for deploying the Hulu Clone application on a local k3s cluster.

## Resources

- Deployment: Runs the nginx-based container
- Service (ClusterIP): Internal cluster networking
- Ingress (Traefik): Routes traffic via `hulu.local`

## Flow

Browser → Ingress → Service → Pod

## Notes

- Traefik is used as the ingress controller (default in k3s)
- Local DNS resolution is handled via `/etc/hosts`