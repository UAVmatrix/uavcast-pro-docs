UAVcast currently supports Zerotier and OpenVPN without the need for any additional software running on the Raspberry Pi.

VPN page Overview
!['VPN'](/images/pages/vpn/overview.jpg)

##Zerotier
Zerotier establishes a direct connection between the connected devices, even if they are behind a NAT.

!!! note 
    Depending on your cellular providers NAT policy - if you are having issues with video streaming over UDP, try using a TCP for your connections or try OpenVPN.

<iframe width="854" height="480" src="https://www.youtube.com/embed/p3DZxDkI5M0?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##OpenVPN

OpenVPN connects devices togheter using server in-the-middle principle.
You can setup a OpenVPN server or find a provider that can host it for you.

For more information about setting up OpenVPN, please see the [Open VPN Wiki](https://community.openvpn.net/openvpn/wiki).


