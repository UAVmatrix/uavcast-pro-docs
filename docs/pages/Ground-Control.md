!['Ground Control'](/site/images/pages/Ground-Control/ground-control.jpg)

Add Telemetry and video destination end-points. You can add as many end points you want.

!!! info
    Destinations only applies if you have selected UDP protocol for telemetry or video.  

##Enable / Disable switch##
You can choose which end-points should be enabled. Convenient if you want to save a destination for later usage.

##Name##
Set a unique name for you destination.

##UDP Host##
Destination (GCS) IP or DNS name. (UAVcast-Pro will stream telemetry or video towards this end-point)

##Telem Port##
* Options: `0 - 65536`

Port you want to use for telemetry. Default is 14550.

##Video Port##
* Options: `0 - 65536`

Port you want to use for video. Default is 5600. Mission planner and QGroundControl supports video on port 5600 by default.

##Enable / Disable Telemetry switch##
Enable or disable telemetry for each end-point.

##Enable / Disable Video switch##
Enable or disable video for each end-point. Only one video destination allowed.
