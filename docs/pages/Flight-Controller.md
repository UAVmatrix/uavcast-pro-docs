!['Flight Controller Selection'](/images/pages/Flight-Controller/fc-type.jpg)

Configure the connection between Raspberry and the Flight Controller.

##Controller Type
* Default value: `None`
* Options: `Ardupilot, Navio`

Choose the board you want to use. for Pixhawk, APM, Cube or other Ardupilot variants select Ardupilot.


##Vehicle (Navio Only)
* Options:`ArduPlane, ArduRover, ArduCopter `

Select the binary you want use.


##Connection Method

* GPIO

!['Gpio'](/images/pages/Flight-Controller/rpi.jpg)

* USB

!['Usb'](/images/pages/Flight-Controller/rpi-usb.jpg)

!['Flight Controller Connection Method'](/images/pages/Flight-Controller/fcmethod.png)

##Baud rate
* Default value: `57600`
* Options: `9600, 57600, 115200`

Select a baud rate you want to use for the telemetry stream.


##Protocol
* Default value: `TCP`
* Options: `TCP, UDP`

Select the protocol you want to use for the telemetry stream.

##Validate Mavlink Connection
Check if raspberry Pi receives mavlink messages from your FlightController. This is usefull when troubleshooting. UAVcast will check if valid HEARTBEAT message is received on the selected connection method above.
Its recommended to run this test after a reboot

###Success
!['Flight Controller Connection Check'](/images/pages/Flight-Controller/fc_check_success.jpg)

###Failed
!['Flight Controller Connection Check'](/images/pages/Flight-Controller/fc_check_failed.jpg)