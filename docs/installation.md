#Installation

!!! warning "Beta warning"
    version 5.x is still in beta and should be used with caution until stable version is released.

```bash
curl -s http://install.uavmatrix.com/next | sudo bash
```

Known working boards:

- Raspberry Pi OS (Debian)
- Raspberry PI (Ubuntu 32bit)
- Jetson Nano (Ubuntu)

It will probably run just fine on many more, but the above has been tested by uavmatrix.

This version is built to run on these architectures.
If you are unsure with arch your specific board uses, type `uname -a` in the console.

- `arm32`
- `arm64`
- `amd64`

After the installation there will be validating proccess to verify that all component has been loaded successfully.
You can now access the webinterface using the RPI ip or Host name address in your browser. [http://raspberrypi/](http://raspberrypi/)


## Whats new!

We have rebuilt the whole application from the ground up, and version 5.x of uavcast will run in a docker container to have better support for other architectures and OS platforms.
When installing uavcast you will see that it also installs a helper application named uavcast supervisor. This app will assist uavcast
to manage all the update / downgrade functionalities.

Also keep in mind that some functionality of previous version 4.x has been removed in favor for supporting multiple distro`s and archs such as network configuration.


## Uninstall
Use this command to uninstall the beta version completely.
```bash
curl -s http://install.uavmatrix.com/next | sudo bash -s -- -r
```