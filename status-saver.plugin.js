class statusSaver {
    // Constructor
    constructor() {
        this.initialized = false;
    }

    // Meta
    getName() { return "Discord Status Saver"; }
    getShortName() { return "Status Saver"; }
    getDescription() { return "A status saver for Discord BD"; }
    getVersion() { return "0.0.1"; }
    getAuthor() { return "Shaun"; }

    // Settings  Panel
    getSettingsPanel() {
        return "<!--Enter Settings Panel Options, just standard HTML-->";
    }
    
    // Load/Unload
    load() { }

    unload() { }

    // Events

    onMessage() {
        PluginUtilities.showToast(`Message Detected`);
    };

    onSwitch() {
        // Called when a server or channel is switched
    };

    observer(e) {
        // raw MutationObserver event for each mutation
    };
    
    // Start/Stop
    start() {
        var libraryScript = document.getElementById('zeresLibraryScript');
	if (!libraryScript) {
		libraryScript = document.createElement("script");
		libraryScript.setAttribute("type", "text/javascript");
		libraryScript.setAttribute("src", "https://rauenzi.github.io/BetterDiscordAddons/Plugins/PluginLibrary.js");
		libraryScript.setAttribute("id", "zeresLibraryScript");
		document.head.appendChild(libraryScript);
	}

	if (typeof window.ZeresLibrary !== "undefined") this.initialize();
	else libraryScript.addEventListener("load", () => { this.initialize(); });
    }
       
    stop() {
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
    };

    //  Initialize
    initialize() {
        this.initialized = true;
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has started.");
    }
}