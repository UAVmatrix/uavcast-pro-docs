---
slug: /changelog
title: Changelog
authors: Bernt Christian Egeland
tags: []
sidebar_position: 40
---
## v6.0.0
- This is a major release with many changes for performance and stability.
  Backend has been rewritten in Rust for better performance and lower resource usage. This will improve the user experience on low end devices like Raspberry Pi Zero. The total package size has been reduced by 70%.
- New Flight Map page ( similar to UAVcast v4 ).
- New Mission Planner page for creating / editing missions directly from the web interface.
- New network priority settings to prioritize between WiFi and Modem connections. This will make it easier to test Uavcast over LTE while having a WiFi connection.
- Better camera support with improved stability and performance. Uavcast now uses the mediamtx library for internal camera handling and streaming.
- New overhauled live preview, uavcast using MediaMtx for local preview in camera and FlightMap page.

## v5.0.8
- Added support for Debian 13 Trixie.

## v5.0.7
- Fixed bug with camera preview not showing on some devices.
- Improved picamera quality and performance.
- New keyframe interval setting for better video quality in some cases.

## v5.0.6
- Fixed bug when streaming to multiple clients.
- Added explicit format specifications with --libav-format h264 and --libav-video-codec h264
- Reduced keyframe interval from 15 to 1 frame for lower latency

## v5.0.5
- Fixed libcamera version conflicts. 
- Minor installer improvements.

## v5.0.4
- Fixed installer crash when using C locale (LANG=C) environment by implementing ASCII fallback for progress bar characters.

## v5.0.3
- Buxfix for uart connection on PiZero 2W

## v5.0.2
- Added support for camera custom pipeline / videotestsrc
- Added option to disable camera preview
- Improve camera handling

## v5.0.1
- Added Tailscale VPN support
- Improved VPN connection handling

## v5.0.0
First release of UAVcast-Pro v5.
Main features:
- New overhauled web interface
- Better camera support
- Enhanced mavlink support
- Supports 64bit Raspberry Pi OS
- Overall performance improvements
