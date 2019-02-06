

##v2.0.7

06.02.2019

* Now possible to change the backend server port from the settings menu. Requested by Discord user *@Rj4*
* Fixed an bug with Dashboard network stats. Reported by Discord user *@Misant*
* Fixed typos. Reported by Discord user *@Misant*

##v2.0.61

01.01.2019

* Fixed minor bugs and code cleaning.


##v2.0.6

01.01.2019

* Added Navio Launch option. (-B, -E, -F) [Read more at Emlid.com](https://docs.emlid.com/navio2/common/ardupilot/installation-and-running/#specifying-launching-options)
* Improved Navio startup sequence.
* Now possible to add 16 UDP destionations for Navio.
* Fixed an issue with setting static IP for eth0 interface in /etc/dhcpcd.conf => Issue reported by *@Abraxas*
* Fixed an issue when using video custom commands. => Issue reported by *@Ed209*
* Added **do-timestamp=1** to the default UDP video pipeline. This in collaboration with [rtpjitterbuffer](https://gstreamer.freedesktop.org/data/doc/gstreamer/head/gst-plugins-good/html/gst-plugins-good-plugins-rtpjitterbuffer.html) seems to solve the UDP (grey laggy overlay) issue some people has experienced when using Zerotier VPN. Fix reported by *@Snick*

Receiver / GCS Example: 

`gst-launch-1.0 -v udpsrc port=5600 caps="application/x-rtp, media=(string)video, clock-rate=(int)90000, encoding-name=(string)H264" ! rtpjitterbuffer ! rtph264depay ! avdec_h264 ! videoconvert ! autovideosink sync=false` 


##v2.0.5

16.12.2018

* Added network stats overview on dasboard. 
* Improved dashboard styling.
* Added Dark theme option.
* New Application options page to the main menu.

##v2.0.41

19.11.2018

* Fixed minor styling issue that was introduced in version v2.0.4

##v2.0.4

18.11.2018

* Telemetry or video will restart / start automatically when users toggle the switch in Ground Control Page. (Feature request from Discord user **smee56**)
* General code imporvement.
* Added more tools Raspberry diagnostic page.
* Changed Toaster layout. (notification message)

##v2.0.3

05.11.2018

* Minor changes.  Updated text in modem section. Removed unused tags and code.

##v2.0.2

03.11.2018

* Added more options to establish modem connetion. Users can choose between Modem Manager or Network Manager to manage the connetion.
  Some users experienced issues with certains modems.
* Fixed issue where Application page was not accessable. This bug was implemented in Version 2.0.1.

##v2.0.1

18.10.2018

* Fixed an issue with loading Openvpn configuration file.

##v2.0.0

11.10.2018

* Added support for Navio+ and Navio2

##v1.1.8

08.10.2018

* Fixed anbug where Logitech C920 & C915 did not work.  (Bug arrived in v1.1.7) 
* GCS page styling and layout improvement.
* Now possible to rollback to previous UAVcast-Pro versions

##v1.1.7

07.10.2018

* Users can now select between Hilink or stick modem. 
* General styling improvement.

###Improved Ground Control management. 
* You can now give destinations a unique name. 
* Options to disable or enable a destination. Convenient if you want to save a destination for later usage.
* You can choose which destination to send video and telem to by simple switch.
* Added video port. (Moved from video page)

##v1.1.6

30.09.2018

* Fixed an issue when downloading logfiles from UAVcast Diagnostic page
* Added more documentation
* Improved styling

##v1.1.5

26.09.2018

* Fixed an issue when uploading openvpn (ovpn) file.
* Fixed an issue where auto-update function hangs on "restarting server"

##v1.1.4

04.09.2018

* Added gstreamer Vertical Flip and Horizontal Flip options. (PiCam Only)

##v1.1.3

01.09.2018

* Fixed an bug where TCP Telemetry would not start if USB was selected.
* Added "Check for update" functionality, and self installation feature.

##v1.1.2

22.08.2018

* Updated Header link for Documentation and Community

##v1.1.1

20/08/2018

* UAVcast-Pro and Basic now supports global installation. /home/pi is not required anymore.

##v1.1.0

15.08.2018

This version is a total rebuild of the web server installation. Server is now pre-bundled within the package and will not require any dependencies to be downloaded.

* Improved Telemetry startup, both UDP and TCP.
* Improved functionality when switching between UDP and TCP telemetry.
* Improved camera startup, both UDP and TCP
* Fixed an issue where telemetry would`t autostart on TCP
* Fixed an issue where status LED was not updated when using OpenVpn
* Added functionalities to run the installer with -f option, this will force the install if any issues.
* Added more items to the final installation validation of UAVcast-Pro.
* UAVcast-Pro has now web server pre-bundled, this will reduce the installation time by approx 50%, and there is no dependencies that needs to be installed.

##v1.0.5

* Fixed an issue where Raspberry Pi disconnected during installation if you were connected by WiFi
* Fixed an small bug in the camera section if C920 or C615 was chosen.

##v1.0.4

* Zerotier released new 1.2.12 installation binary link today. Updated with new link.
* Added installation progress-bar.
* Added validation check after installation completes.

##v1.0.3

* Upgraded Zerotier VPN client from version 1.2.8 => 1.2.12 Added new
* Dedicated server at google cloud, only for UAVcast-Pro users.
* Added option to stream video on TCP when using PiCam