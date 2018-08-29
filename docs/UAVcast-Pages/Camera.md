UAVcast-Pro uses the well known media-handling library gstreamer to proccess the video pipeline towards the Ground Control Station.
It supports PiCam, Logitech C615, Logitech C920 out of the box. 

##Camera Type
* Options: `PiCam, C615, C920, Custom Pipeline`

Each camera uses diffrent start code, also known as pipeline to be able to communicate or proccess the video source.
UAVcast-Pro has three diffrent cameras pre-defined from the dropdown menu. However, if your camera is not listed then you can insert a **custom pipline** with the [needed plugins](https://gstreamer.freedesktop.org/documentation/plugins.html) to match your current camera model and type. 

You can also send a test video by inserting the pipeline below to UAVcast-Pro custom field section, nice way to check if everyting is working without the camera itself.

Remember to change the Destination address:  
`gst-launch-1.0 videotestsrc ! x264enc ! video/x-h264, stream-format=byte-stream ! rtph264pay ! udpsink host=GCS_ADDRESS port=5600`

Take a look at this page for pipeline examples
[http://wiki.oz9aec.net/index.php/Gstreamer_cheat_sheet](http://wiki.oz9aec.net/index.php/Gstreamer_cheat_sheet)


##UDP or TCP protocol
* Default value: `UDP`

UAVcast-Pro supports UDP and TCP for PiCam, other cameras only support UDP at the moment.

##GCS Destination

All destinations you have added in [Ground Control](Ground-Control.md) page will be shown in the dropdown list.
Its only possible to select one destination for video.

##Video resolution
* Default value: `240p (320x240)`
* Options: `240p (320x240), 480p (720x480), 540p (960x540), HD (1280x720), Full HD (1920x1080)`

!!! tip
    If your broadband connection has a low transfer speed, then lower the resoultion to get smooth video.

##Destination Port
* Default value: `5600`

Change the Video network port. **Mission Planner** and **QGroundControl** supports video in HUD by default on port 5600.

##Bitrate
* Default value: `2000000`
 
Change the Bitrate value.
!!! tip
    If your broadband connection has a low transfer speed, then lower the Bitrate to get smooth video.

    Example: `800000`

##Frames Pr.second
* Default value: `20`

Change the FPS value.
!!! tip
    If your broadband connection has a low transfer speed, then lower the FPS to get smooth video.

    Example: `8`

##Start Video Stream

To verify if camera will start propely, simply press the start button.
If any issues, press the Log button to reveal any problems.

![Start and Stop](/images/pages/Camera/startstop.jpg)

##Receive video (Windows / Mac / Linux / Android)

### Ubuntu

If you're going to stream to a Ubuntu PC, install the some packages locally beforehand.
```bash
user@ubuntu: ~ $ sudo apt-get update
user@ubuntu: ~ $ sudo apt-get install gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-bad
```

### Android

* Download and install [QGroundControl](https://play.google.com/store/apps/details?id=org.mavlink.qgroundcontrol) for Android.

* Find IP address of your device in preferences. You'll need it in order to connect to the phone from your RPi.

* Run QGroundControl and it will automatically detect your vehicle.


*Note: default port for video in QGC application is 5600*

Here's the app in action
![capture](/images/pages/camera/qgc.jpg)

### Mac OS X

The simplest way is to use brew. To install it run the following in your Mac terminal:

```bash
user@mac: ~ $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
user@mac: ~ $ brew update
user@mac: ~ $ brew install gstreamer gst-libav gst-plugins-ugly gst-plugins-base gst-plugins-bad gst-plugins-good
```

### Windows
**Solution #1**

Download and install [Mission Planner](http://ardupilot.org/planner/docs/mission-planner-installation.html) or [QGroundControl](http://qgroundcontrol.com/downloads/)
both applications supports video by default on port 5600.


**Solution #2**
Download and install [gstreamer for Windows](http://gstreamer.freedesktop.org/data/pkg/windows/1.4.5/gstreamer-1.0-x86_64-1.4.5.msi).

For Ubuntu/Mac OS X:
```bash
user@mac ~ $ gst-launch-1.0 -v udpsrc port=5600 caps='application/x-rtp, media=(string)video, clock-rate=(int)90000, encoding-name=(string)H264' ! rtph264depay ! avdec_h264 ! videoconvert ! autovideosink sync=f
```
For Windows:

```bash
gst-launch-1.0 -v udpsrc port=5600 caps="application/x-rtp, media=(string)video, clock-rate=(int)90000, encoding-name=(string)H264" ! rtph264depay ! avdec_h264 ! videoconvert ! autovideosink sync=f
```
From now on, your computer will be waiting for the input stream from Raspberry PI. Once it gets a stream, you'll see the real-time video from your drone.