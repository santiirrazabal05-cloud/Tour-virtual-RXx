var APP_DATA = {
  "scenes": [
    {
      "id": "0-prueba-render-d5",
      "name": "Prueba-render-D5",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.15844885212215942,
        "pitch": -0.18335105211906466,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 0.13853694739381517,
          "pitch": -0.18054131294951148,
          "rotation": 0,
          "target": "1-panorama-ddddd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama-ddddd",
      "name": "Panorama-ddddd",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.23067449854972288,
          "pitch": 0.09094384361391583,
          "rotation": 0,
          "target": "0-prueba-render-d5"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
