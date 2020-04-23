#Installation

##Raspberry Pi Image

Start with a fresh Raspberry image.

Confirmed working images:

!!! warning

    There is currently an issue using Raspbian Buster with USB cameras. For RPI 4 we recommend using PiCamera
    [https://www.raspberrypi.org/forums/viewtopic.php?f=43&t=250379](https://www.raspberrypi.org/forums/viewtopic.php?f=43&t=250379)

- Raspbian Stretch Lite [(Get latest version)](https://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2019-04-09/2019-04-08-raspbian-stretch-lite.zip)
- Raspbian Stretch With Desktop [(Get latest version)](https://downloads.raspberrypi.org/raspbian/images/raspbian-2019-04-09/2019-04-08-raspbian-stretch.zip)
- Raspbian Buster Lite
- Raspbian Buster With Desktop

Use the [https://www.raspberrypi.org/downloads/](https://www.raspberrypi.org/downloads/) installation instruction.

###Navio RTK Image
For Navio+ and Navio2 boards, please use the installation procedure below:

!!! important

    Do not follow any configuration mentioned at emlid.com, such as selecting vehicle or launch methods. **UAVcast-Pro** will configure everything you need!

- Install the latest image provided by [https://emlid.com](https://emlid.com).
- Install UAVcast-Pro as described in the [installation](/installation/#uavcast-pro-installation) section.

##UAVcast-Pro installation

### Method 1 (recommended)

You can install the latest version of UAVcast-Pro by pasting this command into you RPI shell.

```bash
curl -s http://install.uavmatrix.com | sudo bash
```

### Method 2

You will get a download link by mail after you have purchased the product.
You need to copy the xx.tar file to your raspberry pi.

- If you are using **Desktop** image, then just open a terminal window and follow the instruction below.
- For **non-desktop** images, you can use SSH client like [Bitevise tunneller](https://dl.bitvise.com/BvSshClient-Inst.exe) to establish connection to raspberry pi.

Open a shell or terminal window and navigate to the same folder as you saved the file, normally `home/pi` or `home/pi/Download`
then you need to extract the package by using typing this command

```bash
sudo tar -xvmf UAVcast-Pro_vx.x.x.tar
```

Now you need to navigate to the UAVcast-Pro installation folder

```bash
cd UAVcast-Pro/install
```

Then start the installation by typing

```bash
sudo ./install
```

The installation time is approx 10min on a Raspberry Pi version 3

**Installation video**

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ht7i08WBQBs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

After the installation there will be validating proccess to verify that all component has been loaded successfully.
You can now access the webinterface using the RPI ip or Host name address in your browser.

[http://raspberrypi/](http://raspberrypi/)

!['Installation Example'](images/validation.jpg)
