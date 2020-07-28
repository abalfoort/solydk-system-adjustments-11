applet.currentConfigGroup = ["Shortcuts"]
applet.writeConfig("global", "Alt+F1")

applet.currentConfigGroup = ["General"]
applet.writeConfig("customButtonImage", "file:///usr/share/pixmaps/solydk.xpm")
applet.writeConfig("favoriteApps", ["firefox-esr.desktop", "thunderbird.desktop", "libreoffice-startcenter.desktop", "synaptic.desktop", "systemsettings.desktop", "org.kde.konsole.desktop"])
//applet.writeConfig("hiddenApplications", "org.kde.ksshaskpass.desktop,libreoffice-draw.desktop,libreoffice-base.desktop,libreoffice-math.desktop,lximage-qt-screenshot.desktop,audacious-qt.desktop")
applet.writeConfig("useCustomButtonImage", true)

applet.reloadConfig();
