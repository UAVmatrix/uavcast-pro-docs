# Installation

For UAVcast Pro, you will get a download link by mail. You need to copy the xx.tar file to your raspberry pi. 
You can use SSH client like [Bitevise tunnelier](https://dl.bitvise.com/BvSshClient-Inst.exe) to connect raspberry pi.

Then open the shell window and navigate to the same folder as you uploaded the file, normally ``home/pi``
then you need to extract the package by using typing this command `sudo -tar UAVcast-Pro_vx.x.x.tar`

Now you need to navigate to the installation folder
`cd UAVcast-Pro/install`

then start the installation by typing `sudo ./install`
Installation time is approx 10min on a RPI version 3

When the installation is complete, it will run a validation check, please make sure that you have all green OK status.
Now you are able to connect UAVcast-Pro by typing the RPI ip in your web browser.

!!! tip
    If you are installing UAVcast-Pro version 1.1.0 or older, you need to place UAVcast-Pro_v1.x.x.tar in home/pi, otherwise it will not work. 
    Version 1.1.1 or later supports global install can be installed from anywhere

![](images/validation.jpg)