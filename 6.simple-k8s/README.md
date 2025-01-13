# How To Run

Run kubectlf apply to all file one by one
`kubectl apply -f <filename>`

Check status of your pod/service config
`kubectl get <pod/service name>` to get status of single pod/service
`kubectl get pods/services` to get status of all pods/services

# Notes

Kubernetes just way more complicated than docker and all inside the docker. If using docker we can run all container in single file with docker compose, Kubernetes using only one file for each service, pod, etc. It's very exhausting if we don't have dedicated person on network or infrastructure in our organization or if want to do it by our own.

Since K8s it's not always our best approach for our application, it's still great to learn and aware about the usage of K8s
