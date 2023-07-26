
export type CookieType = {
    // id: string;
    title: string;
    contents: {
        text: string;
    }
}
// 後々cookieを操作する予定
const cookieArr: {[id: string]:CookieType} = {
    // 'test': {'contents':{'text':'a'},'title':'title1'},
    // 'test2': {'contents':{'text':'a'},'title':'title2'},
    // 'test3': {'contents':{'text':'a'},'title':'title3'},
};


class Cookie {
    static setCookie (id: string, data: CookieType, addEvent?: (...arg: (string|number|object)[])=>void) {
        cookieArr[id] = data;
        if (addEvent !== undefined)addEvent();
    }

    static getCookie (id: string, addEvent?: (...arg: (string|number|object)[])=>void): CookieType {
        if (addEvent !== undefined)addEvent();
        return cookieArr[id];
    }

    static getAllCookie () {
        return cookieArr;
    }
}


class Cookie2 {
    static setCookie () {
        0
    }

    static getCookie () {
        0
    }

    static getAllCookie () {
        0
    }
}

export default Cookie;
