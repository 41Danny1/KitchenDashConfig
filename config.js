/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
/*
		{
			module: "updatenotification",
			position: "top_bar"
		},
*/
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Events",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "male",
						url: "" //My cal
					},
					{
						symbol: "book",
						url:"" //My education cal
					},
					{
						symbol: "gamepad",
						url: "" //Gaming cal
					},
					{
						symbol: "leaf",
						url: "" //Canadian holidays
					}
				]
			}
		},
		// {
		// 	module: "compliments",
		// 	position: "lower_third"
		// },
		{
			module: 'MMM-Screencast',
			position: 'bottom_right', // This position is for a hidden <div /> and not the screencast window
			config: {
				position: 'center',
				height: 576,
				width: 1024,
				castName: "Kitchen Dashboard"
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Vancouver",
				locationID: "5911606", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "" //Open weather API key
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Vancouver",
				locationID: "5911606", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "", //Open weather API key
				maxNumberOfDays: 7,
			}
		},
		{
			module: "MMM-Bring",
			position: "bottom_left",
			config: {
				email: "", //Email for Bringlist login
				password: "", //Password for Bringlist login
				updateInterval: 15,
				//listName: "Groceries",
				showListName: false,
				activeItemColor: "#88888800",
				latestItemColor: "#FFFFFF",
				showLatestItems: false,
				maxItems: 0,
				maxLatestItems: 0,
				//locale: "en-CA",
				locale: "en-US",
				useKeyboard: false,
			}
		},
		{
			module: "MMM-AVStock",
			position: "bottom_left",
			config: {
				apiKey: "", //Your AVStock API key
				symbols: ["SPY", "AMZN", "TSLA", "AAPL", "AMD", "UGAZ"],
				mode: "table"
			}

		},
		{
			module: "MMM-WiFiPassword",
			position: "bottom_right",
			config: {
				network: "", //Network SSID
				password: "", //Network password
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					/*{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},*/
					{
						title: "Vancouver Sun",
						url: "https://vancouversun.com/feed/",
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true,
				wrapTitle: false,
			}
		},
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: {
				//source: ["/r/cityporn+foodporn"],
				source: ["/r/cityporn"],
				crossfade: false,
				slideInterval: 3 * 60 * 1000,
				//orientation: "vertical",
				//maximumEntries: 10,
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
