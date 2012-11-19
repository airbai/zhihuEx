    function getLocalStorageVal(key, defaultVal) {
        var val = localStorage[key];
        if (val == undefined || val == null) {
            localStorage[key] = defaultVal;
            return defaultVal;
        } else {
            return localStorage[key]
        }
    }