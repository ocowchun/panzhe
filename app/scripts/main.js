console.log('\'Allo \'Allo!');
$(function(argument) {

 function(argument) {


	var aFont = ["...###...", "..##.##..", ".##...##.", "##.....##", "#########", "##.....##", "##.....##"];
	var bFont = ["#######..", "##.....#.", "##......#", "########.", "##.....#.", "##......#", "########."];
	var cFont = ["#########", "##.....##", "##.......", "##.......", "##.......", "##.....##", "#########"];
	var dFont = ["#######..", "##.....##", "##......#", "##......#", "##......#", "##.....##", "#######.."];
	var eFont = ["#########", "##.......", "##.......", "#########", "##.......", "##.......", "#########"];
	var fFont = ["#########", "##.......", "##.......", "#########", "##.......", "##.......", "##......."];
	var gFont = [".########", "##.....##", "##.......", "##.......", "##..#####", "##.....##", ".########"];
	var hFont = ["##.....##", "##.....##", "##.....##", "#########",
		"##.....##", "##.....##", "##.....##"
	];
	var iFont = ["#########", "#########", "...###...", "...###...", "...###...", "#########", "#########"];
	var jFont = ["#########", "#########", ".....##..", ".....##..", ".....##..", ".##..##..", ".######.."];
	var kFont = ["##....##.", "##...##..", "##..##...", "#####....", "##..##...", "##...##..", "##....##."];
	var lFont = ["##.......", "##.......", "##.......", "##.......", "##.......", "##.......", "#########"];
	var mFont = ["###...###", "##.#.#.##", "##..#..##", "##..#..##", "##..#..##", "##..#..##", "##..#..##"];
	var nFont = ["###....##", "####...##", "##.##..##", "##..##.##", "##...####", "##....###", "##.....##"];
	var oFont = ["#########", "##.....##", "##.....##", "##.....##", "##.....##", "##.....##", "#########"];
	var pFont = ["########.", "##.....##", "##.....##", "########.", "##.......", "##.......", "##......."];
	var qFont = ["..####...", "##....###", "#......##", "#......##", "#..##..##", "##...##..", "..###..##"];
	var rFont = ["########.", "##......#", "##......#", "########.", "##...##..", "##....##.", "##.....##"];
	var sFont = [".#######.", "##.....##", "##.......", ".#######.", ".......##", "##.....##", ".#######."];
	var tFont = ["#########", "#########", "...###...", "...###...", "...###...", "...###...", "...###..."];
	var uFont = ["##.....##", "##.....##", "##.....##", "##.....##", "##.....##", ".##...##.", "..#####.."];
	var vFont = ["##.....##", "##.....##", "##.....##", "##.....##", ".##...##.", "..##.##..", "....#...."];
	var wFont = ["##..#..##", "##..#..##", "##..#..##", "##..#..##", "##..#..##", "##.#.#.##", "###...###"];
	var xFont = ["##.....##", ".##...##.", "..##.##..", "....##...", "..##.##..", ".##...##.", "##.....##"];
	var yFont = ["##.....##", "##.....##", "##.....##", "#########", "...###...", "...###...", "...###..."];
	var zFont = ["#########", "......##.", ".....##..", "....##...", "..##.....", ".##......", "#########"];
	var space = "...";
	var dic = {
		a: aFont,
		b: bFont,
		c: cFont,
		d: dFont,
		e: eFont,
		f: fFont,
		g: gFont,
		h: hFont,
		i: iFont,
		j: jFont,
		k: kFont,
		l: lFont,
		m: mFont,
		n: nFont,
		o: oFont,
		p: pFont,
		q: qFont,
		r: rFont,
		s: sFont,
		t: tFont,
		u: uFont,
		v: vFont,
		w: wFont,
		x: xFont,
		y: yFont,
		z: zFont,

		space: space
	};

	function write(str) {
		var strLength = str.length;
		var result = "";
		for (var i = 0; i < 7; i++) {
			for (var j = 0; j < strLength; j++) {

				var alphabet = dic[str[j]];
				result += alphabet[i] + space;
				if (j == strLength-1) {
					result += "\n";
				}

			}
		}
		return result;
	}

	return write;

}


});