var Data = {
    manyEvent : [{
        "title": "test",
        "place": "tests",
        "desc": "testing",
        "start": "2017-02-14T16:07:00Z",
        "end": "2017-02-14T17:07:00Z",
        "allDay": false,
        "repeat": "Y"
    }, {
        "title": "test",
        "place": "tests",
        "desc": "testing",
        "start": "2017-02-14T16:08:00Z",
        "end": "2017-02-14T17:08:00Z",
        "allDay": true,
        "repeat": "none"
    }],
    longEvent : [{
        title: "test",
        start: "2016-12-25T00:00:00Z",
        end: "2016-12-25T11:59:00Z",
        allDay: true,
        repeat: "Y",
        place: "",
        desc: ""
    }],
    repeatEventW : [{
        title: "test",
        start: "2017-01-27T00:00:00Z",
        end: "2017-01-30T02:59:00Z",
        allDay: true,
        repeat: "none",
        place: "",
        desc: "123456"
    }],
    repeatEventM : [{
        title: "test",
        start: "2017-03-14T00:00:00Z",
        end: "2017-03-14T02:59:00Z",
        allDay: true,
        repeat: "Y",
        place: "",
        desc: ""
    }],
};

localStorage.setItem("2017-02-14S2017-02-14E", JSON.stringify(Data.manyEvent));
localStorage.setItem("2016-12-25S2016-12-25E", JSON.stringify(Data.longEvent));
localStorage.setItem("2017-01-27S2017-01-30E", JSON.stringify(Data.repeatEventW));
localStorage.setItem("2017-03-14S2017-03-14E", JSON.stringify(Data.repeatEventM));
