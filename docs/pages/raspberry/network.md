!['Raspberry Network'](../../images/pages/raspberry/network/network.jpg)
Take full control over your raspberry pi network configuration. 

##Hostname
Set your prefered raspberry hostname. Default is `raspberrypi` 
You can access your raspberry using the hostname instead of ip address. 

Example, try open your browser and type `raspberrypi/` as the URL

##Network Route
Specify the default network route from the dropdown menu. Raspberry pi will try to use the selected device for accessing outer world. 
Only physical devices can be selected, not VPN or other bridged interface.
Raspberry will still be able to use other interfaces, but priority the one you select.

##WiFi network
You can search and connect wifi network from within UAVcast-Pro. 

##Interfaces
Will populate all interfaces and show the current configuration, such as IP, Netmask, Gateway and if you want to enable/disable IPv6.
Box with green outline is your default connection to the outer world.
Do not change any values while in flight, this might disconnect you from the vehicle.