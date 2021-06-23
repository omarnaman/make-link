


function open_link() {

    function get_proxy_link(tabs) {
        if (tabs[0]) {
            let currentTab = tabs[0];
            let url = currentTab.url;
            let proxy_url = `https://proxy.lib.uwaterloo.ca/login?url=${url}`
            var new_tab = browser.tabs.create({ url: proxy_url })

        }
    }
    var gettingActiveTab = browser.tabs.query({ active: true, currentWindow: true });
    gettingActiveTab.then(get_proxy_link);
    
}


browser.browserAction.onClicked.addListener(open_link);