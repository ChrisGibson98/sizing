var sizes = [];
var cells = [];
var cols = 10;
var rows = 8;
var maxHeight;
var xHeaders = ["Sizing", "M1", "M2", "M3", "M4", "M5", "M5", "M7", "M7", "M8"];
var xHeadersDesc = ["Inches", "Coming Soon", "Relaxed Boot", "Loose Straight", "Low Rise Boot", "Slim Straight", "Slim Boot", "Rocker Boot", "Rocker Straight", "Coming Soon"];
var yHeaders = ["", "Front Rise", "Back Rise", "Waist", "Seat", "Thigh", "Knee", "Bottom Opening"];
var measurements = ["Inches", "cm"];
var multiplier = [1, 2.54];
var meas = 0;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);

  sizes[0] = ["",     "",     "",     "",   "",     "",     ""];
  sizes[1] = [10.75,  15.25,  34.25, 43.25, 25.25,  18.75,  18];
  sizes[2] = [10.75,  15.25,  34.25, 44.25, 26.25,  19.75,  18];
  sizes[3] = [10.375, 15.25,  34.6,  43.5,  25.5,   18.75,  19];
  sizes[4] = [10.25,  15,     34.25, 43.25, 25.25,  18.75,  18];
  sizes[5] = [10.25,  15,     34.25, 43.25, 25.25,  18.75,  18];
  sizes[6] = [10.25,  14.25,  34.25, 43.25, 25.25,  18.75,  18];
  sizes[7] = [10.25,  14.25,  34.25, 43.25, 25.25,  18.75,  18];
  sizes[8] = ["",     "",     "",     "",   "",     "",     ""];

  for(let i = 0; i < cols; i++)
  {
    cells[i] = [];
    for(let j = 0; j < rows; j++)
    {
      cells[i][j] = new cell(i, j);
    }
  }
  loadCells();
  loadHeaders();
  loadData();
  loadButtons();
}

function draw()
{
  for(let i = 0; i < cols; i++)
  {
    for(let j = 0; j < rows; j++)
    {
      if((mouseX > cells[i][j].xStart) && (mouseX < cells[i][j].xEnd))
      {
        if((mouseY > cells[i][j].yStart) && (mouseY < cells[i][j].yEnd))
        {
          cells[i][j].select();
          reloadAll();
        }
      }
    }
  }
}

function mousePressed()
{
  if((mouseX > 0) && (mouseX < ((windowWidth * 0.7) * 0.5) + 75))
  {
    if((mouseY > maxHeight) && (mouseY < maxHeight + 25))
    {
      if(meas == 1)
      {
        meas = 0;
      }
      else
      {
        meas = 1;
      }
      reloadAll();
    }
  }
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
  loadCells();
  loadHeaders();
  loadData();
  loadButtons();
}

function loadCells()
{
  for(let i = 0; i < cols; i++)
  {
    for(let j = 0; j < rows; j++)
    {
      cells[i][j].show();
    }
  }
}

function loadHeaders()
{
  for(let i = 0; i < cells.length; i++)
  {
    noStroke();
    fill(20, 20, 20);
    textSize(cells[i][0].cellWidth * 0.2);
    textStyle(NORMAL);
    textAlign(CENTER, TOP);
    text(xHeaders[i], cells[i][0].xStart + (cells[i][0].cellWidth * 0.5), cells[i][0].yStart);
    textSize(cells[i][0].cellWidth * 0.125);
    textStyle(ITALIC);
    textAlign(CENTER, BOTTOM);
    text(xHeadersDesc[i], cells[i][0].xStart + (cells[i][0].cellWidth * 0.5), cells[i][0].yStart + (cells[i][0].cellHeight));

  }

  for(let i = 0; i < cells[0].length; i++)
  {
    noStroke();
    fill(20, 20, 20);
    textSize(cells[0][i].cellWidth * 0.13);
    textStyle(NORMAL);
    textAlign(LEFT, CENTER);
    text(yHeaders[i], cells[0][i].xStart + 1, cells[0][i].yStart + (cells[0][i].cellHeight * 0.5));
  }
}

function loadData()
{
  for(let i = 0; i < cols - 1; i++)
  {
    for(let j = 0; j < rows - 1; j++)
    {
      textStyle(NORMAL);
      noStroke();
      fill(20, 20, 20);
      textSize(cells[i][j].cellWidth * 0.18);
      textAlign(CENTER, CENTER);
      text(sizes[i][j] * multiplier[meas], cells[i + 1][j + 1].xStart + cells[i + 1][j + 1].cellWidth * 0.5, cells[i + 1][j + 1].yStart + cells[i + 1][j + 1].cellHeight * 0.5);
    }
  }
}

function loadButtons()
{
  noStroke();
  fill(1, 168, 158, 200);
  rect(0, maxHeight, cells[0][0].cellWidth, cells[0][0].cellHeight);
  fill(255, 255, 255);
  textSize(cells[0][0].cellWidth * 0.2);
  textAlign(CENTER, CENTER);
  text(measurements[meas], 0, maxHeight, cells[0][0].cellWidth, cells[0][0].cellHeight);
}

function reloadAll()
{
  clear();
  loadCells();
  loadHeaders();
  loadData();
  loadButtons();
}
