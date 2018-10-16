#Cell Modem

!!! warning
    Dont enable modem in UAVcast if you are using **HiLink** modem. These modems uses embedded connection software.


Make sure you are using a supported modem 
[https://www.freedesktop.org/wiki/Software/ModemManager/SupportedDevices/](https://www.freedesktop.org/wiki/Software/ModemManager/SupportedDevices/)

E3372**S** or E3372**H**, has proven to be a good modem for these types of application.

##Model
* Options: `Stick, HiLink`

Select if your modem is in stick or hilink mode. Read the end character in the model name. Example: E3276<b>H</b> is a hilink and E3276<b>S</b> is a stick modem.
Read more on HiLink and Stick modems here [Hardware/modem](https://docs.uavmatrix.com/hardware/#modem)

##Access Point Name (APN)
* Default value: `internet`

This value is operator specific. If you dont know yours, then contact your cell operator and ask for a proper APN name.
Operators normally have several diffrent APN names. You can find more information here [https://en.wikipedia.org/wiki/Access_Point_Name](https://en.wikipedia.org/wiki/Access_Point_Name)

##Modem Address##
* Default value: `cdc-wdm0`

This is the interal address for your USB modem, and in most cases `cdc-wdm0`
However, some modems uses dirrent address. If the above dont work, then you could try `ttyUSB0` or `ttyUSB1`

##Username
* Default value: `blank`

Most carriers dont require any username or password, but some might.
This is operator specific. Contact your cell operator and ask for username if you encounter any issues.

##Password
* Default value: `blank`

Most carriers dont require any username or password, but some might.
This is operator specific. Contact your cell operator and ask for Password if you encounter any issues.

##Pin
* Default value: `blank`

Your simcard Pin Code.  Its recommended to disbale the pin to get faster conneciton on startup.

##Validate Connection

When all parameteres are correctly set, then press the connect button to test the connection.

!['Cell Modem Test'](/images/pages/Cell-Modem/cell.jpg)
