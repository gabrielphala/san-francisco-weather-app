export default {
    "@context": [
        "https://geojson.org/geojson-ld/geojson-context.jsonld",
        {
            "@version": "1.1",
            "wx": "https://api.weather.gov/ontology#",
            "geo": "http://www.opengis.net/ont/geosparql#",
            "unit": "http://codes.wmo.int/common/unit/",
            "@vocab": "https://api.weather.gov/ontology#"
        }
    ],
    "type": "Feature",
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    -122.45394210000001,
                    37.776767100000001
                ],
                [
                    -122.44827950000001,
                    37.754962400000004
                ],
                [
                    -122.42063330000001,
                    37.759446800000006
                ],
                [
                    -122.42629050000001,
                    37.781252100000003
                ],
                [
                    -122.45394210000001,
                    37.776767100000001
                ]
            ]
        ]
    },
    "properties": {
        "updated": "2023-12-20T19:06:50+00:00",
        "units": "us",
        "forecastGenerator": "BaselineForecastGenerator",
        "generatedAt": "2023-12-20T19:37:29+00:00",
        "updateTime": "2023-12-20T19:06:50+00:00",
        "validTimes": "2023-12-20T13:00:00+00:00/P7DT15H",
        "elevation": {
            "unitCode": "wmoUnit:m",
            "value": 77.114400000000003
        },
        "periods": [
            {
                "number": 1,
                "name": "Today",
                "startTime": "2023-12-20T11:00:00-08:00",
                "endTime": "2023-12-20T18:00:00-08:00",
                "isDaytime": true,
                "temperature": 61,
                "temperatureUnit": "F",
                "temperatureTrend": "falling",
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": 100
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 13.333333333333334
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 92
                },
                "windSpeed": "5 to 10 mph",
                "windDirection": "ESE",
                "icon": "https://api.weather.gov/icons/land/day/tsra,100?size=medium",
                "shortForecast": "Showers And Thunderstorms",
                "detailedForecast": "Showers and thunderstorms. Cloudy. High near 61, with temperatures falling to around 58 in the afternoon. East southeast wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 100%. New rainfall amounts between a tenth and quarter of an inch possible."
            },
            {
                "number": 2,
                "name": "Tonight",
                "startTime": "2023-12-20T18:00:00-08:00",
                "endTime": "2023-12-21T06:00:00-08:00",
                "isDaytime": false,
                "temperature": 51,
                "temperatureUnit": "F",
                "temperatureTrend": "rising",
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": 70
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 11.666666666666666
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 96
                },
                "windSpeed": "2 to 7 mph",
                "windDirection": "E",
                "icon": "https://api.weather.gov/icons/land/night/tsra,70/rain,50?size=medium",
                "shortForecast": "Showers And Thunderstorms Likely then Chance Drizzle",
                "detailedForecast": "Showers and thunderstorms likely before 7pm, then rain likely between 7pm and 10pm, then a chance of drizzle between 10pm and 3am, then a chance of drizzle and patchy fog between 3am and 4am, then patchy fog and a slight chance of drizzle. Cloudy. Low around 51, with temperatures rising to around 53 overnight. East wind 2 to 7 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."
            },
            {
                "number": 3,
                "name": "Thursday",
                "startTime": "2023-12-21T06:00:00-08:00",
                "endTime": "2023-12-21T18:00:00-08:00",
                "isDaytime": true,
                "temperature": 64,
                "temperatureUnit": "F",
                "temperatureTrend": "falling",
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": 20
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 13.333333333333334
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 99
                },
                "windSpeed": "2 to 7 mph",
                "windDirection": "ENE",
                "icon": "https://api.weather.gov/icons/land/day/rain,20?size=medium",
                "shortForecast": "Patchy Fog",
                "detailedForecast": "Patchy fog and a slight chance of drizzle before 4pm. Mostly cloudy. High near 64, with temperatures falling to around 60 in the afternoon. East northeast wind 2 to 7 mph. Chance of precipitation is 20%."
            },
            {
                "number": 4,
                "name": "Thursday Night",
                "startTime": "2023-12-21T18:00:00-08:00",
                "endTime": "2023-12-22T06:00:00-08:00",
                "isDaytime": false,
                "temperature": 50,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": null
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.222222222222221
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 94
                },
                "windSpeed": "0 to 7 mph",
                "windDirection": "NW",
                "icon": "https://api.weather.gov/icons/land/night/bkn/fog?size=medium",
                "shortForecast": "Mostly Cloudy then Patchy Fog",
                "detailedForecast": "Patchy fog after 5am. Mostly cloudy, with a low around 50. Northwest wind 0 to 7 mph."
            },
            {
                "number": 5,
                "name": "Friday",
                "startTime": "2023-12-22T06:00:00-08:00",
                "endTime": "2023-12-22T18:00:00-08:00",
                "isDaytime": true,
                "temperature": 62,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": null
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 12.222222222222221
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 96
                },
                "windSpeed": "5 to 13 mph",
                "windDirection": "WNW",
                "icon": "https://api.weather.gov/icons/land/day/fog/sct?size=medium",
                "shortForecast": "Patchy Fog then Mostly Sunny",
                "detailedForecast": "Patchy fog before 9am. Mostly sunny, with a high near 62. West northwest wind 5 to 13 mph, with gusts as high as 18 mph."
            },
            {
                "number": 6,
                "name": "Friday Night",
                "startTime": "2023-12-22T18:00:00-08:00",
                "endTime": "2023-12-23T06:00:00-08:00",
                "isDaytime": false,
                "temperature": 45,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": null
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 10
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 88
                },
                "windSpeed": "6 to 13 mph",
                "windDirection": "NW",
                "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
                "shortForecast": "Mostly Clear",
                "detailedForecast": "Mostly clear, with a low around 45."
            },
            {
                "number": 7,
                "name": "Saturday",
                "startTime": "2023-12-23T06:00:00-08:00",
                "endTime": "2023-12-23T18:00:00-08:00",
                "isDaytime": true,
                "temperature": 59,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": null
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 7.7777777777777777
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 89
                },
                "windSpeed": "7 mph",
                "windDirection": "N",
                "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
                "shortForecast": "Sunny",
                "detailedForecast": "Sunny, with a high near 59."
            },
            {
                "number": 8,
                "name": "Saturday Night",
                "startTime": "2023-12-23T18:00:00-08:00",
                "endTime": "2023-12-24T06:00:00-08:00",
                "isDaytime": false,
                "temperature": 44,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": null
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 6.666666666666667
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 80
                },
                "windSpeed": "7 mph",
                "windDirection": "N",
                "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
                "shortForecast": "Mostly Clear",
                "detailedForecast": "Mostly clear, with a low around 44."
            },
            {
                "number": 9,
                "name": "Sunday",
                "startTime": "2023-12-24T06:00:00-08:00",
                "endTime": "2023-12-24T18:00:00-08:00",
                "isDaytime": true,
                "temperature": 58,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": null
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 6.1111111111111107
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 81
                },
                "windSpeed": "7 mph",
                "windDirection": "NNE",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "shortForecast": "Mostly Sunny",
                "detailedForecast": "Mostly sunny, with a high near 58."
            },
            {
                "number": 10,
                "name": "Sunday Night",
                "startTime": "2023-12-24T18:00:00-08:00",
                "endTime": "2023-12-25T06:00:00-08:00",
                "isDaytime": false,
                "temperature": 44,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": null
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 6.1111111111111107
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 85
                },
                "windSpeed": "7 mph",
                "windDirection": "N",
                "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
                "shortForecast": "Partly Cloudy",
                "detailedForecast": "Partly cloudy, with a low around 44."
            },
            {
                "number": 11,
                "name": "Christmas Day",
                "startTime": "2023-12-25T06:00:00-08:00",
                "endTime": "2023-12-25T18:00:00-08:00",
                "isDaytime": true,
                "temperature": 58,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": null
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 7.2222222222222223
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 86
                },
                "windSpeed": "7 mph",
                "windDirection": "NE",
                "icon": "https://api.weather.gov/icons/land/day/bkn/rain?size=medium",
                "shortForecast": "Partly Sunny then Slight Chance Drizzle",
                "detailedForecast": "A slight chance of drizzle after 4pm. Partly sunny, with a high near 58."
            },
            {
                "number": 12,
                "name": "Monday Night",
                "startTime": "2023-12-25T18:00:00-08:00",
                "endTime": "2023-12-26T06:00:00-08:00",
                "isDaytime": false,
                "temperature": 46,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": null
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 7.2222222222222223
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 87
                },
                "windSpeed": "7 mph",
                "windDirection": "ENE",
                "icon": "https://api.weather.gov/icons/land/night/rain?size=medium",
                "shortForecast": "Slight Chance Drizzle",
                "detailedForecast": "A slight chance of drizzle. Mostly cloudy, with a low around 46."
            },
            {
                "number": 13,
                "name": "Tuesday",
                "startTime": "2023-12-26T06:00:00-08:00",
                "endTime": "2023-12-26T18:00:00-08:00",
                "isDaytime": true,
                "temperature": 60,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": null
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 9.4444444444444446
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 88
                },
                "windSpeed": "9 mph",
                "windDirection": "ESE",
                "icon": "https://api.weather.gov/icons/land/day/rain?size=medium",
                "shortForecast": "Chance Drizzle",
                "detailedForecast": "A chance of drizzle. Partly sunny, with a high near 60."
            },
            {
                "number": 14,
                "name": "Tuesday Night",
                "startTime": "2023-12-26T18:00:00-08:00",
                "endTime": "2023-12-27T06:00:00-08:00",
                "isDaytime": false,
                "temperature": 50,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "probabilityOfPrecipitation": {
                    "unitCode": "wmoUnit:percent",
                    "value": null
                },
                "dewpoint": {
                    "unitCode": "wmoUnit:degC",
                    "value": 8.8888888888888893
                },
                "relativeHumidity": {
                    "unitCode": "wmoUnit:percent",
                    "value": 86
                },
                "windSpeed": "9 to 14 mph",
                "windDirection": "SE",
                "icon": "https://api.weather.gov/icons/land/night/rain?size=medium",
                "shortForecast": "Chance Drizzle then Chance Rain",
                "detailedForecast": "A chance of drizzle before 4am, then a chance of rain. Mostly cloudy, with a low around 50."
            }
        ]
    }
}