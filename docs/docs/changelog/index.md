---
slug: /changelog
title: Changelog
authors: Bernt Christian Egeland
tags: []
sidebar_position: 40
---
## v6.0.2
- Enhanced MAVLink system ID auto-detection from flight controller for improved connectivity.

## v6.0.1
- Improved uavcast installer, it sometimes failed on low resource devices like Raspberry Pi Zero 2 W.
- Improved UART config for pi zero 2 W.

## v6.0.0
- This is a major release with many changes for performance and stability.
  Backend has been rewritten in Rust for better performance and lower resource usage. This will improve the user experience on low end devices like Raspberry Pi Zero. The total package size has been reduced by 70%.
- New Flight Map page.
- New Mission Planner page for creating / editing missions directly from the web interface.
- New Mavlink Inspector page for viewing raw mavlink messages.
- New Radio page for viewing configured RC channels.
- New network priority settings to prioritize between WiFi and Modem connections. This will make it easier to test Uavcast over LTE while having a WiFi
connection.
- New User Management page for adding/removing users and setting permissions.
- Better camera support with improved stability and performance. Uavcast now uses the mediamtx library for internal camera handling and streaming.
- New overhauled live preview, uavcast using MediaMtx for local preview in camera and FlightMap page.


