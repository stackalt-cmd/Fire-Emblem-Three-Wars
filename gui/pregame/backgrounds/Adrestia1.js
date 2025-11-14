 g_BackgroundLayerData.push(
	[
		{
			"offset": (time, width) => 0.04 * width * Math.cos(0.05 * time),
			"sprite": "FEbackground-Adrestia1-1",
			"tiling": true,
		},
		{
			"offset": (time, width) => 0.10 * width * Math.cos(0.05 * time),
			"sprite": "FEbackground-Adrestia1-2",
			"tiling": false,
		}
	]);
