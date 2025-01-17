# Multi Services K8s

## NodePort vs ClusterIP

### NodePort

With NodePort, we able to access the clusters from outside of k8s cluster such as our browser. It's just like public network.
ClusterIP, on the other hand, refuse connection from outside the clusters (e.g browser, etc). ClusterIP make our clusters private from the outside world. Each cluster still able to communicate each other, but not for the outside world
