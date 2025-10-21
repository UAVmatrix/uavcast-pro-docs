---
slug: /installation
title: Installation
authors: Bernt Christian Egeland
tags: []
sidebar_position: 2
---

# Installation

:::warning Critical Requirements
UAVcast-Pro v5 **ONLY** supports the latest Raspberry Pi OS 64-bit operating system. Earlier versions and 32-bit systems are NOT compatible.
:::

## Operating System Requirements

You must use:
- Latest Raspberry Pi OS (64-bit) 
- Download from: [Raspberry Pi OS Downloads](https://www.raspberrypi.com/software/operating-systems/)

## Operating System Installation

1. Download the latest Raspberry Pi OS 64-bit from the official website
2. Install using Raspberry Pi Imager (recommended) or your preferred imaging tool
3. Complete the initial OS setup and ensure your system is up to date:

```bash
sudo apt update
sudo apt upgrade
```

## UAVcast-Pro Installation

Install UAVcast-Pro by running this command in your terminal:

```bash
curl -s http://install.uavmatrix.com | sudo bash
```

### Post-Installation Steps

1. The installer will validate all components
2. Access the web interface using:
   - Your Raspberry Pi's IP address: `http://<your-pi-ip>/`
   - Default hostname: [http://raspberrypi.local](http://raspberrypi/)

### System Requirements

- Raspberry Pi Zero 2w, 3, 4, 5, or newer
- 64-bit capable Raspberry Pi hardware
- Active internet connection during installation

### Upgrading from Previous Versions

:::danger Important Database Changes
UAVcast-Pro v5 uses a completely new database structure. Data and configurations from version 4.x cannot be imported or used in version 5.
:::

If you're using UAVcast-Pro 4.x:
1. Document your current settings (take screenshots or notes)
2. Install the latest Raspberry Pi OS 64-bit
3. Perform a fresh installation of UAVcast-Pro v5
4. Manually reconfigure your settings in v5

For additional support, [contact uavmatrix support](https://uavmatrix.com/contact-us).
```