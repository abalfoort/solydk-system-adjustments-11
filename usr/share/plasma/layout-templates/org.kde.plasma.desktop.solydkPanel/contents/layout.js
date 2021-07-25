// https://userbase.kde.org/KDE_System_Administration/PlasmaDesktopScripting

var panel = new Panel
var panelScreen = panel.screen
var freeEdges = {"bottom": true, "top": true, "left": true, "right": true}

for (i = 0; i < panelIds.length; ++i) {
    var tmpPanel = panelById(panelIds[i])
    if (tmpPanel.screen == panelScreen) {
        // Ignore the new panel
        if (tmpPanel.id != panel.id) {
            freeEdges[tmpPanel.location] = false;
        }
    }
}

if (freeEdges["bottom"] == true) {
    panel.location = "bottom";
} else if (freeEdges["top"] == true) {
    panel.location = "top";
} else if (freeEdges["left"] == true) {
    panel.location = "left";
} else if (freeEdges["right"] == true) {
    panel.location = "right";
} else {
    // There is no free edge, so leave the default value
    panel.location = "top";
}

// Set panel height
panel.height = 42

// Create start menu
var simplemenu = panel.addWidget("org.kde.plasma.kicker")
simplemenu.currentConfigGroup = ["General"]
simplemenu.writeConfig("icon", "solydk")
simplemenu.writeConfig("global", "F13")
simplemenu.writeConfig("favoriteApps", "firefox-esr.desktop,thunderbird.desktop,libreoffice-startcenter.desktop,org.kde.discover.desktop,systemsettings.desktop,org.kde.konsole.desktop")
simplemenu.writeConfig("alphaSort", true)

// Add show desktop
var showdt = panel.addWidget("org.kde.plasma.showdesktop")
showdt.currentConfigGroup = ["General"]

// Add dolphin
var eitm = panel.addWidget("org.kde.plasma.taskmanager")
eitm.currentConfigGroup = ["General"]
eitm.writeConfig("launchers", ["applications:org.kde.dolphin.desktop"])
eitm.writeConfig("showOnlyCurrentDesktop", true)

// Add system tray
var systray = panel.addWidget("org.kde.plasma.systemtray")
var systrayContainmentId = systray.readConfig("SystrayContainmentId")
var systrayContainment = desktopById(systrayContainmentId)
systrayContainment.currentConfigGroup = ["General"]
systrayContainment.writeConfig("extraItems",["org.kde.plasma.volume", "org.kde.plasma.devicenotifier","org.kde.plasma.networkmanagement","org.kde.discovernotifier","org.kde.plasma.diskquota","org.kde.plasma.bluetooth","org.kde.plasma.clipboard","org.kde.plasma.printmanager","org.kde.plasma.battery"])
systrayContainment.writeConfig("hiddenItems",["org.kde.plasma.clipboard"])

// Add notifications
panel.addWidget("org.kde.plasma.notifications")

// Add the clock
var clock = panel.addWidget("org.kde.plasma.digitalclock")
clock.writeConfig("showDate", false)
clock.writeConfig("showWeekNumbers", true)
