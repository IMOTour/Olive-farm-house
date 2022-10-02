var APP_DATA = {
  "scenes": [
    {
      "id": "0-al-fresco",
      "name": "Al fresco",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.3081628330530037,
        "pitch": 0.026222405412820393,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 1.8644385391724878,
          "pitch": 0.011497688577009058,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 0.6066482574033625,
          "pitch": -0.051852643825590405,
          "rotation": 0.7853981633974483,
          "target": "5-sitting--dinning-room"
        },
        {
          "yaw": 0.012684642340863306,
          "pitch": 0.21702938785116999,
          "rotation": 3.9269908169872414,
          "target": "15-garage-"
        },
        {
          "yaw": -1.5269728387186792,
          "pitch": 0.06774104450978236,
          "rotation": 0,
          "target": "6-garden"
        },
        {
          "yaw": -2.9996829594971786,
          "pitch": -0.19014610581786684,
          "rotation": 4.71238898038469,
          "target": "9-garden-behind-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7531309035935383,
        "pitch": -0.0021849486042349042,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 1.1168510728241365,
          "pitch": -0.015109295438143988,
          "rotation": 0,
          "target": "0-al-fresco"
        },
        {
          "yaw": 1.5725012283329471,
          "pitch": -0.021199998053557323,
          "rotation": 1.5707963267948966,
          "target": "5-sitting--dinning-room"
        },
        {
          "yaw": -0.42843913192288596,
          "pitch": 0.43516315716940923,
          "rotation": 3.141592653589793,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5874461823113766,
        "pitch": 0.11636223866734419,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 1.984058174340424,
          "pitch": -0.02175351138809134,
          "rotation": 3.141592653589793,
          "target": "1-kitchen"
        },
        {
          "yaw": 0.6239537346286248,
          "pitch": 0.002256622106829198,
          "rotation": 5.497787143782138,
          "target": "3-bedroom"
        },
        {
          "yaw": -1.3827990206667913,
          "pitch": -0.21696168776477798,
          "rotation": 0,
          "target": "4-bathroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.749740778746517,
          "pitch": 0.32744476840565717,
          "title": "Storage",
          "text": "Storage"
        }
      ]
    },
    {
      "id": "3-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4102072651285926,
        "pitch": 0.21630991181897663,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": -0.9579818175360195,
          "pitch": -0.09384517574186191,
          "rotation": 0,
          "target": "8-garden-corner"
        },
        {
          "yaw": 1.9812534036938914,
          "pitch": 0.5193093549191179,
          "rotation": 3.141592653589793,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9436358763800605,
        "pitch": 0.2967845617265077,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 2.463408657116382,
          "pitch": 0.7386285945327096,
          "rotation": 3.141592653589793,
          "target": "2-hall"
        },
        {
          "yaw": 2.6006026570413026,
          "pitch": 0.07986376040873999,
          "rotation": 9.42477796076938,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sitting--dinning-room",
      "name": "Sitting / Dinning room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2830676589221675,
        "pitch": -0.026219383250781547,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": -1.1134334120963096,
          "pitch": 0.04494153044672444,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.4830499297536548,
          "pitch": 0.029148455846321752,
          "rotation": 13.351768777756625,
          "target": "0-al-fresco"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-garden",
      "name": "Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.667375030130314,
        "pitch": 0.07621940525915427,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 1.9225293243713022,
          "pitch": -0.11315083436206663,
          "rotation": 3.141592653589793,
          "target": "0-al-fresco"
        },
        {
          "yaw": 2.8148173825341267,
          "pitch": -0.09727229122049152,
          "rotation": 3.141592653589793,
          "target": "9-garden-behind-house"
        },
        {
          "yaw": -1.2855685564202748,
          "pitch": -0.03666458274040707,
          "rotation": 3.141592653589793,
          "target": "8-garden-corner"
        },
        {
          "yaw": -0.6311456331375798,
          "pitch": 0.15223866651709983,
          "rotation": 3.141592653589793,
          "target": "7-garden-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-garden-far",
      "name": "Garden far",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.3092935397641767,
        "pitch": 0.16385480084685966,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": -1.773965159388867,
          "pitch": -0.13291833761012128,
          "rotation": 3.141592653589793,
          "target": "0-al-fresco"
        },
        {
          "yaw": -1.5654802345813437,
          "pitch": -0.0513666551315044,
          "rotation": 3.141592653589793,
          "target": "6-garden"
        },
        {
          "yaw": 0.038229177484490506,
          "pitch": -0.08564938897026408,
          "rotation": 3.141592653589793,
          "target": "8-garden-corner"
        },
        {
          "yaw": 1.0077017237066421,
          "pitch": 0.32424275138001235,
          "rotation": 3.141592653589793,
          "target": "17-path-to-entrance"
        },
        {
          "yaw": 2.667459748832303,
          "pitch": 0.6571086423838146,
          "rotation": 3.141592653589793,
          "target": "16-entrance"
        },
        {
          "yaw": -2.4553965491436607,
          "pitch": 0.12843643638795932,
          "rotation": 3.141592653589793,
          "target": "15-garage-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-garden-corner",
      "name": "Garden corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0094780617401895,
        "pitch": 0.12056480816279169,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 2.63103751567233,
          "pitch": 0.27536649813820446,
          "rotation": 3.141592653589793,
          "target": "7-garden-far"
        },
        {
          "yaw": -1.9609732068671644,
          "pitch": -0.038782135041238064,
          "rotation": 3.141592653589793,
          "target": "9-garden-behind-house"
        },
        {
          "yaw": -2.7707999481894703,
          "pitch": 0.17560675958041294,
          "rotation": 3.141592653589793,
          "target": "6-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-garden-behind-house",
      "name": "Garden behind house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.8560798081174363,
        "pitch": 0.13931784345807863,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 1.0052729821239055,
          "pitch": 0.0701228925869124,
          "rotation": 3.141592653589793,
          "target": "8-garden-corner"
        },
        {
          "yaw": 1.6599808319652611,
          "pitch": 0.24494578337860062,
          "rotation": 3.141592653589793,
          "target": "6-garden"
        },
        {
          "yaw": 2.828502607967284,
          "pitch": 0.189726563842477,
          "rotation": 3.141592653589793,
          "target": "0-al-fresco"
        },
        {
          "yaw": -2.166862550544259,
          "pitch": 0.040824385711244915,
          "rotation": 0,
          "target": "10-bbq--oven"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bbq--oven",
      "name": "BBQ + oven",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4290648651810924,
        "pitch": 0.09747334070733871,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": -1.1609958847692958,
          "pitch": 0.0766550124326173,
          "rotation": 0,
          "target": "9-garden-behind-house"
        },
        {
          "yaw": 1.1986654925420623,
          "pitch": 0.3685676008474186,
          "rotation": 0,
          "target": "11-house-left-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-house-left-side",
      "name": "House left side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.21746838883925435,
        "pitch": -0.08739794416927893,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": -0.30042158439351496,
          "pitch": -0.17944383464994296,
          "rotation": 0,
          "target": "10-bbq--oven"
        },
        {
          "yaw": 1.805823924173212,
          "pitch": 0.896228416665565,
          "rotation": 3.141592653589793,
          "target": "12-house-left-side-down"
        },
        {
          "yaw": 1.3412648010045398,
          "pitch": 0.28487672628879146,
          "rotation": 3.141592653589793,
          "target": "13-house-front-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-house-left-side-down",
      "name": "House left side down",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.332979348268168,
          "pitch": 0.10421614016904357,
          "rotation": 3.141592653589793,
          "target": "13-house-front-view"
        },
        {
          "yaw": -1.0827180925923727,
          "pitch": -0.38124154148430556,
          "rotation": 3.141592653589793,
          "target": "11-house-left-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-house-front-view",
      "name": "House front view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9354140291602207,
        "pitch": -0.38271581470740124,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 2.6230677573995376,
          "pitch": 0.08805349897665948,
          "rotation": 3.141592653589793,
          "target": "12-house-left-side-down"
        },
        {
          "yaw": -2.2156845460099888,
          "pitch": -0.08076373049848229,
          "rotation": 0,
          "target": "14-storage-under-house"
        },
        {
          "yaw": -0.36658548876534525,
          "pitch": 0.11312034693127337,
          "rotation": 2.356194490192345,
          "target": "15-garage-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-storage-under-house",
      "name": "Storage under house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.517948952892006,
        "pitch": 0.17705035515994894,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 3.0713571282780885,
          "pitch": 0.017549907766291284,
          "rotation": 0,
          "target": "13-house-front-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-garage-",
      "name": "Garage ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.19237654694506112,
        "pitch": 0.03932907487617321,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 2.989862916184478,
          "pitch": 0.08096036142891805,
          "rotation": 3.141592653589793,
          "target": "13-house-front-view"
        },
        {
          "yaw": -1.8873567934758846,
          "pitch": 0.027441041105760178,
          "rotation": 5.497787143782138,
          "target": "0-al-fresco"
        },
        {
          "yaw": -0.5209662615764188,
          "pitch": 0.0744143233370167,
          "rotation": 3.141592653589793,
          "target": "16-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.40433951529463563,
        "pitch": 0.13728215646303887,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 0.9095818440072083,
          "pitch": 0.05730702394362197,
          "rotation": 3.141592653589793,
          "target": "15-garage-"
        },
        {
          "yaw": -2.26791597198255,
          "pitch": 0.0761227786060843,
          "rotation": 0,
          "target": "17-path-to-entrance"
        },
        {
          "yaw": 2.6176675728227874,
          "pitch": -0.6310462939996704,
          "rotation": 3.141592653589793,
          "target": "7-garden-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-path-to-entrance",
      "name": "Path to entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6937346451192496,
        "pitch": 0.19789794933047844,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": -2.974493398725146,
          "pitch": 0.08965780100608356,
          "rotation": 3.141592653589793,
          "target": "16-entrance"
        },
        {
          "yaw": -0.5197662366363964,
          "pitch": 0.05286175899834511,
          "rotation": 3.141592653589793,
          "target": "18-path-to-entrance-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-path-to-entrance-2",
      "name": "Path to entrance 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.400257989321144,
        "pitch": 0.2090456597363346,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 2.3255550660164808,
          "pitch": 0.22316034995009915,
          "rotation": 0,
          "target": "17-path-to-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0290068772680847,
          "pitch": 0.07896031602382969,
          "title": "Private path continues",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Private path continues</span>"
        }
      ]
    },
    {
      "id": "19-main-path",
      "name": "Main path",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.643829955310691,
        "pitch": 0.004127125141328847,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": -2.908387280302417,
          "pitch": 0.042196899268034826,
          "rotation": 3.141592653589793,
          "target": "12-house-left-side-down"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5243344429034433,
          "pitch": -0.2720224149961332,
          "title": "Rural storage",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Rural storage</span>"
        }
      ]
    },
    {
      "id": "20-olive-farm-1",
      "name": "Olive farm 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1074197745880916,
        "pitch": 0.08958289277350318,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 1.7600755707093585,
          "pitch": 0.06281027061030287,
          "rotation": 3.141592653589793,
          "target": "19-main-path"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6466433498687607,
          "pitch": 0.29996941393672927,
          "title": "Kitchen coup",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Kitchen coup</span>"
        }
      ]
    },
    {
      "id": "21-water-tank",
      "name": "Water tank",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5486957729534225,
        "pitch": 0.10050763579467059,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 2.294423629576725,
          "pitch": 0.058072824796422395,
          "rotation": 3.141592653589793,
          "target": "20-olive-farm-1"
        },
        {
          "yaw": -1.3113329598915087,
          "pitch": -0.047086704440493676,
          "rotation": 3.141592653589793,
          "target": "22-far-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-far-corner",
      "name": "Far corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.007563522358530861,
        "pitch": 0.18934353759237865,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 0.15840516918488845,
          "pitch": -0.035623711897804,
          "rotation": 3.141592653589793,
          "target": "21-water-tank"
        },
        {
          "yaw": -0.43363545966705885,
          "pitch": -0.15529034506743677,
          "rotation": 3.141592653589793,
          "target": "23-project-house"
        },
        {
          "yaw": 0.3596788248019731,
          "pitch": 0.038505147566567643,
          "rotation": 9.42477796076938,
          "target": "20-olive-farm-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-project-house",
      "name": "Project house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.626763760592274,
        "pitch": -0.3890772872390329,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 1.3915210919145586,
          "pitch": 0.04350330110555234,
          "rotation": 3.141592653589793,
          "target": "22-far-corner"
        },
        {
          "yaw": -1.439313751837437,
          "pitch": 0.008277847050354836,
          "rotation": 4.71238898038469,
          "target": "24-natural-spring"
        },
        {
          "yaw": -1.03173560867765,
          "pitch": 0.05290454511629861,
          "rotation": 10.210176124166829,
          "target": "21-water-tank"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-natural-spring",
      "name": "Natural spring",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.261250836113529,
        "pitch": 0.01529464022961946,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": -2.274832935776491,
          "pitch": -0.10842151126133714,
          "rotation": 3.141592653589793,
          "target": "23-project-house"
        },
        {
          "yaw": -2.753262395512081,
          "pitch": 0.11062820620166036,
          "rotation": 3.141592653589793,
          "target": "22-far-corner"
        },
        {
          "yaw": -1.7592630620838605,
          "pitch": -0.2760647984204354,
          "rotation": 3.9269908169872414,
          "target": "25-project-house---back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.871906345292274,
          "pitch": 0.12381104174886026,
          "title": "Natural Spring",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Natural Spring</span>"
        }
      ]
    },
    {
      "id": "25-project-house---back",
      "name": "Project house - back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0785826457204504,
        "pitch": 0.18118266118170112,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": -0.5153665185437966,
          "pitch": 0.20620669304799222,
          "rotation": 3.141592653589793,
          "target": "24-natural-spring"
        },
        {
          "yaw": 1.5762638191454519,
          "pitch": -0.030896139486198848,
          "rotation": 4.71238898038469,
          "target": "26-project-house---kitchen"
        },
        {
          "yaw": 1.9663664234381741,
          "pitch": -0.025648926779268777,
          "rotation": 4.71238898038469,
          "target": "27-project-house---sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-project-house---kitchen",
      "name": "Project house - kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9706135091801862,
        "pitch": 0.3051465215459732,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": -1.1316955555200963,
          "pitch": -0.02751402320040519,
          "rotation": 5.497787143782138,
          "target": "25-project-house---back"
        },
        {
          "yaw": -1.9637901708166314,
          "pitch": 0.024250387839725107,
          "rotation": 5.497787143782138,
          "target": "27-project-house---sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-project-house---sitting-room",
      "name": "Project house - sitting room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.2433474928159747,
        "pitch": 0.0917580812868195,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 2.6145924314051223,
          "pitch": 0.02115080665446456,
          "rotation": 0.7853981633974483,
          "target": "28-project-house---bedroom"
        },
        {
          "yaw": -3.02685228990274,
          "pitch": 0.0471953676733623,
          "rotation": 0.7853981633974483,
          "target": "29-project-house---bedroom-2"
        },
        {
          "yaw": 1.1552414568121794,
          "pitch": -0.002817180971169009,
          "rotation": 0.7853981633974483,
          "target": "30-project-house---toilet"
        },
        {
          "yaw": -0.16516353187890154,
          "pitch": 0.049016320123005386,
          "rotation": 0.7853981633974483,
          "target": "26-project-house---kitchen"
        },
        {
          "yaw": -2.496568944825693,
          "pitch": -0.022857610098984793,
          "rotation": 0.7853981633974483,
          "target": "25-project-house---back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-project-house---bedroom",
      "name": "Project house - bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.406500007892614,
        "pitch": 0.019674781349447557,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": 3.1229262743982558,
          "pitch": 0.27327997728457376,
          "rotation": 3.141592653589793,
          "target": "27-project-house---sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-project-house---bedroom-2",
      "name": "Project house - bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.7952173229078756,
        "pitch": 0.18056151762960404,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": -2.489401618365971,
          "pitch": -0.0230719327307618,
          "rotation": 0.7853981633974483,
          "target": "27-project-house---sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-project-house---toilet",
      "name": "Project house - toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5552761426743906,
        "pitch": 0.3260843084094418,
        "fov": 1.5556834062131732
      },
      "linkHotspots": [
        {
          "yaw": -0.39839513655546455,
          "pitch": -0.01676334511264521,
          "rotation": 4.71238898038469,
          "target": "27-project-house---sitting-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
