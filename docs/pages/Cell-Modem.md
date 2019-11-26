!['Modem'](/images/pages/Cell-modem/modemPage.jpg)

!!! warning
    Do not enable modem in UAVcast if you are using **HiLink** modem. These modems uses embedded connection software.


Make sure you are using a supported modem
[https://www.freedesktop.org/wiki/Software/ModemManager/SupportedDevices/](https://www.freedesktop.org/wiki/Software/ModemManager/SupportedDevices/)

E3372**S** or E3372**H**, has proven to be a good modem for these types of application.

##Model
* Options: `Stick, HiLink`

Select if your modem is in stick or Hilink mode. Read the end character in the model name. Example: E3276<b>H</b> is a Hilink and E3276<b>S</b> is a stick modem.
Read more on HiLink and Stick modems here [Hardware/modem](https://docs.uavmatrix.com/hardware/#modem)

##Use Modem Manager
* Default value: `No`

UAVcast uses Network Manager to create the GSM connection provided by Modem Manager.
However, on some modems this wont work. This option force the connection to be established by Modem Manager only.
It's recommended to restart RPI if you change this option.

##Interface
* Default value:
    * RPI 2/3: Hilink:`eth1`, Stick:`wwan0`
    * RPI Pi0w: Hilink:`eth0`, Stick:`wwan0`

Set the Stick or Hilink modem interface name.<br />
LED will turn green if the interface has proper internet access.

##Access Point Name (APN)
* Default value: `internet`

This value is operator specific. If you don't know yours, then contact your cell operator and ask for a proper APN name.
Operators normally have several different APN names. You can find more information here [https://en.wikipedia.org/wiki/Access_Point_Name](https://en.wikipedia.org/wiki/Access_Point_Name)

##Modem Address##
* Default value: `cdc-wdm0`

This is the intenral address for your USB modem, and in most cases `cdc-wdm0`
However, some modems uses different address. If the above don't work, then you could try `ttyUSB0` or `ttyUSB1`

##Username
* Default value: `blank`

Most carriers don't require any username or password, but some might.
This is operator specific. Contact your cell operator and ask for username if you encounter any issues.

##Password
* Default value: `blank`

Most carriers don't require any username or password, but some might.
This is operator specific. Contact your cell operator and ask for Password if you encounter any issues.

##Pin
* Default value: `blank`

Your simcard Pin Code.  It's recommended to disable the pin to get faster connection on startup.

##ModemInformation
!['ModemInformation'](/images/pages/Cell-modem/modemInformation.jpg)
You will be able to see general information from your modem. This will only work for some Huawei modems.

##Validate Connection

When all parameters are correctly set, then press the connect button to test the connection.

!['Cell Modem Test'](/images/pages/Cell-Modem/cell.jpg)
