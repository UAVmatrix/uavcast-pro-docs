---
slug: /setup-vpn
title: Virtual Private Network (VPN)
authors: Bernt Christian Egeland
tags: []
sidebar_position: 4
---

## Abbreviations
- GCS: Ground Control Station
- VPN: Virtual Private Network
- UAV: Unmanned Aerial Vehicle


## Introduction
UAVcast Pro supports both ZeroTier and Tailscale VPNs, enabling a reliable connection between your drone and ground control station (GCS) without requiring port forwarding or a public IP address.

UAVcast uses the UDP protocol to stream video and telemetry data, which can be challenging to manage behind NAT or firewall restrictions. By connecting your drone and GCS to the same VPN network, video and telemetry data can securely pass over the VPN, bypassing these issues.

## ZeroTier Setup
When purchasing UAVcast Pro, you receive login credentials for [uavnet.uavmatrix.com](https://uavnet.uavmatrix.com), a ZeroTier controller for managing your network.

1. Go to [uavnet.uavmatrix.com](https://uavnet.uavmatrix.com) and log in with the provided credentials.
2. Create a new network and assign it a name.
3. Add your devices (drone and GCS) to this network.
   - In UAVcast Pro, navigate to the VPN page and enter the network ID from step 2. Save the settings, and you will see details about the network and connected devices.
   - On the GCS, install the ZeroTier client and join the network you created in step 2 using the same network ID.
4. In the ZeroTier control panel at uavnet.uavmatrix.com, verify your devices are connected and ensure the “Auth” checkbox is checked for each device you want in the network.
5. Copy the managed IP address of the GCS and paste it into the Ground Control Station destination field in UAVcast Pro.

You should now have a VPN connection between your drone and GCS.

## Tailscale Setup
Tailscale offers an easy-to-set-up VPN service. UAVcast Pro supports Tailscale as an alternative to ZeroTier.

1. Go to [tailscale.com](https://tailscale.com) and create an account.
2. In the UAVcast Pro VPN page, select Tailscale. You can authenticate using either web login or a pre-auth key.
   - If using web login, you will be redirected to Tailscale’s site to log in and authorize UAVcast Pro to access your Tailscale account.
3. On the GCS, install the Tailscale client and log in with the same account you used in step 1. You should now see the GCS listed in your Tailscale control panel. Copy the IP address of the GCS and paste it into the Ground Control Station destination field in UAVcast Pro.
