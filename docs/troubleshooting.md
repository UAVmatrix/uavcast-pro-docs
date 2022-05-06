
#FAQ

##Do i need a LTE modem?
No. uavcast does not care if you use LTE, Wifi or Ethernet cable. As long as the application is able to communicate with the Ground Control station over TCP/IP stack, it will work.

##Not able to open web interface

- Type `docker ps | grep uavcast` and make sure the container is running. You can also get logs by typing `docker logs uavcast`.
- Create new Github Issue with the output from above. 

##Where can i download latest version?

- See the [installation](/installation/#uavcast-installation) instructions


##Installation fails.

- Create new github issue with the error messages recieved.

##Im not able to receive video or telemetry

- Make sure you have added video and telemetry port to your firewall rules.
- If you have changed the default ports for video 5600 or telemetry 14550 you need to change this on your ground control station device as well.
- Connect your FC to your computer and connect with Mission Planner. Goto all paramters list and search for the connection port used to Raspberry Pi. Serial0 (USB). Serial1 (Telem1 port), Serial2 (Telem2 port). Take note of the Mavlink Protocol (1 or 2) used, as well as the Baud rate. Make sure you use the same settings in uavcast Flight Controller page. 

##No Mavlink Heartbeats received in uavcast

- Make sure the configuration in uavcast Flight Controller page reflects the settings in the Flight Controller. You can see the FC setttings using Mission Planner => All parameters list => search for Serial0 (USB) or Serial1 (Telem1 port) or Serial2 (Telem2)
- Make sure you are using a good USB cable with large cross-sectional area to minimize the voltage drop supplied to Fligth Controller.
- If you are connected by GPIO pins, make sure you have connected the **ground, rx, tx** wires correctly.
- Make sure you use default configuration in Flight Controller (Ardupilot, Px4) for UART / Telemetry ports.

##Cant receive video, but telemetry works

- [PiCam] Please make sure you have enabled PiCam in the Raspberry config **raspi-config**
- [Logitech cams] Check logfiles and see if there is any errors. If you see **Internal data stream error** its most likey a unsupported resoultion or fps. Try play with those settings.

##Other Application issues.

- If you experience any issues with uavcast, please Navigate to the Logs page and
  press "Download" button. This will download a zip file containing all logs related to uavcast and its running components.
  Log content will only contain application data and not user data.

      Create a new github issue [https://github.com/sinamics/uavcast/issues](https://github.com/sinamics/uavcast/issues) and attach the zip file.

      ![logfiles](images/pages/troubleshooting/logfiles-download.jpg)

You can at any time contact us at **uavmatrix@uavmatrix.com** or chat privately on our Discord server [https://discord.gg/xwqMTXh](https://discord.gg/xwqMTXh) or use our forum section
[https://discuss.uavmatrix.com](https://discuss.uavmatrix.com)