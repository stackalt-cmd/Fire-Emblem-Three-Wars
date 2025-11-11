/**
 * IMPORTANT: Remember to update session/top_panel/BuildLabel.xml in sync with this.
 */
var g_ProjectInformation = {
	"organizationName": {
		"caption": translate("WILDFIRE GAMES")
	},
	"organizationLogo": {
		"sprite": "WildfireGamesLogo"
	},
	"productLogo": {
		"sprite": "FETWLogo"
	},
	"productBuild": {
		"caption": getBuildString()
	},
	"productDescription": {
		"caption": setStringTags(translate("FETW: ver.01"), { "font": "sans-bold-16" }) + "\n\n" +
			translate("Notice: This mod is under development and many features have not been added yet.")
	}
};

var g_CommunityButtons = [
	{
		"caption": translate("Website"),
		"tooltip": translate("Click to visit our Mod Page"),
		"size": "8 100%-144 50%-4 100%-116",
		"onPress": () => {
			openURL("https://www.moddb.com/mods/fire-emblem-three-wars");
		}
	},
	{
		"caption": translate("Discord Server"),
		"tooltip": translate("Click to join our mod Discord Server."),
		"size": "50%+4 100%-144 100%-8 100%-116",
		"onPress": () => {
			openURL("https://discord.gg/VFFCmHGdz4");
		}
	},
	{
		"caption": translate("Report a Bug"),
		"tooltip": translate("Click to visit 0 A.D. Trac to report a bug, crash, or error."),
		"size": "8 100%-108 50%-4 100%-80",
		"onPress": () => {
			openURL("https://trac.wildfiregames.com/wiki/ReportingErrors/");
		}
	},
	{
		"caption": translateWithContext("Frequently Asked Questions", "FAQ"),
		"tooltip": translate("Click to visit the Frequently Asked Questions page in your browser."),
		"size": "50%+4 100%-108 100%-8 100%-80",
		"onPress": () => {
			openURL("https://trac.wildfiregames.com/wiki/FAQ");
		}
	},
	{
		"caption": translate("Translate the Game"),
		"tooltip": translate("Click to open the 0 A.D. translate page in your browser."),
		"size": "8 100%-72 100%-8 100%-44",
		"onPress": () => {
			openURL("https://trac.wildfiregames.com/wiki/Localization");
		}
	},
	{
		"caption": translate("Donate"),
		"tooltip": translate("Help with the project expenses by donating."),
		"size": "8 100%-36 100%-8 100%-8",
		"onPress": () => {
			openURL("https://play0ad.com/community/donate/");
		}
	}
];
