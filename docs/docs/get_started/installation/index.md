---
slug: /installation
title: Installation
authors: Bernt Christian Egeland
tags: []
sidebar_position: 2
---

# Installation

:::warning Critical Requirements
UAVcast-Pro v6 **ONLY** supports the latest Raspberry Pi OS 64-bit operating system. Earlier versions and 32-bit systems are NOT compatible.
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

The installation script will:
1. Detect your Raspberry Pi model and OS version
2. Install required system dependencies
3. Download and install UAVcast-Pro v6
4. Configure systemd services
5. Set up the database
6. Start the web interface

:::info Installation Time
Installation typically takes 5-10 minutes depending on your internet connection and Raspberry Pi model.
:::

### Post-Installation Steps

1. The installer will validate all components
2. Once complete, you'll see a success message with access information
3. Access the web interface using:
   - Your Raspberry Pi's IP address: `http://<your-pi-ip>/`
   - Default hostname: `http://raspberrypi.local/`
   - Default port: `80` (configurable later)


5. Continue with the [Quick Start Tutorial](/docs/6.x/quick-start)

### System Requirements

**Hardware:**
- Raspberry Pi Zero 2W, 3, 4, 5, or newer
- Minimum 2GB SD card space (8GB+ recommended)
- Power supply (5V/2.5A minimum, 5V/3A recommended)

**Software:**
- Raspberry Pi OS 64-bit (latest version)
- Active internet connection during installation

**Supported Accessories:**
- MAVLink-compatible flight controllers
- Raspberry Pi Camera or USB cameras
- 4G/LTE USB modems
- Network interfaces (Ethernet, WiFi)

### Finding Your Raspberry Pi IP Address

If you don't know your Raspberry Pi's IP address:

**Method 1: Check your router**
- Log into your router's admin panel
- Look for connected devices
- Find "raspberrypi" in the device list

**Method 2: Use hostname**
- Try accessing `http://raspberrypi.local/`
- Works on most networks with mDNS support

**Method 3: Connect a monitor**
- Connect HDMI monitor and keyboard
- Log in and run: `hostname -I`

**Method 4: Network scanner**
- Use a network scanner app (e.g., Fing, Advanced IP Scanner)
- Scan your network for Raspberry Pi devices

### Upgrading from Previous Versions

:::danger Important Database Changes
UAVcast-Pro v6 uses a completely new database structure and architecture. Data and configurations from version 4.x or 5.x cannot be imported.
:::

**If you're upgrading from UAVcast-Pro 4.x or 5.x:**

1. **Backup your current settings:**
   - Take screenshots of all configuration pages
   - Document your GCS destinations
   - Note camera and modem settings
   - Save any custom configurations

2. **Prepare for fresh installation:**
   - Install the latest Raspberry Pi OS 64-bit
   - Format your SD card (backup any important data first)

3. **Perform fresh installation:**
   - Run the installation command above
   - Follow the Quick Start guide
   - Manually reconfigure your settings

4. **What's different in v6:**
   - Completely redesigned UI
   - New user authentication system
   - Enhanced multi-user support
   - Improved service management
   - New features (Mission Planner, HUD, etc.)

### Troubleshooting Installation

**Installation fails with "unsupported OS" error:**
- Verify you're using Raspberry Pi OS 64-bit
- Check: `uname -m` should show `aarch64`
- If it shows `armv7l`, you're on 32-bit (not supported)

**Installation hangs or times out:**
- Check your internet connection
- Try running again (installation is idempotent)
- Check available disk space: `df -h`

**Cannot access web interface after installation:**
- Verify UAVcast-Pro service is running: `sudo systemctl status uavcast-web`
- Check for port conflicts (port 80 in use)
- Try accessing via IP address instead of hostname
- Check firewall settings

**Need help?**
- Visit our [community forum](https://discuss.uavmatrix.com)
- Join our [Discord](https://discord.gg/xwqMTXh)
- Contact support: support@uavmatrix.com

