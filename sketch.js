const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg,
waterSound,
pirateLaughSound,
backgroundMusic,
cannonExplosion;
var canvas, angle, tower, ground, cannon, boat;
var balls = [];
var boats = [];
var score = 0;
var boatAnimation = [];
var boatSpritedata, boatSpritesheet;

var brokenBoarAnimation = [];
var brokenBoatSpritedata, brokenBoatSpritesheet;

var waterSplashAnimation= [];
var waterSplashSpritedata, waterSplashSpritesheet;

var isGameOver = false;
var isLaughing = false;

function preload(){
  backgroundImg = loadImage("./assets/background.gif");
  backgroundMusic = loadSound("./assets/background_music.mp3");
  waterSound = loadSound("./assets/cannon_water.mp3");
  pirateLaughSound = loadSound("./assets/pirate_laugh.mp3");
  cannonExplosion = loadSound("./assets/cannon_explosion.mp3");
  towerImage= loadImage("./assets/tower.png");
  boatSpritedata= loadJSON("assets/boat/boats.json");
  boatSpritesheet= loadImage("assets/boat/boat.png");
  brokenBoatSpritedata= loadJSON("assets/boat/broken_boat.json");
  brokenBoatSpritesheet= loadImage("assets/boat/broken_boat.png");
  waterSplashSpritedata= loadJSON("assets/water_splash/water_splash.json");
  waterSplashSpritesheet= loadImage("assets/water_splash/water_splash.png");
}

function setup(){
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
angle = 15
}