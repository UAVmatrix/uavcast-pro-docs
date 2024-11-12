---
slug: /setup-camera
title: Camera
authors: Bernt Christian Egeland
tags: []
sidebar_position: 2
---

# Camera Configuration

UAVcast-Pro uses the well-known media-handling library GStreamer to process the video pipeline for Ground Control Station communication.
The software supports PiCam, Logitech C615, and Logitech C920 cameras out of the box.


## Configuration Options

### Camera Type
- Available options: `PiCam HTTP`, `PiCam TCP/UDP`, `C615`, `C920`, `Custom Pipeline`

Each camera requires a different startup code (pipeline) to communicate and process the video source.
While UAVcast-Pro includes three pre-defined cameras in the dropdown menu, you can also insert a **custom pipeline** with the [necessary plugins](https://gstreamer.freedesktop.org/documentation/plugins.html) if your camera model isn't listed.

To test your setup without a physical camera, you can use this test pipeline in the custom field section (remember to change the GCS_ADDRESS):

```bash
gst-launch-1.0 videotestsrc ! x264enc ! video/x-h264, stream-format=byte-stream ! rtph264pay ! udpsink host=GCS_ADDRESS port=5600
```

For more pipeline examples, visit the [GStreamer Cheat Sheet](http://wiki.oz9aec.net/index.php/Gstreamer_cheat_sheet).

### Protocol Selection
- Default: `UDP`
- Available options: `UDP`, `TCP`, `HTTP`

UAVcast-Pro supports multiple protocols:
- UDP and TCP for all cameras
- HTTP live in-browser viewer (PiCam only)
- Multiple users can view live video using the HTTP protocol

### Ground Control Station (GCS) Destination
All destinations added in the Ground Control page will appear in the dropdown list.
Note: You can only select one video destination at a time.

### Video Resolution
- Default: `240p (320x240)`
- Available options:
  - 240p (320x240)
  - 480p (720x480)
  - 540p (960x540)
  - HD (1280x720)
  - Full HD (1920x1080)

:::tip
For low bandwidth connections, use a lower resolution to achieve smoother video playback.
:::

### Network Settings

#### Destination Port
- Default: `5600`

This port is compatible with Mission Planner and QGroundControl's default video-in-HUD settings.

#### Bitrate
- Default: `2000000`

:::tip
For low bandwidth connections, reduce the bitrate (e.g., to `800000`) for smoother video playback.
:::

#### Frames Per Second
- Default: `20`

:::tip
For low bandwidth connections, lower the FPS (e.g., to `8`) for smoother video playback.
:::

## Video Stream Reception

### Platform-Specific Setup

#### Ubuntu
Install required packages:

```bash
sudo apt-get update
sudo apt-get install gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-bad
```

#### Android
1. Install [QGroundControl](https://play.google.com/store/apps/details?id=org.mavlink.qgroundcontrol)
2. Find your device's IP address in preferences
3. Launch QGroundControl - it will automatically detect your vehicle
   - Default video port: 5600

#### macOS
Install via Homebrew:

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew install gstreamer gst-libav gst-plugins-ugly gst-plugins-base gst-plugins-bad gst-plugins-good
```

#### Windows

**Option 1: Ground Control Software**
- Install [Mission Planner](http://ardupilot.org/planner/docs/mission-planner-installation.html) or [QGroundControl](http://qgroundcontrol.com/downloads/)
- Both support UDP video on port 5600 by default

```bash
udpsrc port=5601 caps = "application/x-rtp, media=video, clock-rate=90000, encoding-name=H264, payload=96" ! rtpjitterbuffer ! rtph264depay ! avdec_h264 ! videoconvert ! video/x-raw,format=BGRA ! appsink name=outsink
```

Note: Use port 5601 to avoid conflicts with Mission Planner's default pipeline.


**Option 2: Manual GStreamer Setup**
1. Install [GStreamer for Windows](https://gstreamer.freedesktop.org/data/pkg/windows/1.4.5/gstreamer-1.0-x86_64-1.4.5.msi)
2. Navigate to the GStreamer bin folder (typically `C:\gstreamer\1.0\x86_64\bin`)

### Starting Video Stream

#### UDP Stream
Use this command for Windows/Ubuntu/macOS:

```bash
gst-launch-1.0 -v udpsrc port=5600 caps="application/x-rtp, media=(string)video, clock-rate=(int)90000, encoding-name=(string)H264" ! rtpjitterbuffer ! rtph264depay ! avdec_h264 ! videoconvert ! autovideosink sync=false
```

#### TCP Stream
1. Select TCP in UAVcast-Pro web interface
2. Enter your Raspberry Pi's IP address (use ZeroTier VPN IP if applicable)
3. Start the camera
4. Use this command (replace PI_IP with your Raspberry Pi's IP):

```bash
gst-launch-1.0 -v tcpclientsrc host=PI_IP port=5600 ! gdpdepay ! rtph264depay ! avdec_h264 ! videoconvert ! autovideosink sync=false
```

### Windows Startup Scripts
For convenience, you can create startup scripts for automatic video streaming:
- [UDP Start Script](https://drive.google.com/uc?authuser=0&id=1SjDT5Tm-N0wExwBla9sG1aPeW5MS1P4b&export=download)
- [TCP Start Script](https://drive.google.com/uc?authuser=0&id=1JzHNvtGJNaPBxBIfDmD0OI1O_DT08CQ7&export=download)

To modify these scripts:
1. Right-click and select 'Edit'
2. Adjust port numbers or GStreamer paths as needed