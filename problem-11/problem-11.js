#!/usr/bin/node
/*
SW4gdGhlIDIwMjAgZ3JpZCBiZWxvdywgZm91ciBudW1iZXJzIGFsb25nIGEgZGlhZ29uYWwgbGlu
ZSBoYXZlIGJlZW4gbWFya2VkIGluIHJlZC4KCjA4IDAyIDIyIDk3IDM4IDE1IDAwIDQwIDAwIDc1
IDA0IDA1IDA3IDc4IDUyIDEyIDUwIDc3IDkxIDA4CjQ5IDQ5IDk5IDQwIDE3IDgxIDE4IDU3IDYw
IDg3IDE3IDQwIDk4IDQzIDY5IDQ4IDA0IDU2IDYyIDAwCjgxIDQ5IDMxIDczIDU1IDc5IDE0IDI5
IDkzIDcxIDQwIDY3IDUzIDg4IDMwIDAzIDQ5IDEzIDM2IDY1CjUyIDcwIDk1IDIzIDA0IDYwIDEx
IDQyIDY5IDI0IDY4IDU2IDAxIDMyIDU2IDcxIDM3IDAyIDM2IDkxCjIyIDMxIDE2IDcxIDUxIDY3
IDYzIDg5IDQxIDkyIDM2IDU0IDIyIDQwIDQwIDI4IDY2IDMzIDEzIDgwCjI0IDQ3IDMyIDYwIDk5
IDAzIDQ1IDAyIDQ0IDc1IDMzIDUzIDc4IDM2IDg0IDIwIDM1IDE3IDEyIDUwCjMyIDk4IDgxIDI4
IDY0IDIzIDY3IDEwIDI2IDM4IDQwIDY3IDU5IDU0IDcwIDY2IDE4IDM4IDY0IDcwCjY3IDI2IDIw
IDY4IDAyIDYyIDEyIDIwIDk1IDYzIDk0IDM5IDYzIDA4IDQwIDkxIDY2IDQ5IDk0IDIxCjI0IDU1
IDU4IDA1IDY2IDczIDk5IDI2IDk3IDE3IDc4IDc4IDk2IDgzIDE0IDg4IDM0IDg5IDYzIDcyCjIx
IDM2IDIzIDA5IDc1IDAwIDc2IDQ0IDIwIDQ1IDM1IDE0IDAwIDYxIDMzIDk3IDM0IDMxIDMzIDk1
Cjc4IDE3IDUzIDI4IDIyIDc1IDMxIDY3IDE1IDk0IDAzIDgwIDA0IDYyIDE2IDE0IDA5IDUzIDU2
IDkyCjE2IDM5IDA1IDQyIDk2IDM1IDMxIDQ3IDU1IDU4IDg4IDI0IDAwIDE3IDU0IDI0IDM2IDI5
IDg1IDU3Cjg2IDU2IDAwIDQ4IDM1IDcxIDg5IDA3IDA1IDQ0IDQ0IDM3IDQ0IDYwIDIxIDU4IDUx
IDU0IDE3IDU4CjE5IDgwIDgxIDY4IDA1IDk0IDQ3IDY5IDI4IDczIDkyIDEzIDg2IDUyIDE3IDc3
IDA0IDg5IDU1IDQwCjA0IDUyIDA4IDgzIDk3IDM1IDk5IDE2IDA3IDk3IDU3IDMyIDE2IDI2IDI2
IDc5IDMzIDI3IDk4IDY2Cjg4IDM2IDY4IDg3IDU3IDYyIDIwIDcyIDAzIDQ2IDMzIDY3IDQ2IDU1
IDEyIDMyIDYzIDkzIDUzIDY5CjA0IDQyIDE2IDczIDM4IDI1IDM5IDExIDI0IDk0IDcyIDE4IDA4
IDQ2IDI5IDMyIDQwIDYyIDc2IDM2CjIwIDY5IDM2IDQxIDcyIDMwIDIzIDg4IDM0IDYyIDk5IDY5
IDgyIDY3IDU5IDg1IDc0IDA0IDM2IDE2CjIwIDczIDM1IDI5IDc4IDMxIDkwIDAxIDc0IDMxIDQ5
IDcxIDQ4IDg2IDgxIDE2IDIzIDU3IDA1IDU0CjAxIDcwIDU0IDcxIDgzIDUxIDU0IDY5IDE2IDky
IDMzIDQ4IDYxIDQzIDUyIDAxIDg5IDE5IDY3IDQ4ClRoZSBwcm9kdWN0IG9mIHRoZXNlIG51bWJl
cnMgaXMgMjYgIDYzICA3OCAgMTQgPSAxNzg4Njk2LgoKV2hhdCBpcyB0aGUgZ3JlYXRlc3QgcHJv
ZHVjdCBvZiBmb3VyIGFkamFjZW50IG51bWJlcnMgaW4gYW55IGRpcmVjdGlvbiAodXAsIGRvd24s
IGxlZnQsIHJpZ2h0LCBvciBkaWFnb25hbGx5KSBpbiB0aGUgMjAyMCBncmlkPwo=
*/
(function () {
	var grid = [
		[08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
		[49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
		[81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
		[52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
		[22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
		[24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
		[32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
		[67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
		[24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
		[21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
		[78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
		[16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
		[86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
		[19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
		[04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
		[88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
		[04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
		[20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
		[20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
		[01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48]
	], dump = [], greatest = 0, x, y, sum, test;
	;
	for (x = 0; x < 20; x++) {
		for (y = 0; y < 20; y++) {
			dump = get_dir(grid, x, y);
			;
			for (i in dump) {
				test = dump[i], sum = 1;
				;
				for (n in test) {
					sum *= test[n];
				}
				if (sum > greatest) {
					greatest = sum;
				}
			}
		}
	}
	console.log(greatest);
})();

function get_gxy (g, x, y) {
	return g[x][y];
}

function get_dir (g, x, y) {
	var matrix = [], dimensions = [
		[[x-3,y-3,x,y],'[g[x-3][y-3],g[x-2][y-2],g[x-1][y-1],g[x][y]]'],
		[[x-3,y  ,x,y],'[g[x-3][y  ],g[x-2][y  ],g[x-1][y  ],g[x][y]]'],
		[[x-3,y+3,x,y],'[g[x-3][y+3],g[x-2][y+2],g[x-1][y+1],g[x][y]]'],
		[[x  ,y-3,x,y],'[g[x  ][y-3],g[x  ][y-2],g[x  ][y-1],g[x][y]]'],
		[[x+3,y-3,x,y],'[g[x+3][y-3],g[x+2][y-2],g[x+1][y-1],g[x][y]]'],
		[[x+3,y  ,x,y],'[g[x+3][y  ],g[x+2][y  ],g[x+1][y  ],g[x][y]]'],
		[[x+3,y+3,x,y],'[g[x+3][y+3],g[x+2][y+2],g[x+1][y+1],g[x][y]]'],
		[[x  ,y+3,x,y],'[g[x  ][y+3],g[x  ][y+2],g[x  ][y+1],g[x][y]]']
	];
	for (dimension in dimensions) {
		if (dimensions[dimension][0][0] >= 0
		&&  dimensions[dimension][0][1] >= 0
		&&  dimensions[dimension][0][0] < g.length
		&&  dimensions[dimension][0][1] < g[0].length) {
			matrix.push(eval(dimensions[dimension][1]));
		}
	}
	return matrix;
}