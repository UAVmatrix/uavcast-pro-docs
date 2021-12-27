# Rest API

UAVcast-Pro has an integrated RESTfull API activated by default from **version 3.0.6**. This could be useful when users want to interact or fetch information from 3rd party application.

###Available routes

!!! info

    Routes should be added just after the RPI address.
    example: `http://raspberrypi/api/castStatus`

- GET

  - /api/castStatus
  - /api/piStatus

- POST
  - /api/{json object}

##UAVcast casting status

- route `/api/castStatus`
- type: GET

This GET request will return casting status from UAVcast. Basically all the LED`s shown in the dashboard.

**example**

```js
{
    "castStatus": {
        "mavproxy": false,
        "inadyn": false,
        "gstreamer": false,
        "modem": false,
        "systemdActive": false,
        "systemdEnable": false,
        "vpn": false,
        "undervoltage": false,
        "throttled": false
    }
}
```

##Raspberry information

- route `/api/piStatus`
- type: GET

This GET request will return Raspberry PI information.

**example**

```js
{
    "piStatus": {
        "time": {
            "current": 1552594820222,
            "uptime": 79975,
            "timezone": "GMT+0000",
            "timezoneName": "Greenwich Mean Time"
        },
        "raspModel": "Raspberry Pi 3 Model B Rev 1.2",
        "cpu": {
            "manufacturer": "ARMv7",
            "brand": "Processor rev 4 (v7l)",
            "vendor": "",
            "family": "",
            "model": "4",
            "stepping": "",
            "revision": "",
            "voltage": "",
            "speed": "1.20",
            "speedmin": "0.60",
            "speedmax": "1.20",
            "cores": 4,
            "physicalCores": 4,
            "processors": 1,
            "socket": "",
            "cache": {
                "l1d": "",
                "l1i": "",
                "l2": "",
                "l3": ""
            }
        },
        "fsSize": [
            {
                "fs": "/dev/root",
                "type": "ext4",
                "size": 15686586368,
                "used": 6556151808,
                "use": 41.79,
                "mount": "/"
            },
            {
                "fs": "/dev/mmcblk0p1",
                "type": "vfat",
                "size": 45281280,
                "used": 23083008,
                "use": 50.98,
                "mount": "/boot"
            }
        ],
        "memory": {
            "total": 918188032,
            "free": 184897536,
            "used": 733290496,
            "active": 484257792,
            "available": 492445696,
            "buffcache": 249032704,
            "swaptotal": 104853504,
            "swapused": 1855488,
            "swapfree": 68677632
        },
        "osInfo": {
            "platform": "linux",
            "distro": "Raspbian GNU/Linux",
            "release": "9",
            "codename": "",
            "kernel": "4.14.79-v7+",
            "arch": "arm",
            "hostname": "raspberrypi",
            "logofile": "raspbian",
            "serial": "",
            "build": ""
        },
        "cpuTemperature": {
            "main": 46.16,
            "cores": [],
            "max": 46.16
        },
        "lateancy": 15.546,
        "network": [
            {
                "iface": "eth0",
                "operstate": "up",
                "rx": 125885225,
                "tx": 493692274,
                "rx_sec": 5819.369225868111,
                "tx_sec": 5121.6948072634605,
                "ms": 6278
            }
        ]
    }
}
```

##Actions

- route `/api/startCasting/{json object}`
- type: POST

Users can start and stop UAVcast from 3rd party application, this actions is eqvalent to press "Start Casting" or "Stop Casting" in the dashboard.
To interact with UAVcast actions, send a POST request in `JSON (application/json)` format with the following **key:value** pair:

##Start UAVcast

```js
{
    "action":"start"
}
```

##Stop UAVcast

```js
{
    "action":"stop"
}
```

The above commands will return the following JSON response

```js
{
    "message": "Starting UAVcast",
    "initiated": true (false if command fails)
}
```
