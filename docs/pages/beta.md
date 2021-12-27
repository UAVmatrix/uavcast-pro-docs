# Beta version 5.x

We are currently building UAVcast-Pro for other architectures and OS.

Known working boards:

- Raspberry Pi OS (Debian)
- Raspberry PI (Ubuntu 32bit)
- Jetson Nano (Ubuntu)

It will probably run just fine on many more, but the above has been tested by uavmatrix.

This version is built to run on these architectures.
If you are unsure with arch your specific board uses, type `uname -a` in the console.

- `arm32v7`
- `arm64v8`

## Installation

!!! warning "Beta warning"
    version 5.x is still in beta and should be used with caution until stable version is released.

```bash
curl -s http://install.uavmatrix.com/next/ | sudo bash
```

## Whats new!

We have rebuilt the whole application from the ground up, and version 5.x of UAVcast-Pro will run in a docker container to have better support for other architectures and OS platforms.
When installing UAVcast-Pro you will see that it also installs a helper application named uavcast supervisor. This app will assist uavcast
to manage all the update / downgrade functionalities.

Also keep in mind that some functionality of previous version 4.x has been removed in favor for supporting multiple distro`s and archs such as network configuration.

## Known issues

- Version 5.x will not support armv6 architecure (pi0w, rpi1, Compute Module 1). For these board use the 4.x version of uavcast. Goto [installation](/installation) 
- Jetson Nano CSI camera currently not working, only USB camera will work. (we are working on a solution)

## Remains until stable is relased
- Language translation.
- DynDNS implementation
- CSI camera for Jetson
- General UI improvements
- Testing

Please report any issues you might find to support@uavmatrix.com

## Uninstall
Use this command to uninstall the beta version completely.
```bash
curl -s http://install.uavmatrix.com/next/ | sudo bash -s -- -r
```