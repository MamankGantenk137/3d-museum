(function(){
    var script = {
 "start": "this.init()",
 "data": {
  "name": "Player446"
 },
 "children": [
  "this.MainViewer",
  "this.Container_8A191C79_9123_8F7F_41DF_BA18D2268CD2",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 20,
 "paddingBottom": 0,
 "class": "Player",
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "layout": "absolute",
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "id": "ImageResource_8BF18EB3_9361_7B78_41CC_9DE320E6FEA0",
 "levels": [
  {
   "url": "media/popup_8FE376F7_9367_88F8_41DF_32CFDC8CB8EC_0_0.png",
   "width": 2750,
   "height": 1944,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8FE376F7_9367_88F8_41DF_32CFDC8CB8EC_0_1.png",
   "width": 2047,
   "height": 1447,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8FE376F7_9367_88F8_41DF_32CFDC8CB8EC_0_2.png",
   "width": 1023,
   "height": 723,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8FE376F7_9367_88F8_41DF_32CFDC8CB8EC_0_3.png",
   "width": 511,
   "height": 361,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/album_8E983F4A_9362_992B_41DB_241EBC970C8E_t.png",
 "class": "PhotoAlbum",
 "label": "Photo Album Propeller",
 "playList": "this.album_8E983F4A_9362_992B_41DB_241EBC970C8E_AlbumPlayList",
 "id": "album_8E983F4A_9362_992B_41DB_241EBC970C8E"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 83.42,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_8111BF5B_9A16_91C6_41D8_C430A8BA961E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "data": {
  "label": "Wings"
 },
 "audio": {
  "mp3Url": "media/audio_8CE8CD9E_9363_9928_41A0_097AE970218A.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_8CE8CD9E_9363_9928_41A0_097AE970218A.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_8CE8CD9E_9363_9928_41A0_097AE970218A",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_9A77E39A_90E1_8928_41DB_068B125DB910_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_4D468A42_571D_AF46_41C4_8C8358C32FB0",
 "to": "left",
 "class": "SlideOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -84.39,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_827D0ECD_9A16_90DD_41D1_3279B2F3BC5E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -84.39,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81FD0F3C_9A16_9142_41B9_C74E866176B1",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -83.63,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81BA9F0D_9A16_9142_41C1_95BE99173721",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -84.24,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_819E9EED_9A16_90C2_41E1_FCE8A37FD0BA",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_8B98A911_9366_9939_41D0_6491C606A7A4",
 "yaw": 0.36,
 "popupDistance": 100,
 "hfov": 11.94,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8B98A911_9366_9939_41D0_6491C606A7A4_0_2.png",
    "width": 1023,
    "height": 723,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -40.16,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "data": {
  "label": "Landing Gear"
 },
 "audio": {
  "mp3Url": "media/audio_8C69C709_9366_8928_41E2_4A47D1894D8E.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_8C69C709_9366_8928_41E2_4A47D1894D8E.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_8C69C709_9366_8928_41E2_4A47D1894D8E",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 8.53,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81913EED_9A16_90C2_41D9_BA9AF6E25624",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_867242B7_91EE_8B78_41D4_4503D1F607DD_0_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_867242B7_91EE_8B78_41D4_4503D1F607DD_0",
 "width": 2750,
 "label": "1",
 "image": {
  "levels": [
   {
    "url": "media/album_867242B7_91EE_8B78_41D4_4503D1F607DD_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "data": {
  "label": "Tail"
 },
 "audio": {
  "mp3Url": "media/audio_8EDE2C45_9363_9F18_41D8_989EF8C833DD.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_8EDE2C45_9363_9F18_41D8_989EF8C833DD.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_8EDE2C45_9363_9F18_41D8_989EF8C833DD",
 "autoplay": true
},
{
 "items": [
  {
   "media": "this.album_868D4E7C_91EF_BBE8_41DA_F0765CC7D54C",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_822BFE9E_9A16_937E_41E0_4798B29BF1AC",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_t.jpg",
 "label": "Gambar360(7)",
 "id": "panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9A77C92A_90E1_9968_41D3_E37848055C56",
   "backwardYaw": -95.79,
   "yaw": 95.76,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9B538638_90E2_8B68_41D5_B7A8084977AE",
   "backwardYaw": 95.76,
   "yaw": -171.8,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9E614CD2_9126_FF3B_41D3_49071EF5531E",
  "this.overlay_9E4996F5_9123_88F9_41D1_76B9AED69EE8",
  "this.overlay_826FFFCF_9121_9928_41B0_7D08312D42BA",
  "this.popup_8A442466_9366_8F1B_41E2_B611ED8FD22F"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/album_860FC63C_91EE_8B6F_41B0_17E3C87FDA27_0_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_860FC63C_91EE_8B6F_41B0_17E3C87FDA27_0",
 "width": 2750,
 "label": "4",
 "image": {
  "levels": [
   {
    "url": "media/album_860FC63C_91EE_8B6F_41B0_17E3C87FDA27_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "thumbnailUrl": "media/album_86D12D18_91E2_9928_41D3_7F8736D170E9_t.png",
 "class": "PhotoAlbum",
 "label": "Photo Album 6",
 "playList": "this.album_86D12D18_91E2_9928_41D3_7F8736D170E9_AlbumPlayList",
 "id": "album_86D12D18_91E2_9928_41D3_7F8736D170E9"
},
{
 "thumbnailUrl": "media/album_8F0F5C13_9361_9F38_41DC_8CA7008DE5B3_0_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_8F0F5C13_9361_9F38_41DC_8CA7008DE5B3_0",
 "width": 2749,
 "label": "Cessna",
 "image": {
  "levels": [
   {
    "url": "media/album_8F0F5C13_9361_9F38_41DC_8CA7008DE5B3_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_867242B7_91EE_8B78_41D4_4503D1F607DD_t.png",
 "class": "PhotoAlbum",
 "label": "Photo Album 1",
 "playList": "this.album_867242B7_91EE_8B78_41D4_4503D1F607DD_AlbumPlayList",
 "id": "album_867242B7_91EE_8B78_41D4_4503D1F607DD"
},
{
 "items": [
  {
   "media": "this.album_867242B7_91EE_8B78_41D4_4503D1F607DD",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_822B8E9E_9A16_937E_41E3_3AB392EC6E76",
 "class": "PlayList"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_80560E81_9A6A_F342_41C2_38F2E6F27A17",
 "to": "left",
 "class": "SlideOutEffect"
},
{
 "items": [
  {
   "media": "this.album_86FEFD66_91EE_991B_41D6_A04D000805D2",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_822A2E9E_9A16_937E_41CB_D70179556A22",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/album_86FEFD66_91EE_991B_41D6_A04D000805D2_t.png",
 "class": "PhotoAlbum",
 "label": "Photo Album 3",
 "playList": "this.album_86FEFD66_91EE_991B_41D6_A04D000805D2_AlbumPlayList",
 "id": "album_86FEFD66_91EE_991B_41D6_A04D000805D2"
},
{
 "id": "ImageResource_8BF5FEA4_9361_7B1F_41DA_D6A16249EF7C",
 "levels": [
  {
   "url": "media/popup_8D8DACB1_9362_BF79_41D1_410DF7AD8229_0_0.png",
   "width": 2750,
   "height": 1944,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8D8DACB1_9362_BF79_41D1_410DF7AD8229_0_1.png",
   "width": 2047,
   "height": 1447,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8D8DACB1_9362_BF79_41D1_410DF7AD8229_0_2.png",
   "width": 1023,
   "height": 723,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8D8DACB1_9362_BF79_41D1_410DF7AD8229_0_3.png",
   "width": 511,
   "height": 361,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_t.png",
 "class": "PhotoAlbum",
 "label": "Photo Album Engine",
 "playList": "this.album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_AlbumPlayList",
 "id": "album_8F0BDDD2_9361_F938_41DD_F2884A6B3480"
},
{
 "thumbnailUrl": "media/album_8197979E_9122_8928_41C7_2ADF40C2A33A_t.png",
 "class": "PhotoAlbum",
 "label": "Photo Album utama",
 "playList": "this.album_8197979E_9122_8928_41C7_2ADF40C2A33A_AlbumPlayList",
 "id": "album_8197979E_9122_8928_41C7_2ADF40C2A33A"
},
{
 "thumbnailUrl": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_2_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_2",
 "width": 2750,
 "label": "Landing Gear",
 "image": {
  "levels": [
   {
    "url": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "thumbnailUrl": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_1_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_1",
 "width": 2750,
 "label": "Fuselage",
 "image": {
  "levels": [
   {
    "url": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_1.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "items": [
  {
   "media": "this.album_8197979E_9122_8928_41C7_2ADF40C2A33A",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_82296E9E_9A16_937E_41D8_6CD288689749",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.album_86D12D18_91E2_9928_41D3_7F8736D170E9",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_822ACE9E_9A16_937E_41CC_E77ED4EC19B6",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_8A894485_9361_8F18_4152_85372E327B43",
 "yaw": 0.18,
 "popupDistance": 100,
 "hfov": 11.94,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8A894485_9361_8F18_4152_85372E327B43_0_2.png",
    "width": 1023,
    "height": 723,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -40.15,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "items": [
  {
   "media": "this.panorama_9A750A2B_90E1_7B69_4180_384F25D3F804",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_camera"
  },
  {
   "media": "this.panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_camera"
  },
  {
   "media": "this.panorama_9A70BD61_90E1_7918_41E1_55001884C54F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_9A70BD61_90E1_7918_41E1_55001884C54F_camera"
  },
  {
   "media": "this.panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_camera"
  },
  {
   "media": "this.panorama_9A77E39A_90E1_8928_41DB_068B125DB910",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_9A77E39A_90E1_8928_41DB_068B125DB910_camera"
  },
  {
   "media": "this.panorama_9B538638_90E2_8B68_41D5_B7A8084977AE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_camera"
  },
  {
   "media": "this.panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_camera"
  },
  {
   "media": "this.panorama_9A77C92A_90E1_9968_41D3_E37848055C56",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_9A77C92A_90E1_9968_41D3_E37848055C56_camera"
  },
  {
   "media": "this.panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_camera"
  },
  {
   "media": "this.panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "camera": "this.panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 83.88,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_8269BEDD_9A16_90C2_41E1_98CE4B96A19E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_t.jpg",
 "label": "Gambar360(9)",
 "id": "panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9A77C92A_90E1_9968_41D3_E37848055C56",
   "backwardYaw": 96.64,
   "yaw": -96.12,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F",
   "backwardYaw": 96.49,
   "yaw": 171.75,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993",
   "backwardYaw": -0.61,
   "yaw": 96.37,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9ECBB08E_9127_8728_41E0_C62ED25D7673",
  "this.overlay_810180E1_9122_8718_41B9_A37767478990",
  "this.overlay_810DCB8E_9121_9928_41D5_7BF474E09D8F",
  "this.overlay_82723287_9122_8B19_41DE_D7A663126043",
  "this.popup_8B98A911_9366_9939_41D0_6491C606A7A4"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "id": "ImageResource_8BF92EA4_9361_7B1F_41E0_CA15DAE438B8",
 "levels": [
  {
   "url": "media/popup_8DDBF690_936E_8B38_41CC_0121E54AA7E7_0_0.png",
   "width": 2749,
   "height": 1944,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8DDBF690_936E_8B38_41CC_0121E54AA7E7_0_1.png",
   "width": 2048,
   "height": 1448,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8DDBF690_936E_8B38_41CC_0121E54AA7E7_0_2.png",
   "width": 1024,
   "height": 724,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8DDBF690_936E_8B38_41CC_0121E54AA7E7_0_3.png",
   "width": 512,
   "height": 362,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/album_8F0F5C13_9361_9F38_41DC_8CA7008DE5B3_t.png",
 "class": "PhotoAlbum",
 "label": "Photo Album Cessna",
 "playList": "this.album_8F0F5C13_9361_9F38_41DC_8CA7008DE5B3_AlbumPlayList",
 "id": "album_8F0F5C13_9361_9F38_41DC_8CA7008DE5B3"
},
{
 "thumbnailUrl": "media/album_8197979E_9122_8928_41C7_2ADF40C2A33A_0_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_8197979E_9122_8928_41C7_2ADF40C2A33A_0",
 "width": 2749,
 "label": "utama",
 "image": {
  "levels": [
   {
    "url": "media/album_8197979E_9122_8928_41C7_2ADF40C2A33A_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_8A442466_9366_8F1B_41E2_B611ED8FD22F",
 "yaw": -0.25,
 "popupDistance": 100,
 "hfov": 11.99,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8A442466_9366_8F1B_41E2_B611ED8FD22F_0_2.png",
    "width": 1023,
    "height": 723,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -39.87,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_t.jpg",
 "label": "Gambar360(5)",
 "id": "panorama_9A77E39A_90E1_8928_41DB_068B125DB910",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B538638_90E2_8B68_41D5_B7A8084977AE",
   "backwardYaw": -95.79,
   "yaw": 171.72,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3",
   "backwardYaw": 95.61,
   "yaw": -95.79,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_813B413B_9126_8968_41AE_0FA29CC6B2B6",
  "this.overlay_9E427F5A_9122_9928_41D5_E7D8B7B215D9",
  "this.overlay_821F8EE5_9121_7B19_41B8_1D754F1F8BD5",
  "this.popup_8A894485_9361_8F18_4152_85372E327B43"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.21,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81CDEF2D_9A16_9142_41DF_71A4F3FE3C60",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "id": "MainViewerPhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "class": "PhotoAlbumPlayer"
},
{
 "id": "ImageResource_8BF49EA4_9361_7B1F_41D9_511851ADCB73",
 "levels": [
  {
   "url": "media/popup_8A894485_9361_8F18_4152_85372E327B43_0_0.png",
   "width": 2750,
   "height": 1944,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8A894485_9361_8F18_4152_85372E327B43_0_1.png",
   "width": 2047,
   "height": 1447,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8A894485_9361_8F18_4152_85372E327B43_0_2.png",
   "width": 1023,
   "height": 723,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8A894485_9361_8F18_4152_85372E327B43_0_3.png",
   "width": 511,
   "height": 361,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/album_86AC949D_91E1_8F29_41DE_AA636691D562_0_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_86AC949D_91E1_8F29_41DE_AA636691D562_0",
 "width": 2750,
 "label": "5",
 "image": {
  "levels": [
   {
    "url": "media/album_86AC949D_91E1_8F29_41DE_AA636691D562_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_8E983F4A_9362_992B_41DB_241EBC970C8E_0_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_8E983F4A_9362_992B_41DB_241EBC970C8E_0",
 "width": 2750,
 "label": "Propeller",
 "image": {
  "levels": [
   {
    "url": "media/album_8E983F4A_9362_992B_41DB_241EBC970C8E_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_9A70BD61_90E1_7918_41E1_55001884C54F_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_t.jpg",
 "label": "Gambar360(1)",
 "id": "panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9A70BD61_90E1_7918_41E1_55001884C54F",
   "backwardYaw": -171.47,
   "yaw": -96.58,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B",
   "backwardYaw": 171.75,
   "yaw": 96.49,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9E483202_90E2_8B18_41E0_6241B286A26D",
  "this.overlay_9E101A0C_90E3_9B2F_41C5_233C0BDB9638",
  "this.overlay_81D423FC_90E1_88EF_41D7_8CDE6E78D90A",
  "this.popup_8DDBF690_936E_8B38_41CC_0121E54AA7E7"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "data": {
  "label": "Seat"
 },
 "audio": {
  "mp3Url": "media/audio_8E239BA8_9363_9968_41E2_55895FDB4BDB.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_8E239BA8_9363_9968_41E2_55895FDB4BDB.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_8E239BA8_9363_9968_41E2_55895FDB4BDB",
 "autoplay": true
},
{
 "thumbnailUrl": "media/album_869B4585_91E2_8918_41DD_F0DC61EBD6F9_t.png",
 "class": "PhotoAlbum",
 "label": "Photo Album 7",
 "playList": "this.album_869B4585_91E2_8918_41DD_F0DC61EBD6F9_AlbumPlayList",
 "id": "album_869B4585_91E2_8918_41DD_F0DC61EBD6F9"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_9A77C92A_90E1_9968_41D3_E37848055C56_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_8D8DACB1_9362_BF79_41D1_410DF7AD8229",
 "yaw": 0.18,
 "popupDistance": 100,
 "hfov": 11.96,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8D8DACB1_9362_BF79_41D1_410DF7AD8229_0_2.png",
    "width": 1023,
    "height": 723,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -40.01,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 83.74,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_82485EBE_9A16_90BE_41B0_ED8702B05D4E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -83.51,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81334F6B_9A16_91C6_41D7_3CB8D0934C4D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "data": {
  "label": "Engine"
 },
 "audio": {
  "mp3Url": "media/audio_8D322E5A_9363_9B28_41DE_2282248AB1A5.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_8D322E5A_9363_9B28_41DE_2282248AB1A5.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_8D322E5A_9363_9B28_41DE_2282248AB1A5",
 "autoplay": true
},
{
 "thumbnailUrl": "media/album_86D12D18_91E2_9928_41D3_7F8736D170E9_0_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_86D12D18_91E2_9928_41D3_7F8736D170E9_0",
 "width": 2750,
 "label": "6",
 "image": {
  "levels": [
   {
    "url": "media/album_86D12D18_91E2_9928_41D3_7F8736D170E9_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "from": "left",
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_4B8711AA_571D_FDC6_41C4_8313D8AEEDC7",
 "class": "SlideInEffect"
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_66E8932B_70AD_144D_41D6_124667C114CD",
 "to": "left",
 "class": "SlideOutEffect"
},
{
 "thumbnailUrl": "media/album_869B4585_91E2_8918_41DD_F0DC61EBD6F9_0_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_869B4585_91E2_8918_41DD_F0DC61EBD6F9_0",
 "width": 2750,
 "label": "7",
 "image": {
  "levels": [
   {
    "url": "media/album_869B4585_91E2_8918_41DD_F0DC61EBD6F9_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "id": "ImageResource_8EF2B4DF_9362_8F29_41CE_EB62EEDFDCC5",
 "levels": [
  {
   "url": "media/popup_8A420C33_9367_7F78_41D9_8EE46BD8EDFE_0_0.png",
   "width": 2750,
   "height": 1944,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8A420C33_9367_7F78_41D9_8EE46BD8EDFE_0_1.png",
   "width": 2047,
   "height": 1447,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8A420C33_9367_7F78_41D9_8EE46BD8EDFE_0_2.png",
   "width": 1023,
   "height": 723,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8A420C33_9367_7F78_41D9_8EE46BD8EDFE_0_3.png",
   "width": 511,
   "height": 361,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.album_86AC949D_91E1_8F29_41DE_AA636691D562",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_822A7E9E_9A16_937E_41D7_A36AB4203EC6",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_4_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_4",
 "width": 2750,
 "label": "Tail",
 "image": {
  "levels": [
   {
    "url": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_4.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "id": "ImageResource_8BF3FEB3_9361_7B78_41A8_F31846B4D124",
 "levels": [
  {
   "url": "media/popup_8B98A911_9366_9939_41D0_6491C606A7A4_0_0.png",
   "width": 2750,
   "height": 1944,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8B98A911_9366_9939_41D0_6491C606A7A4_0_1.png",
   "width": 2047,
   "height": 1447,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8B98A911_9366_9939_41D0_6491C606A7A4_0_2.png",
   "width": 1023,
   "height": 723,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8B98A911_9366_9939_41D0_6491C606A7A4_0_3.png",
   "width": 511,
   "height": 361,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 83.09,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_811F0F4C_9A16_91C2_41B1_2C23CB7D9540",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_8A420C33_9367_7F78_41D9_8EE46BD8EDFE",
 "yaw": -0.38,
 "popupDistance": 100,
 "hfov": 11.96,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8A420C33_9367_7F78_41D9_8EE46BD8EDFE_0_2.png",
    "width": 1023,
    "height": 723,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -40.02,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "items": [
  {
   "media": "this.album_860FC63C_91EE_8B6F_41B0_17E3C87FDA27",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_822A1E9E_9A16_937E_41DA_1AB2339F6D19",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.21,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_82744ED1_9A16_90C2_41BE_3EB4045C2B51",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.21,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81533F8B_9A16_9146_41E1_279CEC566E58",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "data": {
  "label": "Fuselage"
 },
 "audio": {
  "mp3Url": "media/audio_8C262CF1_9363_98F8_41CD_22768F304AE2.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_8C262CF1_9363_98F8_41CD_22768F304AE2.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_8C262CF1_9363_98F8_41CD_22768F304AE2",
 "autoplay": true
},
{
 "thumbnailUrl": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_t.jpg",
 "label": "Gambar360(8)",
 "id": "panorama_9A77C92A_90E1_9968_41D3_E37848055C56",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B",
   "backwardYaw": -96.12,
   "yaw": 96.64,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F",
   "backwardYaw": 95.76,
   "yaw": -95.79,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9E836F8D_9126_9928_41D0_8B5E4202A5A5",
  "this.overlay_8101F9E1_9126_9919_41D2_8BB6736D4B5B",
  "this.overlay_822D8A22_9121_7B18_41E1_6762177CD24C",
  "this.popup_8FE376F7_9367_88F8_41DF_32CFDC8CB8EC"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_t.jpg",
 "label": "Gambar360(6)",
 "id": "panorama_9B538638_90E2_8B68_41D5_B7A8084977AE",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9A77E39A_90E1_8928_41DB_068B125DB910",
   "backwardYaw": 171.72,
   "yaw": -95.79,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F",
   "backwardYaw": -171.8,
   "yaw": 95.76,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_812F9EED_9127_78E8_41D8_23C2F9071D43",
  "this.overlay_811DD0F0_9121_88F7_41CE_3CE4363620A3",
  "this.overlay_83C43CCC_9121_9F2F_41E1_E0F1EAB1644D",
  "this.popup_8F916310_9361_8938_41B5_0EFCD5B64A36"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 8.2,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81DDCF1C_9A16_9143_41D7_9FE7D19B59FF",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "id": "ImageResource_8BF72EA4_9361_7B1F_41D5_51E5369FC5A9",
 "levels": [
  {
   "url": "media/popup_8F916310_9361_8938_41B5_0EFCD5B64A36_0_0.png",
   "width": 2750,
   "height": 1944,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8F916310_9361_8938_41B5_0EFCD5B64A36_0_1.png",
   "width": 2047,
   "height": 1447,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8F916310_9361_8938_41B5_0EFCD5B64A36_0_2.png",
   "width": 1023,
   "height": 723,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8F916310_9361_8938_41B5_0EFCD5B64A36_0_3.png",
   "width": 511,
   "height": 361,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "data": {
  "label": "Propeller"
 },
 "audio": {
  "mp3Url": "media/audio_8D451F17_9363_9939_41D0_43AE694F927A.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_8D451F17_9363_9939_41D0_43AE694F927A.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_8D451F17_9363_9939_41D0_43AE694F927A",
 "autoplay": true
},
{
 "thumbnailUrl": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_t.jpg",
 "label": "Gambar360(2)",
 "id": "panorama_9A750A2B_90E1_7B69_4180_384F25D3F804",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9A70BD61_90E1_7918_41E1_55001884C54F",
   "backwardYaw": -96.26,
   "yaw": 1.86,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9FF855FA_90E2_88E8_41D7_B8B1C4D3C6E2",
  "this.overlay_9F6BAC18_90E2_9F28_41E1_32D54C311B02"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/album_86FEFD66_91EE_991B_41D6_A04D000805D2_0_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_86FEFD66_91EE_991B_41D6_A04D000805D2_0",
 "width": 2750,
 "label": "3",
 "image": {
  "levels": [
   {
    "url": "media/album_86FEFD66_91EE_991B_41D6_A04D000805D2_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "id": "ImageResource_8BF1CEA4_9361_7B1F_41DF_1A550B108B0C",
 "levels": [
  {
   "url": "media/popup_8A442466_9366_8F1B_41E2_B611ED8FD22F_0_0.png",
   "width": 2750,
   "height": 1944,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8A442466_9366_8F1B_41E2_B611ED8FD22F_0_1.png",
   "width": 2047,
   "height": 1447,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8A442466_9366_8F1B_41E2_B611ED8FD22F_0_2.png",
   "width": 1023,
   "height": 723,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8A442466_9366_8F1B_41E2_B611ED8FD22F_0_3.png",
   "width": 511,
   "height": 361,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/album_86AC949D_91E1_8F29_41DE_AA636691D562_t.png",
 "class": "PhotoAlbum",
 "label": "Photo Album 5",
 "playList": "this.album_86AC949D_91E1_8F29_41DE_AA636691D562_AlbumPlayList",
 "id": "album_86AC949D_91E1_8F29_41DE_AA636691D562"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.album_8F0F5C13_9361_9F38_41DC_8CA7008DE5B3",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_82295E9E_9A16_937E_41DB_5E144ABBEB68",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_8DDBF690_936E_8B38_41CC_0121E54AA7E7",
 "yaw": 0.07,
 "popupDistance": 100,
 "hfov": 8.09,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8DDBF690_936E_8B38_41CC_0121E54AA7E7_0_2.png",
    "width": 1024,
    "height": 724,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -12.67,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -8.25,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81858EFD_9A16_90C2_41DF_AE935DFB944E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_t.jpg",
 "label": "Gambar360(4)",
 "id": "panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9A70BD61_90E1_7918_41E1_55001884C54F",
   "backwardYaw": 95.61,
   "yaw": -96.91,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9A77E39A_90E1_8928_41DB_068B125DB910",
   "backwardYaw": -95.79,
   "yaw": 95.61,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9EAB70D0_9121_8738_41C0_A6F48C8ED2BF",
  "this.overlay_8102982B_9122_8768_41B2_0655B3A9E4E3",
  "this.overlay_8259DBBF_9126_9968_41DB_72E9E3C174CC",
  "this.popup_8D8DACB1_9362_BF79_41D1_410DF7AD8229"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/album_868D4E7C_91EF_BBE8_41DA_F0765CC7D54C_0_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_868D4E7C_91EF_BBE8_41DA_F0765CC7D54C_0",
 "width": 2750,
 "label": "2",
 "image": {
  "levels": [
   {
    "url": "media/album_868D4E7C_91EF_BBE8_41DA_F0765CC7D54C_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "from": "left",
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_4C974746_571D_6541_41CE_76A308A87323",
 "class": "SlideInEffect"
},
{
 "thumbnailUrl": "media/album_868D4E7C_91EF_BBE8_41DA_F0765CC7D54C_t.png",
 "class": "PhotoAlbum",
 "label": "Photo Album 2",
 "playList": "this.album_868D4E7C_91EF_BBE8_41DA_F0765CC7D54C_AlbumPlayList",
 "id": "album_868D4E7C_91EF_BBE8_41DA_F0765CC7D54C"
},
{
 "items": [
  {
   "media": "this.album_8E983F4A_9362_992B_41DB_241EBC970C8E",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_8229BE9E_9A16_937E_41E3_09A341E783A4",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/album_860FC63C_91EE_8B6F_41B0_17E3C87FDA27_t.png",
 "class": "PhotoAlbum",
 "label": "Photo Album 4",
 "playList": "this.album_860FC63C_91EE_8B6F_41B0_17E3C87FDA27_AlbumPlayList",
 "id": "album_860FC63C_91EE_8B6F_41B0_17E3C87FDA27"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_8F916310_9361_8938_41B5_0EFCD5B64A36",
 "yaw": -0.05,
 "popupDistance": 100,
 "hfov": 11.97,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8F916310_9361_8938_41B5_0EFCD5B64A36_0_2.png",
    "width": 1023,
    "height": 723,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -39.99,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "items": [
  {
   "media": "this.album_8F0BDDD2_9361_F938_41DD_F2884A6B3480",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_8229EE9E_9A16_937E_41DA_076E48AC0EFC",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -83.36,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81012F6B_9A16_91C6_41D5_D576CC24D57E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -84.24,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81451F8B_9A16_9146_41CC_73C676159748",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_8FE376F7_9367_88F8_41DF_32CFDC8CB8EC",
 "yaw": 0.02,
 "popupDistance": 100,
 "hfov": 11.96,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8FE376F7_9367_88F8_41DF_32CFDC8CB8EC_0_2.png",
    "width": 1023,
    "height": 723,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -40.01,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -8.28,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81ABDF1C_9A16_9143_41E2_52471CCEB010",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.39,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81233F7B_9A16_91C5_41D5_8E303CB03D1B",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 400,
 "easing": "quad_in",
 "id": "effect_618C5950_7067_14DB_41DB_D2CA7B61EE3C",
 "to": "left",
 "class": "SlideOutEffect"
},
{
 "thumbnailUrl": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_0_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_0",
 "width": 2750,
 "label": "Engine",
 "image": {
  "levels": [
   {
    "url": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "data": {
  "label": "ttsmaker-file-2026-4-16-16-6-21"
 },
 "audio": {
  "mp3Url": "media/audio_80A15162_9121_891B_41DE_C8ECF2DBA9E4.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_80A15162_9121_891B_41DE_C8ECF2DBA9E4.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_80A15162_9121_891B_41DE_C8ECF2DBA9E4",
 "autoplay": true
},
{
 "thumbnailUrl": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_t.jpg",
 "label": "Gambar360(10)",
 "id": "panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B",
   "backwardYaw": 96.37,
   "yaw": -0.61,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_810D103A_9121_8768_41E1_52372E3D21A7",
  "this.overlay_81646FF3_9121_98F8_41E0_973E4288E80B"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_t.jpg",
 "label": "Gambar360(3)",
 "id": "panorama_9A70BD61_90E1_7918_41E1_55001884C54F",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9A750A2B_90E1_7B69_4180_384F25D3F804",
   "backwardYaw": 1.86,
   "yaw": -96.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3",
   "backwardYaw": -96.91,
   "yaw": 95.61,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F",
   "backwardYaw": -96.58,
   "yaw": -171.47,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9EB399A3_9123_7918_41DA_FEAF398FED42",
  "this.overlay_9E292553_9123_8939_41C7_EE3639ADEC8A",
  "this.overlay_9EEC2FF0_912F_98F8_41BA_08FED39C9ECA",
  "this.overlay_82354CDD_9127_9F28_41CB_E769ED0C82B1",
  "this.popup_8A420C33_9367_7F78_41D9_8EE46BD8EDFE"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_3_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_3",
 "width": 2750,
 "label": "Seat",
 "image": {
  "levels": [
   {
    "url": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_3.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.14,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_81EFBF3C_9A16_9142_4195_053083B3928B",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_5_t.png",
 "class": "Photo",
 "duration": 5000,
 "id": "album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_5",
 "width": 2750,
 "label": "Wings",
 "image": {
  "levels": [
   {
    "url": "media/album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_5.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1944
},
{
 "items": [
  {
   "media": "this.album_869B4585_91E2_8918_41DD_F0DC61EBD6F9",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_822ADE9E_9A16_937E_41DD_ED371B3C845B",
 "class": "PlayList"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "minHeight": 50,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 100,
 "borderSize": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "shadow": false,
 "displayTooltipInTouchScreens": true,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--- LEFT PANEL"
 },
 "children": [
  "this.Container_8A18AC79_9123_8F7F_41CD_F462FB642D91",
  "this.Container_8A18FC79_9123_8F7F_41A3_2B6ACF375A5F"
 ],
 "id": "Container_8A191C79_9123_8F7F_41DF_BA18D2268CD2",
 "left": "0.02%",
 "backgroundOpacity": 0,
 "width": 300,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "height": "100%",
 "layout": "absolute"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "paddingBottom": 0,
 "class": "UIComponent",
 "propagateClick": false,
 "paddingRight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "UIComponent29421"
 },
 "paddingTop": 0
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "paddingBottom": 0,
 "class": "ZoomImage",
 "propagateClick": false,
 "paddingRight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColorRatios": [],
 "minWidth": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [],
 "paddingLeft": 0,
 "visible": false,
 "data": {
  "name": "ZoomImage29422"
 },
 "paddingTop": 0,
 "scaleMode": "custom"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "data": {
  "name": "CloseButton29423"
 },
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "pressedIconColor": "#888888",
 "shadowColor": "#000000",
 "iconLineWidth": 5,
 "right": 10,
 "borderRadius": 0,
 "iconColor": "#000000",
 "iconHeight": 20,
 "minHeight": 0,
 "paddingBottom": 5,
 "class": "CloseButton",
 "iconWidth": 20,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "layout": "horizontal",
 "top": 10,
 "rollOverIconColor": "#666666",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "minWidth": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontColor": "#FFFFFF",
 "paddingLeft": 5,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "paddingTop": 5,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "items": [
  {
   "media": "this.album_8E983F4A_9362_992B_41DB_241EBC970C8E_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.53",
     "zoomFactor": 1.1,
     "y": "0.25",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_8E983F4A_9362_992B_41DB_241EBC970C8E_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A77C92A_90E1_9968_41D3_E37848055C56, this.camera_81533F8B_9A16_9146_41E1_279CEC566E58); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876D316B_9122_89E8_41DF_1E2AA3894FBD",
   "pitch": -21.38,
   "yaw": 95.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.91,
   "distance": 100
  }
 ],
 "id": "overlay_9E614CD2_9126_FF3B_41D3_49071EF5531E",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 13.91,
   "yaw": 95.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9B538638_90E2_8B68_41D5_B7A8084977AE, this.camera_81451F8B_9A16_9146_41CC_73C676159748); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876D816B_9122_89E8_41E0_65587F0C3BE5",
   "pitch": -22.22,
   "yaw": -171.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.83,
   "distance": 100
  }
 ],
 "id": "overlay_9E4996F5_9123_88F9_41D1_76B9AED69EE8",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 13.83,
   "yaw": -171.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8A442466_9366_8F1B_41E2_B611ED8FD22F, {'pressedIconColor':'#888888','paddingRight':0,'rollOverBackgroundOpacity':0,'pressedBorderSize':0,'rollOverIconHeight':200,'backgroundOpacity':0,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':10,'iconWidth':200,'iconHeight':200,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':1,'pressedBackgroundColorDirection':'vertical','iconLineWidth':1,'paddingBottom':0,'rollOverIconColor':'#666666','pressedIconHeight':200,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':0,'paddingLeft':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0,'borderColor':'#000000','rollOverIconWidth':200,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':200,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_8BF1CEA4_9361_7B1F_41DF_1A550B108B0C, null, null, null, this.audio_8EDE2C45_9363_9F18_41D8_989EF8C833DD, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -0.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.99,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0_HS_2_0.png",
      "width": 86,
      "height": 96,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.87
  }
 ],
 "id": "overlay_826FFFCF_9121_9928_41B0_7D08312D42BA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 11.99,
   "yaw": -0.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "media": "this.album_86D12D18_91E2_9928_41D3_7F8736D170E9_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.65",
     "zoomFactor": 1.1,
     "y": "0.44",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_86D12D18_91E2_9928_41D3_7F8736D170E9_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_867242B7_91EE_8B78_41D4_4503D1F607DD_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.71",
     "zoomFactor": 1.1,
     "y": "0.36",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_867242B7_91EE_8B78_41D4_4503D1F607DD_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_86FEFD66_91EE_991B_41D6_A04D000805D2_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.50",
     "zoomFactor": 1.1,
     "y": "0.27",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_86FEFD66_91EE_991B_41D6_A04D000805D2_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.44",
     "zoomFactor": 1.1,
     "y": "0.46",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_1",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.58",
     "zoomFactor": 1.1,
     "y": "0.63",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_2",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.60",
     "zoomFactor": 1.1,
     "y": "0.71",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_3",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.61",
     "zoomFactor": 1.1,
     "y": "0.65",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_4",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.56",
     "zoomFactor": 1.1,
     "y": "0.29",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_5",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.70",
     "zoomFactor": 1.1,
     "y": "0.51",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_8F0BDDD2_9361_F938_41DD_F2884A6B3480_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_8197979E_9122_8928_41C7_2ADF40C2A33A_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.30",
     "zoomFactor": 1.1,
     "y": "0.26",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_8197979E_9122_8928_41C7_2ADF40C2A33A_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A77C92A_90E1_9968_41D3_E37848055C56, this.camera_81012F6B_9A16_91C6_41D5_D576CC24D57E); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8762A16C_9122_89E8_41B2_93C28C170635",
   "pitch": -21.1,
   "yaw": -96.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.93,
   "distance": 100
  }
 ],
 "id": "overlay_9ECBB08E_9127_8728_41E0_C62ED25D7673",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 13.93,
   "yaw": -96.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F, this.camera_81334F6B_9A16_91C6_41D7_3CB8D0934C4D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8763616C_9122_89E8_41BE_1BEC1671DAB9",
   "pitch": -22.18,
   "yaw": 171.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.83,
   "distance": 100
  }
 ],
 "id": "overlay_810180E1_9122_8718_41B9_A37767478990",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 13.83,
   "yaw": 171.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993, this.camera_81233F7B_9A16_91C5_41D5_8E303CB03D1B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8763316C_9122_89E8_41BF_087BFF501507",
   "pitch": -0.46,
   "yaw": 96.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.3,
   "distance": 100
  }
 ],
 "id": "overlay_810DCB8E_9121_9928_41D5_7BF474E09D8F",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 16.3,
   "yaw": 96.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8B98A911_9366_9939_41D0_6491C606A7A4, {'pressedIconColor':'#888888','paddingRight':0,'rollOverBackgroundOpacity':0,'pressedBorderSize':0,'rollOverIconHeight':200,'backgroundOpacity':0,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':10,'iconWidth':200,'iconHeight':200,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':1,'pressedBackgroundColorDirection':'vertical','iconLineWidth':1,'paddingBottom':0,'rollOverIconColor':'#666666','pressedIconHeight':200,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':0,'paddingLeft':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0,'borderColor':'#000000','rollOverIconWidth':200,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':200,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_8BF3FEB3_9361_7B78_41A8_F31846B4D124, null, null, null, this.audio_8C69C709_9366_8928_41E2_4A47D1894D8E, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 0.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.94,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0_HS_3_0.png",
      "width": 86,
      "height": 96,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.16
  }
 ],
 "id": "overlay_82723287_9122_8B19_41DE_D7A663126043",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 11.94,
   "yaw": 0.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "media": "this.album_8F0F5C13_9361_9F38_41DC_8CA7008DE5B3_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.28",
     "zoomFactor": 1.1,
     "y": "0.35",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_8F0F5C13_9361_9F38_41DC_8CA7008DE5B3_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3, this.camera_81FD0F3C_9A16_9142_41B9_C74E866176B1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876C715C_9122_8928_41CE_039A7A7457FD",
   "pitch": -20.26,
   "yaw": -95.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.01,
   "distance": 100
  }
 ],
 "id": "overlay_813B413B_9126_8968_41AE_0FA29CC6B2B6",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 14.01,
   "yaw": -95.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9B538638_90E2_8B68_41D5_B7A8084977AE, this.camera_81CDEF2D_9A16_9142_41DF_71A4F3FE3C60); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876CC15C_9122_8928_41DE_83B5871B39BA",
   "pitch": -22.34,
   "yaw": 171.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.81,
   "distance": 100
  }
 ],
 "id": "overlay_9E427F5A_9122_9928_41D5_E7D8B7B215D9",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 13.81,
   "yaw": 171.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8A894485_9361_8F18_4152_85372E327B43, {'pressedIconColor':'#888888','paddingRight':0,'rollOverBackgroundOpacity':0,'pressedBorderSize':0,'rollOverIconHeight':200,'backgroundOpacity':0,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':10,'iconWidth':200,'iconHeight':200,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':1,'pressedBackgroundColorDirection':'vertical','iconLineWidth':1,'paddingBottom':0,'rollOverIconColor':'#666666','pressedIconHeight':200,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':0,'paddingLeft':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0,'borderColor':'#000000','rollOverIconWidth':200,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':200,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_8BF49EA4_9361_7B1F_41D9_511851ADCB73, null, null, null, this.audio_8CE8CD9E_9363_9928_41A0_097AE970218A, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 0.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.94,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0_HS_2_0.png",
      "width": 86,
      "height": 96,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.15
  }
 ],
 "id": "overlay_821F8EE5_9121_7B19_41B8_1D754F1F8BD5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 11.94,
   "yaw": 0.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8DDBF690_936E_8B38_41CC_0121E54AA7E7, {'pressedIconColor':'#888888','paddingRight':0,'rollOverBackgroundOpacity':0,'pressedBorderSize':0,'rollOverIconHeight':200,'backgroundOpacity':0,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':10,'iconWidth':200,'iconHeight':200,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':1,'pressedBackgroundColorDirection':'vertical','iconLineWidth':1,'paddingBottom':0,'rollOverIconColor':'#666666','pressedIconHeight':200,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':0,'paddingLeft':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0,'borderColor':'#000000','rollOverIconWidth':200,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':200,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_8BF92EA4_9361_7B1F_41E0_CA15DAE438B8, null, null, null, this.audio_80A15162_9121_891B_41DE_C8ECF2DBA9E4, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 0.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.09,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0_HS_2_0.png",
      "width": 46,
      "height": 53,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.67
  }
 ],
 "id": "overlay_9E483202_90E2_8B18_41E0_6241B286A26D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 8.09,
   "yaw": 0.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A70BD61_90E1_7918_41E1_55001884C54F, this.camera_81913EED_9A16_90C2_41D9_BA9AF6E25624); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_802DE0F3_911E_88F8_41E0_9F7283D50C57",
   "pitch": -16.43,
   "yaw": -96.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.32,
   "distance": 100
  }
 ],
 "id": "overlay_9E101A0C_90E3_9B2F_41C5_233C0BDB9638",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 14.32,
   "yaw": -96.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0_HS_4_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B, this.camera_81858EFD_9A16_90C2_41DF_AE935DFB944E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_802E20F3_911E_88F8_41D0_F1CE975A575D",
   "pitch": -16.17,
   "yaw": 96.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.34,
   "distance": 100
  }
 ],
 "id": "overlay_81D423FC_90E1_88EF_41D7_8CDE6E78D90A",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 14.34,
   "yaw": 96.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0_HS_5_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "media": "this.album_869B4585_91E2_8918_41DD_F0DC61EBD6F9_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.47",
     "zoomFactor": 1.1,
     "y": "0.48",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_869B4585_91E2_8918_41DD_F0DC61EBD6F9_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B, this.camera_8269BEDD_9A16_90C2_41E1_98CE4B96A19E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8762616C_9122_89E8_4161_48BFE9ED1BDF",
   "pitch": -23.76,
   "yaw": 96.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.67,
   "distance": 100
  }
 ],
 "id": "overlay_9E836F8D_9126_9928_41D0_8B5E4202A5A5",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 13.67,
   "yaw": 96.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.76,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F, this.camera_819E9EED_9A16_90C2_41E1_FCE8A37FD0BA); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8762D16C_9122_89E8_41E1_E02F6A287971",
   "pitch": -20.93,
   "yaw": -95.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.95,
   "distance": 100
  }
 ],
 "id": "overlay_8101F9E1_9126_9919_41D2_8BB6736D4B5B",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 13.95,
   "yaw": -95.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8FE376F7_9367_88F8_41DF_32CFDC8CB8EC, {'pressedIconColor':'#888888','paddingRight':0,'rollOverBackgroundOpacity':0,'pressedBorderSize':0,'rollOverIconHeight':200,'backgroundOpacity':0,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':10,'iconWidth':200,'iconHeight':200,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':1,'pressedBackgroundColorDirection':'vertical','iconLineWidth':1,'paddingBottom':0,'rollOverIconColor':'#666666','pressedIconHeight':200,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':0,'paddingLeft':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0,'borderColor':'#000000','rollOverIconWidth':200,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':200,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_8BF18EB3_9361_7B78_41CC_9DE320E6FEA0, null, null, null, this.audio_8E239BA8_9363_9968_41E2_55895FDB4BDB, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 0.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.96,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0_HS_2_0.png",
      "width": 86,
      "height": 96,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.01
  }
 ],
 "id": "overlay_822D8A22_9121_7B18_41E1_6762177CD24C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 11.96,
   "yaw": 0.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A77E39A_90E1_8928_41DB_068B125DB910, this.camera_81ABDF1C_9A16_9143_41E2_52471CCEB010); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876C916B_9122_89E8_41DD_AB59B97295F6",
   "pitch": -20.26,
   "yaw": -95.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.01,
   "distance": 100
  }
 ],
 "id": "overlay_812F9EED_9127_78E8_41D8_23C2F9071D43",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 14.01,
   "yaw": -95.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F, this.camera_81DDCF1C_9A16_9143_41D7_9FE7D19B59FF); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876D616B_9122_89E8_41D9_534725056053",
   "pitch": -21.38,
   "yaw": 95.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.91,
   "distance": 100
  }
 ],
 "id": "overlay_811DD0F0_9121_88F7_41CE_3CE4363620A3",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 13.91,
   "yaw": 95.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8F916310_9361_8938_41B5_0EFCD5B64A36, {'pressedIconColor':'#888888','paddingRight':0,'rollOverBackgroundOpacity':0,'pressedBorderSize':0,'rollOverIconHeight':200,'backgroundOpacity':0,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':10,'iconWidth':200,'iconHeight':200,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':1,'pressedBackgroundColorDirection':'vertical','iconLineWidth':1,'paddingBottom':0,'rollOverIconColor':'#666666','pressedIconHeight':200,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':0,'paddingLeft':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0,'borderColor':'#000000','rollOverIconWidth':200,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':200,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_8BF72EA4_9361_7B1F_41D5_51E5369FC5A9, null, null, null, this.audio_8C262CF1_9363_98F8_41CD_22768F304AE2, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -0.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.97,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0_HS_2_0.png",
      "width": 86,
      "height": 96,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.99
  }
 ],
 "id": "overlay_83C43CCC_9121_9F2F_41E1_E0F1EAB1644D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 11.97,
   "yaw": -0.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A70BD61_90E1_7918_41E1_55001884C54F, this.camera_82485EBE_9A16_90BE_41B0_ED8702B05D4E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C2D2404_937E_8F18_4199_5E5A5E6CD368",
   "pitch": -12.73,
   "yaw": 1.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.57,
   "distance": 100
  }
 ],
 "id": "overlay_9FF855FA_90E2_88E8_41D7_B8B1C4D3C6E2",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 14.57,
   "yaw": 1.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_802D70F3_911E_88F8_41E0_853C7817E089",
   "pitch": -12.88,
   "yaw": 28.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.74,
   "distance": 50
  }
 ],
 "id": "overlay_9F6BAC18_90E2_9F28_41E1_32D54C311B02",
 "data": {
  "label": "Arrow 05c Right-Up"
 },
 "maps": [
  {
   "hfov": 13.74,
   "yaw": 28.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0_HS_1_0_0_map.gif",
      "width": 44,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "media": "this.album_86AC949D_91E1_8F29_41DE_AA636691D562_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.56",
     "zoomFactor": 1.1,
     "y": "0.46",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_86AC949D_91E1_8F29_41DE_AA636691D562_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A77E39A_90E1_8928_41DB_068B125DB910, this.camera_82744ED1_9A16_90C2_41BE_3EB4045C2B51); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876FD15C_9122_8928_41DD_2F74680B28D2",
   "pitch": -20.18,
   "yaw": 95.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.02,
   "distance": 100
  }
 ],
 "id": "overlay_9EAB70D0_9121_8738_41C0_A6F48C8ED2BF",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 14.02,
   "yaw": 95.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A70BD61_90E1_7918_41E1_55001884C54F, this.camera_827D0ECD_9A16_90DD_41D1_3279B2F3BC5E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876F915C_9122_8928_41C1_1720E72ACFC2",
   "pitch": -23.41,
   "yaw": -96.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.7,
   "distance": 100
  }
 ],
 "id": "overlay_8102982B_9122_8768_41B2_0655B3A9E4E3",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 13.7,
   "yaw": -96.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8D8DACB1_9362_BF79_41D1_410DF7AD8229, {'pressedIconColor':'#888888','paddingRight':0,'rollOverBackgroundOpacity':0,'pressedBorderSize':0,'rollOverIconHeight':200,'backgroundOpacity':0,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':10,'iconWidth':200,'iconHeight':200,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':1,'pressedBackgroundColorDirection':'vertical','iconLineWidth':1,'paddingBottom':0,'rollOverIconColor':'#666666','pressedIconHeight':200,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':0,'paddingLeft':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0,'borderColor':'#000000','rollOverIconWidth':200,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':200,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_8BF5FEA4_9361_7B1F_41DA_D6A16249EF7C, null, null, null, this.audio_8D322E5A_9363_9B28_41DE_2282248AB1A5, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 0.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.96,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0_HS_2_0.png",
      "width": 86,
      "height": 96,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.01
  }
 ],
 "id": "overlay_8259DBBF_9126_9968_41DB_72E9E3C174CC",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 11.96,
   "yaw": 0.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "media": "this.album_868D4E7C_91EF_BBE8_41DA_F0765CC7D54C_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.35",
     "zoomFactor": 1.1,
     "y": "0.40",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_868D4E7C_91EF_BBE8_41DA_F0765CC7D54C_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_860FC63C_91EE_8B6F_41B0_17E3C87FDA27_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.73",
     "zoomFactor": 1.1,
     "y": "0.52",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_860FC63C_91EE_8B6F_41B0_17E3C87FDA27_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B, this.camera_81BA9F0D_9A16_9142_41C1_95BE99173721); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8763A16D_9122_89E9_41DE_9E5100B6BA20",
   "pitch": -13.6,
   "yaw": -0.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.52,
   "distance": 100
  }
 ],
 "id": "overlay_810D103A_9121_8768_41E1_52372E3D21A7",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 14.52,
   "yaw": -0.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8760616D_9122_89E9_41D4_0CDEFD902E7A",
   "pitch": -15.69,
   "yaw": -25.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.32,
   "distance": 50
  }
 ],
 "id": "overlay_81646FF3_9121_98F8_41E0_973E4288E80B",
 "data": {
  "label": "Arrow 05c Left-Up"
 },
 "maps": [
  {
   "hfov": 15.32,
   "yaw": -25.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0_HS_1_0_0_map.gif",
      "width": 44,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3, this.camera_811F0F4C_9A16_91C2_41B1_2C23CB7D9540); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876EF15C_9122_8928_41D6_E656214130F7",
   "pitch": -20.18,
   "yaw": 95.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.02,
   "distance": 100
  }
 ],
 "id": "overlay_9EB399A3_9123_7918_41DA_FEAF398FED42",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 14.02,
   "yaw": 95.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F, this.camera_8111BF5B_9A16_91C6_41D8_C430A8BA961E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876EA15C_9122_8928_41D9_74BBF0343559",
   "pitch": -22.73,
   "yaw": -171.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.77,
   "distance": 100
  }
 ],
 "id": "overlay_9E292553_9123_8939_41C7_EE3639ADEC8A",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "hfov": 13.77,
   "yaw": -171.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9A750A2B_90E1_7B69_4180_384F25D3F804, this.camera_81EFBF3C_9A16_9142_4195_053083B3928B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876F015C_9122_8928_41CB_0B9FF67536AF",
   "pitch": -0.35,
   "yaw": -96.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.3,
   "distance": 100
  }
 ],
 "id": "overlay_9EEC2FF0_912F_98F8_41BA_08FED39C9ECA",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 16.3,
   "yaw": -96.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_8A420C33_9367_7F78_41D9_8EE46BD8EDFE, {'pressedIconColor':'#888888','paddingRight':0,'rollOverBackgroundOpacity':0,'pressedBorderSize':0,'rollOverIconHeight':200,'backgroundOpacity':0,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':10,'iconWidth':200,'iconHeight':200,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':1,'pressedBackgroundColorDirection':'vertical','iconLineWidth':1,'paddingBottom':0,'rollOverIconColor':'#666666','pressedIconHeight':200,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':0,'paddingLeft':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0,'borderColor':'#000000','rollOverIconWidth':200,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':200,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_8EF2B4DF_9362_8F29_41CE_EB62EEDFDCC5, null, null, null, this.audio_8D451F17_9363_9939_41D0_43AE694F927A, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -0.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.96,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0_HS_3_0.png",
      "width": 86,
      "height": 96,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.02
  }
 ],
 "id": "overlay_82354CDD_9127_9F28_41CB_E769ED0C82B1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 11.96,
   "yaw": -0.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_8A189C79_9123_8F7F_41CF_F67056588CB6",
  "this.IconButton_8A188C79_9123_8F7F_41B0_62EB121E9E21"
 ],
 "id": "Container_8A18AC79_9123_8F7F_41CD_F462FB642D91",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 66,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "height": "100%",
 "layout": "absolute"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Image_8A18DC79_9123_8F7F_41D0_094EFC579C24",
  "this.Container_8A18CC79_9123_8F7F_41BF_A50617A1690A",
  "this.Container_8A19EC79_9123_8F7F_41B4_B62CCEA728C2"
 ],
 "height": "100%",
 "id": "Container_8A18FC79_9123_8F7F_41A3_2B6ACF375A5F",
 "left": "0%",
 "backgroundOpacity": 0.7,
 "width": 300,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 40,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 40,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "paddingLeft": 40,
 "horizontalAlign": "left",
 "paddingTop": 40,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_876D316B_9122_89E8_41DF_1E2AA3894FBD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A77D663_90E1_8B19_41C3_0A6DA67DA99F_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_876D816B_9122_89E8_41E0_65587F0C3BE5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8762A16C_9122_89E8_41B2_93C28C170635",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8763616C_9122_89E8_41BE_1BEC1671DAB9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A770BF3_90E1_98F9_41B1_BD37CC4AE12B_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8763316C_9122_89E8_41BF_087BFF501507",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_876C715C_9122_8928_41CE_039A7A7457FD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A77E39A_90E1_8928_41DB_068B125DB910_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_876CC15C_9122_8928_41DE_83B5871B39BA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0_HS_4_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_802DE0F3_911E_88F8_41E0_9F7283D50C57",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A77FF2C_90E1_9968_41C5_A94726CDD51F_0_HS_5_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_802E20F3_911E_88F8_41D0_F1CE975A575D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8762616C_9122_89E8_4161_48BFE9ED1BDF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A77C92A_90E1_9968_41D3_E37848055C56_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8762D16C_9122_89E8_41E1_E02F6A287971",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_876C916B_9122_89E8_41DD_AB59B97295F6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9B538638_90E2_8B68_41D5_B7A8084977AE_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_876D616B_9122_89E8_41D9_534725056053",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8C2D2404_937E_8F18_4199_5E5A5E6CD368",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A750A2B_90E1_7B69_4180_384F25D3F804_0_HS_1_0.png",
   "width": 560,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_802D70F3_911E_88F8_41E0_853C7817E089",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_876FD15C_9122_8928_41DD_2F74680B28D2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A77D0C2_90E1_8718_41C8_B6ED8FEA0EB3_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_876F915C_9122_8928_41C1_1720E72ACFC2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8763A16D_9122_89E9_41DE_9E5100B6BA20",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A77E1F5_90E1_88F8_41DE_C1CF40FA3993_0_HS_1_0.png",
   "width": 560,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8760616D_9122_89E9_41D4_0CDEFD902E7A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_876EF15C_9122_8928_41D6_E656214130F7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_876EA15C_9122_8928_41D9_74BBF0343559",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9A70BD61_90E1_7918_41E1_55001884C54F_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_876F015C_9122_8928_41CB_0B9FF67536AF",
 "frameDuration": 41
},
{
 "data": {
  "name": "Container black"
 },
 "height": "100%",
 "id": "Container_8A189C79_9123_8F7F_41CF_F67056588CB6",
 "left": "0%",
 "backgroundOpacity": 0.4,
 "width": 36,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "maxHeight": 80,
 "id": "IconButton_8A188C79_9123_8F7F_41B0_62EB121E9E21",
 "backgroundOpacity": 0,
 "width": 50,
 "borderRadius": 0,
 "right": "9.09%",
 "iconURL": "skin/IconButton_8A188C79_9123_8F7F_41B0_62EB121E9E21.png",
 "rollOverIconURL": "skin/IconButton_8A188C79_9123_8F7F_41B0_62EB121E9E21_rollover.png",
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "IconButton",
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "40%",
 "bottom": "40%",
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "minWidth": 1,
 "shadow": false,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 80
},
{
 "maxHeight": 1095,
 "height": "25.041%",
 "id": "Image_8A18DC79_9123_8F7F_41D0_094EFC579C24",
 "backgroundOpacity": 0,
 "width": "70.091%",
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "right": "14.91%",
 "url": "skin/Image_8A18DC79_9123_8F7F_41D0_094EFC579C24.png",
 "minHeight": 30,
 "paddingBottom": 0,
 "class": "Image",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 40,
 "shadow": false,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "data": {
  "name": "Image Company"
 },
 "paddingTop": 0,
 "maxWidth": 1095
},
{
 "data": {
  "name": "-Container buttons"
 },
 "children": [
  "this.Container_8A183C79_9123_8F7F_41DF_D9617B12C06E",
  "this.Button_8A182C79_9123_8F7F_41D6_9A312ED6F560",
  "this.Container_8A181C79_9123_8F7F_41DF_7A72388CB8BF",
  "this.Button_8A180C79_9123_8F7F_41C2_5B181016E6F1",
  "this.Container_8A187C79_9123_8F7F_41E0_13ABB09D36A1",
  "this.Button_8A184C79_9123_8F7F_41D8_A4E93A4F9F83",
  "this.Container_8A19FC79_9123_8F7F_4194_1454B7C1355F"
 ],
 "id": "Container_8A18CC79_9123_8F7F_41BF_A50617A1690A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "25%",
 "bottom": "25%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "layout": "vertical"
},
{
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_8A19DC79_9123_8F7F_41B6_0224ED954A08",
  "this.HTMLText_8A193C79_9123_8F7F_41DE_6E8F48DAFB64",
  "this.IconButton_8A192C79_9123_8F7F_41D6_53822C98C421"
 ],
 "id": "Container_8A19EC79_9123_8F7F_41B4_B62CCEA728C2",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "height": "26.316%",
 "layout": "vertical"
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_8A183C79_9123_8F7F_41DF_D9617B12C06E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Informasi"
 },
 "id": "Button_8A182C79_9123_8F7F_41D6_9A312ED6F560",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Button",
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": "20px",
 "label": "Informasi Website",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 50,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "layout": "horizontal",
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_8A181C79_9123_8F7F_41DF_7A72388CB8BF",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Tour"
 },
 "id": "Button_8A180C79_9123_8F7F_41C2_5B181016E6F1",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Button",
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": 18,
 "label": "Tour Komponen",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 23,
 "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_8A18FC79_9123_8F7F_41A3_2B6ACF375A5F, false, 0, this.effect_80560E81_9A6A_F342_41C2_38F2E6F27A17, 'hideEffect', false)",
 "height": 50,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "layout": "horizontal",
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_8A187C79_9123_8F7F_41E0_13ABB09D36A1",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Quiz"
 },
 "id": "Button_8A184C79_9123_8F7F_41D8_A4E93A4F9F83",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Button",
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": 18,
 "label": "Quiz",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 50,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "layout": "horizontal",
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_8A19FC79_9123_8F7F_4194_1454B7C1355F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "layout": "absolute"
},
{
 "data": {
  "name": "blue line"
 },
 "id": "Container_8A19DC79_9123_8F7F_41B6_0224ED954A08",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#5CA1DE"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 2,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "layout": "horizontal"
},
{
 "id": "HTMLText_8A193C79_9123_8F7F_41DE_6E8F48DAFB64",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "HTMLText",
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 78,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Muhamad Febriansyah Marzono</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Informatika 22</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>ITD Adisutjipto Yogyakarta</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>febriansyahmuhamad137@gmail.com</I></SPAN></SPAN></DIV></div>",
 "paddingLeft": 0,
 "data": {
  "name": "HTMLText47602"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 80,
 "id": "IconButton_8A192C79_9123_8F7F_41D6_53822C98C421",
 "backgroundOpacity": 0,
 "width": 42,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_8A192C79_9123_8F7F_41D6_53822C98C421.png",
 "rollOverIconURL": "skin/IconButton_8A192C79_9123_8F7F_41D6_53822C98C421_rollover.png",
 "minHeight": 1,
 "paddingBottom": 0,
 "class": "IconButton",
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_8A18AC79_9123_8F7F_41CD_F462FB642D91, true, 0, this.effect_4C974746_571D_6541_41CE_76A308A87323, 'showEffect', false)",
 "shadow": false,
 "height": 42,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 80,
 "data": {
  "name": "IconButton collapse"
 }
}],
 "minWidth": 20,
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 1,
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "existsKey": function(key){  return key in window; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
