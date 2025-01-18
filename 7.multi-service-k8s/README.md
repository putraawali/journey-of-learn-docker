# Multi Services K8s

## NodePort vs ClusterIP

### NodePort

With NodePort, we able to access the clusters from outside of k8s cluster such as our browser. It's just like public network.
ClusterIP, on the other hand, refuse connection from outside the clusters (e.g browser, etc). ClusterIP make our clusters private from the outside world. Each cluster still able to communicate each other, but not for the outside world

# Kubernetes Volumes

Volume in generaic container terminology is tome type of mechanism that allows a container to access a filesystem outside itself. Volume in Kubernetes, is an object that allows a container to store data at the pod level.
In that case, if we create a postgres container, it will store to volume object that inside the same pod with postgres container, not in the postgres container's filesystem

## Volume vs Persistent Volume

Volume in kubernetes is tied with the pod. So, if kubernetes or our deployment object notice that the pod is facing some error or something else that need to be deleted, our data in the volumes will be gone. Using this type of volume is safe if the container inside the pod is restarting or something, but if the pod facing some error, it just gone.

Persistent Volumes, is the filesystem that we use to store our data, and persistent volumes is outside the pod. This type of volumes is not tied to any pod at all, so any pod, who have permission, can access it.

## Persistent Volume (PV) vs Persistent Volume Claim (PVC)

PV is a storage resource in a Kubernetes cluster. It represents the physical or virtual storage provided by the cluster administrator.
A PVC is a storage request by a user or application. A PVC requests a PV of a certain size, access mode, or characteristics.

PV and PVC relationship:

-   PV = Offer: PV represents the available storage in the cluster.
-   PVC = Demand: PVC is the demand for that storage.
-   Matching (Binding): Kubernetes matches PVCs to PVs based on requirements (capacity, access mode, etc.).
-   Access by Pod: Once a PVC is matched to a PV, Pods can access the PV by referencing the PVC.
