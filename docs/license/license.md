# License key

All users who has bought UAVcast-Pro will be issued an license key. This key needs to be activated in the UAVacst-Pro webinterface before usage.
There are several properties attached to each key.

!['License'](/images/developers/license.jpg)



#### License Status

* `Activated` => License key has been successfully registered and activated on the current device.
* `Expired` => Current date > Expired date.  


#### Allowed Devices
This value refers to the maximum allowed devices (RPI) registerd simuntanusly.

#### Remainging Devices
Remaining activation slots. (Allowed devices - Registered devices).

Each registered devices will have a `unregister` link after its name. Here you can delete or unregister any device you want to free up available slots.
