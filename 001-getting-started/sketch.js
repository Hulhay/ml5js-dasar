let classifier;
let img;

function preload() {
	classifier = ml5.imageClassifier('MobileNet');
	img = loadImage('img/bird.jpeg');
}

function setup() {
	createCanvas(400, 400);
	classifier.classify(img, gotResult);
	image(img, 0, 0);
}

function gotResult(error, results) {
	if (error) {
		console.error(error);
	} else {
		console.log(results);
		createDiv(`Sepertinya ini ${results[0].label},`);
		createDiv(`aku yakin ${nf(results[0].confidence, 0, 4)*100}%`);
	}
}