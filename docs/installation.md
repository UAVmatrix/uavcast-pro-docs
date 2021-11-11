#Installation

Start with a fresh Raspberry image.
Confirmed working images:

!!! warning "Bullseye release"

    Raspberry organisation just released (01.11.2021) new bullseye image wich is not yet compatible with UAVcast.
    Please use the previous buster releases from the links bellow:

- [Raspberry Pi OS Lite](https://downloads.raspberrypi.org/raspios_lite_armhf/images/raspios_lite_armhf-2021-05-28/2021-05-07-raspios-buster-armhf-lite.zip)
- [Raspberry Pi OS With Desktop](https://downloads.raspberrypi.org/raspios_armhf/images/raspios_armhf-2021-05-28/2021-05-07-raspios-buster-armhf.zip)

!!! note "Looking for other boards!"
    We are currently building UAVcast-Pro for other architectures and OS.
    [Check out our beta section](/pages/beta/)

See the [https://www.raspberrypi.org/software/operating-systems/](https://www.raspberrypi.org/software/operating-systems/) for installation instruction. <br>
Continue to install UAVcast-Pro as described in the [installation](/installation/#uavcast-pro-installation) section

##UAVcast-Pro installation


You can install the latest version of UAVcast-Pro by pasting this command into you RPI shell.

```bash
curl -s http://install.uavmatrix.com | sudo bash
```

After the installation there will be validating proccess to verify that all component has been loaded successfully.
You can now access the webinterface using the RPI ip or Host name address in your browser. [http://raspberrypi/](http://raspberrypi/)

##Navio Flight Controller
For Navio+ and Navio2 boards, please use the installation procedure below:

- Install the latest image provided by [https://emlid.com](https://emlid.com).
- Connect to your RPI with SSH and run the **emlidtool** as described in the emlid documentation.[https://docs.emlid.com/navio2/common/ardupilot/installation-and-running/#choosing-a-vehicle-version-and-board](https://docs.emlid.com/navio2/common/ardupilot/installation-and-running/#choosing-a-vehicle-version-and-board)
- Select your vehicle, version and frame.
- **On Boot** Select disable
- **Ardupilot** Select stop
- **Apply** and exit.
- Install UAVcast-Pro as described [uavcast-pro-installation](#uavcast-pro-installation)

  !['emlidtool Example'](images/pages/installation/emlidtool.jpg)
