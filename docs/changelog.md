##v3.2.6

15.12.2019

* (Improvement) Installation validator.
* (Improvement) Fixed an bug with "check for new version" function.
* (Improvement) Fixed an issue when changing IP from Network page.


##v3.2.5

24.11.2019

* (NEW) Added option to search and connect WiFi networks.
* (Improvement) Changed max video resolution from 24fps to 30fps
* (REMOVED) Some VPN functionalities has been removed due to license conflict.

##v3.2.41

06.10.2019

* (NEW) Added button in application page for deleting database values. This will only delete application configurations and not license or user data. In some cases where users are updateing from a much older application version, this has to be performed. 
* (Improvement) Added warning if mismatch in database structure and user needs to perform a reset / erase. 


##v3.2.4

30.09.2019

* (NEW) Added new sub page **Network** to Raspberry page.
* (NEW) Now possible to change Raspberry Hostname
* (NEW) Now possible to change IP address for various Network interfaces within the application
* (NEW) Now possible to disable wifi adapter temporarily. (Will start during next boot)
* (NEW) Now possible to select default network adapter to reach the outer world (www), usefull when testing modem lateancy without disable WiFi ect.
* (NEW) Added modal notification when new app version is available.
* (Improvement) Added spinner when fetching license details.
* (Improvement) Improved application load time.
* (Improvement) Fixed bug with gstreamer custom pipeline.


##v3.2.3

24.09.2019

* (NEW) Added Mavlink validation test. Users can now test if RPI has proper connection with the Flight Controller within the application.
* (NEW) Each Camera type has its own configuration. Example, if user changes PiCam resolution, C920 or any other cam will not be affected.
* (NEW) Added Default values to each camera type. Added button for "Reset to default values"
* (NEW) Added option to delete logfile content.
* (Improvement) LED and status idicators. 
* (Improvement) Generall application styles, text and phrases. 
* (Improvement) VPN and validation response. 
* (Improvement) Modem information should now work for most huawei HiLink modems. (if default username and password is used for the dongle Web UI)
* (Improvement) Reduced UI and backend workload for Raspberry PiZero boards. Some low priority functionalities are disabled.
* (Improvement) Camera configuration parameters.
* (Improvement) In Browser HTTP live stream functionalities.


##v3.2.2

09.09.2019

* Fixed several issues with USB camera. 
* improved HTTP live streaming.


##v3.2.1

08.09.2019

* Now possible to stream UDP video to multiple destinations for PiCam and Logitech USB camera.


##v3.2.0

08.09.2019

* Added HTTP in-browser live camera viewer. This will allow multiple users to view video stream from the Vechicle.<br />
  **NOTE!** Only applicable for Pi Camera. Other cam may be added in the future.


##v3.1.6

22.08.2019

* Fixed bug with USB modem information.


##v3.1.5

19.08.2019

* Added USB modem information, signal idicator and connection status. Only applicable for Huawei HiLink modems.


##v3.1.4

15.06.2019

* Added Italian language

##v3.1.31

21.05.2019

* Improved autostart. Added database validation before start casting.

##v3.1.3

16.05.2019

* Improved modem LED function.
* Added more camera options such as Brightness, Contrast ++
* Added better overview of connected VPN networks.
* Added Dutch language translation.
* Fixed bug when Autostart with stick modem. 
* Improved embedded updater functionality.

NOTE! Due to the changes in embeded application updater, this update will hang at "Innstallation in progress". The installation will be successfully when the "RPI Disconnected" shows up for 5sec, then just refresh the page manually.  Innstallation will not be longer than maximum 10min.

##v3.1.2

02.04.2019

* Improved application performance. (PiZero)
* Improved read/write database performance (PiZero)
* Improved export log functionalities.
* Improved application status LED functionalities.
* Improved "RPI Disconnected" message.

##v3.1.1

01.04.2019

* Improved export log functionalities. Download logfiles from UAVcast page are much improved and contains allot more information about the application state.
* Improved application status LED.

##v3.1.0

30.03.2019

* New page "Raspberry LED". Now possible to control the onboard LED`s and attach them to various application states. 

    **Note!** If you are on PiZero you need to reboot after the update to have the LED working.
    
* Improved the sidebar menu. Active page is now highlighted.
* Fixed bug in Polish language
* Improved license verification check. 

##v3.0.8

23.03.2019

* Added Polish language
* Fixed an issue with Video LED in dashboard.

##v3.0.7

17.03.2019

* Added Russian language
* Fixed typos
* Improved license key validation.


##v3.0.6

15.03.2019

* Added REST API interface.

##v3.0.51

14.03.2019

* Added Spanish language

##v3.0.5

13.03.2019

* Updated Turkish language
* Fixed an issue were database could be damaged on unintentional shutdown.
* Fixed typos.
* Improved logging functionality.

##v3.0.41

07.03.2019

* Fixed bug with LED`s in dashboard

##v3.0.4

07.03.2019

* Added Turkish language
* Added Chinese language
* Added dropdown menu with a list of detected interfaces for hilink and stick modem. 
* Fixed an issue with notificaiton duration.

##v3.0.3

03.03.2019

* Added server messages pop up information. (Can be disabled from settings menu)
* Added warning if RPI is underpowered or throttled. Requested by Discord @Misant
* Fixed continues spinner on Validate button for license registration.

##v3.0.2

03.03.2019

* License manager bug fix

##v3.0.1

03.03.2019

* Added translation files. If someone want to translate into other languages, then please see here [https://github.com/UAVmatrix/uavcast-pro-translations](https://github.com/UAVmatrix/uavcast-pro-translations)
* Added option to select custom baud rate. Requested by Discord user @twallace
* Fixed an issue where camera (picam, C920, C615) did not start properly.
* Fixed an issue when Navio board was selected. "jq cant iterate over null"
* Fixed an issue with integrated updater tool. Unfortunately it`s not possible to upgrade application in version 3.0.0
* Improved license manager.

##v3.0.0

24.02.2019

This is a major release with many improvements.

* UAVcast-Pro is now tied to license key. **NOTE!** All users who have already bought UAVcast-Pro will get free licens keys with 4 allowed devices registered simultaneously for lifetime usage. Keys can be transfered to other hardware from the settings menu within the application! (License keys are tied to the hardware used) If more devices are needed, then contact uavmatrix@uavmatrix.com.
* UAVcast-Pro now uses database for all configuration and data storgage. Earlier this was stored in a plain file. This will make the application more robust for uppcomming changes such as user accounts ect.
* Added spinner and text if server (rpi) disconnects.
* Improved code in general.

##v2.0.7

07.02.2019

* Now possible to change the backend server port from the settings menu. Requested by Discord user *@Rj4* 
* Fixed an bug with Dashboard network stats. Reported by Discord user *@Misant*
* Improved add/delete GCS functionalities. [IssueTracker](https://gitlab.com/Sinamics/UAVcast-Pro/issues/4)
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
* Added **do-timestamp=1** to the default UDP video pipeline. This in collaboration with [rtpjitterbuffer](https://gstreamer.freedesktop.org/data/doc/gstreamer/head/gst-plugins-good/html/gst-plugins-good-plugins-rtpjitterbuffer.html) seems to solve the UDP (grey laggy overlay) issue some people has experienced when using VPN. Fix reported by *@Snick*

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

* Added installation progress-bar.
* Added validation check after installation completes.

##v1.0.3

* Dedicated server at google cloud, only for UAVcast-Pro users.
* Added option to stream video on TCP when using PiCam