# Kubernetes Manifests

This directory contains Kubernetes configuration for deploying the Hulu Clone application.

---

## 🌍 Environments

### 🧪 Local (k3s)

- Used for development and testing  
- Access via: http://hulu.local  
- Requires `/etc/hosts` mapping  

---

### 🌍 Public (VPS Deployment)

- Hosted on a VPS running k3s  
- Publicly accessible via: http://hulu.saeedashoor.com

---

## 🧱 Resources

- **Deployment** → Runs the containerised application  
- **Service (ClusterIP)** → Internal cluster networking  
- **Ingress (Traefik)** → Routes traffic to the application  

---

## 🔀 Traffic Flow

### Local

Browser → hulu.local → Ingress → Service → Pod

### Public

User → Cloudflare DNS → VPS → Traefik → Service → Pod

---

## ⚙️ Notes

- Traefik is the default ingress controller in k3s  
- Ingress host must match the domain exactly  
- Local uses `/etc/hosts`  
- Public uses Cloudflare DNS 
