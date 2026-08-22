var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5438525623238135,
        "pitch": -0.06869504721210262,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.5865565705848539,
          "pitch": 0.2880797816454752,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "Reception",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.948350964635087,
        "pitch": -0.10775416410922034,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.18515785501762672,
          "pitch": 0.1603102388007276,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": 2.974307534930688,
          "pitch": 0.13753791901261891,
          "rotation": 0,
          "target": "12-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-makerspace",
      "name": "Makerspace",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.578143823832229,
        "pitch": 0.11926228771582359,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.561435857685403,
          "pitch": 0.18763440293061429,
          "rotation": 0,
          "target": "12-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-play-group-class",
      "name": "Play Group Class",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5479441782854488,
        "pitch": 0.08886177022763775,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.9346504594236933,
          "pitch": 0.3326098469799579,
          "rotation": 0,
          "target": "12-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wide-passage",
      "name": "Wide Passage",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5639578932323097,
        "pitch": 0.13064626410911373,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.608588293808003,
          "pitch": 0.3211531928761957,
          "rotation": 0,
          "target": "12-courtyard"
        },
        {
          "yaw": 1.9583611354004944,
          "pitch": 0.07898384659596225,
          "rotation": 0,
          "target": "5-nursery-classroom"
        },
        {
          "yaw": 1.0683285773503108,
          "pitch": 0.052828158039226025,
          "rotation": 0,
          "target": "6-turf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-nursery-classroom",
      "name": "Nursery Classroom",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6015812888198697,
        "pitch": -0.06341610478720128,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.2485248835648157,
          "pitch": 0.09661388259025117,
          "rotation": 0,
          "target": "4-wide-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-turf",
      "name": "Turf",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.3148138861748544,
        "pitch": 0.11190751869863647,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.08785310696409,
          "pitch": 0.11018168019369412,
          "rotation": 0,
          "target": "7-staff-room"
        },
        {
          "yaw": -2.605208592255405,
          "pitch": 0.14936285689828566,
          "rotation": 0,
          "target": "8-cordinator-room"
        },
        {
          "yaw": -2.1806137623557333,
          "pitch": 0.08412553766832076,
          "rotation": 0,
          "target": "10-sr-kg-jr-kg-class"
        },
        {
          "yaw": -1.5600972675242062,
          "pitch": 0.21192198242710347,
          "rotation": 0,
          "target": "9-play-area"
        },
        {
          "yaw": -0.28033729736521806,
          "pitch": 0.21902981516223363,
          "rotation": 0,
          "target": "4-wide-passage"
        },
        {
          "yaw": -0.9006443959776185,
          "pitch": 0.13453328371712558,
          "rotation": 0,
          "target": "5-nursery-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-staff-room",
      "name": "Staff Room",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.810725190868956,
        "pitch": 0.057145141393043275,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.11688789643245556,
          "pitch": 0.01940442646155205,
          "rotation": 0,
          "target": "6-turf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-cordinator-room",
      "name": "Cordinator Room",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.749519180855617,
        "pitch": -0.051103745279288404,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.5779428443086534,
          "pitch": -0.026819183288608883,
          "rotation": 0,
          "target": "6-turf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-play-area",
      "name": "Play Area",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7955498894149473,
        "pitch": 0.07818990364090439,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.5162431616481369,
          "pitch": 0.08367021248457718,
          "rotation": 0,
          "target": "10-sr-kg-jr-kg-class"
        },
        {
          "yaw": -2.7485194325247644,
          "pitch": 0.2567977975786562,
          "rotation": 0,
          "target": "11-sensorial-play-area"
        },
        {
          "yaw": 0.7513483419682672,
          "pitch": 0.14290048389980647,
          "rotation": 0,
          "target": "8-cordinator-room"
        },
        {
          "yaw": 0.4157351315809237,
          "pitch": 0.06611890000876386,
          "rotation": 0,
          "target": "7-staff-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-sr-kg-jr-kg-class",
      "name": "Sr kg Jr kg Class",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6790879176843934,
        "pitch": 0.4513300634670685,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.4492261165649811,
          "pitch": 0.231175655539694,
          "rotation": 0,
          "target": "9-play-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-sensorial-play-area",
      "name": "Sensorial Play Area",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6946499128570345,
        "pitch": -0.0571998240156919,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.7393857058538984,
          "pitch": 0.11203154663476411,
          "rotation": 0,
          "target": "9-play-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-courtyard",
      "name": "Courtyard",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6131700002875586,
        "pitch": 0.054650931767415756,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.5925191550942648,
          "pitch": 0.05758434623036024,
          "rotation": 0,
          "target": "1-reception"
        },
        {
          "yaw": 1.204453133760385,
          "pitch": 0.144573801732637,
          "rotation": 0,
          "target": "3-play-group-class"
        },
        {
          "yaw": 1.8952427391588262,
          "pitch": 0.09206525512732178,
          "rotation": 0,
          "target": "2-makerspace"
        },
        {
          "yaw": -1.5586813303741955,
          "pitch": 0.23990190096035136,
          "rotation": 0,
          "target": "4-wide-passage"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FALH",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
